import React from 'react';
import { Clock } from 'lucide-react';

export function SectionComplexity({ matrix }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#E2E8F0] pb-4">
        <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#2563EB]" />
          SECTION 4 — DSA + JavaScript Complexity Matrix
        </h2>
        <p className="text-xs text-[#64748B] mt-1">
          Exact Big-O Time & Space complexities for every array operation in JavaScript.
        </p>
      </div>

      <div className="overflow-x-auto rounded-md border border-[#E2E8F0] shadow-xs bg-[#FFFFFF]">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-[#F1F5F9] text-[#0F172A] font-mono text-xs uppercase tracking-wider border-b border-[#E2E8F0]">
            <tr>
              <th className="p-3 sm:p-4">Operation</th>
              <th className="p-3 sm:p-4">JavaScript Syntax</th>
              <th className="p-3 sm:p-4 text-[#059669]">Time Complexity</th>
              <th className="p-3 sm:p-4 text-[#2563EB]">Space Complexity</th>
              <th className="p-3 sm:p-4">Interview Insight</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0] text-[#0F172A] font-sans">
            {matrix.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors">
                <td className="p-3 sm:p-4 font-bold text-[#0F172A]">{row.operation}</td>
                <td className="p-3 sm:p-4 font-mono text-xs text-[#2563EB]">{row.jsSyntax}</td>
                <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#059669]">{row.timeComplexity}</td>
                <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#2563EB]">{row.spaceComplexity}</td>
                <td className="p-3 sm:p-4 text-xs text-[#64748B]">{row.interviewNotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
