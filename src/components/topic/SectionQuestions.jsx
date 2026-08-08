import React, { useState, useMemo } from 'react';
import { Layers, Search, Filter, CheckCircle2, Award } from 'lucide-react';
import { QuestionCard } from '../question/QuestionCard';
import { useUserProgress } from '../../context/UserProgressContext';

export function SectionQuestions({ questions, topicTitle }) {
  const { progress } = useUserProgress();
  const [activeTab, setActiveTab] = useState('All'); // 'All' | 'Easy' | 'Medium' | 'Hard' | 'Solved' | 'Revision'
  const [selectedPattern, setSelectedPattern] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('order'); // 'order' | 'title' | 'importance' | 'frequency'

  // Extract unique patterns
  const patterns = useMemo(() => {
    const set = new Set();
    questions.forEach(q => {
      if (q.pattern) set.add(q.pattern);
    });
    return Array.from(set).sort();
  }, [questions]);

  // Counts
  const easyCount = questions.filter(q => q.difficulty === 'Easy').length;
  const mediumCount = questions.filter(q => q.difficulty === 'Medium').length;
  const hardCount = questions.filter(q => q.difficulty === 'Hard').length;
  const solvedCount = questions.filter(q => progress[q.id]?.status === 'solved' || progress[q.id]?.status === 'revision').length;
  const revisionCount = questions.filter(q => progress[q.id]?.status === 'revision').length;

  // Filter & Sort Logic
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const qState = progress[q.id]?.status || 'unsolved';

      // Tab Filter
      if (activeTab === 'Easy' && q.difficulty !== 'Easy') return false;
      if (activeTab === 'Medium' && q.difficulty !== 'Medium') return false;
      if (activeTab === 'Hard' && q.difficulty !== 'Hard') return false;
      if (activeTab === 'Solved' && qState !== 'solved' && qState !== 'revision') return false;
      if (activeTab === 'Revision' && qState !== 'revision') return false;

      // Pattern Filter
      if (selectedPattern !== 'All' && q.pattern !== selectedPattern) return false;

      // Search Query Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = q.title.toLowerCase().includes(query);
        const matchesPattern = q.pattern?.toLowerCase().includes(query);
        const matchesSubtopic = q.subtopic?.toLowerCase().includes(query);
        const matchesCompany = q.companies?.some(c => c.toLowerCase().includes(query));
        if (!matchesTitle && !matchesPattern && !matchesSubtopic && !matchesCompany) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'order') return a.learningOrder - b.learningOrder;
      if (sortBy === 'importance') return b.importance - a.importance;
      if (sortBy === 'frequency') return b.interviewFrequency - a.interviewFrequency;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [questions, activeTab, selectedPattern, searchQuery, sortBy, progress]);

  return (
    <section className="space-y-6 text-left" id="question-bank">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <Layers className="w-6 h-6 text-indigo-400" />
            Curated 60 Selected Problems & Algorithmic Patterns
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Carefully structured learning progression across Easy (20), Medium (20), and Hard (20) interview problems.
          </p>
        </div>

        {/* Progress Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="text-slate-300">Topic Progress:</span>
          <span className="text-emerald-400 font-bold">{solvedCount} / {questions.length}</span>
          <span className="text-slate-400">({Math.round((solvedCount / questions.length) * 100)}%)</span>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        {[
          { id: 'All', label: `All 60 Problems` },
          { id: 'Easy', label: `Easy (${easyCount})` },
          { id: 'Medium', label: `Medium (${mediumCount})` },
          { id: 'Hard', label: `Hard (${hardCount})` },
          { id: 'Solved', label: `Solved (${solvedCount})` },
          { id: 'Revision', label: `Needs Revision (${revisionCount})` }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${activeTab === tab.id ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 text-xs">
        {/* Search */}
        <div className="relative w-full lg:w-72">
          <input
            type="text"
            placeholder="Search problems, patterns, companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
          {/* Pattern Dropdown Filter */}
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-slate-300 font-medium">Filter Pattern:</span>
            <select
              value={selectedPattern}
              onChange={(e) => setSelectedPattern(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-indigo-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-indigo-500 font-medium"
            >
              <option value="All">All Patterns ({patterns.length})</option>
              {patterns.map(pat => (
                <option key={pat} value={pat}>{pat}</option>
              ))}
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-indigo-500"
            >
              <option value="order">Learning Order (#1 to #60)</option>
              <option value="importance">Interview Importance</option>
              <option value="frequency">Interview Frequency</option>
              <option value="title">Alphabetical Title</option>
            </select>
          </div>
        </div>
      </div>

      {/* Question Cards List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-slate-900/50 border border-slate-800 text-slate-400 space-y-2">
            <p className="text-base font-semibold">No questions match your selected pattern or search filter.</p>
            <p className="text-xs text-slate-500">Try clearing your search query or setting Pattern Filter to "All Patterns".</p>
          </div>
        ) : (
          filteredQuestions.map(q => (
            <QuestionCard key={q.id} question={q} />
          ))
        )}
      </div>
    </section>
  );
}
