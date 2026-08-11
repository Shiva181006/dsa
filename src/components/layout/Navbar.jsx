import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Layers, Search, BookmarkCheck, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { useUserProgress } from '../../context/UserProgressContext';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { progress } = useUserProgress();
  const [searchQuery, setSearchQuery] = useState('');

  const solvedCount = Object.values(progress).filter(p => p.status === 'solved' || p.status === 'revision').length;
  const revisionCount = Object.values(progress).filter(p => p.status === 'revision').length;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/questions?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFFCF5] border-b border-[#DDD6C8] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-md bg-[#20251F] text-[#F5F1E8] flex items-center justify-center border border-[#20251F] group-hover:bg-[#C88719] group-hover:border-[#C88719] transition-colors">
            <Code2 className="w-5 h-5 text-[#FFFCF5]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold tracking-tight text-[#20251F] group-hover:text-[#C88719] transition-colors text-base font-sans">
              JS DSA<span className="text-[#C88719]">Prep</span>
            </span>
            <span className="text-[10px] text-[#687066] font-mono tracking-wider font-semibold">TECHNICAL NOTEBOOK</span>
          </div>
        </Link>

        {/* Primary Navigation */}
        <nav className="hidden md:flex items-center gap-1.5">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${location.pathname === '/' ? 'bg-[#FBF5E9] text-[#C88719] border border-[#E8CA94]' : 'text-[#687066] hover:text-[#20251F] hover:bg-[#EFE9DD]'}`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Curriculum
          </Link>

          <Link
            to="/topic/arrays"
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${location.pathname.includes('/topic/arrays') ? 'bg-[#FBF5E9] text-[#C88719] border border-[#E8CA94]' : 'text-[#687066] hover:text-[#20251F] hover:bg-[#EFE9DD]'}`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C88719]" />
            Arrays (Master Reference)
          </Link>

          <Link
            to="/questions"
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${location.pathname === '/questions' ? 'bg-[#FBF5E9] text-[#C88719] border border-[#E8CA94]' : 'text-[#687066] hover:text-[#20251F] hover:bg-[#EFE9DD]'}`}
          >
            <Layers className="w-3.5 h-3.5" />
            Question Explorer
          </Link>

          <Link
            to="/revision"
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${location.pathname === '/revision' ? 'bg-[#FBF5E9] text-[#C88719] border border-[#E8CA94]' : 'text-[#687066] hover:text-[#20251F] hover:bg-[#EFE9DD]'}`}
          >
            <BookmarkCheck className="w-3.5 h-3.5 text-[#A94F35]" />
            Revision
            {revisionCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 rounded-md bg-[#A94F35] text-[#FFFCF5] text-[10px] font-bold font-mono">
                {revisionCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Right Search & Stats */}
        <div className="flex items-center gap-3">
          <form onSubmit={handleSearchSubmit} className="relative hidden sm:block w-48 md:w-60">
            <input
              type="text"
              placeholder="Search problems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md bg-[#FFFCF5] border border-[#DDD6C8] text-[#20251F] placeholder-[#687066] focus:outline-none focus:border-[#C88719] font-sans transition-colors"
            />
            <Search className="w-3.5 h-3.5 text-[#687066] absolute left-2.5 top-2.5" />
          </form>

          {/* Solved Stats Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#F1F5F1] border border-[#BAC7BA] text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#526B52]" />
            <span className="text-[#687066]">Solved:</span>
            <span className="text-[#526B52] font-bold">{solvedCount}</span>
            <span className="text-[#687066]">/</span>
            <span className="text-[#687066]">60</span>
          </div>
        </div>
      </div>
    </header>
  );
}
