import React from 'react';

export function DifficultyBadge({ difficulty }) {
  const styles = {
    Easy: 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0] font-semibold',
    Medium: 'bg-[#FFFBEB] text-[#D97706] border-[#FDE68A] font-semibold',
    Hard: 'bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3] font-semibold'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono border transition-colors ${styles[difficulty] || 'bg-[#F1F5F9] text-[#0F172A] border-[#E2E8F0]'}`}>
      {difficulty}
    </span>
  );
}

export function ImportanceTierBadge({ tier }) {
  const configs = {
    'must-do': { label: '★ MUST DO', style: 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE] font-semibold' },
    important: { label: 'IMPORTANT', style: 'bg-[#F1F5F9] text-[#0F172A] border-[#CBD5E1] font-medium' },
    extended: { label: 'EXTENDED', style: 'bg-[#FFFFFF] text-[#64748B] border-[#E2E8F0] font-normal' }
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
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0]" title="Research Curation Score out of 100">
      <span className="text-[#64748B] font-sans">Score:</span> {score}/100
    </span>
  );
}

export function PatternBadge({ pattern }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
      {pattern}
    </span>
  );
}

export function StatusBadge({ status, onClick }) {
  const configs = {
    unsolved: { label: 'Unsolved', style: 'bg-[#FFFFFF] text-[#64748B] border-[#E2E8F0] hover:bg-[#F1F5F9]' },
    'in-progress': { label: 'In Progress', style: 'bg-[#FFFBEB] text-[#D97706] border-[#FDE68A] hover:bg-[#FEF3C7] font-medium' },
    solved: { label: 'Solved ✓', style: 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0] hover:bg-[#D1FAE5] font-semibold' },
    revision: { label: 'Needs Revision 🔖', style: 'bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3] hover:bg-[#FFE4E6] font-semibold' }
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
      <span className="text-[#64748B] font-sans mr-0.5">{label}:</span>
      <div className="flex text-[#2563EB]">
        {[1, 2, 3, 4, 5].map(star => (
          <span key={star} className={star <= rating ? 'text-[#2563EB]' : 'text-[#CBD5E1]'}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
