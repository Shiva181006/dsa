import React from 'react';
import { Sparkles, ArrowRight, Clock, HardDrive } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';

export function SectionExamples({ examples }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-indigo-400" />
          SECTION 7 — Small Example Questions (Teaching Walkthroughs)
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Conceptual walkthroughs illustrating Brute Force vs Optimized JavaScript thinking before practicing the 60 questions.
        </p>
      </div>

      <div className="space-y-8">
        {examples.map((ex, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-slate-100">{ex.title}</h3>
              <p className="text-sm text-slate-300 mt-1 bg-slate-950 p-3 rounded-lg border border-slate-800">
                <span className="font-semibold text-indigo-400">Problem Statement: </span>
                {ex.problem}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Brute Force Column */}
              <div className="p-4 rounded-xl bg-slate-950 border border-rose-900/30 space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-rose-400 text-sm">Brute Force Approach</span>
                  <div className="flex items-center gap-2 font-mono text-xs text-rose-400">
                    <span>{ex.bruteForce.time} Time</span>
                    <span>|</span>
                    <span>{ex.bruteForce.space} Space</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300">{ex.bruteForce.explanation}</p>
                <CodeBlock code={ex.bruteForce.code} title="Brute Force Solution" />
              </div>

              {/* Optimized Column */}
              <div className="p-4 rounded-xl bg-slate-950 border border-emerald-900/30 space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="font-bold text-emerald-400 text-sm">Optimized JS Approach</span>
                  <div className="flex items-center gap-2 font-mono text-xs text-emerald-400">
                    <span>{ex.optimized.time} Time</span>
                    <span>|</span>
                    <span>{ex.optimized.space} Space</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300">{ex.optimized.explanation}</p>
                <CodeBlock code={ex.optimized.code} title="Optimized Solution" />
              </div>
            </div>

            <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-900/60 text-xs sm:text-sm text-indigo-200">
              <span className="font-bold text-amber-300">Why Optimized Solution Works: </span>
              {ex.whyOptimizedWorks}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
