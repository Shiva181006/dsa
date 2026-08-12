import React from 'react';
import { Cpu, Zap } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';

export function SectionPatterns({ patterns }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#E2E8F0] dark:border-[#232D3F] pb-4">
        <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2">
          <Cpu className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
          SECTION 6 — Important Algorithmic Patterns
        </h2>
        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
          Master these core patterns to solve 90%+ of array interview questions.
        </p>
      </div>

      <div className="space-y-6">
        {patterns.map((pat, idx) => (
          <div key={idx} className="p-5 sm:p-6 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-4 shadow-xs transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E2E8F0] dark:border-[#232D3F] pb-3">
              <h3 className="text-base font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] text-[#2563EB] dark:text-[#60A5FA] text-xs font-mono border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)]">
                  Pattern {idx + 1}
                </span>
                {pat.name}
              </h3>
              <span className="text-xs font-mono text-[#059669] dark:text-[#34D399] bg-[#ECFDF5] dark:bg-[rgba(16,185,129,0.15)] border border-[#A7F3D0] dark:border-[rgba(16,185,129,0.35)] px-2.5 py-1 rounded font-semibold">
                Impact: {pat.complexityImpact}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-md bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.12)] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)] space-y-2">
                <h4 className="font-bold text-[#2563EB] dark:text-[#60A5FA] flex items-center gap-1.5 font-mono">
                  <Zap className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" /> How to Recognize This Pattern:
                </h4>
                <ul className="space-y-1.5 text-[#0F172A] dark:text-[#F1F5F9]">
                  {pat.howToRecognize.map((rec, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-1.5">
                      <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-md bg-[#F1F5F9] dark:bg-[#1C2433] border border-[#E2E8F0] dark:border-[#232D3F] space-y-2">
                <h4 className="font-bold text-[#0F172A] dark:text-[#F1F5F9] font-mono">Why It Works:</h4>
                <p className="text-[#64748B] dark:text-[#94A3B8] leading-relaxed">{pat.whyItWorks}</p>
                <div className="mt-2 pt-2 border-t border-[#E2E8F0] dark:border-[#232D3F] text-xs text-[#64748B] dark:text-[#94A3B8]">
                  <span className="font-semibold text-[#0F172A] dark:text-[#F1F5F9]">Canonical Problems: </span>
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

