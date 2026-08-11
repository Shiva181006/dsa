import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, Lightbulb, Code, Clock, HardDrive, Building2, HelpCircle, Bookmark, Layers } from 'lucide-react';
import { DifficultyBadge, PatternBadge, StatusBadge, ScoreBadge, StarRating } from '../ui/Badge';
import { CodeBlock } from '../ui/CodeBlock';
import { useUserProgress } from '../../context/UserProgressContext';

export function QuestionCard({ question }) {
  const { getQuestionState, updateQuestionStatus, saveQuestionNotes, toggleRevision } = useUserProgress();
  const state = getQuestionState(question.id);

  const [showSolution, setShowSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showWhy, setShowWhy] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
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
    <div className={`rounded-md border transition-all duration-200 text-left bg-[#FFFCF5] ${state.status === 'solved' ? 'border-[#BAC7BA] bg-[#F1F5F1]/60' : state.status === 'revision' ? 'border-[#DFC2B8] bg-[#F9F1EF]/60' : 'border-[#DDD6C8]'}`}>
      {/* Top Header Card */}
      <div className="p-4 sm:p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          <div className="flex items-start gap-2.5">
            <span className="font-mono text-xs text-[#687066] font-bold mt-0.5">#{question.learningOrder}</span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-bold text-[#20251F]">
                  {question.title}
                </h3>
                
                {/* Canonical URL */}
                <a
                  href={question.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#C88719] hover:text-[#B07412] bg-[#FBF5E9] border border-[#E8CA94] px-2 py-0.5 rounded font-mono font-medium transition-colors"
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
                    className="inline-flex items-center gap-1 text-[11px] text-[#687066] hover:text-[#20251F] bg-[#EFE9DD] border border-[#DDD6C8] px-1.5 py-0.5 rounded font-mono transition-colors"
                    title={`Alternate source: ${alt.source}`}
                  >
                    <span>{alt.source}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                ))}
              </div>

              <p className="text-xs text-[#687066] mt-1 leading-relaxed line-clamp-2">
                {question.problemSummary}
              </p>
            </div>
          </div>

          {/* Right Action Status Button */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => toggleRevision(question.id)}
              className={`p-1.5 rounded-md border text-xs transition-colors cursor-pointer ${state.status === 'revision' ? 'bg-[#A94F35] text-[#FFFCF5] border-[#A94F35]' : 'bg-[#EFE9DD] text-[#687066] border-[#DDD6C8] hover:text-[#20251F]'}`}
              title="Bookmark for revision"
            >
              <Bookmark className="w-4 h-4" />
            </button>

            <StatusBadge status={state.status} onClick={handleStatusCycle} />
          </div>
        </div>

        {/* Metadata Badges & Pattern */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#DDD6C8] text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <DifficultyBadge difficulty={question.difficulty} />
            <PatternBadge pattern={question.pattern} />
            {question.subtopic && (
              <span className="text-[#687066] bg-[#EFE9DD] border border-[#DDD6C8] px-2 py-0.5 rounded font-mono text-[11px]">
                {question.subtopic}
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 font-mono">
            <StarRating rating={question.importance} label="Importance" />
            <StarRating rating={question.interviewFrequency} label="Frequency" />
          </div>
        </div>

        {/* Primary & Related Topics Row */}
        <div className="flex items-center gap-2 mt-3 flex-wrap text-[11px] text-[#687066]">
          <div className="flex items-center gap-1 font-mono">
            <Layers className="w-3.5 h-3.5 text-[#C88719]" />
            <span className="text-[#687066]">Primary:</span>
            <span className="text-[#20251F] font-semibold">{question.primaryTopic || question.topic}</span>
          </div>

          {question.relatedTopics && question.relatedTopics.length > 0 && (
            <div className="flex items-center gap-1 font-mono">
              <span className="text-[#DDD6C8]">• Related:</span>
              {question.relatedTopics.map(rel => (
                <span key={rel} className="px-1.5 py-0.5 rounded bg-[#EFE9DD] text-[#687066] border border-[#DDD6C8]">
                  {rel}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Company Tags */}
        {question.companies && question.companies.length > 0 && (
          <div className="flex items-center gap-1.5 mt-2 text-[11px] text-[#687066] flex-wrap">
            <Building2 className="w-3.5 h-3.5 text-[#687066]" />
            <span className="text-[#687066] font-sans">Verified Companies:</span>
            {question.companies.map(c => (
              <span key={c} className="px-1.5 py-0.5 rounded bg-[#EFE9DD] text-[#20251F] border border-[#DDD6C8] font-mono text-[10px]">
                {c}
              </span>
            ))}
          </div>
        )}

        {/* Action Toggle Buttons (Why Solve, Hints, Solution, Notes) */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-[#DDD6C8] text-xs font-mono">
          <button
            onClick={() => setShowWhy(!showWhy)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#EFE9DD] hover:bg-[#E8E2D5] text-[#20251F] border border-[#DDD6C8] transition-colors cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#C88719]" />
            <span>Why Solve This?</span>
            {showWhy ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          {question.hints && question.hints.length > 0 && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#EFE9DD] hover:bg-[#E8E2D5] text-[#20251F] border border-[#DDD6C8] transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5 text-[#C88719]" />
              <span>Hint ({question.hints.length})</span>
              {showHint ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          )}

          <button
            onClick={() => setShowSolution(!showSolution)}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-[#C88719] hover:bg-[#B07412] text-[#FFFCF5] font-semibold transition-colors ml-auto cursor-pointer"
          >
            <Code className="w-3.5 h-3.5 text-[#FFFCF5]" />
            <span>{showSolution ? 'Hide Solution' : 'Reveal JS Solution'}</span>
            {showSolution ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          <button
            onClick={() => setShowNotes(!showNotes)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#EFE9DD] hover:bg-[#E8E2D5] text-[#687066] hover:text-[#20251F] border border-[#DDD6C8] transition-colors cursor-pointer"
          >
            <span>My Notes</span>
          </button>
        </div>
      </div>

      {/* Expandable Section: Why Solve This */}
      {showWhy && (
        <div className="px-5 py-3 bg-[#EFE9DD]/60 border-t border-[#DDD6C8] text-xs">
          <p className="text-[#20251F] font-medium mb-1">
            <span className="text-[#C88719] font-bold font-mono">Interview Learning Value: </span>
            {question.whySolveThis.importanceReason}
          </p>
          {question.whySolveThis.keySkills && (
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="text-[#687066]">Key Skills Learned:</span>
              {question.whySolveThis.keySkills.map(skill => (
                <span key={skill} className="px-2 py-0.5 rounded bg-[#FBF5E9] text-[#C88719] border border-[#E8CA94] font-mono text-[11px]">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Expandable Section: Hints */}
      {showHint && question.hints && (
        <div className="px-5 py-3 bg-[#FBF5E9]/80 border-t border-[#E8CA94] text-xs text-[#20251F] space-y-1">
          <span className="font-bold text-[#C88719] font-mono block mb-1">Guided Hints:</span>
          <ul className="list-disc list-inside space-y-1 pl-1 text-[#687066]">
            {question.hints.map((hint, idx) => (
              <li key={idx}><span className="text-[#20251F]">{hint}</span></li>
            ))}
          </ul>
        </div>
      )}

      {/* Expandable Section: Solution & Approach */}
      {showSolution && (
        <div className="px-5 py-4 bg-[#FFFCF5] border-t border-[#DDD6C8] text-xs space-y-4">
          <div>
            <h4 className="font-bold text-[#C88719] text-sm mb-1 font-mono">Optimal Approach & Algorithm:</h4>
            {question.approach.bruteForceSummary && (
              <p className="text-[#687066] mb-1 leading-relaxed">
                <span className="text-[#A94F35] font-mono font-bold">Brute Force: </span>
                {question.approach.bruteForceSummary}
              </p>
            )}
            <p className="text-[#20251F] leading-relaxed">
              <span className="text-[#526B52] font-mono font-bold">Optimal Strategy: </span>
              {question.approach.optimalStrategy}
            </p>
          </div>

          {/* JS Code Block */}
          <div>
            <CodeBlock code={question.solutionJS} title={`JavaScript ES6+ Solution (${question.title})`} />
          </div>

          {/* Complexity Breakdown Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-md bg-[#EFE9DD] border border-[#DDD6C8]">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-[#526B52] shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[#526B52] font-bold text-xs">{question.complexity.time} Time</span>
                <p className="text-[11px] text-[#687066] mt-0.5">{question.complexity.timeExplanation}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <HardDrive className="w-4 h-4 text-[#C88719] shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[#C88719] font-bold text-xs">{question.complexity.space} Space</span>
                <p className="text-[11px] text-[#687066] mt-0.5">{question.complexity.spaceExplanation}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expandable Section: Personal Notes */}
      {showNotes && (
        <div className="px-5 py-3 bg-[#EFE9DD]/60 border-t border-[#DDD6C8] text-xs">
          <span className="font-bold text-[#20251F] font-mono block mb-1">Personal Notes / Reminders:</span>
          <textarea
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
            placeholder="Write your custom notes, edge case warnings, or revision thoughts here..."
            className="w-full p-2.5 rounded-md bg-[#FFFCF5] border border-[#DDD6C8] text-[#20251F] placeholder-[#687066] focus:outline-none focus:border-[#C88719] text-xs font-mono mb-2"
            rows={3}
          />
          <button
            onClick={handleSaveNotes}
            className="px-3 py-1 rounded-md bg-[#C88719] hover:bg-[#B07412] text-[#FFFCF5] font-mono font-semibold text-xs transition-colors cursor-pointer"
          >
            Save Notes
          </button>
        </div>
      )}
    </div>
  );
}
