import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] dark:border-[#232D3F] bg-[#FFFFFF] dark:bg-[#151B26] py-8 text-[#64748B] dark:text-[#94A3B8] text-xs mt-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#0F172A] dark:bg-[#1C2433] text-[#FFFFFF] dark:text-[#F1F5F9] flex items-center justify-center font-mono font-bold text-[10px] border border-[#0F172A] dark:border-[#334155]">
            JS
          </div>
          <span className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">JavaScript DSA Technical Notebook</span>
        </div>
        <p className="text-[#64748B] dark:text-[#94A3B8] text-center max-w-xl">
          Designed as a structured computer science curriculum and canonical interview reference platform for JavaScript software engineers.
        </p>
        <div className="font-mono text-[11px] text-[#64748B] dark:text-[#94A3B8]">
          <span>60 Curated Problems • 6 Phases</span>
        </div>
      </div>
    </footer>
  );
}

