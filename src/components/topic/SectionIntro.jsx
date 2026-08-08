import React from 'react';
import { BookOpen, CheckCircle, AlertTriangle, Cpu, Star } from 'lucide-react';

export function SectionIntro({ intro, weight }) {
  return (
    <section className="space-y-6 text-left">
      <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-400" />
            SECTION 1 — Topic Introduction
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Understanding Arrays from hardware memory representation to JavaScript engine optimizations.
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-800/80 text-xs">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-slate-300">Interview Importance:</span>
          <span className="text-amber-400 font-bold font-mono">{weight}/5 Stars</span>
        </div>
      </div>

      {/* Grid: What is it & Why it exists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
          <h3 className="text-base font-semibold text-indigo-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            What is an Array?
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {intro.whatIsIt}
          </p>
        </div>

        <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
          <h3 className="text-base font-semibold text-indigo-300 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-indigo-400" />
            Why does it exist in Hardware?
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {intro.whyExists}
          </p>
        </div>
      </div>

      {/* Grid: When to Use vs When NOT to Use */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-3">
          <h3 className="text-base font-semibold text-emerald-400 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            When should we use Arrays?
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {intro.whenToUse.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-900/40 space-y-3">
          <h3 className="text-base font-semibold text-rose-400 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            When should we NOT use Arrays?
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {intro.whenNotToUse.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-rose-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Real World Use Cases */}
      <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
        <h3 className="text-base font-semibold text-amber-300">
          Real-World JavaScript Use Cases
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
          {intro.realWorldUseCases.map((useCase, idx) => (
            <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
              {useCase}
            </div>
          ))}
        </div>
      </div>

      {/* Interview Relevance */}
      <div className="p-5 rounded-xl bg-indigo-950/30 border border-indigo-800/50 space-y-2">
        <h3 className="text-base font-semibold text-indigo-300">
          Why this Topic is Critical for Coding Interviews
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed">
          {intro.interviewRelevance}
        </p>
      </div>
    </section>
  );
}
