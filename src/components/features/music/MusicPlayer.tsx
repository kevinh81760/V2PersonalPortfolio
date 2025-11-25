import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle, Music } from 'lucide-react';

interface MusicPlayerProps {
  currentSong: {
    title: string;
    artist: string;
    album: string;
    audioUrl?: string;
    coverArt?: string;
  };
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export function MusicPlayer({ currentSong, isPlaying, setIsPlaying }: MusicPlayerProps) {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(30); // Preview is 30 seconds
  const [volume, setVolume] = useState(70);
  const [isDraggingVolume, setIsDraggingVolume] = useState(false);
  const volumeBarRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (volumeBarRef.current) {
      const rect = volumeBarRef.current.getBoundingClientRect();
      const x = (e as MouseEvent).clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setVolume(Math.round(percentage));
    }
  };

  const handleVolumeMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingVolume(true);
    handleVolumeChange(e);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingVolume) {
        handleVolumeChange(e);
      }
    };

    const handleMouseUp = () => {
      setIsDraggingVolume(false);
    };

    if (isDraggingVolume) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingVolume]);

  // Initialize audio element when song changes
  useEffect(() => {
    if (currentSong.audioUrl) {
      // Create new audio element
      if (audioRef.current) {
        audioRef.current.pause();
      }
      
      const audio = new Audio(currentSong.audioUrl);
      audioRef.current = audio;
      audio.volume = volume / 100;

      // Set up event listeners
      audio.addEventListener('loadedmetadata', () => {
        setDuration(audio.duration);
      });

      audio.addEventListener('timeupdate', () => {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      });

      audio.addEventListener('ended', () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      });

      // Auto-play when new song is selected
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error('Playback error:', error);
        setIsPlaying(false);
      });

      return () => {
        audio.pause();
        audio.src = '';
      };
    } else {
      // No audio URL, reset player
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong.audioUrl]);

  // Update volume when slider changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Handle play/pause
  const togglePlayPause = () => {
    if (!audioRef.current || !currentSong.audioUrl) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative w-full h-full flex items-center">
      {/* Premium Player Device with Liquid Glass Effect */}
      <div className="relative overflow-hidden rounded-xl p-8 shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)] border border-white/20 w-full" style={{ background: 'transparent' }}>
        {/* Liquid Glass background with blur - matching loading button */}
        <div 
          className="absolute inset-0 rounded-xl"
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 4px 6px 0 rgba(0, 0, 0, 0.1)'
          }}
        />
        
        {/* Content wrapper */}
        <div className="relative z-10 flex flex-col justify-between" style={{ minHeight: '700px' }}>
          {/* Premium OLED-style Display */}
          <div className="bg-black rounded-xl p-6 border border-zinc-800/60 shadow-[inset_0_4px_20px_rgba(0,0,0,0.9)]">
            <div className="bg-linear-to-b from-zinc-950 via-black to-zinc-950 rounded-lg p-4 flex flex-col justify-center items-center" style={{ minHeight: '500px' }}>
              {/* Album Cover Art */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSong.coverArt || 'no-cover'}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-6 w-full max-w-[280px] aspect-square"
                >
                  {currentSong.coverArt ? (
                    <img
                      src={currentSong.coverArt}
                      alt={`${currentSong.title} album cover`}
                      className="w-full h-full object-cover rounded-lg shadow-2xl border border-zinc-800/50"
                    />
                  ) : (
                    <div className="w-full h-full rounded-lg bg-zinc-900 border border-zinc-800/50 flex items-center justify-center">
                      <Music className="w-24 h-24 text-zinc-700" />
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Song Info Display - Compact */}
              <div className="mb-3 w-full">
                <div className="heading-tertiary text-white mb-2 text-center truncate">
                  {currentSong.title}
                </div>
                <div className="text-body text-zinc-500 text-center truncate">
                  {currentSong.artist}
                </div>
              </div>

              {/* Progress Bar - Compact */}
              <div className="space-y-2 w-full">
                <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50 shadow-inner">
                  <div
                    className="h-full bg-linear-to-r from-emerald-400 via-emerald-300 to-emerald-400 shadow-lg shadow-emerald-400/30 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between px-1">
                  <span className="text-label text-zinc-500">
                    {formatTime(currentTime)}
                  </span>
                  <span className="text-label text-zinc-500">
                    {formatTime(duration)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls Section - Grouped Together */}
          <div className="space-y-8">
            {/* Control Buttons - Compact */}
            <div className="flex items-center justify-center gap-3">
              <button className="w-10 h-10 rounded-full bg-zinc-900/60 border border-zinc-700/50 flex items-center justify-center hover:bg-zinc-800/60 hover:border-zinc-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Shuffle className="w-4 h-4 text-zinc-400" />
              </button>
              
              <button className="w-11 h-11 rounded-full bg-zinc-900/60 border border-zinc-700/50 flex items-center justify-center hover:bg-zinc-800/60 hover:border-zinc-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <SkipBack className="w-4.5 h-4.5 text-zinc-300" />
              </button>
              
              <motion.button 
                onClick={togglePlayPause}
                disabled={!currentSong.audioUrl}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
                  currentSong.audioUrl 
                    ? 'bg-linear-to-b from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-emerald-500/40 cursor-pointer' 
                    : 'bg-zinc-700 cursor-not-allowed opacity-50'
                }`}
                whileHover={currentSong.audioUrl ? { scale: 1.05 } : {}}
                whileTap={currentSong.audioUrl ? { scale: 0.95 } : {}}
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6 text-black" fill="black" />
                ) : (
                  <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                )}
              </motion.button>
              
              <button className="w-11 h-11 rounded-full bg-zinc-900/60 border border-zinc-700/50 flex items-center justify-center hover:bg-zinc-800/60 hover:border-zinc-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <SkipForward className="w-4.5 h-4.5 text-zinc-300" />
              </button>

              <button className="w-10 h-10 rounded-full bg-zinc-900/60 border border-zinc-700/50 flex items-center justify-center hover:bg-zinc-800/60 hover:border-zinc-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Repeat className="w-4 h-4 text-zinc-400" />
              </button>
            </div>

            {/* Volume Control - Smooth Spotify-style */}
            <div className="flex items-center gap-3 px-2" onClick={(e) => e.stopPropagation()}>
              <Volume2 className="w-4 h-4 text-zinc-400 shrink-0" />
            <div 
              ref={volumeBarRef}
              onMouseDown={handleVolumeMouseDown}
              onClick={(e) => e.stopPropagation()}
              className="flex-1 h-1 cursor-pointer relative group py-2 -my-2"
            >
              {/* Background track */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-zinc-900 rounded-full border border-zinc-800/50 shadow-inner">
                {/* Filled portion */}
                <div 
                  className="h-full bg-linear-to-r from-zinc-500 via-zinc-400 to-zinc-300 rounded-full shadow-lg relative"
                  style={{ width: `${volume}%` }}
                >
                  {/* Thumb/Handle */}
                  <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg transition-all duration-150 ${
                    isDraggingVolume ? 'scale-125' : 'scale-0 group-hover:scale-100'
                  }`} />
                </div>
              </div>
            </div>
            <span className="text-tiny text-zinc-500 w-8 text-right shrink-0">
              {volume}
            </span>
          </div>
          </div>
        </div>
      </div>

    </div>
  );
}
