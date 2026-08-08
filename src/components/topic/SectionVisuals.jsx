import React from 'react';
import { Eye } from 'lucide-react';
import { AsciiDiagram } from '../ui/AsciiDiagram';

export function SectionVisuals({ visuals }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
          <Eye className="w-6 h-6 text-indigo-400" />
          SECTION 5 — Visual Explanations
        </h2>
        <p className="text-sm text-slate-400 mt-1">
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
