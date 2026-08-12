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
    <div
      className={`rounded-md border transition-all duration-200 text-left bg-[#FFFFFF] dark:bg-[#151B26] shadow-xs ${
        state.status === 'solved'
          ? 'border-[#A7F3D0] dark:border-[rgba(16,185,129,0.4)] bg-[#ECFDF5]/50 dark:bg-[rgba(16,185,129,0.06)]'
          : state.status === 'revision'
          ? 'border-[#FECDD3] dark:border-[rgba(244,63,94,0.4)] bg-[#FFF1F2]/50 dark:bg-[rgba(244,63,94,0.06)]'
          : 'border-[#E2E8F0] dark:border-[#232D3F]'
      }`}
    >
      {/* Top Header Card */}
      <div className="p-4 sm:p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          <div className="flex items-start gap-2.5">
            <span className="font-mono text-xs text-[#64748B] dark:text-[#94A3B8] font-bold mt-0.5">#{question.learningOrder}</span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base font-bold text-[#0F172A] dark:text-[#F1F5F9]">
                  {question.title}
                </h3>
                
                {/* Canonical URL */}
                <a
                  href={question.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#2563EB] dark:text-[#60A5FA] hover:text-[#1D4ED8] dark:hover:text-[#93C5FD] bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)] px-2 py-0.5 rounded font-mono font-medium transition-colors"
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
                    className="inline-flex items-center gap-1 text-[11px] text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F1F5F9] bg-[#F1F5F9] dark:bg-[#1C2433] border border-[#E2E8F0] dark:border-[#232D3F] px-1.5 py-0.5 rounded font-mono transition-colors"
                    title={`Alternate source: ${alt.source}`}
                  >
                    <span>{alt.source}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                ))}
              </div>

              <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1 leading-relaxed line-clamp-2">
                {question.problemSummary}
              </p>
            </div>
          </div>

          {/* Right Action Status Button */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => toggleRevision(question.id)}
              className={`p-1.5 rounded-md border text-xs transition-colors cursor-pointer ${
                state.status === 'revision'
                  ? 'bg-[#E11D48] dark:bg-[#F43F5E] text-[#FFFFFF] border-[#E11D48] dark:border-[#F43F5E]'
                  : 'bg-[#F1F5F9] dark:bg-[#1C2433] text-[#64748B] dark:text-[#94A3B8] border-[#E2E8F0] dark:border-[#232D3F] hover:text-[#0F172A] dark:hover:text-[#F1F5F9]'
              }`}
              title="Bookmark for revision"
            >
              <Bookmark className="w-4 h-4" />
            </button>

            <StatusBadge status={state.status} onClick={handleStatusCycle} />
          </div>
        </div>

        {/* Metadata Badges & Pattern */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#E2E8F0] dark:border-[#232D3F] text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <DifficultyBadge difficulty={question.difficulty} />
            <PatternBadge pattern={question.pattern} />
            {question.subtopic && (
              <span className="text-[#64748B] dark:text-[#94A3B8] bg-[#F1F5F9] dark:bg-[#1C2433] border border-[#E2E8F0] dark:border-[#232D3F] px-2 py-0.5 rounded font-mono text-[11px]">
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
        <div className="flex items-center gap-2 mt-3 flex-wrap text-[11px] text-[#64748B] dark:text-[#94A3B8]">
          <div className="flex items-center gap-1 font-mono">
            <Layers className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
            <span className="text-[#64748B] dark:text-[#94A3B8]">Primary:</span>
            <span className="text-[#0F172A] dark:text-[#F1F5F9] font-semibold">{question.primaryTopic || question.topic}</span>
          </div>

          {question.relatedTopics && question.relatedTopics.length > 0 && (
            <div className="flex items-center gap-1 font-mono">
              <span className="text-[#CBD5E1] dark:text-[#334155]">• Related:</span>
              {question.relatedTopics.map(rel => (
                <span key={rel} className="px-1.5 py-0.5 rounded bg-[#F1F5F9] dark:bg-[#1C2433] text-[#64748B] dark:text-[#94A3B8] border border-[#E2E8F0] dark:border-[#232D3F]">
                  {rel}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Company Tags */}
        {question.companies && question.companies.length > 0 && (
          <div className="flex items-center gap-1.5 mt-2 text-[11px] text-[#64748B] dark:text-[#94A3B8] flex-wrap">
            <Building2 className="w-3.5 h-3.5 text-[#64748B] dark:text-[#94A3B8]" />
            <span className="text-[#64748B] dark:text-[#94A3B8] font-sans">Verified Companies:</span>
            {question.companies.map(c => (
              <span key={c} className="px-1.5 py-0.5 rounded bg-[#F1F5F9] dark:bg-[#1C2433] text-[#0F172A] dark:text-[#F1F5F9] border border-[#E2E8F0] dark:border-[#232D3F] font-mono text-[10px]">
                {c}
              </span>
            ))}
          </div>
        )}

        {/* Action Toggle Buttons (Why Solve, Hints, Solution, Notes) */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-[#E2E8F0] dark:border-[#232D3F] text-xs font-mono">
          <button
            onClick={() => setShowWhy(!showWhy)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F1F5F9] dark:bg-[#1C2433] hover:bg-[#E2E8F0] dark:hover:bg-[#2A3447] text-[#0F172A] dark:text-[#F1F5F9] border border-[#CBD5E1] dark:border-[#334155] transition-colors cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#60A5FA]" />
            <span>Why Solve This?</span>
            {showWhy ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          {question.hints && question.hints.length > 0 && (
            <button
              onClick={() => setShowHint(!showHint)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F1F5F9] dark:bg-[#1C2433] hover:bg-[#E2E8F0] dark:hover:bg-[#2A3447] text-[#0F172A] dark:text-[#F1F5F9] border border-[#CBD5E1] dark:border-[#334155] transition-colors cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5 text-[#D97706] dark:text-[#FBBF24]" />
              <span>Hint ({question.hints.length})</span>
              {showHint ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
          )}

          <button
            onClick={() => setShowSolution(!showSolution)}
            className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-[#2563EB] dark:bg-[#3B82F6] hover:bg-[#1D4ED8] dark:hover:bg-[#2563EB] text-[#FFFFFF] font-semibold transition-colors ml-auto cursor-pointer shadow-xs"
          >
            <Code className="w-3.5 h-3.5 text-[#FFFFFF]" />
            <span>{showSolution ? 'Hide Solution' : 'Reveal JS Solution'}</span>
            {showSolution ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          <button
            onClick={() => setShowNotes(!showNotes)}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F1F5F9] dark:bg-[#1C2433] hover:bg-[#E2E8F0] dark:hover:bg-[#2A3447] text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F1F5F9] border border-[#CBD5E1] dark:border-[#334155] transition-colors cursor-pointer"
          >
            <span>My Notes</span>
          </button>
        </div>
      </div>

      {/* Expandable Section: Why Solve This */}
      {showWhy && (
        <div className="px-5 py-3 bg-[#F8FAFC] dark:bg-[#0B0E14] border-t border-[#E2E8F0] dark:border-[#232D3F] text-xs">
          <p className="text-[#0F172A] dark:text-[#F1F5F9] font-medium mb-1">
            <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold font-mono">Interview Learning Value: </span>
            {question.whySolveThis.importanceReason}
          </p>
          {question.whySolveThis.keySkills && (
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="text-[#64748B] dark:text-[#94A3B8]">Key Skills Learned:</span>
              {question.whySolveThis.keySkills.map(skill => (
                <span key={skill} className="px-2 py-0.5 rounded bg-[#EFF6FF] dark:bg-[rgba(59,130,246,0.15)] text-[#2563EB] dark:text-[#60A5FA] border border-[#BFDBFE] dark:border-[rgba(59,130,246,0.35)] font-mono text-[11px]">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Expandable Section: Hints */}
      {showHint && question.hints && (
        <div className="px-5 py-3 bg-[#FFFBEB] dark:bg-[rgba(245,158,11,0.1)] border-t border-[#FDE68A] dark:border-[rgba(245,158,11,0.35)] text-xs text-[#0F172A] dark:text-[#F1F5F9] space-y-1">
          <span className="font-bold text-[#D97706] dark:text-[#FBBF24] font-mono block mb-1">Guided Hints:</span>
          <ul className="list-disc list-inside space-y-1 pl-1 text-[#64748B] dark:text-[#94A3B8]">
            {question.hints.map((hint, idx) => (
              <li key={idx}><span className="text-[#0F172A] dark:text-[#F1F5F9]">{hint}</span></li>
            ))}
          </ul>
        </div>
      )}

      {/* Expandable Section: Solution & Approach */}
      {showSolution && (
        <div className="px-5 py-4 bg-[#FFFFFF] dark:bg-[#151B26] border-t border-[#E2E8F0] dark:border-[#232D3F] text-xs space-y-4">
          <div>
            <h4 className="font-bold text-[#2563EB] dark:text-[#60A5FA] text-sm mb-1 font-mono">Optimal Approach & Algorithm:</h4>
            {question.approach.bruteForceSummary && (
              <p className="text-[#64748B] dark:text-[#94A3B8] mb-1 leading-relaxed">
                <span className="text-[#E11D48] dark:text-[#FB7185] font-mono font-bold">Brute Force: </span>
                {question.approach.bruteForceSummary}
              </p>
            )}
            <p className="text-[#0F172A] dark:text-[#F1F5F9] leading-relaxed">
              <span className="text-[#059669] dark:text-[#34D399] font-mono font-bold">Optimal Strategy: </span>
              {question.approach.optimalStrategy}
            </p>
          </div>

          {/* JS Code Block */}
          <div>
            <CodeBlock code={question.solutionJS} title={`JavaScript ES6+ Solution (${question.title})`} />
          </div>

          {/* Complexity Breakdown Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 rounded-md bg-[#F1F5F9] dark:bg-[#1C2433] border border-[#E2E8F0] dark:border-[#232D3F]">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-[#059669] dark:text-[#34D399] shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[#059669] dark:text-[#34D399] font-bold text-xs">{question.complexity.time} Time</span>
                <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] mt-0.5">{question.complexity.timeExplanation}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <HardDrive className="w-4 h-4 text-[#2563EB] dark:text-[#60A5FA] shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[#2563EB] dark:text-[#60A5FA] font-bold text-xs">{question.complexity.space} Space</span>
                <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] mt-0.5">{question.complexity.spaceExplanation}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expandable Section: Personal Notes */}
      {showNotes && (
        <div className="px-5 py-3 bg-[#F8FAFC] dark:bg-[#0B0E14] border-t border-[#E2E8F0] dark:border-[#232D3F] text-xs">
          <span className="font-bold text-[#0F172A] dark:text-[#F1F5F9] font-mono block mb-1">Personal Notes / Reminders:</span>
          <textarea
            value={notesText}
            onChange={(e) => setNotesText(e.target.value)}
            placeholder="Write your custom notes, edge case warnings, or revision thoughts here..."
            className="w-full p-2.5 rounded-md bg-[#FFFFFF] dark:bg-[#151B26] border border-[#CBD5E1] dark:border-[#334155] text-[#0F172A] dark:text-[#F1F5F9] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] dark:focus:border-[#3B82F6] text-xs font-mono mb-2"
            rows={3}
          />
          <button
            onClick={handleSaveNotes}
            className="px-3 py-1 rounded-md bg-[#2563EB] dark:bg-[#3B82F6] hover:bg-[#1D4ED8] dark:hover:bg-[#2563EB] text-[#FFFFFF] font-mono font-semibold text-xs transition-colors cursor-pointer shadow-xs"
          >
            Save Notes
          </button>
        </div>
      )}
    </div>
  );
}

