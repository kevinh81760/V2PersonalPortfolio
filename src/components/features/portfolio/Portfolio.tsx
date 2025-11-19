import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { MusicPlayer } from '../music/MusicPlayer';
import { SpotifyPlaylist } from '../music/SpotifyPlaylist';
import { LocationMap } from '../map/LocationMap';

type Section = 'about' | 'projects' | 'experience' | 'audio';

interface Song {
  title: string;
  artist: string;
  album: string;
}

interface PortfolioProps {
  embedded?: boolean;
}

export function Portfolio({ embedded = false }: PortfolioProps = {}) {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [currentTime, setCurrentTime] = useState('');
  const [currentSong, setCurrentSong] = useState<Song>({
    title: 'Electric Dreams',
    artist: 'Synthwave Collective',
    album: 'Neon Nights'
  });

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
    };
    
    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const navItems: { id: Section; label: string }[] = [
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'audio', label: 'AUDIO' },
  ];

  // Content JSX to be reused (just the inner content, no wrappers)
  const portfolioContent = (
    <>
      {/* Navigation Bar */}
      <nav className="relative z-10 border-b border-zinc-800/50 px-12 pt-8 pb-6">
        <div className="flex items-center justify-between mb-6">
          {/* Logo/Brand - Swiss Design Alignment */}
          <div className="flex items-center gap-3" style={{ marginLeft: '-1px' }}>
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-brand text-white opacity-70">
              PRODUCT ENGINEER
            </span>
          </div>

          {/* Right section - Time and Icons - Swiss Design Alignment */}
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors duration-300"
                aria-label="GitHub"
                whileHover={{
                  rotate: [0, -5, 5, -5, 5, 0],
                  transition: { duration: 0.4 }
                }}
              >
                <Github className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors duration-300"
                aria-label="LinkedIn"
                whileHover={{
                  rotate: [0, -5, 5, -5, 5, 0],
                  transition: { duration: 0.4 }
                }}
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                className="text-zinc-400 transition-colors duration-300"
                aria-label="Email"
                whileHover={{
                  rotate: [0, -5, 5, -5, 5, 0],
                  transition: { duration: 0.4 }
                }}
              >
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </motion.a>
            </div>

            {/* Divider */}
            <div className="w-px h-5 bg-zinc-700" />

            {/* Time/Status indicator */}
            <div className="text-time text-zinc-400 min-w-16">
              {currentTime}
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`relative px-6 py-2 transition-all duration-300 ${
                activeSection === item.id ? 'overflow-hidden rounded-full' : ''
              }`}
              style={
                activeSection === item.id
                  ? { background: 'transparent' }
                  : undefined
              }
            >
              {/* Liquid glass effect for active tabs */}
              {activeSection === item.id && (
                <div className="absolute inset-0 rounded-full border border-white/20 glass-nav" />
              )}
              
              <span 
                className={`relative z-10 text-nav transition-colors duration-300 ${
                  activeSection === item.id ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Content Area */}
      <div className="flex-1 px-12 py-6 overflow-y-auto">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeSection === 'about' && (
            <div className="w-full h-[calc(100vh-200px)]">
              <LocationMap />
            </div>
          )}

          {activeSection === 'projects' && (
            <div>
              <h2 className="heading-secondary text-white mb-4">
                Projects
              </h2>
              <p className="text-body text-zinc-400">
                Your projects content goes here
              </p>
            </div>
          )}

          {activeSection === 'experience' && (
            <div>
              <h2 className="heading-secondary text-white mb-4">
                Experience
              </h2>
              <p className="text-body text-zinc-400">
                Your experience content goes here
              </p>
            </div>
          )}

          {activeSection === 'audio' && (
            <div className="h-full grid grid-cols-2 gap-4">
              {/* Left side - Music Player */}
              <div className="flex items-center justify-center">
                <MusicPlayer currentSong={currentSong} />
              </div>

              {/* Right side - Spotify Playlist */}
              <div className="h-full">
                <SpotifyPlaylist 
                  onSongSelect={(song) => setCurrentSong({
                    title: song.title,
                    artist: song.artist,
                    album: song.album
                  })} 
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );

  // Embedded mode - just render the content without the full page wrapper
  if (embedded) {
    return portfolioContent;
  }

  // Full page mode - render full screen
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background gradient - Fixed */}
      <div className="fixed inset-0 bg-linear-to-b from-black via-zinc-950 to-black" />
      
      {/* Radial gradient accent - Fixed */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-zinc-900/30 to-transparent blur-3xl pointer-events-none" />
      
      {/* Horizontal Ambient Glow - Fixed */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[300px] bg-linear-to-r from-transparent via-zinc-700/10 to-transparent blur-[100px] pointer-events-none" />
      
      {/* Full Screen Content */}
      <div className="relative flex flex-col flex-1">
        {portfolioContent}
      </div>
    </div>
  );
}
