import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getTopicData } from '../data/topics';
import { SectionIntro } from '../components/topic/SectionIntro';
import { SectionConcepts } from '../components/topic/SectionConcepts';
import { SectionJSMethods } from '../components/topic/SectionJSMethods';
import { SectionComplexity } from '../components/topic/SectionComplexity';
import { SectionVisuals } from '../components/topic/SectionVisuals';
import { SectionPatterns } from '../components/topic/SectionPatterns';
import { SectionExamples } from '../components/topic/SectionExamples';
import { SectionMistakes } from '../components/topic/SectionMistakes';
import { SectionCheatSheet } from '../components/topic/SectionCheatSheet';
import { SectionQuestions } from '../components/topic/SectionQuestions';

export function TopicPage() {
  const { topicSlug } = useParams();
  const topicData = getTopicData(topicSlug || 'arrays');

  const [activeSection, setActiveSection] = useState('sec-1');

  if (!topicData) {
    return (
      <div className="p-12 text-center space-y-4">
        <h2 className="text-2xl font-bold text-[#0F172A] dark:text-[#F1F5F9]">Topic Not Found</h2>
        <p className="text-[#64748B] dark:text-[#94A3B8] text-sm">The topic "{topicSlug}" is currently under active curriculum curation.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#2563EB] dark:bg-[#3B82F6] hover:bg-[#1D4ED8] dark:hover:bg-[#2563EB] text-[#FFFFFF] font-mono font-medium text-xs shadow-xs">
          <ArrowLeft className="w-4 h-4" /> Back to Curriculum Dashboard
        </Link>
      </div>
    );
  }

  const sectionsNav = [
    { id: 'sec-1', label: '1. Intro' },
    { id: 'sec-2', label: '2. Core Concepts' },
    { id: 'sec-3', label: '3. JS Methods' },
    { id: 'sec-4', label: '4. Complexity' },
    { id: 'sec-5', label: '5. Visuals' },
    { id: 'sec-6', label: '6. Patterns' },
    { id: 'sec-7', label: '7. Examples' },
    { id: 'sec-8', label: '8. Common Pitfalls' },
    { id: 'sec-9', label: '9. Cheat Sheet' },
    { id: 'sec-10', label: '10. Selected 60 Problems' }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Topic Header Hero */}
      <section className="rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] p-6 sm:p-8 text-left space-y-4 shadow-xs transition-colors">
        <div className="flex items-center gap-2 text-xs font-mono text-[#64748B] dark:text-[#94A3B8]">
          <Link to="/" className="hover:underline text-[#64748B] dark:text-[#94A3B8]">Curriculum</Link>
          <span>/</span>
          <span className="text-[#2563EB] dark:text-[#60A5FA] font-semibold">{topicData.title}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-[#F1F5F9] tracking-tight">
              {topicData.title}
            </h1>
            <p className="text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] mt-2 max-w-3xl leading-relaxed">
              {topicData.description}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-[#F1F5F9] dark:bg-[#1C2433] p-4 rounded-md border border-[#E2E8F0] dark:border-[#232D3F] shrink-0 text-xs font-mono">
            <div>
              <span className="text-[#64748B] dark:text-[#94A3B8] block">ESTIMATED</span>
              <span className="text-[#0F172A] dark:text-[#F1F5F9] font-bold text-sm">{topicData.estimatedHours} Hours</span>
            </div>
            <div className="border-l border-[#E2E8F0] dark:border-[#232D3F] h-8"></div>
            <div>
              <span className="text-[#64748B] dark:text-[#94A3B8] block">QUESTIONS</span>
              <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold text-sm">{topicData.questions?.length || 60} Problems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Section Navigation Toolbar */}
      <div className="sticky top-16 z-40 bg-[#FFFFFF]/95 dark:bg-[#151B26]/95 backdrop-blur-md py-3 border-b border-[#E2E8F0] dark:border-[#232D3F] -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 overflow-x-auto scrollbar-none transition-colors">
        <div className="flex items-center gap-2 min-w-max">
          {sectionsNav.map(nav => (
            <button
              key={nav.id}
              onClick={() => scrollToSection(nav.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-mono font-semibold transition-all cursor-pointer ${
                activeSection === nav.id
                  ? 'bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] text-[#2563EB] dark:text-[#60A5FA] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)]'
                  : 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F1F5F9] border border-[#E2E8F0] dark:border-[#232D3F]'
              }`}
            >
              {nav.label}
            </button>
          ))}
        </div>
      </div>

      {/* 10 Topic Sections Render */}
      <div className="space-y-14">
        <div id="sec-1" className="scroll-mt-32">
          <SectionIntro intro={topicData.introduction} weight={topicData.interviewWeight} />
        </div>

        <div id="sec-2" className="scroll-mt-32">
          <SectionConcepts concepts={topicData.coreConcepts} />
        </div>

        <div id="sec-3" className="scroll-mt-32">
          <SectionJSMethods jsImplementation={topicData.jsImplementation} />
        </div>

        <div id="sec-4" className="scroll-mt-32">
          <SectionComplexity matrix={topicData.complexityMatrix} />
        </div>

        <div id="sec-5" className="scroll-mt-32">
          <SectionVisuals visuals={topicData.visualExplanations} />
        </div>

        <div id="sec-6" className="scroll-mt-32">
          <SectionPatterns patterns={topicData.patterns} />
        </div>

        <div id="sec-7" className="scroll-mt-32">
          <SectionExamples examples={topicData.teachingExamples} />
        </div>

        <div id="sec-8" className="scroll-mt-32">
          <SectionMistakes mistakes={topicData.commonMistakes} />
        </div>

        <div id="sec-9" className="scroll-mt-32">
          <SectionCheatSheet cheatSheet={topicData.cheatSheet} />
        </div>

        <div id="sec-10" className="scroll-mt-32">
          <SectionQuestions questions={topicData.questions || []} topicTitle={topicData.title} />
        </div>
      </div>
    </div>
  );
}

