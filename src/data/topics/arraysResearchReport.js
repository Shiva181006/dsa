export const ARRAYS_RESEARCH_REPORT = {
  topic: "Arrays & Dynamic Arrays",
  totalCandidatesEvaluated: 165,
  reputableSourcesResearched: [
    "LeetCode Top Interview 150",
    "Blind 75",
    "NeetCode 150 & NeetCode Roadmap",
    "Striver A2Z DSA Sheet",
    "Striver SDE Sheet",
    "GeeksforGeeks Frequently Asked Interview Questions",
    "InterviewBit Top Array Problems",
    "Coding Ninjas SDE Sheet"
  ],
  duplicatesRemovedCount: 42,
  patternsIdentified: [
    "Hash Map / Complement Lookup",
    "Two Pointers (Opposite & Fast/Slow)",
    "Sliding Window (Fixed & Variable)",
    "Prefix Sum & Prefix XOR",
    "Difference Arrays (Sweep Line)",
    "Kadane's & Circular Subarray Reasoning",
    "Dutch National Flag 3-Way Partitioning",
    "In-Place Index Placement / Cyclic Sort",
    "Monotonic Stack & Monotonic Deque",
    "2D Matrix Traversal & 2D Prefix Sum",
    "QuickSelect & Partition Algorithms",
    "Divide & Conquer Inversion Counting"
  ],
  difficultyDistribution: {
    easy: { selected: 15, candidatePoolSize: 45, percentage: "25.0%" },
    medium: { selected: 30, candidatePoolSize: 85, percentage: "50.0%" },
    hard: { selected: 15, candidatePoolSize: 35, percentage: "25.0%" }
  },
  tierDistribution: {
    mustDo: 40,
    important: 15,
    extended: 5
  },
  scoringFramework: {
    interviewRelevanceMax: 25,
    crossSourceEvidenceMax: 20,
    patternValueMax: 20,
    conceptImportanceMax: 10,
    learningValueMax: 10,
    uniquenessMax: 10,
    difficultyValueMax: 5,
    totalMax: 100
  },
  pipelineSteps: [
    "1. Candidate Pool Aggregation (165 raw candidates collected across 8 roadmaps)",
    "2. Title Normalization & Deduplication (42 duplicate/variant representations merged)",
    "3. Evidence Verification (Canonical URLs identified across LeetCode & GFG)",
    "4. Topic Purity Audit (Removed heap leakage like Sliding Window Median & DP Stock III/IV)",
    "5. 100-Point Metric Scoring (Evaluated on interview relevance, pattern value, evidence count)",
    "6. Pattern & Concept Coverage Balancing (Ensured non-redundant 12-pattern distribution)",
    "7. Intentional Difficulty Structuring (15 Easy -> 30 Medium -> 15 Hard distribution)",
    "8. Pedagogical Ordering (Concept setup -> Pattern variation -> Edge cases -> Hard optimization)",
    "9. Final Quality Audit (Credible company data, zero filler, verified JS solutions)"
  ],
  patternCoverageMap: [
    { pattern: "Two Pointers (Writer/Reader & Opposite)", selectedCount: 10, value: "In-place array manipulation & dual boundary search" },
    { pattern: "Prefix Sum, Modulo & 2D Prefix", selectedCount: 7, value: "Subarray sum counting, modulo congruence, 2D matrix query" },
    { pattern: "Hash Map / Set Lookup", selectedCount: 6, value: "O(N) time trade-off for O(N) space, sequence starters" },
    { pattern: "2D Matrix Traversal & Transforms", selectedCount: 5, value: "Boundary spiral iteration, 90-deg rotation, zero flags" },
    { pattern: "Sliding Window (Fixed & Variable)", selectedCount: 4, value: "Contiguous subarray sum, product, and minimum length" },
    { pattern: "Monotonic Stack & Monotonic Deque", selectedCount: 4, value: "Histogram area, sliding window max, shortest subarray sum" },
    { pattern: "In-Place Index Placement / Cyclic Sort", selectedCount: 3, value: "Constant space index mapping, missing numbers" },
    { pattern: "Kadane's & Circular Subarray", selectedCount: 3, value: "Dynamic programming linear state & circular subarray sum" },
    { pattern: "Greedy & Interval Optimization", selectedCount: 4, value: "Interval merging, end-time sorting, max reach" },
    { pattern: "Divide & Conquer / QuickSelect", selectedCount: 4, value: "Inversion counting, reverse pairs, order statistics" },
    { pattern: "Difference Array (Sweep Line)", selectedCount: 1, value: "O(1) range updates +V / -V and prefix sum capacity" },
    { pattern: "Prefix XOR & Frequency Map", selectedCount: 1, value: "Prefix bitwise XOR complement lookup for subarray count" }
  ],
  candidateDeduplicationExamples: [
    {
      canonical: "Two Sum",
      sourcesFound: ["LeetCode Top 150", "Blind 75", "NeetCode 150", "Striver SDE Sheet", "GFG", "InterviewBit"],
      evidenceScore: "Cross-source count: 6",
      action: "Selected as #1 Easy foundation"
    },
    {
      canonical: "Subarray XOR Equals K",
      sourcesFound: ["Striver SDE Sheet", "InterviewBit", "GeeksforGeeks"],
      evidenceScore: "Cross-source count: 3",
      action: "Selected as #54 Hard Prefix XOR anchor"
    },
    {
      canonical: "Maximum Sum Circular Subarray",
      sourcesFound: ["LeetCode Top 150", "NeetCode 150", "Striver A2Z"],
      evidenceScore: "Cross-source count: 3",
      action: "Selected as #44 Medium Circular Kadane anchor"
    }
  ],
  keyRejectionReasons: [
    "Topic leakage: Sliding Window Median removed (belongs to Heap / Priority Queue topic).",
    "Topic leakage: Stock III and Stock IV removed (belong to Dynamic Programming topic).",
    "Topic leakage: Minimum Window Substring removed (belongs to String + Sliding Window topic).",
    "Topic leakage: Task Scheduler removed (belongs to Greedy Scheduling topic).",
    "Redundant variation of existing problem (e.g. 4Sum rejected in favor of 3Sum and Subarray Sums Divisible by K)."
  ],
  selectionPrinciple: "If a student has limited time and wants to become interview-ready, these questions provide maximum interview coverage and teach the most important Array patterns with zero redundancy."
};
