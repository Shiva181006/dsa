import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Star, Clock, Layers, ArrowLeft, Award, FileSearch, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { getTopicData } from '../data/topics';
import { ARRAYS_RESEARCH_REPORT } from '../data/topics/arraysResearchReport';
import { SectionIntro } from '../components/topic/SectionIntro';
import { SectionConcepts } from '../components/topic/SectionConcepts';
import { SectionJSMethods } from '../components/topic/SectionJSMethods';
import { SectionComplexity } from '../components/topic/SectionComplexity';
import { SectionVisuals } from '../components/topic/SectionVisuals';
import { SectionPatterns } from '../components/topic/SectionPatterns';
import { SectionExamples } from '../components/topic/SectionExamples';
import { SectionMistakes } from '../components/topic/SectionMistakes';
import { SectionCheatSheet } from '../components/topic/SectionCheatSheet';
import { SectionAuditReport } from '../components/topic/SectionAuditReport';
import { SectionQuestions } from '../components/topic/SectionQuestions';

export function TopicPage() {
  const { topicSlug } = useParams();
  const topicData = getTopicData(topicSlug || 'arrays');

  const [activeSection, setActiveSection] = useState('all');
  const [showAuditReport, setShowAuditReport] = useState(false);

  if (!topicData) {
    return (
      <div className="p-12 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-100">Topic Not Found</h2>
        <p className="text-slate-400 text-sm">The topic "{topicSlug}" is currently under active curriculum curation.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium text-xs">
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

  const report = topicSlug === 'arrays' || !topicSlug ? ARRAYS_RESEARCH_REPORT : null;

  return (
    <div className="space-y-12 pb-16">
      {/* Topic Header Hero */}
      <section className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 text-left space-y-4 shadow-xl">
        <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
          <Link to="/" className="hover:underline text-slate-400">Curriculum</Link>
          <span>/</span>
          <span className="text-indigo-300 font-semibold">{topicData.title}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              {topicData.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
              {topicData.description}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800 shrink-0 text-xs font-mono">
            <div>
              <span className="text-slate-500 block">ESTIMATED</span>
              <span className="text-slate-200 font-bold text-sm">{topicData.estimatedHours} Hours</span>
            </div>
            <div className="border-l border-slate-800 h-8"></div>
            <div>
              <span className="text-slate-500 block">QUESTIONS</span>
              <span className="text-indigo-400 font-bold text-sm">{topicData.questions?.length || 60} Problems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Section Navigation Toolbar */}
      <div className="sticky top-16 z-40 bg-slate-950/95 backdrop-blur-md py-3 border-b border-slate-800/80 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          {sectionsNav.map(nav => (
            <button
              key={nav.id}
              onClick={() => scrollToSection(nav.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${activeSection === nav.id ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'}`}
            >
              {nav.label}
            </button>
          ))}
        </div>
      </div>

      {/* 10 Topic Sections Render */}
      <div className="space-y-16">
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
