import React from 'react';
import { Layers, Lightbulb } from 'lucide-react';

export function SectionConcepts({ concepts }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#DDD6C8] pb-4">
        <h2 className="text-xl font-bold text-[#20251F] flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#C88719]" />
          SECTION 2 — Core Concepts
        </h2>
        <p className="text-xs text-[#687066] mt-1">
          Fundamental principles every JavaScript developer must understand before solving array interview problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {concepts.map((concept, idx) => (
          <div key={idx} className="p-5 rounded-md bg-[#FFFCF5] border border-[#DDD6C8] space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-md bg-[#FBF5E9] text-[#C88719] border border-[#E8CA94] text-xs font-mono font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="text-sm font-bold text-[#20251F]">
                  {concept.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#687066] leading-relaxed">
                {concept.explanation}
              </p>
            </div>

            <div className="p-3 rounded-md bg-[#FBF5E9] border border-[#E8CA94] flex items-start gap-2 text-xs text-[#20251F] mt-2 font-sans">
              <Lightbulb className="w-4 h-4 text-[#C88719] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#C88719] font-mono">Key Takeaway: </span>
                {concept.keyTakeaway}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
