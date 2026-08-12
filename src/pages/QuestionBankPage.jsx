import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layers, Search, Filter } from 'lucide-react';
import { getAllQuestions } from '../data/topics';
import { QuestionCard } from '../components/question/QuestionCard';
import { useUserProgress } from '../context/UserProgressContext';

export function QuestionBankPage() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const { progress } = useUserProgress();
  const allQuestions = getAllQuestions();

  const [activeDifficulty, setActiveDifficulty] = useState('All');
  const [selectedPattern, setSelectedPattern] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortBy, setSortBy] = useState('importance');

  // Extract unique patterns  
  const patterns = useMemo(() => {
    const set = new Set();
    allQuestions.forEach(q => {
      if (q.pattern) set.add(q.pattern);
    });
    return Array.from(set).sort();
  }, [allQuestions]);

  // Filter & Sort
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter(q => {
      const qState = progress[q.id]?.status || 'unsolved';

      if (activeDifficulty !== 'All' && q.difficulty !== activeDifficulty) return false;
      if (selectedPattern !== 'All' && q.pattern !== selectedPattern) return false;

      if (selectedStatus === 'solved' && qState !== 'solved' && qState !== 'revision') return false;
      if (selectedStatus === 'unsolved' && qState !== 'unsolved') return false;
      if (selectedStatus === 'revision' && qState !== 'revision') return false;

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
      if (sortBy === 'importance') return b.importance - a.importance;
      if (sortBy === 'frequency') return b.interviewFrequency - a.interviewFrequency;
      if (sortBy === 'difficulty') {
        const diffOrder = { Easy: 1, Medium: 2, Hard: 3 };
        return diffOrder[a.difficulty] - diffOrder[b.difficulty];
      }
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [allQuestions, activeDifficulty, selectedPattern, selectedStatus, searchQuery, sortBy, progress]);

  return (
    <div className="space-y-8 pb-16 text-left">
      {/* Header */}
      <div className="border-b border-[#E2E8F0] dark:border-[#232D3F] pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2 tracking-tight">
          <Layers className="w-7 h-7 text-[#2563EB] dark:text-[#60A5FA]" />
          Global Interview Question Explorer
        </h1>
        <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] mt-1">
          Search and filter across all curated DSA interview problems. Every question features canonical links and optimal ES6+ JavaScript code solutions.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] space-y-4 shadow-xs transition-colors">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search problem title, pattern, company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-md bg-[#F8FAFC] dark:bg-[#0B0E14] border border-[#E2E8F0] dark:border-[#232D3F] text-[#0F172A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] dark:focus:border-[#3B82F6] font-sans"
            />
            <Search className="w-4 h-4 text-[#64748B] dark:text-[#94A3B8] absolute left-3 top-2.5" />
          </div>

          <div className="flex items-center gap-2 flex-wrap w-full md:w-auto font-mono">
            {/* Difficulty Tabs */}
            {[
              { id: 'All', label: 'All', style: activeDifficulty === 'All' ? 'bg-[#2563EB] dark:bg-[#3B82F6] text-[#FFFFFF] border-[#2563EB] dark:border-[#3B82F6]' : 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#232D3F]' },
              { id: 'Easy', label: 'Easy', style: activeDifficulty === 'Easy' ? 'bg-[#059669] dark:bg-[#10B981] text-[#FFFFFF] border-[#059669] dark:border-[#10B981]' : 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#232D3F]' },
              { id: 'Medium', label: 'Medium', style: activeDifficulty === 'Medium' ? 'bg-[#D97706] dark:bg-[#F59E0B] text-[#FFFFFF] border-[#D97706] dark:border-[#F59E0B]' : 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#232D3F]' },
              { id: 'Hard', label: 'Hard', style: activeDifficulty === 'Hard' ? 'bg-[#E11D48] dark:bg-[#F43F5E] text-[#FFFFFF] border-[#E11D48] dark:border-[#F43F5E]' : 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#232D3F]' }
            ].map(diff => (
              <button
                key={diff.id}
                onClick={() => setActiveDifficulty(diff.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-all cursor-pointer ${diff.style}`}
              >
                {diff.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs pt-3 border-t border-[#E2E8F0] dark:border-[#232D3F] font-mono">
          {/* Pattern dropdown */}
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#64748B] dark:text-[#94A3B8]" />
            <span className="text-[#64748B] dark:text-[#94A3B8]">Pattern:</span>
            <select
              value={selectedPattern}
              onChange={(e) => setSelectedPattern(e.target.value)}
              className="bg-[#FFFFFF] dark:bg-[#0B0E14] border border-[#CBD5E1] dark:border-[#334155] text-[#0F172A] dark:text-[#F1F5F9] rounded-md px-2.5 py-1.5 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#3B82F6]"
            >
              <option value="All">All Patterns</option>
              {patterns.map(pat => (
                <option key={pat} value={pat}>{pat}</option>
              ))}
            </select>
          </div>

          {/* Status dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="text-[#64748B] dark:text-[#94A3B8]">Status:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-[#FFFFFF] dark:bg-[#0B0E14] border border-[#CBD5E1] dark:border-[#334155] text-[#0F172A] dark:text-[#F1F5F9] rounded-md px-2.5 py-1.5 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#3B82F6]"
            >
              <option value="All">All Statuses</option>
              <option value="unsolved">Unsolved</option>
              <option value="solved">Solved</option>
              <option value="revision">Needs Revision</option>
            </select>
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-1.5 sm:ml-auto">
            <span className="text-[#64748B] dark:text-[#94A3B8]">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FFFFFF] dark:bg-[#0B0E14] border border-[#CBD5E1] dark:border-[#334155] text-[#0F172A] dark:text-[#F1F5F9] rounded-md px-2.5 py-1.5 focus:outline-none focus:border-[#2563EB] dark:focus:border-[#3B82F6]"
            >
              <option value="importance">Interview Importance</option>
              <option value="frequency">Interview Frequency</option>
              <option value="difficulty">Difficulty Level</option>
              <option value="title">Alphabetical Title</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs font-mono text-[#64748B] dark:text-[#94A3B8] px-1">
        <span>Showing {filteredQuestions.length} of {allQuestions.length} Questions</span>
      </div>

      {/* Cards List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="p-10 text-center rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] text-[#64748B] dark:text-[#94A3B8] space-y-2 shadow-xs transition-colors">
            <p className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9]">No questions found matching your filter criteria.</p>
            <p className="text-xs">Try clearing your search query or setting filters to "All".</p>
          </div>
        ) : (
          filteredQuestions.map(q => (
            <QuestionCard key={q.id} question={q} />
          ))
        )}
      </div>
    </div>
  );
}

