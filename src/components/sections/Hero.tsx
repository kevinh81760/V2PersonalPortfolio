"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { playfair_display } from "@/fonts";
import GitHubCalendar from "react-github-calendar";
import useWindowSize from "@/hooks/useWindowSize";
import useDisableScroll from "@/hooks/useDisableScroll";
import useInstagramBrowser from "@/hooks/useInstagramBrowser";

export default function Hero() {
  useDisableScroll();
  const { width } = useWindowSize();
  const initialScale = width < 768 ? 0.4 : 0.25;

  const isInstagram = useInstagramBrowser();

  return (
    <section className="pt-4 lg:pb-24 h-screen relative">
      <div className="px-4">
        <h1 className="hidden">Jazmin Wong</h1>

        <motion.div
          initial={{
            scale: initialScale,
            top: "50%",
            y: "-50%",
          }}
          animate={{
            scale: 1,
            top: "0px",
            y: "16px",
          }}
          transition={{
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
          <div className="overflow-hidden -mb-3 sm:mb-0">
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
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

          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
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

        <div
          className={`overflow-hidden absolute left-4 right-4 xs:top-[80vh] sm:top-[70vh] md:top-[12.5vw] ${
            isInstagram ? "bottom-[17vh]" : "top-[72vh]"
          }`}
        >
          <div className="flex flex-col gap-0.5 md:gap-0 md:flex-row justify-between items-center relative">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: width < 768 ? 2 : 1.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[clamp(20px,1.6vw,32px)] font-semibold leading-[1.2] text-center md:text-left text-[#E5E5E5]"
              >
                AI/ML and Cloud Engineering Expert.
              </motion.p>
            </div>

            <div className="hidden md:block overflow-hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <motion.div
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 1.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-[clamp(28px,2vw,48px)] h-[clamp(28px,2vw,48px)] relative group"
              >
                <Image
                  src="/images/icons/star.svg"
                  alt="star"
                  fill
                  sizes="(max-width: 768px) 28px, 48px"
                  className="group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out"
                />
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: width < 768 ? 2.05 : 1.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`${playfair_display.className} text-[clamp(20px,1.6vw,32px)] font-normal -mt-1 leading-[1.2] text-center md:text-left text-[#E5E5E5]`}
              >
                Automation Engineer @ 9M Holdings, Inc.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[32vh] xs:mt-[35vh] sm:mt-[20vh] md:mt-[22vw] px-4 md:px-8 lg:px-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
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
              hideTotalCount={false}
              hideColorLegend={true}
              theme={{
                dark: ['#0a0a0a', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              style={{
                fontFamily: 'var(--font-saans), -apple-system, sans-serif',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
