import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

interface MusicPlayerProps {
  currentSong: {
    title: string;
    artist: string;
    album: string;
  };
}

export function MusicPlayer({ currentSong }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(45);
  const [volume, setVolume] = useState(70);

  return (
    <div className="relative w-full">
      {/* Premium Player Device with Liquid Glass Effect */}
      <div className="relative overflow-hidden rounded-xl p-5 shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)] border border-white/20" style={{ background: 'transparent' }}>
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
        <div className="relative z-10">
          {/* Premium OLED-style Display */}
          <div className="bg-black rounded-xl p-4 mb-5 border border-zinc-800/60 shadow-[inset_0_4px_20px_rgba(0,0,0,0.9)]">
            <div className="bg-gradient-to-b from-zinc-950 via-black to-zinc-950 rounded-lg p-3">
              {/* Compact Visualizer */}
              <div className="mb-4 flex items-end justify-center gap-1 h-16">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-gradient-to-t from-emerald-400 via-emerald-300 to-emerald-200 rounded-full shadow-lg shadow-emerald-400/50"
                    animate={{
                      height: isPlaying ? ['20%', '75%', '40%', '65%', '30%', '70%'] : '20%',
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.08,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Song Info Display - Compact */}
              <div className="mb-4">
                <div 
                  className="text-emerald-400 mb-2 tracking-[0.2em] text-center"
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 300,
                    letterSpacing: '0.2em',
                    fontSize: '0.625rem'
                  }}
                >
                  NOW PLAYING
                </div>
                <div 
                  className="text-white mb-1 tracking-wide text-center truncate"
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 200,
                    letterSpacing: '0.05em',
                    fontSize: '0.9375rem'
                  }}
                >
                  {currentSong.title}
                </div>
                <div 
                  className="text-zinc-500 tracking-wide text-center truncate"
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    fontSize: '0.75rem'
                  }}
                >
                  {currentSong.artist}
                </div>
              </div>

              {/* Progress Bar - Compact */}
              <div className="space-y-2">
                <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50 shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 shadow-lg shadow-emerald-400/30"
                    style={{ width: `${progress}%` }}
                    animate={{ width: isPlaying ? '100%' : `${progress}%` }}
                    transition={{ duration: isPlaying ? 180 : 0, ease: 'linear' }}
                  />
                </div>
                <div className="flex justify-between px-1">
                  <span 
                    className="text-zinc-500 tracking-wider"
                    style={{
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontWeight: 300,
                      fontSize: '0.625rem',
                      letterSpacing: '0.1em'
                    }}
                  >
                    1:24
                  </span>
                  <span 
                    className="text-zinc-500 tracking-wider"
                    style={{
                      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                      fontWeight: 300,
                      fontSize: '0.625rem',
                      letterSpacing: '0.1em'
                    }}
                  >
                    3:47
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Control Buttons - Compact */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <button className="w-8 h-8 rounded-full bg-zinc-900/60 border border-zinc-700/50 flex items-center justify-center hover:bg-zinc-800/60 hover:border-zinc-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Shuffle className="w-3 h-3 text-zinc-400" />
            </button>
            
            <button className="w-9 h-9 rounded-full bg-zinc-900/60 border border-zinc-700/50 flex items-center justify-center hover:bg-zinc-800/60 hover:border-zinc-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <SkipBack className="w-3.5 h-3.5 text-zinc-300" />
            </button>
            
            <motion.button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 rounded-full bg-gradient-to-b from-emerald-400 to-emerald-500 flex items-center justify-center hover:from-emerald-300 hover:to-emerald-400 transition-all duration-300 shadow-2xl shadow-emerald-500/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-black" fill="black" />
              ) : (
                <Play className="w-5 h-5 text-black ml-0.5" fill="black" />
              )}
            </motion.button>
            
            <button className="w-9 h-9 rounded-full bg-zinc-900/60 border border-zinc-700/50 flex items-center justify-center hover:bg-zinc-800/60 hover:border-zinc-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <SkipForward className="w-3.5 h-3.5 text-zinc-300" />
            </button>

            <button className="w-8 h-8 rounded-full bg-zinc-900/60 border border-zinc-700/50 flex items-center justify-center hover:bg-zinc-800/60 hover:border-zinc-600/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Repeat className="w-3 h-3 text-zinc-400" />
            </button>
          </div>

          {/* Volume Control - Compact */}
          <div className="flex items-center gap-3 px-2">
            <Volume2 className="w-4 h-4 text-zinc-400 flex-shrink-0" />
            <div className="flex-1 h-1 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50 shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-300 shadow-lg"
                style={{ width: `${volume}%` }}
              />
            </div>
            <span 
              className="text-zinc-500 tracking-wider w-8 text-right flex-shrink-0"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 300,
                fontSize: '0.75rem',
                letterSpacing: '0.1em'
              }}
            >
              {volume}
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
