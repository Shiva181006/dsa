import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layers, Search, Filter, CheckCircle2 } from 'lucide-react';
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
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-extrabold text-slate-100 flex items-center gap-2">
          <Layers className="w-8 h-8 text-indigo-400" />
          Global Interview Question Explorer
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Search and filter across all curated DSA interview problems. Every question features working canonical links and optimal ES6+ JavaScript code solutions.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search problem title, pattern, company (e.g. Meta)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-950 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
          </div>

          <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
            {/* Difficulty Tabs */}
            {['All', 'Easy', 'Medium', 'Hard'].map(diff => (
              <button
                key={diff}
                onClick={() => setActiveDifficulty(diff)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${activeDifficulty === diff ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'}`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs pt-3 border-t border-slate-800">
          {/* Pattern dropdown */}
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-400">Pattern:</span>
            <select
              value={selectedPattern}
              onChange={(e) => setSelectedPattern(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-indigo-500"
            >
              <option value="All">All Patterns</option>
              {patterns.map(pat => (
                <option key={pat} value={pat}>{pat}</option>
              ))}
            </select>
          </div>

          {/* Status dropdown */}
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">Status:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-indigo-500"
            >
              <option value="All">All Statuses</option>
              <option value="unsolved">Unsolved</option>
              <option value="solved">Solved</option>
              <option value="revision">Needs Revision</option>
            </select>
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-1.5 ml-auto">
            <span className="text-slate-400">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-indigo-500"
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
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
        <span>Showing {filteredQuestions.length} of {allQuestions.length} Questions</span>
      </div>

      {/* Cards List */}
      <div className="space-y-4">
        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center rounded-xl bg-slate-900/50 border border-slate-800 text-slate-400 space-y-2">
            <p className="text-base font-semibold">No questions found matching your filter criteria.</p>
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
