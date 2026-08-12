import React from 'react';
import { Code2 } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';

export function SectionJSMethods({ jsImplementation }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#E2E8F0] dark:border-[#232D3F] pb-4">
        <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2">
          <Code2 className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
          SECTION 3 — JavaScript Implementation & Built-in Methods
        </h2>
        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
          Analysis of native JavaScript array methods, their underlying time complexities, and DSA usage rules.
        </p>
      </div>

      <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed bg-[#FFFFFF] dark:bg-[#151B26] p-4 rounded-md border border-[#E2E8F0] dark:border-[#232D3F] shadow-xs transition-colors">
        {jsImplementation.overview}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {jsImplementation.methods.map((m, idx) => (
          <div key={idx} className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-3 shadow-xs transition-colors">
            <div className="flex items-center justify-between gap-2 border-b border-[#E2E8F0] dark:border-[#232D3F] pb-2">
              <span className="font-mono text-xs font-bold text-[#2563EB] dark:text-[#60A5FA] bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] px-2.5 py-1 rounded border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)]">
                {m.method}
              </span>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[#059669] dark:text-[#34D399] font-semibold">{m.timeComplexity}</span>
                <span className="text-[#CBD5E1] dark:text-[#334155]">|</span>
                <span className="text-[#2563EB] dark:text-[#60A5FA]">{m.spaceComplexity}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#0F172A] dark:text-[#F1F5F9]">{m.description}</p>

            <div className="space-y-2 text-xs font-sans">
              <div className="p-2.5 rounded-md bg-[#ECFDF5] dark:bg-[rgba(16,185,129,0.1)] border border-[#A7F3D0] dark:border-[rgba(16,185,129,0.35)] text-[#0F172A] dark:text-[#F1F5F9]">
                <span className="font-bold text-[#059669] dark:text-[#34D399] font-mono block mb-0.5">DSA Use Case:</span>
                {m.dsaUseCase}
              </div>

              {m.avoidWhen && (
                <div className="p-2.5 rounded-md bg-[#FFF1F2] dark:bg-[rgba(244,63,94,0.1)] border border-[#FECDD3] dark:border-[rgba(244,63,94,0.35)] text-[#0F172A] dark:text-[#F1F5F9]">
                  <span className="font-bold text-[#E11D48] dark:text-[#FB7185] font-mono block mb-0.5">When to Avoid / Warning:</span>
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

