import React from 'react';
import { Sparkles } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';

export function SectionExamples({ examples }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#DDD6C8] pb-4">
        <h2 className="text-xl font-bold text-[#20251F] flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#C88719]" />
          SECTION 7 — Small Example Questions (Teaching Walkthroughs)
        </h2>
        <p className="text-xs text-[#687066] mt-1">
          Conceptual walkthroughs illustrating Brute Force vs Optimized JavaScript thinking before practicing the 60 questions.
        </p>
      </div>

      <div className="space-y-8">
        {examples.map((ex, idx) => (
          <div key={idx} className="p-5 sm:p-6 rounded-md bg-[#FFFCF5] border border-[#DDD6C8] space-y-4">
            <div>
              <h3 className="text-base font-bold text-[#20251F]">{ex.title}</h3>
              <p className="text-xs sm:text-sm text-[#687066] mt-1 bg-[#EFE9DD] p-3 rounded-md border border-[#DDD6C8]">
                <span className="font-bold text-[#C88719] font-mono">Problem Statement: </span>
                {ex.problem}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Brute Force Column */}
              <div className="p-4 rounded-md bg-[#F9F1EF] border border-[#DFC2B8] space-y-2">
                <div className="flex items-center justify-between border-b border-[#DFC2B8] pb-2">
                  <span className="font-bold text-[#A94F35] text-xs font-mono">Brute Force Approach</span>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#A94F35]">
                    <span>{ex.bruteForce.time} Time</span>
                    <span>|</span>
                    <span>{ex.bruteForce.space} Space</span>
                  </div>
                </div>
                <p className="text-xs text-[#20251F]">{ex.bruteForce.explanation}</p>
                <CodeBlock code={ex.bruteForce.code} title="Brute Force Solution" />
              </div>

              {/* Optimized Column */}
              <div className="p-4 rounded-md bg-[#F1F5F1] border border-[#BAC7BA] space-y-2">
                <div className="flex items-center justify-between border-b border-[#BAC7BA] pb-2">
                  <span className="font-bold text-[#526B52] text-xs font-mono">Optimized JS Approach</span>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#526B52]">
                    <span>{ex.optimized.time} Time</span>
                    <span>|</span>
                    <span>{ex.optimized.space} Space</span>
                  </div>
                </div>
                <p className="text-xs text-[#20251F]">{ex.optimized.explanation}</p>
                <CodeBlock code={ex.optimized.code} title="Optimized Solution" />
              </div>
            </div>

            <div className="p-3 rounded-md bg-[#FBF5E9] border border-[#E8CA94] text-xs sm:text-sm text-[#20251F]">
              <span className="font-bold text-[#C88719] font-mono">Why Optimized Solution Works: </span>
              {ex.whyOptimizedWorks}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
