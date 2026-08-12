import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, Bookmark, ArrowRight, Trophy, Layers, Compass } from 'lucide-react';
import { TOPICS, PHASES } from '../data/topicList';
import { useUserProgress } from '../context/UserProgressContext';

export function HomePage() {
  const { progress } = useUserProgress();

  const totalQuestions = 60; // Currently Arrays master reference has 60 curated questions
  const solvedCount = Object.values(progress).filter(p => p.status === 'solved' || p.status === 'revision').length;
  const revisionCount = Object.values(progress).filter(p => p.status === 'revision').length;

  return (
    <div className="space-y-10 pb-12">
      {/* Hero Section — Swiss / Dark Slate Panel */}
      <section className="relative rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] p-8 sm:p-10 text-left shadow-xs transition-colors">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)] text-xs font-mono text-[#2563EB] dark:text-[#60A5FA]">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
            <span>Structured DSA Textbook + Curated Interview Bank</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-[#F1F5F9] tracking-tight leading-tight">
            Master Data Structures & Algorithms using <span className="text-[#2563EB] dark:text-[#60A5FA]">JavaScript</span>
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
            Prepare for real-world software engineering technical interviews with a structured, topic-by-topic curriculum. Learn hardware concepts, native V8 JS method complexities, visual diagrams, reusable patterns, and solve curated canonical interview problems.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/topic/arrays"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#2563EB] dark:bg-[#3B82F6] hover:bg-[#1D4ED8] dark:hover:bg-[#2563EB] text-[#FFFFFF] font-semibold text-xs font-mono transition-colors shadow-xs"
            >
              <span>Study Arrays (Master Topic)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/questions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#F1F5F9] dark:bg-[#1C2433] hover:bg-[#E2E8F0] dark:hover:bg-[#2A3447] text-[#0F172A] dark:text-[#F1F5F9] font-semibold text-xs font-mono border border-[#CBD5E1] dark:border-[#334155] transition-colors"
            >
              <Layers className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
              <span>Browse 60 Question Bank</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Progress Dashboard Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
        <div className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-2 shadow-xs transition-colors">
          <div className="flex items-center justify-between text-[#64748B] dark:text-[#94A3B8] text-xs font-mono">
            <span>TOTAL SOLVED</span>
            <Trophy className="w-4 h-4 text-[#059669] dark:text-[#34D399]" />
          </div>
          <div className="flex items-baseline gap-2 font-mono">
            <span className="text-3xl font-extrabold text-[#0F172A] dark:text-[#F1F5F9]">{solvedCount}</span>
            <span className="text-[#64748B] dark:text-[#94A3B8] text-sm">/ {totalQuestions}</span>
          </div>
          <div className="w-full bg-[#F1F5F9] dark:bg-[#1C2433] h-2 rounded-full overflow-hidden mt-2 border border-[#E2E8F0] dark:border-[#232D3F]">
            <div
              className="bg-[#059669] dark:bg-[#10B981] h-full rounded-full transition-all duration-500"
              style={{ width: `${(solvedCount / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-2 shadow-xs transition-colors">
          <div className="flex items-center justify-between text-[#64748B] dark:text-[#94A3B8] text-xs font-mono">
            <span>REVISION FLAG LIST</span>
            <Bookmark className="w-4 h-4 text-[#E11D48] dark:text-[#FB7185]" />
          </div>
          <div className="font-mono">
            <span className="text-3xl font-extrabold text-[#0F172A] dark:text-[#F1F5F9]">{revisionCount}</span>
            <span className="text-[#64748B] dark:text-[#94A3B8] text-sm ml-2">Problems Flagged</span>
          </div>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">Review key problems before live interview calls.</p>
        </div>

        <div className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-2 shadow-xs transition-colors">
          <div className="flex items-center justify-between text-[#64748B] dark:text-[#94A3B8] text-xs font-mono">
            <span>LEARNING PATHWAY</span>
            <Compass className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA]" />
          </div>
          <div className="font-mono">
            <span className="text-3xl font-extrabold text-[#2563EB] dark:text-[#60A5FA]">6 Phases</span>
          </div>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">Step-by-step interview roadmap progression.</p>
        </div>
      </section>

      {/* Recommended Learning Path Roadmap */}
      <section className="space-y-5 text-left">
        <div className="border-b border-[#E2E8F0] dark:border-[#232D3F] pb-3">
          <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
            Recommended Curriculum Roadmap
          </h2>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
            Follow this structured progression for maximum technical interview preparation value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PHASES.map(phase => (
            <div key={phase.id} className="p-5 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-3 shadow-xs transition-colors">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#F1F5F9] dark:bg-[#1C2433] text-[#0F172A] dark:text-[#F1F5F9] border border-[#CBD5E1] dark:border-[#334155] text-xs font-mono font-bold flex items-center justify-center">
                  {phase.id}
                </span>
                <h3 className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9]">{phase.name}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {phase.topics.map(topicSlug => {
                  const t = TOPICS.find(top => top.slug === topicSlug);
                  return (
                    <Link
                      key={topicSlug}
                      to={`/topic/${topicSlug}`}
                      className={`px-2.5 py-1 rounded text-xs font-mono border transition-colors ${
                        topicSlug === 'arrays'
                          ? 'bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] text-[#2563EB] dark:text-[#60A5FA] border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)] font-semibold'
                          : 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#232D3F] hover:text-[#0F172A] dark:hover:text-[#F1F5F9]'
                      }`}
                    >
                      {t ? t.title : topicSlug}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Topics Dashboard Grid */}
      <section className="space-y-5 text-left">
        <div className="border-b border-[#E2E8F0] dark:border-[#232D3F] pb-3">
          <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
            DSA Topic Dashboard
          </h2>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
            Select a topic to open its full 10-section learning notebook and 60-question bank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map(topic => {
            const isArrays = topic.slug === 'arrays';
            return (
              <div
                key={topic.id}
                className={`p-5 rounded-md border flex flex-col justify-between transition-all bg-[#FFFFFF] dark:bg-[#151B26] shadow-xs ${
                  isArrays ? 'border-[#BFDBFE] dark:border-[rgba(59,130,246,0.5)] ring-1 ring-[#BFDBFE] dark:ring-[rgba(59,130,246,0.5)]' : 'border-[#E2E8F0] dark:border-[#232D3F]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F1F5F9] dark:bg-[#1C2433] text-[#0F172A] dark:text-[#F1F5F9] border border-[#E2E8F0] dark:border-[#232D3F]">
                      {topic.category}
                    </span>
                    {isArrays && (
                      <span className="px-2 py-0.5 rounded bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] text-[#2563EB] dark:text-[#60A5FA] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)] text-[10px] font-mono font-bold">
                        ★ REFERENCE TOPIC
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] dark:text-[#F1F5F9]">{topic.title}</h3>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed line-clamp-3">{topic.description}</p>

                  <div className="flex items-center gap-2 text-xs font-mono pt-2 border-t border-[#E2E8F0] dark:border-[#232D3F]">
                    <span className="text-[#059669] dark:text-[#34D399] font-semibold">{topic.easyCount} Easy</span>
                    <span className="text-[#CBD5E1] dark:text-[#334155]">•</span>
                    <span className="text-[#D97706] dark:text-[#FBBF24] font-semibold">{topic.mediumCount} Med</span>
                    <span className="text-[#CBD5E1] dark:text-[#334155]">•</span>
                    <span className="text-[#E11D48] dark:text-[#FB7185] font-semibold">{topic.hardCount} Hard</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E2E8F0] dark:border-[#232D3F] flex items-center justify-between gap-3">
                  <div className="text-xs font-mono text-[#64748B] dark:text-[#94A3B8]">
                    <span>{topic.totalQuestions} Questions</span>
                  </div>

                  <Link
                    to={`/topic/${topic.slug}`}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-semibold transition-all ${
                      isArrays
                        ? 'bg-[#2563EB] dark:bg-[#3B82F6] hover:bg-[#1D4ED8] dark:hover:bg-[#2563EB] text-[#FFFFFF] shadow-xs'
                        : 'bg-[#F1F5F9] dark:bg-[#1C2433] hover:bg-[#E2E8F0] dark:hover:bg-[#2A3447] text-[#0F172A] dark:text-[#F1F5F9] border border-[#CBD5E1] dark:border-[#334155]'
                    }`}
                  >
                    <span>{isArrays ? 'Study Topic' : 'View Topic'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

