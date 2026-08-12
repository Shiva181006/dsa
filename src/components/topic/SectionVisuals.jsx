import React from 'react';
import { Eye } from 'lucide-react';
import { AsciiDiagram } from '../ui/AsciiDiagram';

export function SectionVisuals({ visuals }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#E2E8F0] dark:border-[#232D3F] pb-4">
        <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2">
          <Eye className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
          SECTION 5 — Visual Explanations
        </h2>
        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
          Visual memory diagrams, pointer shifts, and sliding window boundaries.
        </p>
      </div>

      <div className="space-y-4">
        {visuals.map((vis, idx) => (
          <AsciiDiagram
            key={idx}
            title={vis.title}
            diagram={vis.asciiDiagram}
            explanation={vis.explanation}
          />
        ))}
      </div>
    </section>
  );
}

