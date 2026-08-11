import React from 'react';
import { BookOpen, CheckCircle, AlertTriangle, Cpu, Star } from 'lucide-react';

export function SectionIntro({ intro, weight }) {
  return (
    <section className="space-y-6 text-left">
      <div className="flex items-center justify-between gap-4 border-b border-[#DDD6C8] pb-4">
        <div>
          <h2 className="text-xl font-bold text-[#20251F] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#C88719]" />
            SECTION 1 — Topic Introduction
          </h2>
          <p className="text-xs text-[#687066] mt-1">
            Understanding Arrays from hardware memory representation to JavaScript engine optimizations.
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#FBF5E9] border border-[#E8CA94] text-xs font-mono">
          <Star className="w-4 h-4 text-[#C88719] fill-[#C88719]" />
          <span className="text-[#687066]">Interview Weight:</span>
          <span className="text-[#C88719] font-bold">{weight}/5 Stars</span>
        </div>
      </div>

      {/* Grid: What is it & Why it exists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 rounded-md bg-[#FFFCF5] border border-[#DDD6C8] space-y-2">
          <h3 className="text-sm font-bold text-[#20251F] flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#C88719]"></span>
            What is an Array?
          </h3>
          <p className="text-xs sm:text-sm text-[#687066] leading-relaxed">
            {intro.whatIsIt}
          </p>
        </div>

        <div className="p-5 rounded-md bg-[#FFFCF5] border border-[#DDD6C8] space-y-2">
          <h3 className="text-sm font-bold text-[#20251F] flex items-center gap-2 font-mono">
            <Cpu className="w-4 h-4 text-[#C88719]" />
            Why does it exist in Hardware?
          </h3>
          <p className="text-xs sm:text-sm text-[#687066] leading-relaxed">
            {intro.whyExists}
          </p>
        </div>
      </div>

      {/* Grid: When to Use vs When NOT to Use */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 rounded-md bg-[#F1F5F1] border border-[#BAC7BA] space-y-3">
          <h3 className="text-sm font-bold text-[#526B52] flex items-center gap-2 font-mono">
            <CheckCircle className="w-4 h-4 text-[#526B52]" />
            When should we use Arrays?
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#20251F]">
            {intro.whenToUse.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#526B52] font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 rounded-md bg-[#F9F1EF] border border-[#DFC2B8] space-y-3">
          <h3 className="text-sm font-bold text-[#A94F35] flex items-center gap-2 font-mono">
            <AlertTriangle className="w-4 h-4 text-[#A94F35]" />
            When should we NOT use Arrays?
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#20251F]">
            {intro.whenNotToUse.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#A94F35] font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Real World Use Cases */}
      <div className="p-5 rounded-md bg-[#FFFCF5] border border-[#DDD6C8] space-y-3">
        <h3 className="text-sm font-bold text-[#20251F] font-mono">
          Real-World JavaScript Use Cases
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {intro.realWorldUseCases.map((useCase, idx) => (
            <div key={idx} className="p-3 rounded-md bg-[#EFE9DD] border border-[#DDD6C8] text-[#20251F] font-sans">
              {useCase}
            </div>
          ))}
        </div>
      </div>

      {/* Interview Relevance */}
      <div className="p-5 rounded-md bg-[#FBF5E9] border border-[#E8CA94] space-y-2">
        <h3 className="text-sm font-bold text-[#C88719] font-mono">
          Why this Topic is Critical for Coding Interviews
        </h3>
        <p className="text-xs sm:text-sm text-[#20251F] leading-relaxed">
          {intro.interviewRelevance}
        </p>
      </div>
    </section>
  );
}
