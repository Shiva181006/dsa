import React from 'react';
import { Cpu, Zap } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';

export function SectionPatterns({ patterns }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#E2E8F0] pb-4">
        <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[#2563EB]" />
          SECTION 6 — Important Algorithmic Patterns
        </h2>
        <p className="text-xs text-[#64748B] mt-1">
          Master these core patterns to solve 90%+ of array interview questions.
        </p>
      </div>

      <div className="space-y-6">
        {patterns.map((pat, idx) => (
          <div key={idx} className="p-5 sm:p-6 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-4 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] pb-3">
              <h3 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#EFF6FF] text-[#2563EB] text-xs font-mono border border-[#BFDBFE]">
                  Pattern {idx + 1}
                </span>
                {pat.name}
              </h3>
              <span className="text-xs font-mono text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-1 rounded font-semibold">
                Impact: {pat.complexityImpact}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-md bg-[#EFF6FF] border border-[#BFDBFE] space-y-2">
                <h4 className="font-bold text-[#2563EB] flex items-center gap-1.5 font-mono">
                  <Zap className="w-4 h-4 text-[#2563EB]" /> How to Recognize This Pattern:
                </h4>
                <ul className="space-y-1.5 text-[#0F172A]">
                  {pat.howToRecognize.map((rec, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-1.5">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] space-y-2">
                <h4 className="font-bold text-[#0F172A] font-mono">Why It Works:</h4>
                <p className="text-[#64748B] leading-relaxed">{pat.whyItWorks}</p>
                <div className="mt-2 pt-2 border-t border-[#E2E8F0] text-xs text-[#64748B]">
                  <span className="font-semibold text-[#0F172A]">Canonical Problems: </span>
                  {pat.exampleProblemTitle}
                </div>
              </div>
            </div>

            {pat.jsTemplate && (
              <CodeBlock code={pat.jsTemplate} title={`JavaScript Template (${pat.name})`} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
