import React from 'react';
import { Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#DDD6C8] bg-[#EFE9DD] py-8 text-[#687066] text-xs mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#20251F] text-[#F5F1E8] flex items-center justify-center font-mono font-bold text-[10px]">
            JS
          </div>
          <span className="font-semibold text-[#20251F]">JavaScript DSA Technical Notebook</span>
        </div>
        <p className="text-[#687066] text-center max-w-xl">
          Designed as a structured computer science curriculum and canonical interview reference platform for JavaScript software engineers.
        </p>
        <div className="font-mono text-[11px] text-[#687066]">
          <span>60 Curated Problems • 6 Phases</span>
        </div>
      </div>
    </footer>
  );
}
