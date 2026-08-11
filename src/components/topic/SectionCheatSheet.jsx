import React from 'react';
import { Bookmark, Sparkles, Check, Zap, HelpCircle } from 'lucide-react';

export function SectionCheatSheet({ cheatSheet }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-[#DDD6C8] pb-4">
        <h2 className="text-xl font-bold text-[#20251F] flex items-center gap-2">
          <Bookmark className="w-5 h-5 text-[#C88719]" />
          SECTION 9 — Interview Revision Cheat Sheet
        </h2>
        <p className="text-xs text-[#687066] mt-1">
          Quick formulas, recognition triggers, and JS pro-tips to review 10 minutes before your live interview.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Formulas */}
        <div className="p-5 rounded-md bg-[#FFFCF5] border border-[#DDD6C8] space-y-3">
          <h3 className="text-sm font-bold text-[#20251F] flex items-center gap-2 font-mono">
            <Zap className="w-4 h-4 text-[#C88719]" />
            Important Formulas
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#20251F] font-mono">
            {cheatSheet.formulas.map((form, idx) => (
              <li key={idx} className="p-2 rounded bg-[#EFE9DD] border border-[#DDD6C8]">
                {form}
              </li>
            ))}
          </ul>
        </div>

        {/* Recognition Triggers */}
        <div className="p-5 rounded-md bg-[#FFFCF5] border border-[#DDD6C8] space-y-3">
          <h3 className="text-sm font-bold text-[#C88719] flex items-center gap-2 font-mono">
            <Sparkles className="w-4 h-4 text-[#C88719]" />
            Pattern Recognition Clues
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#20251F]">
            {cheatSheet.recognitionTriggers.map((trig, idx) => (
              <li key={idx} className="flex items-start gap-2 p-2 rounded bg-[#FBF5E9] border border-[#E8CA94]">
                <span className="text-[#C88719] font-bold">•</span>
                <span>{trig}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* JS Pro Tips */}
        <div className="p-5 rounded-md bg-[#FFFCF5] border border-[#DDD6C8] space-y-3">
          <h3 className="text-sm font-bold text-[#526B52] flex items-center gap-2 font-mono">
            <Check className="w-4 h-4 text-[#526B52]" />
            Useful JavaScript Pro-Tips
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#20251F] font-mono">
            {cheatSheet.jsProTips.map((tip, idx) => (
              <li key={idx} className="p-2 rounded bg-[#F1F5F1] border border-[#BAC7BA] text-[#526B52]">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Edge Cases to Test */}
        <div className="p-5 rounded-md bg-[#FFFCF5] border border-[#DDD6C8] space-y-3">
          <h3 className="text-sm font-bold text-[#A94F35] flex items-center gap-2 font-mono">
            <HelpCircle className="w-4 h-4 text-[#A94F35]" />
            Common Edge Cases to Test
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {cheatSheet.edgeCasesToTest.map((ec, idx) => (
              <div key={idx} className="p-2 rounded bg-[#F9F1EF] border border-[#DFC2B8] text-[#A94F35] text-center font-bold">
                {ec}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
