import React from 'react';

export function AsciiDiagram({ title, diagram, explanation }) {
  return (
    <div className="my-5 rounded-md border border-[#DDD6C8] bg-[#FFFCF5] p-5 shadow-xs text-left">
      {title && (
        <h4 className="text-sm font-bold text-[#20251F] mb-3 flex items-center gap-2 font-mono uppercase tracking-wide">
          <span className="inline-block w-2 h-2 rounded-full bg-[#C88719]"></span>
          {title}
        </h4>
      )}
      <div className="rounded-md bg-[#20251F] p-4 border border-[#20251F] overflow-x-auto my-2 font-mono text-xs sm:text-sm text-[#F5F1E8] leading-relaxed">
        <pre>{diagram}</pre>
      </div>
      {explanation && (
        <p className="mt-3 text-xs sm:text-sm text-[#687066] leading-relaxed bg-[#EFE9DD] p-3 rounded-md border border-[#DDD6C8]">
          <span className="font-semibold text-[#20251F]">Visual Insight: </span>
          {explanation}
        </p>
      )}
    </div>
  );
}
