import React from 'react';
import { AlertOctagon, CheckCircle2, XCircle } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';

export function SectionMistakes({ mistakes }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
          <AlertOctagon className="w-6 h-6 text-rose-400" />
          SECTION 8 — Common JavaScript Pitfalls & Beginner Mistakes
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          JavaScript array gotchas that ruin live coding interviews and how to prevent them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mistakes.map((m, idx) => (
          <div key={idx} className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <h3 className="text-base font-bold text-rose-400 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                {m.mistake}
              </h3>
              <div className="text-xs sm:text-sm text-slate-300 space-y-2">
                <p>
                  <span className="font-semibold text-slate-200">Why It Happens: </span>
                  {m.whyItHappens}
                </p>
                <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-emerald-300">
                  <span className="font-semibold text-emerald-400 block mb-0.5">How to Avoid:</span>
                  {m.howToAvoid}
                </div>
              </div>
            </div>

            {m.codeSnippet && (
              <CodeBlock code={m.codeSnippet} title="Comparison Code" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
