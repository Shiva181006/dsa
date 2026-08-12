import React from 'react';
import { Sparkles } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';

export function SectionExamples({ examples }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#E2E8F0] pb-4">
        <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#2563EB]" />
          SECTION 7 — Small Example Questions (Teaching Walkthroughs)
        </h2>
        <p className="text-xs text-[#64748B] mt-1">
          Conceptual walkthroughs illustrating Brute Force vs Optimized JavaScript thinking before practicing the 60 questions.
        </p>
      </div>

      <div className="space-y-8">
        {examples.map((ex, idx) => (
          <div key={idx} className="p-5 sm:p-6 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-4 shadow-xs">
            <div>
              <h3 className="text-base font-bold text-[#0F172A]">{ex.title}</h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1 bg-[#F1F5F9] p-3 rounded-md border border-[#E2E8F0]">
                <span className="font-bold text-[#2563EB] font-mono">Problem Statement: </span>
                {ex.problem}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Brute Force Column */}
              <div className="p-4 rounded-md bg-[#FFF1F2] border border-[#FECDD3] space-y-2">
                <div className="flex items-center justify-between border-b border-[#FECDD3] pb-2">
                  <span className="font-bold text-[#E11D48] text-xs font-mono">Brute Force Approach</span>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#E11D48]">
                    <span>{ex.bruteForce.time} Time</span>
                    <span>|</span>
                    <span>{ex.bruteForce.space} Space</span>
                  </div>
                </div>
                <p className="text-xs text-[#0F172A]">{ex.bruteForce.explanation}</p>
                <CodeBlock code={ex.bruteForce.code} title="Brute Force Solution" />
              </div>

              {/* Optimized Column */}
              <div className="p-4 rounded-md bg-[#ECFDF5] border border-[#A7F3D0] space-y-2">
                <div className="flex items-center justify-between border-b border-[#A7F3D0] pb-2">
                  <span className="font-bold text-[#059669] text-xs font-mono">Optimized JS Approach</span>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#059669]">
                    <span>{ex.optimized.time} Time</span>
                    <span>|</span>
                    <span>{ex.optimized.space} Space</span>
                  </div>
                </div>
                <p className="text-xs text-[#0F172A]">{ex.optimized.explanation}</p>
                <CodeBlock code={ex.optimized.code} title="Optimized Solution" />
              </div>
            </div>

            <div className="p-3 rounded-md bg-[#EFF6FF] border border-[#BFDBFE] text-xs sm:text-sm text-[#0F172A]">
              <span className="font-bold text-[#2563EB] font-mono">Why Optimized Solution Works: </span>
              {ex.whyOptimizedWorks}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
