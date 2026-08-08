import React from 'react';
import { Cpu, CheckCircle2, Zap } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';

export function SectionPatterns({ patterns }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
          <Cpu className="w-6 h-6 text-indigo-400" />
          SECTION 6 — Important Algorithmic Patterns
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Master these core patterns to solve 90%+ of array interview questions.
        </p>
      </div>

      <div className="space-y-6">
        {patterns.map((pat, idx) => (
          <div key={idx} className="p-6 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-indigo-300 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-indigo-950 text-indigo-400 text-xs font-mono border border-indigo-800">
                  Pattern {idx + 1}
                </span>
                {pat.name}
              </h3>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded">
                Impact: {pat.complexityImpact}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-semibold text-amber-400 flex items-center gap-1.5">
                  <Zap className="w-4 h-4" /> How to Recognize This Pattern:
                </h4>
                <ul className="space-y-1.5 text-slate-300">
                  {pat.howToRecognize.map((rec, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-1.5">
                      <span className="text-amber-400">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                <h4 className="font-semibold text-indigo-300">Why It Works:</h4>
                <p className="text-slate-300 leading-relaxed">{pat.whyItWorks}</p>
                <div className="mt-2 pt-2 border-t border-slate-800 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Canonical Problems: </span>
                  {pat.exampleProblemTitle}
                </div>
              </div>
            </div>

            {pat.jsTemplate && (
              <CodeBlock code={pat.jsTemplate} title={`JavaScript Template (${pat.name})`} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
