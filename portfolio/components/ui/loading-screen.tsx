"use client";

import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + Math.random() * 12, 100);
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const fadeTimer = setTimeout(() => setIsLoading(false), 400);
      const removeTimer = setTimeout(() => setShowOverlay(false), 1100);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [progress]);

  if (!showOverlay) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-700 ease-in-out ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Main text */}
        <div className="text-center mb-10">
          <p
            className={`${playfair.className} text-4xl md:text-6xl text-neutral-400 italic font-normal tracking-wide leading-tight`}
          >
            Carregando sua
          </p>
          <p
            className={`${playfair.className} text-4xl md:text-6xl text-white font-bold tracking-wide leading-tight`}
          >
            experiência
            <span className="text-[#e11d48]">.</span>
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-[2px] bg-neutral-900 rounded-full overflow-hidden relative">
          <div
            className="absolute top-0 left-0 h-full bg-[#e11d48] transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
              boxShadow: "0 0 12px #e11d48, 0 0 24px #e11d4840",
            }}
          />
        </div>

        {/* Percentage */}
        <div className="mt-4 text-neutral-600 text-xs font-mono tracking-[0.25em]">
          {Math.floor(progress).toString().padStart(3, "0")}%
        </div>
      </div>
    </div>
  );
}
