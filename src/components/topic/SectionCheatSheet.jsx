import React from 'react';
import { Bookmark, Sparkles, Check, Zap, HelpCircle } from 'lucide-react';

export function SectionCheatSheet({ cheatSheet }) {
  return (
    <section className="space-y-6 text-left">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
          <Bookmark className="w-6 h-6 text-indigo-400" />
          SECTION 9 — Interview Revision Cheat Sheet
        </h2>
        <p className="text-sm text-slate-400 mt-1">
          Quick formulas, recognition triggers, and JS pro-tips to review 10 minutes before your live interview.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Formulas */}
        <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
          <h3 className="text-base font-bold text-indigo-300 flex items-center gap-2">
            <Zap className="w-4 h-4 text-indigo-400" />
            Important Formulas
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
            {cheatSheet.formulas.map((form, idx) => (
              <li key={idx} className="p-2 rounded bg-slate-950 border border-slate-800">
                {form}
              </li>
            ))}
          </ul>
        </div>

        {/* Recognition Triggers */}
        <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
          <h3 className="text-base font-bold text-amber-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Pattern Recognition Clues
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {cheatSheet.recognitionTriggers.map((trig, idx) => (
              <li key={idx} className="flex items-start gap-2 p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-amber-400 font-bold">•</span>
                <span>{trig}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* JS Pro Tips */}
        <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
          <h3 className="text-base font-bold text-emerald-400 flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            Useful JavaScript Pro-Tips
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-mono">
            {cheatSheet.jsProTips.map((tip, idx) => (
              <li key={idx} className="p-2 rounded bg-slate-950 border border-slate-800 text-emerald-300">
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Edge Cases to Test */}
        <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
          <h3 className="text-base font-bold text-rose-300 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-rose-400" />
            Common Edge Cases to Test
          </h3>
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            {cheatSheet.edgeCasesToTest.map((ec, idx) => (
              <div key={idx} className="p-2 rounded bg-slate-950 border border-slate-800 text-rose-300 text-center">
                {ec}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
