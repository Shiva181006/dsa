import React from 'react';

export function AsciiDiagram({ title, diagram, explanation }) {
  return (
    <div className="my-5 rounded-md border border-[#E2E8F0] dark:border-[#232D3F] bg-[#FFFFFF] dark:bg-[#151B26] p-5 shadow-xs text-left transition-colors">
      {title && (
        <h4 className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-3 flex items-center gap-2 font-mono uppercase tracking-wide">
          <span className="inline-block w-2 h-2 rounded-full bg-[#2563EB] dark:bg-[#3B82F6]"></span>
          {title}
        </h4>
      )}
      <div className="rounded-md bg-[#0F172A] dark:bg-[#0B0E14] p-4 border border-[#1E293B] dark:border-[#232D3F] overflow-x-auto my-2 font-mono text-xs sm:text-sm text-[#E2E8F0] leading-relaxed">
        <pre>{diagram}</pre>
      </div>
      {explanation && (
        <p className="mt-3 text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed bg-[#F1F5F9] dark:bg-[#1C2433] p-3 rounded-md border border-[#E2E8F0] dark:border-[#232D3F]">
          <span className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Visual Insight: </span>
          {explanation}
        </p>
      )}
    </div>
  );
}

