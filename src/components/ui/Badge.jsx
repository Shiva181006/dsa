import React from 'react';

export function DifficultyBadge({ difficulty }) {
  const styles = {
    Easy: 'bg-[#ECFDF5] dark:bg-[rgba(16,185,129,0.15)] text-[#059669] dark:text-[#34D399] border-[#A7F3D0] dark:border-[rgba(16,185,129,0.35)] font-semibold',
    Medium: 'bg-[#FFFBEB] dark:bg-[rgba(245,158,11,0.15)] text-[#D97706] dark:text-[#FBBF24] border-[#FDE68A] dark:border-[rgba(245,158,11,0.35)] font-semibold',
    Hard: 'bg-[#FFF1F2] dark:bg-[rgba(244,63,94,0.15)] text-[#E11D48] dark:text-[#FB7185] border-[#FECDD3] dark:border-[rgba(244,63,94,0.35)] font-semibold'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono border transition-colors ${styles[difficulty] || 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#0F172A] dark:text-[#F1F5F9] border-[#E2E8F0] dark:border-[#232D3F]'}`}>
      {difficulty}
    </span>
  );
}

export function ImportanceTierBadge({ tier }) {
  const configs = {
    'must-do': { label: '★ MUST DO', style: 'bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] text-[#2563EB] dark:text-[#60A5FA] border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)] font-semibold' },
    important: { label: 'IMPORTANT', style: 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#0F172A] dark:text-[#F1F5F9] border-[#CBD5E1] dark:border-[#334155] font-medium' },
    extended: { label: 'EXTENDED', style: 'bg-[#FFFFFF] dark:bg-[#151B26] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#232D3F] font-normal' }
  };

  const config = configs[tier] || configs.important;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs tracking-wider font-mono border ${config.style}`}>
      {config.label}
    </span>
  );
}

export function ScoreBadge({ score }) {
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-[#F1F5F9] dark:bg-[#1C2433] text-[#0F172A] dark:text-[#F1F5F9] border border-[#E2E8F0] dark:border-[#232D3F]" title="Research Curation Score out of 100">
      <span className="text-[#64748B] dark:text-[#94A3B8] font-sans">Score:</span> {score}/100
    </span>
  );
}

export function PatternBadge({ pattern }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] text-[#2563EB] dark:text-[#60A5FA] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)]">
      {pattern}
    </span>
  );
}

export function StatusBadge({ status, onClick }) {
  const configs = {
    unsolved: { label: 'Unsolved', style: 'bg-[#FFFFFF] dark:bg-[#151B26] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#232D3F] hover:bg-[#F1F5F9] dark:hover:bg-[#1C2433]' },
    'in-progress': { label: 'In Progress', style: 'bg-[#FFFBEB] dark:bg-[rgba(245,158,11,0.15)] text-[#D97706] dark:text-[#FBBF24] border-[#FDE68A] dark:border-[rgba(245,158,11,0.35)] hover:bg-[#FEF3C7] dark:hover:bg-[rgba(245,158,11,0.25)] font-medium' },
    solved: { label: 'Solved ✓', style: 'bg-[#ECFDF5] dark:bg-[rgba(16,185,129,0.15)] text-[#059669] dark:text-[#34D399] border-[#A7F3D0] dark:border-[rgba(16,185,129,0.35)] hover:bg-[#D1FAE5] dark:hover:bg-[rgba(16,185,129,0.25)] font-semibold' },
    revision: { label: 'Needs Revision 🔖', style: 'bg-[#FFF1F2] dark:bg-[rgba(244,63,94,0.15)] text-[#E11D48] dark:text-[#FB7185] border-[#FECDD3] dark:border-[rgba(244,63,94,0.35)] hover:bg-[#FFE4E6] dark:hover:bg-[rgba(244,63,94,0.25)] font-semibold' }
  };

  const config = configs[status] || configs.unsolved;

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-mono border transition-all cursor-pointer ${config.style}`}
      title="Click to cycle status"
    >
      {config.label}
    </button>
  );
}

export function StarRating({ rating, label }) {
  return (
    <div className="flex items-center gap-1 text-xs" title={`${label}: ${rating}/5`}>
      <span className="text-[#64748B] dark:text-[#94A3B8] font-sans mr-0.5">{label}:</span>
      <div className="flex text-[#2563EB] dark:text-[#60A5FA]">
        {[1, 2, 3, 4, 5].map(star => (
          <span key={star} className={star <= rating ? 'text-[#2563EB] dark:text-[#60A5FA]' : 'text-[#CBD5E1] dark:text-[#334155]'}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

