import React from 'react';
import { Bookmark, Sparkles, Check, Zap, HelpCircle } from 'lucide-react';

export function SectionCheatSheet({ cheatSheet }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#E2E8F0] dark:border-[#232D3F] pb-4">
        <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
          SECTION 9 — Interview Revision Cheat Sheet
        </h2>
        <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
          Quick formulas, recognition triggers, and JS pro-tips to review 10 minutes before your live interview.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Formulas */}
        <div className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-3 shadow-xs transition-colors">
          <h3 className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2 font-mono">
            <Zap className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
            Important Formulas
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A] dark:text-[#F1F5F9] font-mono">
            {cheatSheet.formulas.map((form, idx) => (
              <li key={idx} className="p-2 rounded bg-[#F1F5F9] dark:bg-[#1C2433] border border-[#E2E8F0] dark:border-[#232D3F]">
                {form}
              </li>
            ))}
          </ul>
        </div>

        {/* Recognition Triggers */}
        <div className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-3 shadow-xs transition-colors">
          <h3 className="text-sm font-bold text-[#2563EB] dark:text-[#60A5FA] flex items-center gap-2 font-mono">
            <Sparkles className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
            Pattern Recognition Clues
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A] dark:text-[#F1F5F9]">
            {cheatSheet.recognitionTriggers.map((trig, idx) => (
              <li key={idx} className="flex items-start gap-2 p-2 rounded bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.12)] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)]">
                <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">•</span>
                <span>{trig}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* JS Pro Tips */}
        <div className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-3 shadow-xs transition-colors">
          <h3 className="text-sm font-bold text-[#059669] dark:text-[#34D399] flex items-center gap-2 font-mono">
            <Check className="w-4 h-4 text-[#059669] dark:text-[#34D399]" />
            Useful JavaScript Pro-Tips
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A] dark:text-[#F1F5F9] font-mono">
            {cheatSheet.jsProTips.map((tip, idx) => (
              <li key={idx} className="p-2 rounded bg-[#ECFDF5] dark:bg-[rgba(16,185,129,0.1)] border border-[#A7F3D0] dark:border-[rgba(16,185,129,0.35)] text-[#059669] dark:text-[#34D399]">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Edge Cases to Test */}
        <div className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-3 shadow-xs transition-colors">
          <h3 className="text-sm font-bold text-[#E11D48] dark:text-[#FB7185] flex items-center gap-2 font-mono">
            <HelpCircle className="w-4 h-4 text-[#E11D48] dark:text-[#FB7185]" />
            Common Edge Cases to Test
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {cheatSheet.edgeCasesToTest.map((ec, idx) => (
              <div key={idx} className="p-2 rounded bg-[#FFF1F2] dark:bg-[rgba(244,63,94,0.1)] border border-[#FECDD3] dark:border-[rgba(244,63,94,0.35)] text-[#E11D48] dark:text-[#FB7185] text-center font-bold">
                {ec}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

