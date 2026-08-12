import React from 'react';
import { Bookmark, Sparkles, Check, Zap, HelpCircle } from 'lucide-react';

export function SectionCheatSheet({ cheatSheet }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#E2E8F0] pb-4">
        <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-[#2563EB]" />
          SECTION 9 — Interview Revision Cheat Sheet
        </h2>
        <p className="text-xs text-[#64748B] mt-1">
          Quick formulas, recognition triggers, and JS pro-tips to review 10 minutes before your live interview.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Formulas */}
        <div className="p-5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-3 shadow-xs">
          <h3 className="text-sm font-bold text-[#0F172A] flex items-center gap-2 font-mono">
            <Zap className="w-4 h-4 text-[#2563EB]" />
            Important Formulas
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A] font-mono">
            {cheatSheet.formulas.map((form, idx) => (
              <li key={idx} className="p-2 rounded bg-[#F1F5F9] border border-[#E2E8F0]">
                {form}
              </li>
            ))}
          </ul>
        </div>

        {/* Recognition Triggers */}
        <div className="p-5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-3 shadow-xs">
          <h3 className="text-sm font-bold text-[#2563EB] flex items-center gap-2 font-mono">
            <Sparkles className="w-4 h-4 text-[#2563EB]" />
            Pattern Recognition Clues
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A]">
            {cheatSheet.recognitionTriggers.map((trig, idx) => (
              <li key={idx} className="flex items-start gap-2 p-2 rounded bg-[#EFF6FF] border border-[#BFDBFE]">
                <span className="text-[#2563EB] font-bold">•</span>
                <span>{trig}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* JS Pro Tips */}
        <div className="p-5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-3 shadow-xs">
          <h3 className="text-sm font-bold text-[#059669] flex items-center gap-2 font-mono">
            <Check className="w-4 h-4 text-[#059669]" />
            Useful JavaScript Pro-Tips
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A] font-mono">
            {cheatSheet.jsProTips.map((tip, idx) => (
              <li key={idx} className="p-2 rounded bg-[#ECFDF5] border border-[#A7F3D0] text-[#059669]">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Edge Cases to Test */}
        <div className="p-5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-3 shadow-xs">
          <h3 className="text-sm font-bold text-[#E11D48] flex items-center gap-2 font-mono">
            <HelpCircle className="w-4 h-4 text-[#E11D48]" />
            Common Edge Cases to Test
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {cheatSheet.edgeCasesToTest.map((ec, idx) => (
              <div key={idx} className="p-2 rounded bg-[#FFF1F2] border border-[#FECDD3] text-[#E11D48] text-center font-bold">
                {ec}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
