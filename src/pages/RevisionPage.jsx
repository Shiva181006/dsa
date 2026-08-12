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
      <div className="border-b border-[#E2E8F0] pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] flex items-center gap-2 tracking-tight">
          <Bookmark className="w-7 h-7 text-[#E11D48]" />
          Interview Revision Hub ({revisionQuestions.length} Problems)
        </h1>
        <p className="text-xs sm:text-sm text-[#64748B] mt-1">
          Quick review dashboard containing all questions flagged as "Needs Revision" or containing personal study notes.
        </p>
      </div>

      {revisionQuestions.length === 0 ? (
        <div className="p-10 text-center rounded-md bg-[#FFFFFF] border border-[#E2E8F0] text-[#64748B] space-y-3 shadow-xs">
          <Sparkles className="w-8 h-8 text-[#2563EB] mx-auto" />
          <p className="text-sm font-bold text-[#0F172A]">No Revision Problems Flagged Yet</p>
          <p className="text-xs text-[#64748B] max-w-md mx-auto">
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
