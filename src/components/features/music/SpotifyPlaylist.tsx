import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, ListMusic } from 'lucide-react';
import { songs as localSongs, Song } from '@/data/songs';

interface MusicPlaylistProps {
  onSongSelect: (song: Song) => void;
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export function SpotifyPlaylist({ onSongSelect, isPlaying, setIsPlaying }: MusicPlaylistProps) {
  const [activeSong, setActiveSong] = useState<string>('');

  useEffect(() => {
    // Auto-select first song
    if (localSongs.length > 0) {
      setActiveSong(localSongs[0].id);
      onSongSelect(localSongs[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSongClick = (song: Song) => {
    if (activeSong === song.id && isPlaying) {
      // If clicking the same song that's playing, pause it
      setIsPlaying(false);
    } else {
      // If clicking a different song or paused song, select it and play
      setActiveSong(song.id);
      onSongSelect(song);
      setIsPlaying(true);
    }
  };

  const handlePlayPauseClick = (e: React.MouseEvent, song: Song) => {
    e.stopPropagation(); // Prevent triggering parent button click
    
    if (activeSong === song.id) {
      // Toggle play/pause for current song
      setIsPlaying(!isPlaying);
    } else {
      // Select new song and play it
      setActiveSong(song.id);
      onSongSelect(song);
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-xl p-5 h-full flex flex-col border border-white/20 shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)]" style={{ background: 'transparent' }}>
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
      <div className="relative z-10 h-full flex flex-col">
        {/* Compact Header */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-emerald-400 via-emerald-500 to-emerald-600 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
              <ListMusic className="w-5 h-5 text-black" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="heading-small text-white truncate">
                KevOS
              </h3>
              <p className="text-label-small text-zinc-500">
                {localSongs.length} tracks
              </p>
            </div>
          </div>

          {/* Divider line */}
          <div className="h-px bg-linear-to-r from-transparent via-zinc-700/50 to-transparent" />
        </div>

        {/* Song List - Compact styling */}
        <div className="space-y-1 flex-1 overflow-y-auto pr-1" style={{ 
          scrollbarWidth: 'thin',
          scrollbarColor: '#27272a transparent'
        }}>
          {localSongs.map((song) => (
            <motion.button
              key={song.id}
              onClick={() => handleSongClick(song)}
              className={`w-full p-3.5 rounded-lg transition-all duration-300 group relative overflow-hidden ${
                activeSong === song.id
                  ? 'bg-emerald-400/10 border border-emerald-400/30 shadow-lg shadow-emerald-400/5'
                  : 'hover:bg-zinc-800/40 border border-transparent cursor-pointer'
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Active song glow effect */}
              {activeSong === song.id && (
                <div className="absolute inset-0 bg-linear-to-r from-emerald-400/5 via-emerald-400/10 to-emerald-400/5 rounded-lg" />
              )}

              <div className="flex items-center gap-3 relative z-10">
                {/* Album Cover Thumbnail */}
                <div className="w-10 h-10 rounded-md overflow-hidden shrink-0 relative">
                  {song.coverArt ? (
                    <>
                      <img
                        src={song.coverArt}
                        alt={`${song.title} cover`}
                        className="w-full h-full object-cover"
                      />
                      {/* Play/Pause Overlay */}
                      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                        activeSong === song.id && isPlaying
                          ? 'bg-emerald-400/90'
                          : activeSong === song.id
                          ? 'bg-emerald-400/70'
                          : 'bg-black/50 opacity-0 group-hover:opacity-100'
                      }`}>
                        <button
                          onClick={(e) => handlePlayPauseClick(e, song)}
                          className="w-full h-full flex items-center justify-center"
                        >
                          {activeSong === song.id && isPlaying ? (
                            <Pause className="w-4 h-4 text-black" fill="black" />
                          ) : (
                            <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                          )}
                        </button>
                      </div>
                    </>
                  ) : (
                    <button
                      onClick={(e) => handlePlayPauseClick(e, song)}
                      className={`w-full h-full rounded-md flex items-center justify-center transition-all duration-300 ${
                        activeSong === song.id && isPlaying
                          ? 'bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-400/40'
                          : activeSong === song.id
                          ? 'bg-emerald-400/70 hover:bg-emerald-400 shadow-md shadow-emerald-400/30'
                          : 'bg-zinc-800/60 hover:bg-zinc-700/60 border border-zinc-700/50'
                      }`}
                    >
                      {activeSong === song.id && isPlaying ? (
                        <Pause className="w-4 h-4 text-black" fill="black" />
                      ) : (
                        <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                      )}
                    </button>
                  )}
                </div>

                {/* Song Info */}
                <div className="flex-1 text-left min-w-0">
                  <div 
                    className={`text-base truncate transition-colors duration-300 ${
                      activeSong === song.id ? 'text-emerald-400' : 'text-white group-hover:text-zinc-200'
                    }`}
                  >
                    {song.title}
                  </div>
                  <div className="text-small text-zinc-500 truncate transition-colors duration-300 group-hover:text-zinc-400">
                    {song.artist}
                  </div>
                </div>

                {/* Duration */}
                <div 
                  className={`text-small shrink-0 transition-colors duration-300 ${
                    activeSong === song.id ? 'text-emerald-400' : 'text-zinc-600 group-hover:text-zinc-500'
                  }`}
                >
                  {song.duration}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Bottom Stats Bar - Compact */}
        <div className="mt-4 pt-4 border-t border-zinc-800/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
              <span className="text-label-small text-zinc-500">
                AUDIO READY
              </span>
            </div>
            <span className="text-label-small text-zinc-600">
              320KBPS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
