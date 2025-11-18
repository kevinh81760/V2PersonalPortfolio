import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { MusicPlayer } from '../music/MusicPlayer';
import { SpotifyPlaylist } from '../music/SpotifyPlaylist';
import { AnimatedGradient } from '../../layout/AnimatedGradient';
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
      {/* Radial gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-zinc-900/30 to-transparent blur-3xl" />
      
      {/* Navigation Bar */}
      <nav className="relative z-10 border-b border-zinc-800/50 px-12 pt-8 pb-6">
        <div className="flex items-center justify-between mb-6">
          {/* Logo/Brand - Swiss Design Alignment */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span 
              className="text-white text-sm opacity-70"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 200,
                letterSpacing: '0.2em'
              }}
            >
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
            <div 
              className="text-zinc-400 text-2xl tabular-nums min-w-[6rem]"
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 300,
                letterSpacing: '0.15em'
              }}
            >
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
                <>
                  {/* Glass background with blur */}
                  <div 
                    className="absolute inset-0 rounded-full border border-white/20"
                    style={{
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      background: 'rgba(255, 255, 255, 0.1)',
                      boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2)'
                    }}
                  />
                </>
              )}
              
              <span 
                className={`relative z-10 text-xs tracking-wider transition-colors duration-300 ${
                  activeSection === item.id ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'
                }`}
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: activeSection === item.id ? 300 : 300,
                  letterSpacing: '0.15em'
                }}
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
              <h2 
                className="text-white mb-4"
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 200,
                  letterSpacing: '0.1em'
                }}
              >
                Projects
              </h2>
              <p 
                className="text-zinc-400"
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 300,
                  letterSpacing: '0.05em'
                }}
              >
                Your projects content goes here
              </p>
            </div>
          )}

          {activeSection === 'experience' && (
            <div>
              <h2 
                className="text-white mb-4"
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 200,
                  letterSpacing: '0.1em'
                }}
              >
                Experience
              </h2>
              <p 
                className="text-zinc-400"
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 300,
                  letterSpacing: '0.05em'
                }}
              >
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
      {/* Animated Mercedes-themed gradient background */}
      <AnimatedGradient />
      
      {/* Horizontal Ambient Glow - Signature Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[300px] bg-gradient-to-r from-transparent via-zinc-700/10 to-transparent blur-[100px]" />
      
      {/* Full Screen Content */}
      <div className="relative flex flex-col flex-1">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
        
        {portfolioContent}
      </div>
    </div>
  );
}
