import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, ListMusic } from 'lucide-react';
import { songs as localSongs, Song } from '@/data/songs';

interface MusicPlaylistProps {
  onSongSelect: (song: Song) => void;
}

export function SpotifyPlaylist({ onSongSelect }: MusicPlaylistProps) {
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
    setActiveSong(song.id);
    onSongSelect(song);
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
          {localSongs.map((song, index) => (
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

              <div className="flex items-center gap-2 relative z-10">
                {/* Track Number / Equalizer Animation */}
                <div className="w-7 flex items-center justify-center shrink-0">
                  {activeSong === song.id ? (
                    <div className="flex gap-0.5 items-end h-4">
                      <motion.div
                        className="w-0.5 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
                        animate={{ height: ['6px', '14px', '8px', '12px'] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      />
                      <motion.div
                        className="w-0.5 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
                        animate={{ height: ['10px', '6px', '14px', '8px'] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-0.5 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
                        animate={{ height: ['12px', '8px', '6px', '11px'] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  ) : (
                    <span 
                      className={`text-tiny transition-colors duration-300 ${
                        activeSong === song.id ? 'text-emerald-400' : 'text-zinc-600 group-hover:text-zinc-400'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
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
                  className={`text-tiny shrink-0 transition-colors duration-300 ${
                    activeSong === song.id ? 'text-emerald-400' : 'text-zinc-600 group-hover:text-zinc-500'
                  }`}
                >
                  {song.duration}
                </div>

                {/* Play button (visible on hover or active) */}
                <div className={`w-7 h-7 flex items-center justify-center shrink-0 transition-opacity duration-300 ${
                  activeSong === song.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <div className="w-6 h-6 rounded-full bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center hover:bg-emerald-400/30 transition-all duration-300 shadow-lg shadow-emerald-400/10">
                    <Play className="w-2.5 h-2.5 text-emerald-400 ml-0.5" fill="currentColor" />
                  </div>
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
