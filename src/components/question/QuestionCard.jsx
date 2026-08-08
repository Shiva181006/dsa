import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Lightbulb, Code, Clock, HardDrive, Building2, HelpCircle, Bookmark, Layers, Award } from 'lucide-react';
import { DifficultyBadge, PatternBadge, StatusBadge, ImportanceTierBadge, ScoreBadge, StarRating } from '../ui/Badge';
import { CodeBlock } from '../ui/CodeBlock';
import { useUserProgress } from '../../context/UserProgressContext';

export function QuestionCard({ question }) {
  const { getQuestionState, updateQuestionStatus, saveQuestionNotes, toggleRevision } = useUserProgress();
  const state = getQuestionState(question.id);

  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showWhy, setShowWhy] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showScoreBreakdown, setShowScoreBreakdown] = useState(false);
  const [notesText, setNotesText] = useState(state.notes || '');

  const handleStatusCycle = () => {
    const cycle = {
      unsolved: 'in-progress',
      'in-progress': 'solved',
      solved: 'revision',
      revision: 'unsolved'
    };
    updateQuestionStatus(question.id, cycle[state.status] || 'solved');
  };

  const handleSaveNotes = () => {
    saveQuestionNotes(question.id, notesText);
  };

  return (
    <div className={`rounded-xl border transition-all duration-200 text-left bg-slate-900/80 ${state.status === 'solved' ? 'border-emerald-900/40 bg-emerald-950/10' : state.status === 'revision' ? 'border-indigo-900/40 bg-indigo-950/10' : 'border-slate-800 hover:border-slate-700'}`}>
      {/* Top Header Card */}
      <div className="p-4 sm:p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          <div className="flex items-start gap-2.5">
            <span className="font-mono text-xs text-slate-500 font-bold mt-1">#{question.learningOrder}</span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-semibold text-slate-100 group-hover:text-indigo-400 transition-colors">
                  {question.title}
                </h3>
                
                {/* Canonical URL */}
                <a
                  href={question.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-800/60 px-2 py-0.5 rounded transition-colors"
                  title="Open canonical problem page"
                >
                  <span>{question.source}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                {/* Alternate Sources if available */}
                {question.alternateSources && question.alternateSources.map((alt, idx) => (
                  <a
                    key={idx}
                    href={alt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200 bg-slate-800/60 border border-slate-700 px-1.5 py-0.5 rounded transition-colors"
                    title={`Alternate source: ${alt.source}`}
                  >
                    <span>{alt.source}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                ))}
              </div>

              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                {question.problemSummary}
              </p>
            </div>
          </div>

          {/* Right Action Status Button */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => toggleRevision(question.id)}
              className={`p-1.5 rounded-lg border text-xs transition-colors ${state.status === 'revision' ? 'bg-indigo-600 text-white border-indigo-500' : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-slate-200'}`}
              title="Bookmark for revision"
            >
              <Bookmark className="w-4 h-4" />
            </button>

            <StatusBadge status={state.status} onClick={handleStatusCycle} />
          </div>
        </div>

        {/* Metadata Badges & Pattern */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/60 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <DifficultyBadge difficulty={question.difficulty} />
            <PatternBadge pattern={question.pattern} />
            {question.subtopic && (
              <span className="text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded font-mono text-[11px]">
                {question.subtopic}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4">
            <StarRating rating={question.importance} label="Importance" />
            <StarRating rating={question.interviewFrequency} label="Frequency" />
          </div>
        </div>

        {/* Primary & Related Topics Row */}
        <div className="flex items-center gap-2 mt-3 flex-wrap text-[11px] text-slate-400">
          <div className="flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-slate-400">Primary:</span>
            <span className="text-indigo-300 font-medium">{question.primaryTopic || question.topic}</span>
          </div>

          {question.relatedTopics && question.relatedTopics.length > 0 && (
            <div className="flex items-center gap-1">
              <span className="text-slate-500">• Related:</span>
              {question.relatedTopics.map(rel => (
                <span key={rel} className="px-1.5 py-0.5 rounded bg-slate-800/60 text-slate-300">
                  {rel}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Company Tags */}
        {question.companies && question.companies.length > 0 && (
          <div className="flex items-center gap-1.5 mt-2 text-[11px] text-slate-400 flex-wrap">
            <Building2 className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-500 font-sans">Verified Companies:</span>
            {question.companies.map(c => (
              <span key={c} className="px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60">
                {c}
              </span>
            ))}
          </div>
        )}

        {/* Action Toggle Buttons (Why Solve, Hints, Solution, Notes) */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-slate-800/40 text-xs">
          <button
            onClick={() => setShowWhy(!showWhy)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/60 transition-colors cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Why Solve This?</span>
            {showWhy ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          {question.hints && question.hints.length > 0 && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700/60 transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              <span>Hint ({question.hints.length})</span>
              {showHint ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          )}

          <button
            onClick={() => setShowSolution(!showSolution)}
            className="inline-flex items-center gap-1 px-3 py-1 rounded bg-indigo-950/80 hover:bg-indigo-900/80 text-indigo-300 border border-indigo-800/80 font-medium transition-colors ml-auto cursor-pointer"
          >
            <Code className="w-3.5 h-3.5" />
            <span>{showSolution ? 'Hide Solution' : 'Reveal JS Solution'}</span>
            {showSolution ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          <button
            onClick={() => setShowNotes(!showNotes)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700/60 transition-colors cursor-pointer"
          >
            <span>My Notes</span>
          </button>
        </div>
      </div>

      {/* Expandable Section: Why Solve This */}
      {showWhy && (
        <div className="px-5 py-3 bg-slate-950/70 border-t border-slate-800/80 text-xs">
          <p className="text-slate-300 font-medium mb-1">
            <span className="text-amber-400 font-semibold">Interview Learning Value: </span>
            {question.whySolveThis.importanceReason}
          </p>
          {question.whySolveThis.keySkills && (
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="text-slate-400">Key Skills Learned:</span>
              {question.whySolveThis.keySkills.map(skill => (
                <span key={skill} className="px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/50">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Expandable Section: Hints */}
      {showHint && question.hints && (
        <div className="px-5 py-3 bg-amber-950/10 border-t border-amber-900/30 text-xs text-amber-200/90 space-y-1">
          <span className="font-semibold text-amber-400 block mb-1">Guided Hints:</span>
          <ul className="list-disc list-inside space-y-1 pl-1">
            {question.hints.map((hint, idx) => (
              <li key={idx}>{hint}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Expandable Section: Solution & Approach */}
      {showSolution && (
        <div className="px-5 py-4 bg-slate-950 border-t border-slate-800/80 text-xs space-y-4">
          <div>
            <h4 className="font-semibold text-indigo-400 text-sm mb-1">Optimal Approach & Algorithm:</h4>
            {question.approach.bruteForceSummary && (
              <p className="text-slate-400 mb-1">
                <span className="text-rose-400 font-mono font-semibold">Brute Force: </span>
                {question.approach.bruteForceSummary}
              </p>
            )}
            <p className="text-slate-200">
              <span className="text-emerald-400 font-mono font-semibold">Optimal Strategy: </span>
              {question.approach.optimalStrategy}
            </p>
          </div>

          {/* JS Code Block */}
          <div>
            <CodeBlock code={question.solutionJS} title={`JavaScript ES6+ Solution (${question.title})`} />
          </div>

          {/* Complexity Breakdown Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-emerald-400 font-bold text-xs">{question.complexity.time} Time</span>
                <p className="text-[11px] text-slate-400 mt-0.5">{question.complexity.timeExplanation}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <HardDrive className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-indigo-400 font-bold text-xs">{question.complexity.space} Space</span>
                <p className="text-[11px] text-slate-400 mt-0.5">{question.complexity.spaceExplanation}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expandable Section: Personal Notes */}
      {showNotes && (
        <div className="px-5 py-3 bg-slate-950/80 border-t border-slate-800/80 text-xs">
          <span className="font-semibold text-slate-300 block mb-1">Personal Notes / Reminders:</span>
          <textarea
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
            placeholder="Write your custom notes, edge case warnings, or revision thoughts here..."
            className="w-full p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 text-xs font-mono mb-2"
            rows={3}
          />
          <button
            onClick={handleSaveNotes}
            className="px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-colors"
          >
            Save Notes
          </button>
        </div>
      )}
    </div>
  );
}
