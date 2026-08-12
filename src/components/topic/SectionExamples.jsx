import React from 'react';
import { Sparkles } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';

export function SectionExamples({ examples }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#E2E8F0] dark:border-[#232D3F] pb-4">
        <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
          SECTION 7 — Small Example Questions (Teaching Walkthroughs)
        </h2>
        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
          Conceptual walkthroughs illustrating Brute Force vs Optimized JavaScript thinking before practicing the 60 questions.
        </p>
      </div>

      <div className="space-y-8">
        {examples.map((ex, idx) => (
          <div key={idx} className="p-5 sm:p-6 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-4 shadow-xs transition-colors">
            <div>
              <h3 className="text-base font-bold text-[#0F172A] dark:text-[#F1F5F9]">{ex.title}</h3>
              <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] mt-1 bg-[#F1F5F9] dark:bg-[#1C2433] p-3 rounded-md border border-[#E2E8F0] dark:border-[#232D3F]">
                <span className="font-bold text-[#2563EB] dark:text-[#60A5FA] font-mono">Problem Statement: </span>
                {ex.problem}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Brute Force Column */}
              <div className="p-4 rounded-md bg-[#FFF1F2] dark:bg-[rgba(244,63,94,0.1)] border border-[#FECDD3] dark:border-[rgba(244,63,94,0.35)] space-y-2">
                <div className="flex items-center justify-between border-b border-[#FECDD3] dark:border-[rgba(244,63,94,0.35)] pb-2">
                  <span className="font-bold text-[#E11D48] dark:text-[#FB7185] text-xs font-mono">Brute Force Approach</span>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#E11D48] dark:text-[#FB7185]">
                    <span>{ex.bruteForce.time} Time</span>
                    <span>|</span>
                    <span>{ex.bruteForce.space} Space</span>
                  </div>
                </div>
                <p className="text-xs text-[#0F172A] dark:text-[#F1F5F9]">{ex.bruteForce.explanation}</p>
                <CodeBlock code={ex.bruteForce.code} title="Brute Force Solution" />
              </div>

              {/* Optimized Column */}
              <div className="p-4 rounded-md bg-[#ECFDF5] dark:bg-[rgba(16,185,129,0.1)] border border-[#A7F3D0] dark:border-[rgba(16,185,129,0.35)] space-y-2">
                <div className="flex items-center justify-between border-b border-[#A7F3D0] dark:border-[rgba(16,185,129,0.35)] pb-2">
                  <span className="font-bold text-[#059669] dark:text-[#34D399] text-xs font-mono">Optimized JS Approach</span>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#059669] dark:text-[#34D399]">
                    <span>{ex.optimized.time} Time</span>
                    <span>|</span>
                    <span>{ex.optimized.space} Space</span>
                  </div>
                </div>
                <p className="text-xs text-[#0F172A] dark:text-[#F1F5F9]">{ex.optimized.explanation}</p>
                <CodeBlock code={ex.optimized.code} title="Optimized Solution" />
              </div>
            </div>

            <div className="p-3 rounded-md bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.12)] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)] text-xs sm:text-sm text-[#0F172A] dark:text-[#F1F5F9]">
              <span className="font-bold text-[#2563EB] dark:text-[#60A5FA] font-mono">Why Optimized Solution Works: </span>
              {ex.whyOptimizedWorks}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

