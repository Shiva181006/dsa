import React from 'react';
import { Code2, AlertTriangle, CheckCircle } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';

export function SectionJSMethods({ jsImplementation }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
          <Code2 className="w-6 h-6 text-indigo-400" />
          SECTION 3 — JavaScript Implementation & Built-in Methods
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Analysis of native JavaScript array methods, their underlying time complexities, and DSA usage rules.
        </p>
      </div>

      <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-slate-800">
        {jsImplementation.overview}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {jsImplementation.methods.map((m, idx) => (
          <div key={idx} className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
              <span className="font-mono text-sm font-bold text-indigo-300 bg-indigo-950/80 px-2.5 py-1 rounded border border-indigo-800">
                {m.method}
              </span>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-emerald-400 font-semibold">{m.timeComplexity}</span>
                <span className="text-slate-500">|</span>
                <span className="text-indigo-400">{m.spaceComplexity}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300">{m.description}</p>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-900/40 text-slate-300">
                <span className="font-semibold text-emerald-400 block mb-0.5">DSA Use Case:</span>
                {m.dsaUseCase}
              </div>

              {m.avoidWhen && (
                <div className="p-2.5 rounded bg-rose-950/20 border border-rose-900/40 text-slate-300">
                  <span className="font-semibold text-rose-400 block mb-0.5">When to Avoid / Warning:</span>
                  {m.avoidWhen}
                </div>
              )}
            </div>

            {m.codeExample && (
              <CodeBlock code={m.codeExample} title="JS Example" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
