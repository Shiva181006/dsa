import React from 'react';
import { Layers, Lightbulb } from 'lucide-react';

export function SectionConcepts({ concepts }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#E2E8F0] dark:border-[#232D3F] pb-4">
        <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
          SECTION 2 — Core Concepts
        </h2>
        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
          Fundamental principles every JavaScript developer must understand before solving array interview problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {concepts.map((concept, idx) => (
          <div key={idx} className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-3 flex flex-col justify-between shadow-xs transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-md bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] text-[#2563EB] dark:text-[#60A5FA] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)] text-xs font-mono font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                  {concept.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                {concept.explanation}
              </p>
            </div>

            <div className="p-3 rounded-md bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.12)] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)] flex items-start gap-2 text-xs text-[#0F172A] dark:text-[#F1F5F9] mt-2 font-sans">
              <Lightbulb className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#2563EB] dark:text-[#60A5FA] font-mono">Key Takeaway: </span>
                {concept.keyTakeaway}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

