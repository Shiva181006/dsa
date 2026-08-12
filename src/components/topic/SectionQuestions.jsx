import React, { useState, useMemo } from 'react';
import { Layers, Search, Filter, CheckCircle2 } from 'lucide-react';
import { QuestionCard } from '../question/QuestionCard';
import { useUserProgress } from '../../context/UserProgressContext';

export function SectionQuestions({ questions }) {
  const { progress } = useUserProgress();
  const [activeTab, setActiveTab] = useState('All');
  const [selectedPattern, setSelectedPattern] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('order');

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

      if (activeTab === 'Easy' && q.difficulty !== 'Easy') return false;
      if (activeTab === 'Medium' && q.difficulty !== 'Medium') return false;
      if (activeTab === 'Hard' && q.difficulty !== 'Hard') return false;
      if (activeTab === 'Solved' && qState !== 'solved' && qState !== 'revision') return false;
      if (activeTab === 'Revision' && qState !== 'revision') return false;

      if (selectedPattern !== 'All' && q.pattern !== selectedPattern) return false;

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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E2E8F0] dark:border-[#232D3F] pb-4">
        <div>
          <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#2563EB] dark:text-[#60A5FA]" />
            SECTION 10 — Curated 60 Selected Problems & Patterns
          </h2>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1">
            Carefully structured learning progression across Easy (20), Medium (20), and Hard (20) interview problems.
          </p>
        </div>

        {/* Progress Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#ECFDF5] dark:bg-[rgba(16,185,129,0.15)] border border-[#A7F3D0] dark:border-[rgba(16,185,129,0.35)] text-xs font-mono">
          <CheckCircle2 className="w-4 h-4 text-[#059669] dark:text-[#34D399]" />
          <span className="text-[#64748B] dark:text-[#94A3B8]">Topic Progress:</span>
          <span className="text-[#059669] dark:text-[#34D399] font-bold">{solvedCount} / {questions.length}</span>
          <span className="text-[#64748B] dark:text-[#94A3B8]">({Math.round((solvedCount / questions.length) * 100)}%)</span>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#E2E8F0] dark:border-[#232D3F] pb-3 font-mono">
        {[
          { id: 'All', label: `All 60 Problems`, style: activeTab === 'All' ? 'bg-[#2563EB] dark:bg-[#3B82F6] text-[#FFFFFF] border-[#2563EB] dark:border-[#3B82F6]' : 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#232D3F]' },
          { id: 'Easy', label: `Easy (${easyCount})`, style: activeTab === 'Easy' ? 'bg-[#059669] dark:bg-[#10B981] text-[#FFFFFF] border-[#059669] dark:border-[#10B981]' : 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#232D3F]' },
          { id: 'Medium', label: `Medium (${mediumCount})`, style: activeTab === 'Medium' ? 'bg-[#D97706] dark:bg-[#F59E0B] text-[#FFFFFF] border-[#D97706] dark:border-[#F59E0B]' : 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#232D3F]' },
          { id: 'Hard', label: `Hard (${hardCount})`, style: activeTab === 'Hard' ? 'bg-[#E11D48] dark:bg-[#F43F5E] text-[#FFFFFF] border-[#E11D48] dark:border-[#F43F5E]' : 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#232D3F]' },
          { id: 'Solved', label: `Solved (${solvedCount})`, style: activeTab === 'Solved' ? 'bg-[#059669] dark:bg-[#10B981] text-[#FFFFFF] border-[#059669] dark:border-[#10B981]' : 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#232D3F]' },
          { id: 'Revision', label: `Needs Revision (${revisionCount})`, style: activeTab === 'Revision' ? 'bg-[#E11D48] dark:bg-[#F43F5E] text-[#FFFFFF] border-[#E11D48] dark:border-[#F43F5E]' : 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#232D3F]' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-all cursor-pointer ${tab.style}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filter & Search Toolbar */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-3 bg-[#FFFFFF] dark:bg-[#151B26] p-3.5 rounded-md border border-[#E2E8F0] dark:border-[#232D3F] text-xs shadow-xs font-mono transition-colors">
        {/* Search */}
        <div className="relative w-full lg:w-72 font-sans">
          <input
            type="text"
            placeholder="Search problems, patterns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-md bg-[#F8FAFC] dark:bg-[#0B0E14] border border-[#E2E8F0] dark:border-[#232D3F] text-[#0F172A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] dark:focus:border-[#3B82F6] text-xs"
          />
          <Search className="w-3.5 h-3.5 text-[#64748B] dark:text-[#94A3B8] absolute left-2.5 top-2.5" />
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
          {/* Pattern Dropdown Filter */}
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
            <span className="text-[#64748B] dark:text-[#94A3B8]">Pattern:</span>
            <select
              value={selectedPattern}
              onChange={(e) => setSelectedPattern(e.target.value)}
              className="bg-[#FFFFFF] dark:bg-[#0B0E14] border border-[#CBD5E1] dark:border-[#334155] text-[#0F172A] dark:text-[#F1F5F9] rounded-md px-2.5 py-1.5 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#3B82F6] font-medium"
            >
              <option value="All">All Patterns ({patterns.length})</option>
              {patterns.map(pat => (
                <option key={pat} value={pat}>{pat}</option>
              ))}
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5 sm:ml-auto">
            <span className="text-[#64748B] dark:text-[#94A3B8]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FFFFFF] dark:bg-[#0B0E14] border border-[#CBD5E1] dark:border-[#334155] text-[#0F172A] dark:text-[#F1F5F9] rounded-md px-2.5 py-1.5 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#3B82F6]"
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
          <div className="p-10 text-center rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] text-[#64748B] dark:text-[#94A3B8] space-y-2 shadow-xs transition-colors">
            <p className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9]">No questions match your selected pattern or search filter.</p>
            <p className="text-xs">Try clearing your search query or setting Pattern Filter to "All Patterns".</p>
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

