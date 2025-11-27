import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Twitter, Mail } from 'lucide-react';
import { MusicPlayer } from '../music/MusicPlayer';
import { SpotifyPlaylist } from '../music/SpotifyPlaylist';
import { GitHubCalendar } from 'react-github-calendar';
import useWindowSize from '../../../hooks/useWindowSize';
import { useLenisScroll } from '../../../hooks/useLenisScroll';
import Copy from '../../layout/Copy';
import { GridShimmer } from '../../layout/GridShimmer';
import { experiences, Experience } from '../../../data/experiences';

type Section = 'about' | 'projects' | 'experience' | 'audio';

// Animation configuration constants
const ELEMENT_ANIMATION = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: false, amount: 0.3 }
};

// Animated Header Component
interface AnimatedHeaderProps {
  title: string;
  company: string;
  dates: string;
}

function AnimatedHeader({ title, company, dates }: AnimatedHeaderProps) {
  return (
    <motion.div
      initial={ELEMENT_ANIMATION.initial}
      whileInView={ELEMENT_ANIMATION.animate}
      transition={ELEMENT_ANIMATION.transition}
      viewport={ELEMENT_ANIMATION.viewport}
      className="mb-lg"
    >
      <h2 className="text-[2.5rem] font-semibold text-white mb-xs leading-tight tracking-tight">
        {title}
      </h2>
      <p className="text-[1rem] text-zinc-400 tracking-wide">
        {company} | {dates}
      </p>
    </motion.div>
  );
}

// Animated Section Component (for content blocks)
interface AnimatedSectionProps {
  heading: string;
  children: React.ReactNode;
}

function AnimatedSection({ heading, children }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={ELEMENT_ANIMATION.initial}
      whileInView={ELEMENT_ANIMATION.animate}
      transition={ELEMENT_ANIMATION.transition}
      viewport={ELEMENT_ANIMATION.viewport}
      className="mb-lg"
    >
      <h3 className="text-[1.25rem] font-semibold text-white mb-sm tracking-wide">
        {heading}
      </h3>
      {children}
    </motion.div>
  );
}

// Animated Reflection Component
interface AnimatedReflectionProps {
  reflection: string;
}

function AnimatedReflection({ reflection }: AnimatedReflectionProps) {
  return (
    <motion.div
      initial={ELEMENT_ANIMATION.initial}
      whileInView={ELEMENT_ANIMATION.animate}
      transition={ELEMENT_ANIMATION.transition}
      viewport={ELEMENT_ANIMATION.viewport}
      className="mt-xl pt-lg border-t border-zinc-800"
    >
      <p className="text-[1.125rem] text-zinc-400 italic leading-relaxed">
        {reflection}
      </p>
    </motion.div>
  );
}

// Animated Experience Section Component
interface ExperienceSectionProps {
  experience: Experience;
  containerRef: React.RefObject<HTMLDivElement | null>;
  sectionRef: (el: HTMLDivElement | null) => void;
}

function ExperienceSection({ experience, containerRef, sectionRef }: ExperienceSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ["start end", "end start"]
  });

  // Subtle section-level fade (background layer)
  // More subtle opacity range and scale for layered effect
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.98, 1, 1, 0.99]
  );

  return (
    <motion.div
      ref={(el) => {
        ref.current = el;
        sectionRef(el);
      }}
      data-experience-id={experience.id}
      style={{ opacity, scale }}
      className="min-h-screen pb-xl first:pt-0 pt-lg will-change-transform"
    >
      {/* Animated Header */}
      <AnimatedHeader
        title={experience.title}
        company={experience.company}
        dates={experience.dates}
      />

      {/* What I Did Section */}
      <AnimatedSection heading="What I Did">
        <p className="text-[1.125rem] text-zinc-300 leading-relaxed">
          {experience.whatIDid}
        </p>
      </AnimatedSection>

      {/* How I Did It Section */}
      <AnimatedSection heading="How I Did It">
        <ul className="space-y-sm">
          {experience.howIDidIt.map((item, index) => (
            <li key={index} className="text-[1.125rem] text-zinc-300 leading-relaxed ml-5 list-disc">
              {item}
            </li>
          ))}
        </ul>
      </AnimatedSection>

      {/* What I Used Section */}
      <AnimatedSection heading="What I Used">
        <ul className="space-y-sm">
          {experience.whatIUsed.map((item, index) => (
            <li key={index} className="text-[1.125rem] text-zinc-300 leading-relaxed ml-5 list-disc">
              {item}
            </li>
          ))}
        </ul>
      </AnimatedSection>

      {/* Reflection Quote */}
      <AnimatedReflection reflection={experience.reflection} />
    </motion.div>
  );
}

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  audioUrl: string;
  coverArt?: string;
}

interface PortfolioProps {
  embedded?: boolean;
}

export function Portfolio({ embedded = false }: PortfolioProps = {}) {
  const [activeSection, setActiveSection] = useState<Section>('about');
  const [currentTime, setCurrentTime] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song>({
    id: '0',
    title: 'Select a song to play',
    artist: 'No song selected',
    album: 'KevOS',
    duration: '0:00',
    audioUrl: ''
  });
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);
  const experienceRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const experienceSectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const homeScrollContainerRef = useRef<HTMLDivElement | null>(null);

  const { width } = useWindowSize();
  const initialScale = width < 768 ? 0.4 : 0.25;

  // Enable Lenis smooth scroll for home section
  useLenisScroll(
    activeSection === 'about' ? homeScrollContainerRef : { current: null },
    {
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    }
  );

  // Enable Lenis smooth scroll for experience section
  useLenisScroll(
    activeSection === 'experience' ? scrollContainerRef : { current: null },
    {
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    }
  );

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      
      // Convert hour 0 to 12 for display
      if (hours === 0) {
        hours = 12;
      }
      
      // Format time as HH:MM
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      setCurrentTime(formattedTime);
    };
    
    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Track home animation played state
  useEffect(() => {
    if (!hasPlayedAnimation && activeSection === 'about') {
      // Mark animation as played after it completes
      const timeout = setTimeout(() => {
        setHasPlayedAnimation(true);
      }, 3000); // Wait for animation to complete (slightly longer than animation duration)
      
      return () => clearTimeout(timeout);
    }
  }, [activeSection, hasPlayedAnimation]);

  // Intersection Observer for experience sections
  useEffect(() => {
    if (activeSection !== 'experience') return;
    
    const options = {
      root: scrollContainerRef.current,
      rootMargin: '-40% 0px -40% 0px', // Center-focused detection
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      // Find the entry with the highest intersection ratio
      let mostVisibleEntry: IntersectionObserverEntry | null = null;
      let highestRatio = 0;

      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
          mostVisibleEntry = entry;
          highestRatio = entry.intersectionRatio;
        }
      });

      // Update active experience to the most visible one
      if (mostVisibleEntry) {
        const entry = mostVisibleEntry as IntersectionObserverEntry;
        if (highestRatio > 0.1) {
          const target = entry.target as HTMLElement;
          const expId = target.getAttribute('data-experience-id');
          if (expId && expId !== activeExperience) {
            setActiveExperience(expId);
          }
        }
      }
    };

    const observer = new IntersectionObserver(callback, options);

    // Observe all experience sections
    Object.values(experienceSectionRefs.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeSection, activeExperience]);

  const navItems: { id: Section; label: string }[] = [
    { id: 'about', label: 'HOME' },
    { id: 'projects', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'audio', label: 'LABS' },
  ];

  // Content JSX to be reused (just the inner content, no wrappers)
  const portfolioContent = (
    <>
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800/50 pl-6 pr-12 py-6 overflow-visible bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          {/* Left section - Navigation Items */}
          <div className="flex items-center gap-0 overflow-visible">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`relative px-4 py-2 transition-all duration-300 rounded-full ${
                  activeSection === item.id ? 'overflow-visible' : ''
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

          {/* Right section - Time and Icons */}
          <div className="flex items-center gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <motion.a
                href="https://github.com/kevinh81760"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors duration-300"
                aria-label="GitHub"
                whileHover={{
                  rotate: [0, -5, 5, -5, 5, 0],
                  transition: { duration: 0.4 }
                }}
              >
                <Github className="w-[26px] h-[26px]" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="https://x.com/kevinkha_OS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors duration-300"
                aria-label="Twitter"
                whileHover={{
                  rotate: [0, -5, 5, -5, 5, 0],
                  transition: { duration: 0.4 }
                }}
              >
                <Twitter className="w-[26px] h-[26px]" strokeWidth={1.5} />
              </motion.a>
              <motion.a
                href="mailto:kevin.ha.dev@gmail.com"
                className="text-zinc-400 transition-colors duration-300"
                aria-label="Email"
                whileHover={{
                  rotate: [0, -5, 5, -5, 5, 0],
                  transition: { duration: 0.4 }
                }}
              >
                <Mail className="w-[26px] h-[26px]" strokeWidth={1.5} />
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
            <div className="h-[calc(100vh-200px)]">
              <div 
                ref={homeScrollContainerRef}
                className="h-full overflow-y-auto scrollbar-hide"
              >
                <section className="relative flex flex-col">
                  <div className="px-4">
                <h1 className="hidden">Kevin Ha</h1>

                <motion.div
                  initial={hasPlayedAnimation ? {
                    scale: 1,
                    top: "0px",
                    y: "16px",
                  } : {
                    scale: initialScale,
                    top: "25%",
                    y: "-50%",
                  }}
                  animate={{
                    scale: 1,
                    top: "0px",
                    y: "16px",
                  }}
                  transition={hasPlayedAnimation ? {
                    duration: 0
                  } : {
                    duration: 1.6,
                    ease: [0.22, 1, 0.36, 1],
                    scale: {
                      duration: 1,
                      delay: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    top: {
                      duration: 1.5,
                      delay: 1.5,
                      ease: [0.22, 1, 0.36, 1],
                    },
                    y: {
                      duration: 1.5,
                      delay: 1.5,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  className="absolute flex flex-col items-center justify-center sm:flex-row sm:gap-8 left-4 right-4 origin-center will-change-transform"
                >
                  {/* Grid Shimmer Background Effect */}
                  <div className="absolute inset-0 z-0">
                    <GridShimmer hasPlayedAnimation={hasPlayedAnimation} />
                  </div>
                  <div className="overflow-hidden -mb-3 sm:mb-0 relative z-10">
                    <motion.div
                      initial={hasPlayedAnimation ? { y: 0 } : { y: 200 }}
                      animate={{ y: 0 }}
                      transition={hasPlayedAnimation ? {
                        duration: 0
                      } : {
                        duration: 1,
                        delay: 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="pointer-events-none mb-6 px-2"
                    >
                      <h2 className="text-[18vw] sm:text-[10vw] font-bold leading-none tracking-tight uppercase text-white whitespace-nowrap">
                        KEVIN
                      </h2>
                    </motion.div>
                  </div>

                  <div className="overflow-hidden relative z-10">
                    <motion.div
                      initial={hasPlayedAnimation ? { y: 0 } : { y: 200 }}
                      animate={{ y: 0 }}
                      transition={hasPlayedAnimation ? {
                        duration: 0
                      } : {
                        duration: 1,
                        delay: width < 768 ? 0.225 : 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="pointer-events-none mb-6 px-2"
                    >
                      <h2 className="text-[18vw] sm:text-[10vw] font-bold leading-none tracking-tight uppercase text-white whitespace-nowrap">
                        HA
                      </h2>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Subtitle texts with star icon */}
                <div className="overflow-hidden absolute left-4 right-4 xs:top-[80vh] sm:top-[70vh] md:top-[12.5vw] top-[72vh]">
                  <div className="flex flex-col gap-0.5 md:gap-0 md:flex-row justify-between items-center relative">
                    <div className="overflow-hidden">
                      <motion.p
                        initial={hasPlayedAnimation ? { y: 0 } : { y: 120 }}
                        animate={{ y: 0 }}
                        transition={hasPlayedAnimation ? {
                          duration: 0
                        } : {
                          duration: 1.5,
                          delay: width < 768 ? 2 : 1.9,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-[clamp(20px,1.6vw,32px)] font-semibold leading-[1.2] text-center md:text-left text-[#E5E5E5]"
                      >
                        Product Engineer
                      </motion.p>
                    </div>

                    <div className="hidden md:block overflow-hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                      <motion.div
                        initial={hasPlayedAnimation ? { y: 0 } : { y: 120 }}
                        animate={{ y: 0 }}
                        transition={hasPlayedAnimation ? {
                          duration: 0
                        } : {
                          duration: 1.5,
                          delay: 1.7,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="w-[clamp(28px,2vw,48px)] h-[clamp(28px,2vw,48px)] relative group"
                      >
                        <img
                          src="/images/icons/star.svg"
                          alt="star"
                          className="w-full h-full group-hover:rotate-360deg transition-transform duration-500 ease-in-out"
                        />
                      </motion.div>
                    </div>

                    <div className="overflow-hidden">
                      <motion.p
                        initial={hasPlayedAnimation ? { y: 0 } : { y: 120 }}
                        animate={{ y: 0 }}
                        transition={hasPlayedAnimation ? {
                          duration: 0
                        } : {
                          duration: 1.5,
                          delay: width < 768 ? 2.05 : 1.9,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-[clamp(20px,1.6vw,32px)] font-normal -mt-1 leading-[1.2] text-center md:text-left text-[#E5E5E5]"
                      >
                        @ 24labs.ai
                      </motion.p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-[32vh] xs:mt-[35vh] sm:mt-[20vh] md:mt-[22vw] px-4 md:px-8 lg:px-12 flex justify-center">
                <motion.div
                  initial={hasPlayedAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={hasPlayedAnimation ? {
                    duration: 0
                  } : {
                    duration: 1.2,
                    delay: 2.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-full max-w-[1400px] bg-[#111111] border border-[#242424] rounded-lg p-6 md:p-8 lg:p-10"
                >
                  <div className="github-calendar-wrapper">
                    <GitHubCalendar
                      username="kevinh81760"
                      colorScheme="dark"
                      blockSize={16}
                      blockMargin={5}
                      fontSize={16}
                      theme={{
                        dark: ['#0a0a0a', '#0e4429', '#006d32', '#26a641', '#39d353'],
                      }}
                      style={{
                        color: '#e4e4e7',
                      }}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Bio Section */}
              <div className="mt-64 px-4 md:px-8 lg:px-12 pb-24 flex justify-center">
                <div className="w-full max-w-[1400px]">
                  <Copy delay={0}>
                    <p className="text-[clamp(24px,4vw,96px)] font-semibold tracking-tight leading-[1.1] text-white">
                      I'm a Product Engineer at 24labs.ai, where I'm building consumer mobile apps and internal analytics tools. As a full-stack developer, I build end-to-end solutions. I thrive on the fast-paced cycle 
                      of development, deployment, and iteration that drives real product impact.
                    </p>
                  </Copy>
                </div>
              </div>
                </section>
              </div>
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
            <div className="h-[calc(100vh-200px)] px-4 md:px-8 lg:px-12 py-8">
              <div className="max-w-[1400px] mx-auto h-full">
                {/* Swiss Grid Layout - 12 Columns */}
                <div className="grid-12 h-full">
                  {/* Left Sidebar - Company Navigation (2 columns, Sticky) */}
                  <div className="col-span-2 sticky-col">
                    <nav className="relative">
                      {/* Sliding Indicator Bar */}
                      <motion.div
                        className="absolute left-0 w-[3px] bg-white rounded-full"
                        animate={{
                          top: experienceRefs.current[activeExperience]?.offsetTop || 0,
                          height: experienceRefs.current[activeExperience]?.offsetHeight || 0,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      />
                      
                      {/* Company Tabs */}
                      <div className="flex flex-col gap-sm">
                        {experiences.map((exp) => (
                          <button
                            key={exp.id}
                            ref={(el) => {
                              experienceRefs.current[exp.id] = el;
                            }}
                            onClick={() => {
                              setActiveExperience(exp.id);
                              experienceSectionRefs.current[exp.id]?.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                              });
                            }}
                            className={`
                              relative pl-6 pr-2 py-2 text-left transition-all duration-500
                              ${activeExperience === exp.id 
                                ? 'text-white' 
                                : 'text-zinc-500 hover:text-zinc-300'}
                            `}
                          >
                            <span className="block font-medium text-[1.2rem] tracking-wide leading-[1.3]">
                              {exp.company}
                            </span>
                          </button>
                        ))}
                      </div>
                    </nav>
                  </div>

                  {/* Right Content Area - 10 columns, Scrollable */}
                  <div 
                    ref={scrollContainerRef}
                    className="col-span-10 overflow-y-auto scrollbar-hide"
                  >
                    {experiences.map((exp) => (
                      <ExperienceSection
                        key={exp.id}
                        experience={exp}
                        containerRef={scrollContainerRef}
                        sectionRef={(el) => {
                          experienceSectionRefs.current[exp.id] = el;
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'audio' && (
            <div className="min-h-[750px] grid grid-cols-2 gap-4 pt-6">
              {/* Left side - Music Player */}
              <div className="flex items-center justify-center h-full">
                <div className="w-full h-full flex items-center justify-center">
                  <MusicPlayer 
                    currentSong={currentSong} 
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                  />
                </div>
              </div>

              {/* Right side - Spotify Playlist */}
              <div className="h-full">
                <SpotifyPlaylist 
                  onSongSelect={(song) => setCurrentSong(song)}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
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
    <div className="h-screen flex flex-col relative bg-black">
      {/* Background gradient - Fixed */}
      <div className="fixed inset-0 bg-linear-to-b from-black via-zinc-950 to-black" />
      
      {/* Radial gradient accent - Fixed */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-zinc-900/30 to-transparent blur-3xl pointer-events-none" />
      
      {/* Horizontal Ambient Glow - Fixed */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[300px] bg-linear-to-r from-transparent via-zinc-700/10 to-transparent blur-[100px] pointer-events-none" />
      
      {/* Full Screen Content */}
      <div className="relative flex flex-col flex-1 overflow-visible">
        {portfolioContent}
      </div>
    </div>
  );
}
