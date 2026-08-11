import React from 'react';

export function DifficultyBadge({ difficulty }) {
  const styles = {
    Easy: 'bg-[#F1F5F1] text-[#526B52] border-[#BAC7BA] font-semibold',
    Medium: 'bg-[#FBF5E9] text-[#C88719] border-[#E8CA94] font-semibold',
    Hard: 'bg-[#F9F1EF] text-[#A94F35] border-[#DFC2B8] font-semibold'
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono border transition-colors ${styles[difficulty] || 'bg-[#EFE9DD] text-[#20251F] border-[#DDD6C8]'}`}>
      {difficulty}
    </span>
  );
}

export function ImportanceTierBadge({ tier }) {
  const configs = {
    'must-do': { label: '★ MUST DO', style: 'bg-[#FBF5E9] text-[#C88719] border-[#E8CA94] font-semibold' },
    important: { label: 'IMPORTANT', style: 'bg-[#EFE9DD] text-[#20251F] border-[#DDD6C8] font-medium' },
    extended: { label: 'EXTENDED', style: 'bg-[#FFFCF5] text-[#687066] border-[#DDD6C8] font-normal' }
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
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-mono font-semibold bg-[#EFE9DD] text-[#20251F] border border-[#DDD6C8]" title="Research Curation Score out of 100">
      <span className="text-[#687066] font-sans">Score:</span> {score}/100
    </span>
  );
}

export function PatternBadge({ pattern }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-[#EFE9DD] text-[#20251F] border border-[#DDD6C8]">
      {pattern}
    </span>
  );
}

export function StatusBadge({ status, onClick }) {
  const configs = {
    unsolved: { label: 'Unsolved', style: 'bg-[#FFFCF5] text-[#687066] border-[#DDD6C8] hover:bg-[#EFE9DD]' },
    'in-progress': { label: 'In Progress', style: 'bg-[#FBF5E9] text-[#C88719] border-[#E8CA94] hover:bg-[#F7EAD4] font-medium' },
    solved: { label: 'Solved ✓', style: 'bg-[#F1F5F1] text-[#526B52] border-[#BAC7BA] hover:bg-[#E2EBE2] font-semibold' },
    revision: { label: 'Needs Revision 🔖', style: 'bg-[#F9F1EF] text-[#A94F35] border-[#DFC2B8] hover:bg-[#F4E2DE] font-semibold' }
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
      <span className="text-[#687066] font-sans mr-0.5">{label}:</span>
      <div className="flex text-[#C88719]">
        {[1, 2, 3, 4, 5].map(star => (
          <span key={star} className={star <= rating ? 'text-[#C88719]' : 'text-[#DDD6C8]'}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
