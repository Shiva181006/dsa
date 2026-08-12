import React from 'react';
import { Eye } from 'lucide-react';
import { AsciiDiagram } from '../ui/AsciiDiagram';

export function SectionVisuals({ visuals }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#E2E8F0] pb-4">
        <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
          <Eye className="w-5 h-5 text-[#2563EB]" />
          SECTION 5 — Visual Explanations
        </h2>
        <p className="text-xs text-[#64748B] mt-1">
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
