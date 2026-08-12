import React from 'react';
import { Bookmark, Sparkles } from 'lucide-react';
import { getAllQuestions } from '../data/topics';
import { QuestionCard } from '../components/question/QuestionCard';
import { useUserProgress } from '../context/UserProgressContext';

export function RevisionPage() {
  const { progress } = useUserProgress();
  const allQuestions = getAllQuestions();

  const revisionQuestions = allQuestions.filter(q => progress[q.id]?.status === 'revision' || progress[q.id]?.notes);

  return (
    <div className="space-y-8 pb-16 text-left">
      <div className="border-b border-[#E2E8F0] dark:border-[#232D3F] pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] dark:text-[#F1F5F9] flex items-center gap-2 tracking-tight">
          <Bookmark className="w-7 h-7 text-[#E11D48] dark:text-[#FB7185]" />
          Interview Revision Hub ({revisionQuestions.length} Problems)
        </h1>
        <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] mt-1">
          Quick review dashboard containing all questions flagged as "Needs Revision" or containing personal study notes.
        </p>
      </div>

      {revisionQuestions.length === 0 ? (
        <div className="p-10 text-center rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#E2E8F0] dark:border-[#232D3F] text-[#64748B] dark:text-[#94A3B8] space-y-3 shadow-xs transition-colors">
          <Sparkles className="w-8 h-8 text-[#2563EB] dark:text-[#60A5FA] mx-auto" />
          <p className="text-sm font-bold text-[#0F172A] dark:text-[#F1F5F9]">No Revision Problems Flagged Yet</p>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8] max-w-md mx-auto">
            Click the bookmark icon or cycle status to "Needs Revision" on any question card to save it here for fast pre-interview review.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {revisionQuestions.map(q => (
            <QuestionCard key={q.id} question={q} />
          ))}
        </div>
      )}
    </div>
  );
}

