import React from 'react';

export function AsciiDiagram({ title, diagram, explanation }) {
  return (
    <div className="my-5 rounded-md border border-[#E2E8F0] bg-[#FFFFFF] p-5 shadow-xs text-left">
      {title && (
        <h4 className="text-sm font-bold text-[#0F172A] mb-3 flex items-center gap-2 font-mono uppercase tracking-wide">
          <span className="inline-block w-2 h-2 rounded-full bg-[#2563EB]"></span>
          {title}
        </h4>
      )}
      <div className="rounded-md bg-[#0F172A] p-4 border border-[#1E293B] overflow-x-auto my-2 font-mono text-xs sm:text-sm text-[#E2E8F0] leading-relaxed">
        <pre>{diagram}</pre>
      </div>
      {explanation && (
        <p className="mt-3 text-xs sm:text-sm text-[#64748B] leading-relaxed bg-[#F1F5F9] p-3 rounded-md border border-[#E2E8F0]">
          <span className="font-semibold text-[#0F172A]">Visual Insight: </span>
          {explanation}
        </p>
      )}
    </div>
  );
}
