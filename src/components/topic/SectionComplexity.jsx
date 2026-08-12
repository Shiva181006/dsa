import React from 'react';
import { Clock } from 'lucide-react';

export function SectionComplexity({ matrix }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#E2E8F0] dark:border-[#232D3F] pb-4">
        <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
          SECTION 4 — DSA + JavaScript Complexity Matrix
        </h2>
        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
          Exact Big-O Time & Space complexities for every array operation in JavaScript.
        </p>
      </div>

      <div className="overflow-x-auto rounded-md border border-[#E2E8F0] dark:border-[#232D3F] shadow-xs bg-[#FFFFFF] dark:bg-[#151B26] transition-colors">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="bg-[#F1F5F9] dark:bg-[#1C2433] text-[#0F172A] dark:text-[#F1F5F9] font-mono text-xs uppercase tracking-wider border-b border-[#E2E8F0] dark:border-[#232D3F]">
            <tr>
              <th className="p-3 sm:p-4">Operation</th>
              <th className="p-3 sm:p-4">JavaScript Syntax</th>
              <th className="p-3 sm:p-4 text-[#059669] dark:text-[#34D399]">Time Complexity</th>
              <th className="p-3 sm:p-4 text-[#2563EB] dark:text-[#60A5FA]">Space Complexity</th>
              <th className="p-3 sm:p-4">Interview Insight</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0] dark:divide-[#232D3F] text-[#0F172A] dark:text-[#F1F5F9] font-sans">
            {matrix.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#F8FAFC] dark:hover:bg-[#1C2433] transition-colors">
                <td className="p-3 sm:p-4 font-bold text-[#0F172A] dark:text-[#F1F5F9]">{row.operation}</td>
                <td className="p-3 sm:p-4 font-mono text-xs text-[#2563EB] dark:text-[#60A5FA]">{row.jsSyntax}</td>
                <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#059669] dark:text-[#34D399]">{row.timeComplexity}</td>
                <td className="p-3 sm:p-4 font-mono text-xs font-bold text-[#2563EB] dark:text-[#60A5FA]">{row.spaceComplexity}</td>
                <td className="p-3 sm:p-4 text-xs text-[#64748B] dark:text-[#94A3B8]">{row.interviewNotes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

