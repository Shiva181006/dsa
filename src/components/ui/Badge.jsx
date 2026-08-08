import React from 'react';

export function DifficultyBadge({ difficulty }) {
  const styles = {
    Easy: 'bg-emerald-950/80 text-emerald-400 border-emerald-800/60 hover:bg-emerald-900/60',
    Medium: 'bg-amber-950/80 text-amber-400 border-amber-800/60 hover:bg-amber-900/60',
    Hard: 'bg-rose-950/80 text-rose-400 border-rose-800/60 hover:bg-rose-900/60'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors ${styles[difficulty] || 'bg-slate-800 text-slate-300 border-slate-700'}`}>
      {difficulty}
    </span>
  );
}

export function ImportanceTierBadge({ tier }) {
  const configs = {
    'must-do': { label: '★ MUST DO', style: 'bg-amber-500/10 text-amber-400 border-amber-500/40 shadow-sm shadow-amber-500/10 font-semibold' },
    important: { label: 'IMPORTANT', style: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30 font-medium' },
    extended: { label: 'EXTENDED', style: 'bg-slate-800/80 text-slate-400 border-slate-700 font-normal' }
  };

  const config = configs[tier] || configs.important;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs tracking-wider border ${config.style}`}>
      {config.label}
    </span>
  );
}

export function ScoreBadge({ score }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-cyan-950/70 text-cyan-300 border border-cyan-800/60" title="Research Curation Score out of 100">
      <span className="text-cyan-500 font-sans">Score:</span> {score}/100
    </span>
  );
}

export function PatternBadge({ pattern }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 hover:border-indigo-700">
      {pattern}
    </span>
  );
}

export function StatusBadge({ status, onClick }) {
  const configs = {
    unsolved: { label: 'Unsolved', style: 'bg-slate-800/80 text-slate-400 border-slate-700 hover:border-slate-600' },
    'in-progress': { label: 'In Progress', style: 'bg-amber-950/80 text-amber-300 border-amber-800/80 hover:bg-amber-900/80' },
    solved: { label: 'Solved ✓', style: 'bg-emerald-950/90 text-emerald-300 border-emerald-700/80 hover:bg-emerald-900/80 font-semibold' },
    revision: { label: 'Needs Revision 🔖', style: 'bg-indigo-950/90 text-indigo-300 border-indigo-700/80 hover:bg-indigo-900/80 font-semibold' }
  };

  const config = configs[status] || configs.unsolved;

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border transition-all cursor-pointer ${config.style}`}
      title="Click to cycle status"
    >
      {config.label}
    </button>
  );
}

export function StarRating({ rating, label }) {
  return (
    <div className="flex items-center gap-1 text-xs" title={`${label}: ${rating}/5`}>
      <span className="text-slate-400 font-sans mr-0.5">{label}:</span>
      <div className="flex text-amber-400">
        {[1, 2, 3, 4, 5].map(star => (
          <span key={star} className={star <= rating ? 'text-amber-400' : 'text-slate-700'}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
