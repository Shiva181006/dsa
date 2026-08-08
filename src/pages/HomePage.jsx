import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Sparkles, CheckCircle2, Bookmark, ArrowRight, Trophy, Code2, Layers, Cpu, Compass } from 'lucide-react';
import { TOPICS, PHASES } from '../data/topicList';
import { useUserProgress } from '../context/UserProgressContext';

export function HomePage() {
  const { progress } = useUserProgress();

  const totalQuestions = 60; // Currently Arrays master reference has 60 curated questions
  const solvedCount = Object.values(progress).filter(p => p.status === 'solved' || p.status === 'revision').length;
  const revisionCount = Object.values(progress).filter(p => p.status === 'revision').length;

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 text-left shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/80 text-xs font-mono text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Structured DSA Textbook + Curated Interview Bank</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            Master Data Structures & Algorithms using <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-300 to-amber-300">JavaScript</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Prepare for real-world software engineering technical interviews with a structured, topic-by-topic curriculum. Learn hardware concepts, native V8 JS method complexities, visual diagrams, reusable patterns, and solve curated canonical interview problems.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/topic/arrays"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 transition-all hover:scale-105"
            >
              <span>Study Arrays (Master Topic)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/questions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors"
            >
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Browse 60 Question Bank</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Progress Dashboard Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
        <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>TOTAL SOLVED</span>
            <Trophy className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex items-baseline gap-2 font-mono">
            <span className="text-3xl font-extrabold text-slate-100">{solvedCount}</span>
            <span className="text-slate-500 text-sm">/ {totalQuestions}</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
            <div
              className="bg-emerald-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${(solvedCount / totalQuestions) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>REVISION FLAG LIST</span>
            <Bookmark className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="font-mono">
            <span className="text-3xl font-extrabold text-slate-100">{revisionCount}</span>
            <span className="text-slate-500 text-sm ml-2">Problems Flagged</span>
          </div>
          <p className="text-xs text-slate-400">Review key problems before live interview calls.</p>
        </div>

        <div className="p-6 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>LEARNING PATHWAY</span>
            <Compass className="w-4 h-4 text-amber-400" />
          </div>
          <div className="font-mono">
            <span className="text-3xl font-extrabold text-indigo-400">6 Phases</span>
          </div>
          <p className="text-xs text-slate-400">Step-by-step interview roadmap progression.</p>
        </div>
      </section>

      {/* Recommended Learning Path Roadmap */}
      <section className="space-y-6 text-left">
        <div className="border-b border-slate-800 pb-3">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <Compass className="w-6 h-6 text-indigo-400" />
            Recommended Curriculum Roadmap
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Follow this order for maximum interview preparation value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PHASES.map(phase => (
            <div key={phase.id} className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-indigo-950 text-indigo-400 border border-indigo-800 text-xs font-mono font-bold flex items-center justify-center">
                  {phase.id}
                </span>
                <h3 className="text-sm font-bold text-slate-200">{phase.name}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {phase.topics.map(topicSlug => {
                  const t = TOPICS.find(top => top.slug === topicSlug);
                  return (
                    <Link
                      key={topicSlug}
                      to={`/topic/${topicSlug}`}
                      className={`px-2.5 py-1 rounded text-xs font-medium border transition-colors ${topicSlug === 'arrays' ? 'bg-indigo-950 text-indigo-300 border-indigo-700 hover:bg-indigo-900' : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'}`}
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
      <section className="space-y-6 text-left">
        <div className="border-b border-slate-800 pb-3">
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-400" />
            DSA Topic Dashboard
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Select a topic to open its full 10-section learning page and 60-question bank.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOPICS.map(topic => {
            const isArrays = topic.slug === 'arrays';
            return (
              <div
                key={topic.id}
                className={`p-6 rounded-xl border flex flex-col justify-between transition-all ${isArrays ? 'bg-slate-900/90 border-indigo-500/40 shadow-xl shadow-indigo-950/30' : 'bg-slate-900/40 border-slate-800/80 opacity-80 hover:opacity-100'}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-indigo-950 text-indigo-300 border border-indigo-800">
                      {topic.category}
                    </span>
                    {isArrays && (
                      <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800 text-[10px] font-bold">
                        ★ REFERENCE TOPIC
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-slate-100">{topic.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{topic.description}</p>

                  <div className="flex items-center gap-2 text-xs font-mono pt-2 border-t border-slate-800/60">
                    <span className="text-emerald-400 font-semibold">{topic.easyCount} Easy</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-amber-400 font-semibold">{topic.mediumCount} Med</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-rose-400 font-semibold">{topic.hardCount} Hard</span>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <div className="text-xs font-mono text-slate-400">
                    <span>{topic.totalQuestions} Questions</span>
                  </div>

                  <Link
                    to={`/topic/${topic.slug}`}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${isArrays ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'}`}
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
