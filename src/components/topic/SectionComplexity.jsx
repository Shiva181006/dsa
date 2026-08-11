import React from 'react';
import { Clock } from 'lucide-react';

export function SectionComplexity({ matrix }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#DDD6C8] pb-4">
        <h2 className="text-xl font-bold text-[#20251F] flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#C88719]" />
          SECTION 4 — DSA + JavaScript Complexity Matrix
        </h2>
        <p className="text-xs text-[#687066] mt-1">
          Exact Big-O Time & Space complexities for every array operation in JavaScript.
        </p>
      </div>

      <div className="overflow-x-auto rounded-md border border-[#DDD6C8] shadow-xs bg-[#FFFCF5]">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-[#EFE9DD] text-[#20251F] font-mono text-xs uppercase tracking-wider border-b border-[#DDD6C8]">
            <tr>
              <th className="p-3 sm:p-4">Operation</th>
              <th className="p-3 sm:p-4">JavaScript Syntax</th>
              <th className="p-3 sm:p-4 text-[#526B52]">Time Complexity</th>
              <th className="p-3 sm:p-4 text-[#C88719]">Space Complexity</th>
              <th className="p-3 sm:p-4">Interview Insight</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#DDD6C8] text-[#20251F] font-sans">
            {matrix.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#EFE9DD]/50 transition-colors">
                <td className="p-3 sm:p-4 font-bold text-[#20251F]">{row.operation}</td>
                <td className="p-3 sm:p-4 font-mono text-xs text-[#C88719]">{row.jsSyntax}</td>
                <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#526B52]">{row.timeComplexity}</td>
                <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#C88719]">{row.spaceComplexity}</td>
                <td className="p-3 sm:p-4 text-xs text-[#687066]">{row.interviewNotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
