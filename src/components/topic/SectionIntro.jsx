import React from 'react';
import { BookOpen, CheckCircle, AlertTriangle, Cpu, Star } from 'lucide-react';

export function SectionIntro({ intro, weight }) {
  return (
    <section className="space-y-6 text-left">
      <div className="flex items-center justify-between gap-4 border-b border-[#E2E8F0] pb-4">
        <div>
          <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#2563EB]" />
            SECTION 1 — Topic Introduction
          </h2>
          <p className="text-xs text-[#64748B] mt-1">
            Understanding Arrays from hardware memory representation to JavaScript engine optimizations.
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-mono">
          <Star className="w-4 h-4 text-[#2563EB] fill-[#2563EB]" />
          <span className="text-[#64748B]">Interview Weight:</span>
          <span className="text-[#2563EB] font-bold">{weight}/5 Stars</span>
        </div>
      </div>

      {/* Grid: What is it & Why it exists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-2 shadow-xs">
          <h3 className="text-sm font-bold text-[#0F172A] flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
            What is an Array?
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            {intro.whatIsIt}
          </p>
        </div>

        <div className="p-5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-2 shadow-xs">
          <h3 className="text-sm font-bold text-[#0F172A] flex items-center gap-2 font-mono">
            <Cpu className="w-4 h-4 text-[#2563EB]" />
            Why does it exist in Hardware?
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            {intro.whyExists}
          </p>
        </div>
      </div>

      {/* Grid: When to Use vs When NOT to Use */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 rounded-md bg-[#ECFDF5] border border-[#A7F3D0] space-y-3">
          <h3 className="text-sm font-bold text-[#059669] flex items-center gap-2 font-mono">
            <CheckCircle className="w-4 h-4 text-[#059669]" />
            When should we use Arrays?
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A]">
            {intro.whenToUse.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#059669] font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 rounded-md bg-[#FFF1F2] border border-[#FECDD3] space-y-3">
          <h3 className="text-sm font-bold text-[#E11D48] flex items-center gap-2 font-mono">
            <AlertTriangle className="w-4 h-4 text-[#E11D48]" />
            When should we NOT use Arrays?
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A]">
            {intro.whenNotToUse.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#E11D48] font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Real World Use Cases */}
      <div className="p-5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-3 shadow-xs">
        <h3 className="text-sm font-bold text-[#0F172A] font-mono">
          Real-World JavaScript Use Cases
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {intro.realWorldUseCases.map((useCase, idx) => (
            <div key={idx} className="p-3 rounded-md bg-[#F1F5F9] border border-[#E2E8F0] text-[#0F172A] font-sans">
              {useCase}
            </div>
          ))}
        </div>
      </div>

      {/* Interview Relevance */}
      <div className="p-5 rounded-md bg-[#EFF6FF] border border-[#BFDBFE] space-y-2">
        <h3 className="text-sm font-bold text-[#2563EB] font-mono">
          Why this Topic is Critical for Coding Interviews
        </h3>
        <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed">
          {intro.interviewRelevance}
        </p>
      </div>
    </section>
  );
}
