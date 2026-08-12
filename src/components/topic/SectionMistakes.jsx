import React from 'react';
import { AlertOctagon, XCircle } from 'lucide-react';
import { CodeBlock } from '../ui/CodeBlock';

export function SectionMistakes({ mistakes }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#E2E8F0] pb-4">
        <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
          <AlertOctagon className="w-5 h-5 text-[#E11D48]" />
          SECTION 8 — Common JavaScript Pitfalls & Beginner Mistakes
        </h2>
        <p className="text-xs text-[#64748B] mt-1">
          JavaScript array gotchas that ruin live coding interviews and how to prevent them.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {mistakes.map((m, idx) => (
          <div key={idx} className="p-5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-3 flex flex-col justify-between shadow-xs">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#E11D48] flex items-center gap-2 font-mono">
                <XCircle className="w-4 h-4 text-[#E11D48] shrink-0" />
                {m.mistake}
              </h3>
              <div className="text-xs sm:text-sm text-[#0F172A] space-y-2">
                <p className="text-[#64748B]">
                  <span className="font-semibold text-[#0F172A]">Why It Happens: </span>
                  {m.whyItHappens}
                </p>
                <div className="p-3 rounded-md bg-[#ECFDF5] border border-[#A7F3D0] text-[#0F172A]">
                  <span className="font-bold text-[#059669] font-mono block mb-0.5">How to Avoid:</span>
                  {m.howToAvoid}
                </div>
              </div>
            </div>

            {m.codeSnippet && (
              <CodeBlock code={m.codeSnippet} title="Comparison Code" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
