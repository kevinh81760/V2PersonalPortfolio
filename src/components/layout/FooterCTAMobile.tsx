"use client";
import { useContactModalStore } from "@/lib/zustand/stores";

export default function FooterCTAMobile() {
  const toggleModal = useContactModalStore((state) => state.toggleModal);

  return (
    <div className="flex flex-col items-center gap-2 w-full absolute left-1/2 -translate-x-1/2 top-[65%] -translate-y-[65%] lg:hidden">
      <button
        onClick={toggleModal}
        className="p-6 rounded-2xl w-full max-w-[600px] bg-[#14B8A6] hover:bg-[#0F9888] transition-all duration-300 cursor-pointer active:scale-[0.98]"
      >
        <p className="text-2xl tracking-tight font-bold text-white">
          Schedule a Call
        </p>
      </button>

      <a
        href="mailto:kevinh@example.com"
        className="p-6 rounded-2xl w-full max-w-[600px] bg-transparent border-2 border-[#14B8A6] hover:bg-[#14B8A6]/10 transition-all duration-300 cursor-pointer active:scale-[0.98]"
      >
        <p className="text-xl tracking-tight font-semibold text-[#14B8A6] text-center">
          kevinh@example.com
        </p>
      </a>
    </div>
  );
}
