import React from 'react';
import { Code2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-[#FFFFFF] py-8 text-[#64748B] text-xs mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#0F172A] text-[#FFFFFF] flex items-center justify-center font-mono font-bold text-[10px]">
            JS
          </div>
          <span className="font-semibold text-[#0F172A]">JavaScript DSA Technical Notebook</span>
        </div>
        <p className="text-[#64748B] text-center max-w-xl">
          Designed as a structured computer science curriculum and canonical interview reference platform for JavaScript software engineers.
        </p>
        <div className="font-mono text-[11px] text-[#64748B]">
          <span>60 Curated Problems • 6 Phases</span>
        </div>
      </div>
    </footer>
  );
}
