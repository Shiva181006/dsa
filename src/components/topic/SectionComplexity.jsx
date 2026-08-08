import React from 'react';
import { Clock } from 'lucide-react';

export function SectionComplexity({ matrix }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
          <Clock className="w-6 h-6 text-indigo-400" />
          SECTION 4 — DSA + JavaScript Complexity Matrix
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Exact Big-O Time & Space complexities for every array operation in JavaScript.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-800 shadow-xl bg-slate-900/90">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-slate-800/80 text-slate-300 font-mono text-xs uppercase tracking-wider border-b border-slate-700">
            <tr>
              <th className="p-3 sm:p-4">Operation</th>
              <th className="p-3 sm:p-4">JavaScript Syntax</th>
              <th className="p-3 sm:p-4 text-emerald-400">Time Complexity</th>
              <th className="p-3 sm:p-4 text-indigo-400">Space Complexity</th>
              <th className="p-3 sm:p-4">Interview Insight</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-slate-300 font-sans">
            {matrix.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                <td className="p-3 sm:p-4 font-semibold text-slate-200">{row.operation}</td>
                <td className="p-3 sm:p-4 font-mono text-xs text-indigo-300">{row.jsSyntax}</td>
                <td className="p-3 sm:p-4 font-mono text-xs font-bold text-emerald-400">{row.timeComplexity}</td>
                <td className="p-3 sm:p-4 font-mono text-xs font-bold text-indigo-400">{row.spaceComplexity}</td>
                <td className="p-3 sm:p-4 text-xs text-slate-400">{row.interviewNotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
