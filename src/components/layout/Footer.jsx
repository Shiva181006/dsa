import React from 'react';
import { Code2, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-8 text-slate-400 text-xs mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-indigo-400" />
          <span className="font-semibold text-slate-300">JavaScript DSA Interview Preparation Platform</span>
        </div>
        <p className="text-slate-500 text-center">
          Curated specifically for software engineers preparing for coding interviews using JavaScript. All problem sources link directly to original canonical platforms.
        </p>
        <div className="flex items-center gap-1 text-slate-400">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>for JavaScript Developers</span>
        </div>
      </div>
    </footer>
  );
}
