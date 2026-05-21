import React from 'react';
import { cn } from '../lib/utils';

interface NacetemLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function NacetemLogo({ className, variant = 'dark' }: NacetemLogoProps) {
  const isLight = variant === 'light';
  
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {/* SVG Gear Icon representing the NACETEM logo */}
      <div className="relative flex items-center justify-center shrink-0 w-12 h-12 sm:w-14 sm:h-14">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100" 
          className="w-full h-full"
        >
          {/* Main Gear */}
          <path 
            d="M 45 5 L 55 5 L 58 14 A 38 38 0 0 1 72 20 L 80 12 L 87 19 L 79 27 A 38 38 0 0 1 85 42 L 95 45 L 95 55 L 85 58 A 38 38 0 0 1 79 73 L 87 81 L 80 88 L 72 80 A 38 38 0 0 1 58 86 L 55 95 L 45 95 L 42 86 A 38 38 0 0 1 28 80 L 20 88 L 13 81 L 21 73 A 38 38 0 0 1 15 58 L 5 55 L 5 45 L 15 42 A 38 38 0 0 1 21 27 L 13 19 L 20 12 L 28 20 A 38 38 0 0 1 42 14 L 45 5 Z" 
            fill={isLight ? "currentColor" : "#111827"} 
          />
          {/* Inner rings */}
          <circle cx="50" cy="50" r="27" fill={isLight ? "#111827" : "white"} />
          <circle cx="50" cy="50" r="23" fill="transparent" stroke={isLight ? "white" : "#991b1b"} strokeWidth="1.5" strokeDasharray="3 3"/>
          <circle cx="50" cy="50" r="19" fill={isLight ? "white" : "#f1f5f9"} />
          {/* Minimalist crest representation */}
          <path d="M 40 40 L 60 40 L 54 50 L 50 45 L 46 50 Z" fill={isLight ? "#1f2937" : "#0f172a"} />
          {/* Text in gear */}
          <text x="50" y="60" fontSize="7" fill={isLight ? "#1f2937" : "#0f172a"} textAnchor="middle" fontWeight="bold">NACETEM</text>
        </svg>
      </div>

      {/* Structured Text matching the provided logo styling */}
      <div className="flex flex-col justify-center">
        <span className={cn(
          "text-[15px] sm:text-[18px] font-bold leading-none mb-1 font-sans",
          isLight ? "text-white" : "text-[#0b1a45]"
        )}>
          National Centre for
        </span>
        <div className="text-[15px] sm:text-[18px] font-bold leading-none flex gap-1.5 font-sans">
          <span className={isLight ? "text-emerald-100" : "text-[#a14a4c]"}>Technology</span>
          <span className={isLight ? "text-white" : "text-[#0b1a45]"}>Management</span>
        </div>
      </div>
    </div>
  );
}
