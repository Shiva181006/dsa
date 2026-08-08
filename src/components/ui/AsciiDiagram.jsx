import React from 'react';

export function AsciiDiagram({ title, diagram, explanation }) {
  return (
    <div className="my-5 rounded-xl border border-indigo-500/20 bg-slate-900/90 p-5 shadow-lg text-left">
      {title && (
        <h4 className="text-base font-semibold text-indigo-300 mb-3 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-indigo-400"></span>
          {title}
        </h4>
      )}
      <div className="rounded-lg bg-slate-950 p-4 border border-slate-800 overflow-x-auto my-2 font-mono text-xs sm:text-sm text-emerald-400 leading-relaxed shadow-inner">
        <pre>{diagram}</pre>
      </div>
      {explanation && (
        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-normal bg-slate-800/40 p-3 rounded-lg border border-slate-700/50">
          <span className="font-semibold text-slate-200">Key Visual Insight: </span>
          {explanation}
        </p>
      )}
    </div>
  );
}
