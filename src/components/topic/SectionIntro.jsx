import React from 'react';
import { BookOpen, CheckCircle, AlertTriangle, Cpu, Star } from 'lucide-react';

export function SectionIntro({ intro, weight }) {
  return (
    <section className="space-y-6 text-left">
      <div className="flex items-center justify-between gap-4 border-b border-[#E2E8F0] dark:border-[#232D3F] pb-4">
        <div>
          <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
            SECTION 1 — Topic Introduction
          </h2>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
            Understanding Arrays from hardware memory representation to JavaScript engine optimizations.
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)] text-xs font-mono">
          <Star className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA] fill-[#2563EB] dark:fill-[#60A5FA]" />
          <span className="text-[#64748B] dark:text-[#94A3B8]">Interview Weight:</span>
          <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">{weight}/5 Stars</span>
        </div>
      </div>

      {/* Grid: What is it & Why it exists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-2 shadow-xs transition-colors">
          <h3 className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] dark:bg-[#3B82F6]"></span>
            What is an Array?
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
            {intro.whatIsIt}
          </p>
        </div>

        <div className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-2 shadow-xs transition-colors">
          <h3 className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2 font-mono">
            <Cpu className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
            Why does it exist in Hardware?
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
            {intro.whyExists}
          </p>
        </div>
      </div>

      {/* Grid: When to Use vs When NOT to Use */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-5 rounded-md bg-[#ECFDF5] dark:bg-[rgba(16,185,129,0.1)] border border-[#A7F3D0] dark:border-[rgba(16,185,129,0.35)] space-y-3 transition-colors">
          <h3 className="text-sm font-bold text-[#059669] dark:text-[#34D399] flex items-center gap-2 font-mono">
            <CheckCircle className="w-4 h-4 text-[#059669] dark:text-[#34D399]" />
            When should we use Arrays?
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A] dark:text-[#F1F5F9]">
            {intro.whenToUse.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#059669] dark:text-[#34D399] font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 rounded-md bg-[#FFF1F2] dark:bg-[rgba(244,63,94,0.1)] border border-[#FECDD3] dark:border-[rgba(244,63,94,0.35)] space-y-3 transition-colors">
          <h3 className="text-sm font-bold text-[#E11D48] dark:text-[#FB7185] flex items-center gap-2 font-mono">
            <AlertTriangle className="w-4 h-4 text-[#E11D48] dark:text-[#FB7185]" />
            When should we NOT use Arrays?
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#0F172A] dark:text-[#F1F5F9]">
            {intro.whenNotToUse.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#E11D48] dark:text-[#FB7185] font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Real World Use Cases */}
      <div className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-3 shadow-xs transition-colors">
        <h3 className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9] font-mono">
          Real-World JavaScript Use Cases
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {intro.realWorldUseCases.map((useCase, idx) => (
            <div key={idx} className="p-3 rounded-md bg-[#F1F5F9] dark:bg-[#1C2433] border border-[#E2E8F0] dark:border-[#232D3F] text-[#0F172A] dark:text-[#F1F5F9] font-sans">
              {useCase}
            </div>
          ))}
        </div>
      </div>

      {/* Interview Relevance */}
      <div className="p-5 rounded-md bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.12)] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)] space-y-2 transition-colors">
        <h3 className="text-sm font-bold text-[#2563EB] dark:text-[#60A5FA] font-mono">
          Why this Topic is Critical for Coding Interviews
        </h3>
        <p className="text-xs sm:text-sm text-[#0F172A] dark:text-[#F1F5F9] leading-relaxed">
          {intro.interviewRelevance}
        </p>
      </div>
    </section>
  );
}

