"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import NumberFlow from "@number-flow/react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "@/data/projects";
import Copy from "@/components/layout/Copy";

export default function About() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const currentProject = projects[currentProjectIndex];

  const nextProject = () => {
    setDirection(1);
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentProjectIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  // Swipe gesture handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (swipeDistance > minSwipeDistance) {
      nextProject();
    } else if (swipeDistance < -minSwipeDistance) {
      prevProject();
    }
  };

  return (
    <section id="about" className="px-4 pb-20 lg:py-24">
      <div className="mb-12 lg:mb-[clamp(64px,5vw,128px)]">
        <Copy>
          <p className="text-[clamp(16px,1.2vw,28px)] font-semibold mb-2 text-[#999999]">
            (Featured Projects)
          </p>
        </Copy>

        <Copy>
          <p className="text-[clamp(24px,4vw,96px)] font-semibold tracking-tight leading-[1.1] text-white">
            I specialize in building scalable backend systems, automating complex
            workflows, and deploying ML/AI solutions that drive real business
            impact. Here&apos;s a selection of projects that showcase my technical
            expertise.
          </p>
        </Copy>
      </div>

      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="grid grid-cols-12 gap-4">
          {/* Left Card - Project Visual */}
          <div className="col-span-12 md:col-span-6 h-[clamp(350px,40vw,900px)] p-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentProjectIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full rounded-lg overflow-hidden relative"
              >
                <Image
                  src={currentProject.visualUrl}
                  alt={currentProject.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Status Badge */}
            <div className="absolute top-6 left-6 px-3 py-1.5 bg-[#0A0A0A]/80 backdrop-blur-sm border border-[#2A2A2A] rounded-full">
              <p className="text-xs font-semibold text-white">
                {currentProject.status}
              </p>
            </div>
          </div>

          {/* Right Card - Project Info */}
          <div className="col-span-12 md:col-span-6 h-[350px] lg:h-[clamp(350px,40vw,900px)] flex flex-col justify-between p-8 lg:p-12 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden relative">
            <div className="relative z-10">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentProjectIndex}
                  custom={direction}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Copy>
                    <h3 className="text-[clamp(24px,2.5vw,56px)] text-white font-bold leading-tight mb-4">
                      {currentProject.name}
                    </h3>
                  </Copy>

                  <Copy>
                    <p className="text-[clamp(16px,1.4vw,32px)] text-[#E5E5E5] font-normal leading-tight mb-6">
                      {currentProject.description}
                    </p>
                  </Copy>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {currentProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#0A0A0A] border border-[#2A2A2A] rounded-full text-xs font-semibold text-[#999999]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metric Label */}
                  <p className="text-sm font-semibold text-[#999999] tracking-wide uppercase">
                    {currentProject.metricLabel}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Big Metric Number with Color */}
            <NumberFlow
              className="text-[clamp(150px,15vw,350px)] font-bold tracking-tight absolute -bottom-[3vw] lg:-bottom-[2vw] left-8 lg:left-12 z-0"
              value={currentProject.metricValue}
              format={{ notation: "compact" }}
              style={{ color: currentProject.metricColor }}
            />

            {/* Action Links */}
            <div className="absolute top-8 right-8 flex gap-3 z-20">
              {currentProject.githubUrl && (
                <a
                  href={currentProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[#0A0A0A] border border-[#2A2A2A] rounded-full hover:border-white transition-colors"
                  aria-label="View on GitHub"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
              {currentProject.liveUrl && (
                <a
                  href={currentProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[#0A0A0A] border border-[#2A2A2A] rounded-full hover:border-white transition-colors"
                  aria-label="View Live Demo"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center justify-between max-w-md mx-auto">
          {/* Previous Button */}
          <button
            onClick={prevProject}
            className="w-12 h-12 flex items-center justify-center bg-[#1A1A1A] border border-[#2A2A2A] rounded-full hover:border-white transition-colors"
            aria-label="Previous project"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentProjectIndex ? 1 : -1);
                  setCurrentProjectIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentProjectIndex
                    ? "w-8 bg-white"
                    : "w-2 bg-[#2A2A2A] hover:bg-[#999999]"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextProject}
            className="w-12 h-12 flex items-center justify-center bg-[#1A1A1A] border border-[#2A2A2A] rounded-full hover:border-white transition-colors"
            aria-label="Next project"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
