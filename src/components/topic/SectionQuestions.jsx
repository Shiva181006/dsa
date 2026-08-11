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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#DDD6C8] pb-4">
        <div>
          <h2 className="text-xl font-bold text-[#20251F] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#C88719]" />
            SECTION 10 — Curated 60 Selected Problems & Patterns
          </h2>
          <p className="text-xs text-[#687066] mt-1">
            Carefully structured learning progression across Easy (20), Medium (20), and Hard (20) interview problems.
          </p>
        </div>

        {/* Progress Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F1F5F1] border border-[#BAC7BA] text-xs font-mono">
          <CheckCircle2 className="w-4 h-4 text-[#526B52]" />
          <span className="text-[#687066]">Topic Progress:</span>
          <span className="text-[#526B52] font-bold">{solvedCount} / {questions.length}</span>
          <span className="text-[#687066]">({Math.round((solvedCount / questions.length) * 100)}%)</span>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#DDD6C8] pb-3 font-mono">
        {[
          { id: 'All', label: `All 60 Problems`, style: activeTab === 'All' ? 'bg-[#C88719] text-[#FFFCF5] border-[#C88719]' : 'bg-[#EFE9DD] text-[#687066] border-[#DDD6C8]' },
          { id: 'Easy', label: `Easy (${easyCount})`, style: activeTab === 'Easy' ? 'bg-[#526B52] text-[#FFFCF5] border-[#526B52]' : 'bg-[#EFE9DD] text-[#687066] border-[#DDD6C8]' },
          { id: 'Medium', label: `Medium (${mediumCount})`, style: activeTab === 'Medium' ? 'bg-[#C88719] text-[#FFFCF5] border-[#C88719]' : 'bg-[#EFE9DD] text-[#687066] border-[#DDD6C8]' },
          { id: 'Hard', label: `Hard (${hardCount})`, style: activeTab === 'Hard' ? 'bg-[#A94F35] text-[#FFFCF5] border-[#A94F35]' : 'bg-[#EFE9DD] text-[#687066] border-[#DDD6C8]' },
          { id: 'Solved', label: `Solved (${solvedCount})`, style: activeTab === 'Solved' ? 'bg-[#526B52] text-[#FFFCF5] border-[#526B52]' : 'bg-[#EFE9DD] text-[#687066] border-[#DDD6C8]' },
          { id: 'Revision', label: `Needs Revision (${revisionCount})`, style: activeTab === 'Revision' ? 'bg-[#A94F35] text-[#FFFCF5] border-[#A94F35]' : 'bg-[#EFE9DD] text-[#687066] border-[#DDD6C8]' }
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
      <div className="flex flex-col lg:flex-row items-center justify-between gap-3 bg-[#FFFCF5] p-3.5 rounded-md border border-[#DDD6C8] text-xs shadow-xs font-mono">
        {/* Search */}
        <div className="relative w-full lg:w-72 font-sans">
          <input
            type="text"
            placeholder="Search problems, patterns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-md bg-[#FFFCF5] border border-[#DDD6C8] text-[#20251F] placeholder-[#687066] focus:outline-none focus:border-[#C88719] text-xs"
          />
          <Search className="w-3.5 h-3.5 text-[#687066] absolute left-2.5 top-2.5" />
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
          {/* Pattern Dropdown Filter */}
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#C88719]" />
            <span className="text-[#687066]">Pattern:</span>
            <select
              value={selectedPattern}
              onChange={(e) => setSelectedPattern(e.target.value)}
              className="bg-[#FFFCF5] border border-[#DDD6C8] text-[#20251F] rounded-md px-2.5 py-1.5 focus:outline-none focus:border-[#C88719] font-medium"
            >
              <option value="All">All Patterns ({patterns.length})</option>
              {patterns.map(pat => (
                <option key={pat} value={pat}>{pat}</option>
              ))}
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-1.5 sm:ml-auto">
            <span className="text-[#687066]">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FFFCF5] border border-[#DDD6C8] text-[#20251F] rounded-md px-2.5 py-1.5 focus:outline-none focus:border-[#C88719]"
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
          <div className="p-10 text-center rounded-md bg-[#FFFCF5] border border-[#DDD6C8] text-[#687066] space-y-2">
            <p className="text-sm font-bold text-[#20251F]">No questions match your selected pattern or search filter.</p>
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
