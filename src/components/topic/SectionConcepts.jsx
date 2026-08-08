import React from 'react';
import { Layers, Lightbulb } from 'lucide-react';

export function SectionConcepts({ concepts }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
          <Layers className="w-6 h-6 text-indigo-400" />
          SECTION 2 — Core Concepts
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Fundamental principles every JavaScript developer must understand before solving array interview problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {concepts.map((concept, idx) => (
          <div key={idx} className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800 text-xs font-mono font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="text-base font-semibold text-slate-200">
                  {concept.title}
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {concept.explanation}
              </p>
            </div>

            <div className="p-3 rounded-lg bg-indigo-950/40 border border-indigo-900/50 flex items-start gap-2 text-xs text-indigo-300 mt-2">
              <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-amber-300">Key Takeaway: </span>
                {concept.keyTakeaway}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
