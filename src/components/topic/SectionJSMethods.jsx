import React from 'react';
import { Code2 } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';

export function SectionJSMethods({ jsImplementation }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#E2E8F0] pb-4">
        <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
          <Code2 className="w-5 h-5 text-[#2563EB]" />
          SECTION 3 — JavaScript Implementation & Built-in Methods
        </h2>
        <p className="text-xs text-[#64748B] mt-1">
          Analysis of native JavaScript array methods, their underlying time complexities, and DSA usage rules.
        </p>
      </div>

      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed bg-[#FFFFFF] p-4 rounded-md border border-[#E2E8F0] shadow-xs">
        {jsImplementation.overview}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {jsImplementation.methods.map((m, idx) => (
          <div key={idx} className="p-5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-3 shadow-xs">
            <div className="flex items-center justify-between gap-2 border-b border-[#E2E8F0] pb-2">
              <span className="font-mono text-xs font-bold text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded border border-[#BFDBFE]">
                {m.method}
              </span>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[#059669] font-semibold">{m.timeComplexity}</span>
                <span className="text-[#CBD5E1]">|</span>
                <span className="text-[#2563EB]">{m.spaceComplexity}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#0F172A]">{m.description}</p>

            <div className="space-y-2 text-xs font-sans">
              <div className="p-2.5 rounded-md bg-[#ECFDF5] border border-[#A7F3D0] text-[#0F172A]">
                <span className="font-bold text-[#059669] font-mono block mb-0.5">DSA Use Case:</span>
                {m.dsaUseCase}
              </div>

              {m.avoidWhen && (
                <div className="p-2.5 rounded-md bg-[#FFF1F2] border border-[#FECDD3] text-[#0F172A]">
                  <span className="font-bold text-[#E11D48] font-mono block mb-0.5">When to Avoid / Warning:</span>
                  {m.avoidWhen}
                </div>
              )}
            </div>

            {m.codeExample && (
              <CodeBlock code={m.codeExample} title="JS Example" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
