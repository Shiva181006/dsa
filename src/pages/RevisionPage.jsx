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
      <div className="border-b border-slate-800 pb-4">
        <h1 className="text-3xl font-extrabold text-slate-100 flex items-center gap-2">
          <Bookmark className="w-8 h-8 text-indigo-400" />
          Interview Revision Hub ({revisionQuestions.length} Problems)
        </h1>
        <p className="text-sm text-slate-400 mt-1">
          Quick review dashboard containing all questions flagged as "Needs Revision" or containing personal study notes.
        </p>
      </div>

      {revisionQuestions.length === 0 ? (
        <div className="p-12 text-center rounded-xl bg-slate-900/50 border border-slate-800 text-slate-400 space-y-3">
          <Sparkles className="w-8 h-8 text-indigo-400 mx-auto" />
          <p className="text-base font-semibold text-slate-200">No Revision Problems Flagged Yet</p>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
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
