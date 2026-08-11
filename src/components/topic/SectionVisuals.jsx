import React from 'react';
import { Eye } from 'lucide-react';
import { AsciiDiagram } from '../ui/AsciiDiagram';

export function SectionVisuals({ visuals }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#DDD6C8] pb-4">
        <h2 className="text-xl font-bold text-[#20251F] flex items-center gap-2">
          <Eye className="w-5 h-5 text-[#C88719]" />
          SECTION 5 — Visual Explanations
        </h2>
        <p className="text-xs text-[#687066] mt-1">
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
