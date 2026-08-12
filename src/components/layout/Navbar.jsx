import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Layers, Search, BookmarkCheck, Code2, Sparkles, CheckCircle2, Sun, Moon } from 'lucide-react';
import { useUserProgress } from '../../context/UserProgressContext';
import { useTheme } from '../../context/ThemeContext';

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { progress } = useUserProgress();
  const { theme, toggleTheme } = useTheme();
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
    <header className="sticky top-0 z-50 bg-[#FFFFFF] dark:bg-[#151B26] border-b border-[#E2E8F0] dark:border-[#232D3F] shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-md bg-[#0F172A] dark:bg-[#1C2433] text-[#F8FAFC] flex items-center justify-center border border-[#0F172A] dark:border-[#334155] group-hover:bg-[#2563EB] group-hover:border-[#2563EB] transition-colors shadow-xs">
            <Code2 className="w-5 h-5 text-[#FFFFFF]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold tracking-tight text-[#0F172A] dark:text-[#F1F5F9] group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] transition-colors text-base font-sans">
              JS DSA<span className="text-[#2563EB] dark:text-[#60A5FA]">Prep</span>
            </span>
            <span className="text-[10px] text-[#64748B] dark:text-[#94A3B8] font-mono tracking-wider font-semibold">TECHNICAL NOTEBOOK</span>
          </div>
        </Link>

        {/* Primary Navigation */}
        <nav className="hidden md:flex items-center gap-1.5">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              location.pathname === '/'
                ? 'bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] text-[#2563EB] dark:text-[#60A5FA] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)]'
                : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F1F5F9] hover:bg-[#F1F5F9] dark:hover:bg-[#1C2433]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Curriculum
          </Link>

          <Link
            to="/topic/arrays"
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              location.pathname.includes('/topic/arrays')
                ? 'bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] text-[#2563EB] dark:text-[#60A5FA] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)]'
                : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F1F5F9] hover:bg-[#F1F5F9] dark:hover:bg-[#1C2433]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
            Arrays (Master Reference)
          </Link>

          <Link
            to="/questions"
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              location.pathname === '/questions'
                ? 'bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] text-[#2563EB] dark:text-[#60A5FA] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)]'
                : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F1F5F9] hover:bg-[#F1F5F9] dark:hover:bg-[#1C2433]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Question Explorer
          </Link>

          <Link
            to="/revision"
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              location.pathname === '/revision'
                ? 'bg-[#FFF1F2] dark:bg-[rgba(244,63,94,0.15)] text-[#E11D48] dark:text-[#FB7185] border border-[#FECDD3] dark:border-[rgba(244,63,94,0.35)]'
                : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F1F5F9] hover:bg-[#F1F5F9] dark:hover:bg-[#1C2433]'
            }`}
          >
            <BookmarkCheck className="w-3.5 h-3.5 text-[#E11D48] dark:text-[#FB7185]" />
            Revision
            {revisionCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 rounded-md bg-[#E11D48] dark:bg-[#F43F5E] text-[#FFFFFF] text-[10px] font-bold font-mono">
                {revisionCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Right Search & Stats & Theme Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <form onSubmit={handleSearchSubmit} className="relative hidden sm:block w-40 md:w-56">
            <input
              type="text"
              placeholder="Search problems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md bg-[#F8FAFC] dark:bg-[#0B0E14] border border-[#E2E8F0] dark:border-[#232D3F] text-[#0F172A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] dark:focus:border-[#3B82F6] font-sans transition-colors"
            />
            <Search className="w-3.5 h-3.5 text-[#64748B] dark:text-[#94A3B8] absolute left-2.5 top-2.5" />
          </form>

          {/* Solved Stats Pill */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#ECFDF5] dark:bg-[rgba(16,185,129,0.15)] border border-[#A7F3D0] dark:border-[rgba(16,185,129,0.35)] text-xs font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] dark:text-[#34D399]" />
            <span className="text-[#64748B] dark:text-[#94A3B8] hidden sm:inline">Solved:</span>
            <span className="text-[#059669] dark:text-[#34D399] font-bold">{solvedCount}</span>
            <span className="text-[#64748B] dark:text-[#94A3B8]">/</span>
            <span className="text-[#64748B] dark:text-[#94A3B8]">60</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-[#E2E8F0] dark:border-[#232D3F] bg-[#F8FAFC] dark:bg-[#1C2433] text-[#0F172A] dark:text-[#F1F5F9] hover:bg-[#F1F5F9] dark:hover:bg-[#2A3447] transition-all cursor-pointer shadow-xs flex items-center justify-center"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#F59E0B] transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-[#2563EB] transition-transform hover:-rotate-12" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

