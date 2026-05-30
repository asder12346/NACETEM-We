import React from 'react';
import { cn } from '../lib/utils';
import nacetemLogo from '../download.png';

interface NacetemLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export function NacetemLogo({ className, variant = 'dark' }: NacetemLogoProps) {
  const isLight = variant === 'light';
  
  return (
    <div className={cn("flex items-center space-x-3", className)}>
      <div className={cn(
        "relative flex items-center justify-center shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full",
        isLight ? "bg-white/95 shadow-lg" : "bg-white"
      )}>
        <img src={nacetemLogo} alt="NACETEM logo" className="w-full h-full object-contain" />
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
