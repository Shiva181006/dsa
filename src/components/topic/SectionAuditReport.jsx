import React, { useState } from 'react';
import { FileSearch, ChevronDown, ChevronUp, CheckCircle2, ShieldCheck, Award, ListFilter, BarChart3, AlertCircle } from 'lucide-react';

export function SectionAuditReport({ report }) {
  const [showAuditReport, setShowAuditReport] = useState(false);
  const [activeTab, setActiveTab] = useState('pipeline'); // 'pipeline' | 'scoring' | 'patterns' | 'dedup' | 'rejections'

  if (!report) return null;

  return (
    <div id="sec-audit" className="scroll-mt-32 text-left">
      <div className="rounded-2xl border border-cyan-900/60 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 p-6 space-y-5 shadow-2xl">
        {/* Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-cyan-950/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-100 flex items-center gap-2">
                Question Research & Selection Engine Audit
              </h3>
              <p className="text-xs text-cyan-300 font-mono mt-0.5">
                Evidence-Based • Multi-Source Roadmap • 100-Point Scored Curation
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowAuditReport(!showAuditReport)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-semibold hover:bg-cyan-900 hover:text-cyan-200 transition-all self-start sm:self-auto cursor-pointer shadow-lg shadow-cyan-950/50"
          >
            <FileSearch className="w-4 h-4" />
            <span>{showAuditReport ? 'Collapse Engine Audit' : 'Inspect 100-Pt Selection Engine Audit'}</span>
            {showAuditReport ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Short Executive Summary */}
        <p className="text-xs text-slate-300 leading-relaxed max-w-4xl">
          {report.selectionPrinciple} Every question in this bank was independently researched across 8 reputable interview roadmaps, deduplicated, and scored out of 100 points to optimize for total pattern and concept coverage.
        </p>

        {/* Expandable Audit Details */}
        {showAuditReport && (
          <div className="pt-4 border-t border-slate-800/80 space-y-6 text-xs animate-fadeIn">
            {/* Top Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-800/50 transition-colors">
                <span className="text-slate-500 block text-[11px]">EVALUATED POOL</span>
                <span className="text-slate-100 font-bold text-lg">{report.totalCandidatesEvaluated} Candidates</span>
                <span className="text-slate-500 text-[10px] block mt-0.5">Across 8 Major Sources</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-rose-800/50 transition-colors">
                <span className="text-slate-500 block text-[11px]">DUPLICATES REMOVED</span>
                <span className="text-rose-400 font-bold text-lg">{report.duplicatesRemovedCount} Variants</span>
                <span className="text-slate-500 text-[10px] block mt-0.5">Normalized & Filtered</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-800/50 transition-colors">
                <span className="text-slate-500 block text-[11px]">MUST-DO CORE</span>
                <span className="text-amber-400 font-bold text-lg">{report.tierDistribution.mustDo} ★ Problems</span>
                <span className="text-slate-500 text-[10px] block mt-0.5">Highest Yield Return</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-800/50 transition-colors">
                <span className="text-slate-500 block text-[11px]">REPUTABLE ROADMAPS</span>
                <span className="text-cyan-400 font-bold text-lg">{report.reputableSourcesResearched.length} Sources</span>
                <span className="text-slate-500 text-[10px] block mt-0.5">Zero Single-Source Bias</span>
              </div>
            </div>

            {/* Sub-Navigation Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto scrollbar-none">
              {[
                { id: 'pipeline', label: '9-Step Selection Pipeline', icon: ListFilter },
                { id: 'scoring', label: '100-Point Framework', icon: Award },
                { id: 'patterns', label: 'Pattern Coverage Map', icon: BarChart3 },
                { id: 'dedup', label: 'Cross-Source Evidence', icon: ShieldCheck },
                { id: 'rejections', label: 'Rejection Log & Criteria', icon: AlertCircle }
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all ${activeTab === tab.id ? 'bg-cyan-950 text-cyan-200 border border-cyan-800 font-semibold shadow-sm' : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* TAB 1: PIPELINE */}
            {activeTab === 'pipeline' && (
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-200 text-sm flex items-center gap-2">
                  <ListFilter className="w-4 h-4 text-cyan-400" />
                  Execution Pipeline: From 142 Candidates to 60 Core Interview Problems
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                  {report.pipelineSteps?.map((step, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-start gap-2.5 text-[11px] leading-relaxed">
                      <span className="font-mono text-cyan-400 font-bold text-xs shrink-0">#{idx + 1}</span>
                      <span className="text-slate-300">{step.replace(/^\d+\.\s*/, '')}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: SCORING FRAMEWORK */}
            {activeTab === 'scoring' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-slate-200 text-sm flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    100-Point Candidate Evaluation Framework
                  </h4>
                  <span className="text-xs font-mono text-amber-400 font-bold">Max Score: 100 Points</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-[11px]">
                  <div className="p-3 rounded-xl bg-slate-950 border border-indigo-900/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-300 font-semibold">Interview Relevance</span>
                      <span className="text-indigo-400 font-bold font-mono">25 Pts</span>
                    </div>
                    <p className="text-slate-400 text-[10px]">Frequency in real FAANG/tier-1 technical interviews and problem-solving utility.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-amber-900/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-300 font-semibold">Cross-Source Evidence</span>
                      <span className="text-amber-400 font-bold font-mono">20 Pts</span>
                    </div>
                    <p className="text-slate-400 text-[10px]">Independent inclusion count across LeetCode Top 150, Blind 75, NeetCode 150, Striver.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-emerald-900/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-300 font-semibold">Pattern Value</span>
                      <span className="text-emerald-400 font-bold font-mono">20 Pts</span>
                    </div>
                    <p className="text-slate-400 text-[10px]">Teaches a fundamental, reusable algorithmic pattern (e.g. Sliding Window, Prefix Sum).</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-purple-900/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-300 font-semibold">Concept Importance</span>
                      <span className="text-purple-400 font-bold font-mono">10 Pts</span>
                    </div>
                    <p className="text-slate-400 text-[10px]">Establishes structural understanding of arrays, memory layout, and linear bounds.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-blue-900/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-300 font-semibold">Learning Value</span>
                      <span className="text-blue-400 font-bold font-mono">10 Pts</span>
                    </div>
                    <p className="text-slate-400 text-[10px]">Bridges easier concepts to harder interview problems in pedagogical order.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-rose-900/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-300 font-semibold">Uniqueness</span>
                      <span className="text-rose-400 font-bold font-mono">10 Pts</span>
                    </div>
                    <p className="text-slate-400 text-[10px]">Provides non-redundant insights distinct from already selected problems.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-teal-900/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-slate-300 font-semibold">Difficulty Value</span>
                      <span className="text-teal-400 font-bold font-mono">5 Pts</span>
                    </div>
                    <p className="text-slate-400 text-[10px]">Provides meaningful interview difficulty calibration without obscure tricks.</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: PATTERN COVERAGE MAP */}
            {activeTab === 'patterns' && (
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-200 text-sm flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-emerald-400" />
                  Pattern & Concept Distribution (Non-Redundant Optimization)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  {report.patternCoverageMap?.map((item, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-slate-200 font-semibold block">{item.pattern}</span>
                        <span className="text-slate-400 text-[10px] block mt-0.5">{item.value}</span>
                      </div>
                      <span className="px-2 py-1 rounded bg-indigo-950 text-indigo-300 font-mono font-bold shrink-0 border border-indigo-800/60">
                        {item.selectedCount} Problems
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: CROSS-SOURCE EVIDENCE & DEDUPLICATION */}
            {activeTab === 'dedup' && (
              <div className="space-y-4">
                <h4 className="font-semibold text-slate-200 text-sm flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Multi-Source Evidence Base & Canonical Deduplication
                </h4>

                <div>
                  <span className="text-slate-400 block mb-2 font-medium text-[11px]">Researched Reputable Sources (8 Roadmaps):</span>
                  <div className="flex flex-wrap gap-2">
                    {report.reputableSourcesResearched.map((src, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-900 text-cyan-300 border border-slate-800 font-mono text-[11px] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        {src}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-slate-400 block font-medium text-[11px]">Sample Canonical Deduplication Records:</span>
                  <div className="space-y-2">
                    {report.candidateDeduplicationExamples?.map((item, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
                        <div>
                          <span className="font-bold text-slate-100">{item.canonical}</span>
                          <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                            <span className="text-slate-400">Sources:</span>
                            {item.sourcesFound.map((s, sIdx) => (
                              <span key={sIdx} className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="sm:text-right shrink-0">
                          <span className="text-amber-400 font-mono font-semibold block">{item.evidenceScore}</span>
                          <span className="text-emerald-400 text-[10px] block">{item.action}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: REJECTIONS */}
            {activeTab === 'rejections' && (
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-200 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  Curation & Rejection Criteria
                </h4>
                <div className="space-y-2">
                  {report.keyRejectionReasons.map((reason, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-rose-950/60 text-slate-300 text-[11px] flex items-start gap-2.5">
                      <span className="font-mono text-rose-400 font-bold shrink-0">REJECTED #{idx + 1}:</span>
                      <span>{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
