import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Layers, Search, BookmarkCheck, Code2, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';
import { TOPICS } from '../../data/topicList';
import { useUserProgress } from '../../context/UserProgressContext';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { progress } = useUserProgress();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const solvedCount = Object.values(progress).filter(p => p.status === 'solved' || p.status === 'revision').length;
  const revisionCount = Object.values(progress).filter(p => p.status === 'revision').length;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/questions?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 text-slate-100 font-bold text-lg hover:text-indigo-400 transition-colors group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-indigo-400 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold tracking-tight text-slate-100 group-hover:text-indigo-400 transition-colors">
              JS DSA<span className="text-indigo-400">Prep</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider">ENGINEERING INTERVIEW HUB</span>
          </div>
        </Link>

        {/* Quick Topic Jump Dropdown */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${location.pathname === '/' ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900'}`}
          >
            <BookOpen className="w-4 h-4" />
            Curriculum
          </Link>

          <Link
            to="/topic/arrays"
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${location.pathname.includes('/topic/arrays') ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900'}`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            Arrays (Master Reference)
          </Link>

          <Link
            to="/questions"
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${location.pathname === '/questions' ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900'}`}
          >
            <Layers className="w-4 h-4" />
            Question Explorer
          </Link>

          <Link
            to="/revision"
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 relative ${location.pathname === '/revision' ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' : 'text-slate-300 hover:text-slate-100 hover:bg-slate-900'}`}
          >
            <BookmarkCheck className="w-4 h-4 text-indigo-400" />
            Revision
            {revisionCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 rounded-full bg-indigo-500 text-slate-950 text-[10px] font-bold">
                {revisionCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Right Search & Stats */}
        <div className="flex items-center gap-3">
          <form onSubmit={handleSearchSubmit} className="relative hidden sm:block w-48 md:w-64">
            <input
              type="text"
              placeholder="Search problems, patterns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-2.5" />
          </form>

          {/* Solved Stats Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-slate-300">Solved:</span>
            <span className="text-emerald-400 font-bold">{solvedCount}</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">60</span>
          </div>
        </div>
      </div>
    </header>
  );
}
