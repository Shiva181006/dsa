import React from 'react';
import { Code2 } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';

export function SectionJSMethods({ jsImplementation }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#DDD6C8] pb-4">
        <h2 className="text-xl font-bold text-[#20251F] flex items-center gap-2">
          <Code2 className="w-5 h-5 text-[#C88719]" />
          SECTION 3 — JavaScript Implementation & Built-in Methods
        </h2>
        <p className="text-xs text-[#687066] mt-1">
          Analysis of native JavaScript array methods, their underlying time complexities, and DSA usage rules.
        </p>
      </div>

      <p className="text-xs sm:text-sm text-[#687066] leading-relaxed bg-[#FFFCF5] p-4 rounded-md border border-[#DDD6C8]">
        {jsImplementation.overview}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {jsImplementation.methods.map((m, idx) => (
          <div key={idx} className="p-5 rounded-md bg-[#FFFCF5] border border-[#DDD6C8] space-y-3">
            <div className="flex items-center justify-between gap-2 border-b border-[#DDD6C8] pb-2">
              <span className="font-mono text-xs font-bold text-[#C88719] bg-[#FBF5E9] px-2.5 py-1 rounded border border-[#E8CA94]">
                {m.method}
              </span>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="text-[#526B52] font-semibold">{m.timeComplexity}</span>
                <span className="text-[#DDD6C8]">|</span>
                <span className="text-[#C88719]">{m.spaceComplexity}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#20251F]">{m.description}</p>

            <div className="space-y-2 text-xs font-sans">
              <div className="p-2.5 rounded-md bg-[#F1F5F1] border border-[#BAC7BA] text-[#20251F]">
                <span className="font-bold text-[#526B52] font-mono block mb-0.5">DSA Use Case:</span>
                {m.dsaUseCase}
              </div>

              {m.avoidWhen && (
                <div className="p-2.5 rounded-md bg-[#F9F1EF] border border-[#DFC2B8] text-[#20251F]">
                  <span className="font-bold text-[#A94F35] font-mono block mb-0.5">When to Avoid / Warning:</span>
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
