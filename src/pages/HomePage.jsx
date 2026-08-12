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
      {/* Hero Section — Swiss Slate Panel */}
      <section className="relative rounded-md bg-[#FFFFFF] border border-[#E2E8F0] p-8 sm:p-10 text-left shadow-xs">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF6FF] border border-[#BFDBFE] text-xs font-mono text-[#2563EB]">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Structured DSA Textbook + Curated Interview Bank</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            Master Data Structures & Algorithms using <span className="text-[#2563EB]">JavaScript</span>
          </h1>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            Prepare for real-world software engineering technical interviews with a structured, topic-by-topic curriculum. Learn hardware concepts, native V8 JS method complexities, visual diagrams, reusable patterns, and solve curated canonical interview problems.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/topic/arrays"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#2563EB] hover:bg-[#1D4ED8] text-[#FFFFFF] font-semibold text-xs font-mono transition-colors shadow-xs"
            >
              <span>Study Arrays (Master Topic)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/questions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] font-semibold text-xs font-mono border border-[#CBD5E1] transition-colors"
            >
              <Layers className="w-4 h-4 text-[#2563EB]" />
              <span>Browse 60 Question Bank</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Progress Dashboard Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
        <div className="p-5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-2 shadow-xs">
          <div className="flex items-center justify-between text-[#64748B] text-xs font-mono">
            <span>TOTAL SOLVED</span>
            <Trophy className="w-4 h-4 text-[#059669]" />
          </div>
          <div className="flex items-baseline gap-2 font-mono">
            <span className="text-3xl font-extrabold text-[#0F172A]">{solvedCount}</span>
            <span className="text-[#64748B] text-sm">/ {totalQuestions}</span>
          </div>
          <div className="w-full bg-[#F1F5F9] h-2 rounded-full overflow-hidden mt-2 border border-[#E2E8F0]">
            <div
              className="bg-[#059669] h-full rounded-full transition-all duration-500"
              style={{ width: `${(solvedCount / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="p-5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-2 shadow-xs">
          <div className="flex items-center justify-between text-[#64748B] text-xs font-mono">
            <span>REVISION FLAG LIST</span>
            <Bookmark className="w-4 h-4 text-[#E11D48]" />
          </div>
          <div className="font-mono">
            <span className="text-3xl font-extrabold text-[#0F172A]">{revisionCount}</span>
            <span className="text-[#64748B] text-sm ml-2">Problems Flagged</span>
          </div>
          <p className="text-xs text-[#64748B]">Review key problems before live interview calls.</p>
        </div>

        <div className="p-5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-2 shadow-xs">
          <div className="flex items-center justify-between text-[#64748B] text-xs font-mono">
            <span>LEARNING PATHWAY</span>
            <Compass className="w-4 h-4 text-[#2563EB]" />
          </div>
          <div className="font-mono">
            <span className="text-3xl font-extrabold text-[#2563EB]">6 Phases</span>
          </div>
          <p className="text-xs text-[#64748B]">Step-by-step interview roadmap progression.</p>
        </div>
      </section>

      {/* Recommended Learning Path Roadmap */}
      <section className="space-y-5 text-left">
        <div className="border-b border-[#E2E8F0] pb-3">
          <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#2563EB]" />
            Recommended Curriculum Roadmap
          </h2>
          <p className="text-xs text-[#64748B] mt-1">
            Follow this structured progression for maximum technical interview preparation value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PHASES.map(phase => (
            <div key={phase.id} className="p-5 rounded-md bg-[#FFFFFF] border border-[#E2E8F0] space-y-3 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-[#F1F5F9] text-[#0F172A] border border-[#CBD5E1] text-xs font-mono font-bold flex items-center justify-center">
                  {phase.id}
                </span>
                <h3 className="text-sm font-bold text-[#0F172A]">{phase.name}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {phase.topics.map(topicSlug => {
                  const t = TOPICS.find(top => top.slug === topicSlug);
                  return (
                    <Link
                      key={topicSlug}
                      to={`/topic/${topicSlug}`}
                      className={`px-2.5 py-1 rounded text-xs font-mono border transition-colors ${topicSlug === 'arrays' ? 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE] font-semibold' : 'bg-[#F1F5F9] text-[#64748B] border-[#E2E8F0] hover:text-[#0F172A]'}`}
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
        <div className="border-b border-[#E2E8F0] pb-3">
          <h2 className="text-xl font-bold text-[#0F172A] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#2563EB]" />
            DSA Topic Dashboard
          </h2>
          <p className="text-xs text-[#64748B] mt-1">
            Select a topic to open its full 10-section learning notebook and 60-question bank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOPICS.map(topic => {
            const isArrays = topic.slug === 'arrays';
            return (
              <div
                key={topic.id}
                className={`p-5 rounded-md border flex flex-col justify-between transition-all bg-[#FFFFFF] shadow-xs ${isArrays ? 'border-[#BFDBFE] ring-1 ring-[#BFDBFE]' : 'border-[#E2E8F0]'}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0]">
                      {topic.category}
                    </span>
                    {isArrays && (
                      <span className="px-2 py-0.5 rounded bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] text-[10px] font-mono font-bold">
                        ★ REFERENCE TOPIC
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A]">{topic.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-3">{topic.description}</p>

                  <div className="flex items-center gap-2 text-xs font-mono pt-2 border-t border-[#E2E8F0]">
                    <span className="text-[#059669] font-semibold">{topic.easyCount} Easy</span>
                    <span className="text-[#CBD5E1]">•</span>
                    <span className="text-[#D97706] font-semibold">{topic.mediumCount} Med</span>
                    <span className="text-[#CBD5E1]">•</span>
                    <span className="text-[#E11D48] font-semibold">{topic.hardCount} Hard</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex items-center justify-between gap-3">
                  <div className="text-xs font-mono text-[#64748B]">
                    <span>{topic.totalQuestions} Questions</span>
                  </div>

                  <Link
                    to={`/topic/${topic.slug}`}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-semibold transition-all ${isArrays ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-[#FFFFFF] shadow-xs' : 'bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] border border-[#CBD5E1]'}`}
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
