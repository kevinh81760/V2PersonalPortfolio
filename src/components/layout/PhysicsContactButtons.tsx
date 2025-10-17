"use client";

import { useContactModalStore } from "@/lib/zustand/stores";

export default function PhysicsContactButtons({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const toggleModal = useContactModalStore((state) => state.toggleModal);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 w-full max-w-2xl px-8">
        {/* Primary CTA */}
        <button
          onClick={toggleModal}
          className="group relative w-full px-8 py-6 bg-[#14B8A6] hover:bg-[#0F9888] rounded-2xl transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
        >
          <p className="text-[clamp(24px,2.5vw,40px)] font-bold tracking-tight text-white">
            Schedule a Call
          </p>
        </button>

        {/* Secondary CTA - Email */}
        <a
          href="mailto:kevinh@example.com"
          className="group relative w-full px-8 py-6 bg-transparent border-2 border-[#14B8A6] hover:bg-[#14B8A6]/10 rounded-2xl transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]"
        >
          <p className="text-[clamp(20px,2vw,32px)] font-semibold tracking-tight text-[#14B8A6]">
            kevinh@example.com
          </p>
        </a>

        {/* Tertiary text option */}
        <div className="flex items-center gap-6 mt-2">
          <a 
            href="https://linkedin.com/in/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#B3B3B3] hover:text-[#14B8A6] transition-colors font-semibold text-lg"
          >
            LinkedIn
          </a>
          <span className="text-[#2A2A2A]">|</span>
          <a 
            href="https://github.com/kevinh81760" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#B3B3B3] hover:text-[#14B8A6] transition-colors font-semibold text-lg"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
