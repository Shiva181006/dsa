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
    <header className="sticky top-0 z-50 bg-[#FFFFFF] border-b border-[#E2E8F0] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-md bg-[#0F172A] text-[#F8FAFC] flex items-center justify-center border border-[#0F172A] group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-colors shadow-xs">
            <Code2 className="w-5 h-5 text-[#FFFFFF]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold tracking-tight text-[#0F172A] group-hover:text-[#2563EB] transition-colors text-base font-sans">
              JS DSA<span className="text-[#2563EB]">Prep</span>
            </span>
            <span className="text-[10px] text-[#64748B] font-mono tracking-wider font-semibold">TECHNICAL NOTEBOOK</span>
          </div>
        </Link>

        {/* Primary Navigation */}
        <nav className="hidden md:flex items-center gap-1.5">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${location.pathname === '/' ? 'bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]' : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]'}`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Curriculum
          </Link>

          <Link
            to="/topic/arrays"
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${location.pathname.includes('/topic/arrays') ? 'bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]' : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]'}`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            Arrays (Master Reference)
          </Link>

          <Link
            to="/questions"
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${location.pathname === '/questions' ? 'bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]' : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]'}`}
          >
            <Layers className="w-3.5 h-3.5" />
            Question Explorer
          </Link>

          <Link
            to="/revision"
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${location.pathname === '/revision' ? 'bg-[#FFF1F2] text-[#E11D48] border border-[#FECDD3]' : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]'}`}
          >
            <BookmarkCheck className="w-3.5 h-3.5 text-[#E11D48]" />
            Revision
            {revisionCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 rounded-md bg-[#E11D48] text-[#FFFFFF] text-[10px] font-bold font-mono">
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
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] font-sans transition-colors"
            />
            <Search className="w-3.5 h-3.5 text-[#64748B] absolute left-2.5 top-2.5" />
          </form>

          {/* Solved Stats Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#ECFDF5] border border-[#A7F3D0] text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
            <span className="text-[#64748B]">Solved:</span>
            <span className="text-[#059669] font-bold">{solvedCount}</span>
            <span className="text-[#64748B]">/</span>
            <span className="text-[#64748B]">60</span>
          </div>
        </div>
      </div>
    </header>
  );
}
