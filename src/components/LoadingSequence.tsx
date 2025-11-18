import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { Loader2 } from 'lucide-react';
import { gsap } from 'gsap';
import { AnimatedGradient } from './AnimatedGradient';
import { Portfolio } from './Portfolio';

interface LoadingStep {
  id: number;
  text: string;
  duration: number;
}

const loadingSteps: LoadingStep[] = [
  { id: 1, text: 'Initializing Product Engineer System…', duration: 1200 },
  { id: 2, text: 'Loading UI Engine…', duration: 1000 },
  { id: 3, text: 'Booting Backend Services…', duration: 1100 },
  { id: 4, text: 'Syncing Design System…', duration: 900 },
];

export function LoadingSequence() {
  const [headerLoaded, setHeaderLoaded] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const loadingContentRef = useRef<HTMLDivElement>(null);
  const portfolioContentRef = useRef<HTMLDivElement>(null);

  // First, load the header
  useEffect(() => {
    const headerTimer = setTimeout(() => {
      setHeaderLoaded(true);
    }, 800); // Header appears after 800ms

    return () => clearTimeout(headerTimer);
  }, []);

  // Then start the loading sequence
  useEffect(() => {
    if (!headerLoaded) return; // Don't start until header is loaded

    if (currentStep >= loadingSteps.length) {
      setIsComplete(true);
      return;
    }

    const step = loadingSteps[currentStep];
    
    const timer = setTimeout(() => {
      if (currentStep < loadingSteps.length - 1) {
        setCompletedSteps((prev) => [...prev, step.id]);
        setCurrentStep((prev) => prev + 1);
      } else {
        // Last step - mark as complete
        setCompletedSteps((prev) => [...prev, step.id]);
        setCurrentStep((prev) => prev + 1);
      }
    }, step.duration);

    return () => clearTimeout(timer);
  }, [currentStep, headerLoaded]);

  // Handle START button click - trigger GSAP animation
  const handleLaunch = () => {
    if (!isComplete || animationStarted) return;
    
    setAnimationStarted(true);
    
    const panel = panelRef.current;
    const loadingContent = loadingContentRef.current;
    const portfolioContent = portfolioContentRef.current;

    if (!panel || !loadingContent || !portfolioContent) return;

    // Create GSAP timeline
    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' }
    });

    // Expand the panel and fade content
    tl.to(loadingContent, {
      opacity: 0,
      duration: 0.6,
    })
    .to(panel, {
      height: '750px',
      duration: 1.4,
    }, '-=0.3')
    .to(portfolioContent, {
      opacity: 1,
      duration: 0.8,
    }, '-=0.6');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      {/* SVG Lens Filter for liquid glass effect */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <filter id="lensFilter" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
          <feComponentTransfer in="SourceAlpha" result="alpha">
            <feFuncA type="identity" />
          </feComponentTransfer>
          <feGaussianBlur in="alpha" stdDeviation="50" result="blur" />
          <feDisplacementMap in="SourceGraphic" in2="blur" scale="50" xChannelSelector="A" yChannelSelector="A" />
        </filter>
      </svg>
      
      {/* Animated Mercedes-themed gradient background */}
      <AnimatedGradient />
      
      {/* Horizontal Ambient Glow - Signature Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[300px] bg-gradient-to-r from-transparent via-zinc-700/10 to-transparent blur-[100px]" />
      
      {/* Standalone Glass Panel */}
      <div className="relative w-full max-w-6xl">
        <div 
          ref={panelRef}
          className="relative rounded-[1.5rem] overflow-hidden flex flex-col"
          style={{ 
            height: '600px',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: `
              inset 0 1px 2px 0 rgba(255, 255, 255, 0.2),
              0 20px 60px -10px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(0, 0, 0, 0.2)
            `,
          }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
                {/* Loading Content - will fade out */}
                <div 
                  ref={loadingContentRef}
                  className="absolute inset-0 p-12 flex items-center justify-center"
                  style={{ opacity: 1 }}
                >
                  {/* Radial gradient accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-zinc-900/30 to-transparent blur-3xl" />

                  <div className="w-full max-w-2xl relative z-10">
                    {/* Logo/Header Area */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="mb-16 text-center"
                    >
                      <div className="inline-block relative">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center relative">
                          <motion.div 
                            className="w-8 h-8 rounded-full"
                            animate={{
                              background: isComplete 
                                ? 'linear-gradient(to bottom right, rgb(52, 211, 153), rgb(16, 185, 129))' 
                                : 'linear-gradient(to bottom right, rgb(255, 255, 255), rgb(212, 212, 216))'
                            }}
                            transition={{ duration: 0.6 }}
                          />
                          
                          {/* Apple-style reflection */}
                          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-2 rounded-full bg-gradient-to-b from-white/5 to-transparent blur-sm" />
                        </div>
                        <div 
                          className="text-white tracking-[0.3em] text-sm opacity-60"
                          style={{
                            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                            fontWeight: 200,
                            letterSpacing: '0.3em'
                          }}
                        >
                          PRODUCT ENGINEER
                        </div>
                      </div>
                    </motion.div>

                    {/* Loading Steps - All rendered from start with fixed layout */}
                    <motion.div 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: headerLoaded ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {loadingSteps.map((step, index) => {
                        const isVisible = headerLoaded && index <= currentStep;
                        const isCurrentStep = index === currentStep;
                        const isCompleted = completedSteps.includes(step.id);

                        return (
                          <div
                            key={step.id}
                            className="flex items-center gap-4"
                          >
                            {/* Status Icon */}
                            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isVisible ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                              >
                                {isCompleted ? (
                                  <motion.div
                                    className="w-3 h-3 rounded-full bg-emerald-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                                  />
                                ) : isVisible ? (
                                  <Loader2 className="w-5 h-5 text-zinc-500 animate-spin" />
                                ) : (
                                  <div className="w-3 h-3" />
                                )}
                              </motion.div>
                            </div>

                            {/* Step Text */}
                            <div className="flex-1">
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: isVisible ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                                className={`tracking-wide ${
                                  isCompleted
                                    ? 'text-zinc-500'
                                    : 'text-white'
                                }`}
                                style={{
                                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                                  fontWeight: 200,
                                  letterSpacing: '0.05em'
                                }}
                              >
                                {step.text}
                              </motion.div>
                            </div>

                            {/* Progress Bar for Active Step */}
                            <div className="flex-shrink-0 w-32 h-1">
                              {isCurrentStep && isVisible && (
                                <motion.div
                                  className="bg-zinc-800 rounded-full overflow-hidden h-full"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <motion.div
                                    className="h-full bg-gradient-to-r from-zinc-500 to-white"
                                    initial={{ width: '0%' }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: step.duration / 1000, ease: 'linear' }}
                                  />
                                </motion.div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </motion.div>

                    {/* Launch Button - Always rendered, visibility controlled */}
                    <motion.div 
                      className="mt-12 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: headerLoaded ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.button 
                        onClick={handleLaunch}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isComplete ? 1 : 0 }}
                        transition={{ duration: 0.6 }}
                        disabled={!isComplete || animationStarted}
                        className="relative overflow-hidden rounded-full border border-white/20 shadow-[0_6px_6px_rgba(0,0,0,0.2),0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300 disabled:cursor-not-allowed hover:scale-[1.022] active:scale-95"
                        style={{
                          background: 'transparent'
                        }}
                      >
                        {/* Glass background with blur */}
                        <div 
                          className="absolute inset-0 rounded-full"
                          style={{
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            background: 'rgba(255, 255, 255, 0.1)',
                            boxShadow: 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.3), 0 4px 6px 0 rgba(0, 0, 0, 0.1)'
                          }}
                        />
                        
                        {/* Content */}
                        <span 
                          className="relative z-10 block px-8 py-2.5 text-white text-sm"
                          style={{
                            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                            fontWeight: 300,
                            letterSpacing: '0.15em'
                          }}
                        >
                          PRESS START TO LAUNCH PORTFOLIO
                        </span>
                      </motion.button>
                    </motion.div>

                    {/* Version Info */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: headerLoaded ? 0.3 : 0 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="mt-12 text-center text-zinc-600 text-xs tracking-wider"
                      style={{
                        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                        fontWeight: 300,
                        letterSpacing: '0.15em'
                      }}
                    >
                      v2.0.25 • BUILD 20251113
                    </motion.div>
                  </div>
                </div>

          {/* Portfolio Content - initially hidden, will fade in */}
          <div 
            ref={portfolioContentRef}
            className="absolute inset-0"
            style={{ opacity: 0 }}
          >
            <Portfolio embedded={true} />
          </div>
        </div>
        
        {/* Dashboard control indicators */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6 opacity-40">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-zinc-600 text-xs tracking-wider" style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 300,
              letterSpacing: '0.1em'
            }}>PWR</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
            <span className="text-zinc-600 text-xs tracking-wider" style={{
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              fontWeight: 300,
              letterSpacing: '0.1em'
            }}>AUX</span>
          </div>
        </div>
      </div>
    </div>
  );
}
