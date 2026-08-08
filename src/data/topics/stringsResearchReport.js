export const STRINGS_RESEARCH_REPORT = {
  topic: "Strings & Pattern Matching",
  totalCandidatesEvaluated: 120,
  reputableSourcesResearched: [
    "LeetCode Top Interview 150",
    "Blind 75",
    "NeetCode 150",
    "Striver A2Z DSA Sheet",
    "Striver SDE Sheet",
    "GeeksforGeeks Frequently Asked String Questions",
    "InterviewBit Top String Problems"
  ],
  duplicatesRemovedCount: 28,
  crossoverRemovalsCount: 9,
  totalSelectedQuestions: 42,
  difficultyDistribution: {
    easy: { selected: 14, percentage: "33.3%" },
    medium: { selected: 22, percentage: "52.4%" },
    hard: { selected: 6, percentage: "14.3%" }
  },
  tierDistribution: {
    mustDo: 28,
    important: 10,
    extended: 4
  },
  pipelineSteps: [
    "1. Candidate Pool Aggregation (120 raw candidates across 7 roadmaps)",
    "2. Strict Topic-Purity Filtering (Removed Stack, DP, and Backtracking crossover problems)",
    "3. Single Minor Revision Replacement (Removed redundant LC 557 Reverse Words III; Added LC 451 Sort Characters By Frequency)",
    "4. Defensible Claims Verification (Re-homed LC 76 Minimum Window Substring from Arrays to Strings)",
    "5. Pattern Matrix Balancing (Mapped 10 core String patterns across 42 selected problems)",
    "6. Pedagogical Difficulty Structuring (14 Easy -> 22 Medium -> 6 Hard)",
    "7. Complete Canonical URL Verification (100% verified URLs across LeetCode & GFG)"
  ],
  patternCoverageMap: [
    { pattern: "Character Frequency Vector & Bucket Sorting", selectedCount: 9, value: "O(26) fixed array frequency counting, anagram grouping, and O(N) frequency bucket sorting" },
    { pattern: "Two Pointers (Opposite Inward & Reversal)", selectedCount: 5, value: "In-place string reversal, alphanumeric filtering, vowel swap" },
    { pattern: "String Sliding Window (Fixed & Variable)", selectedCount: 5, value: "Substrings without repeating chars, requirement match, minimum window" },
    { pattern: "Palindromic Center Expansion", selectedCount: 3, value: "2N-1 center expansion for odd/even palindromic substring count" },
    { pattern: "KMP Algorithm (LPS Array)", selectedCount: 3, value: "O(N + M) pattern matching and LPS table construction" },
    { pattern: "Deterministic State Machine Parsing", selectedCount: 4, value: "String to integer atoi, revision compare, Roman numerals" },
    { pattern: "Delimiter Length-Prefix Encoding", selectedCount: 2, value: "Safe string serialization without character escaping collision" },
    { pattern: "Rabin-Karp Rolling Hash", selectedCount: 2, value: "Polynomial rolling hash for fixed-size pattern search" },
    { pattern: "Bijective Map / Dual Mapping", selectedCount: 2, value: "Character-to-character and character-to-word bijection" },
    { pattern: "Character Contribution Mathematics", selectedCount: 1, value: "Index distance contribution calculation for substring uniqueness" }
  ],
  removedCrossoverQuestions: [
    { title: "Reverse Words in a String III", leetcodeId: "LC 557", canonicalHome: "Replaced", reason: "Substantially redundant with Reverse Words in a String (LC 151). Replaced by Sort Characters By Frequency (LC 451)." },
    { title: "Distinct Subsequences", leetcodeId: "LC 115", canonicalHome: "Dynamic Programming", reason: "Primary pattern is 2D State Matrix DP." },
    { title: "Regular Expression Matching", leetcodeId: "LC 10", canonicalHome: "Dynamic Programming", reason: "Primary pattern is 2D NFA state transition matrix." },
    { title: "Decode String", leetcodeId: "LC 394", canonicalHome: "Stack / Expression Evaluation", reason: "Primary pattern is Stack-based nested multiplier expansion." },
    { title: "Reverse Substrings Between Parentheses", leetcodeId: "LC 1190", canonicalHome: "Stack / Matching", reason: "Primary pattern is Stack-based bracket wormhole traversal." },
    { title: "Minimum Remove to Make Valid Parentheses", leetcodeId: "LC 1249", canonicalHome: "Stack / Balanced Brackets", reason: "Primary pattern is Stack index tracking for balanced bracket matching." },
    { title: "Restore IP Addresses", leetcodeId: "LC 93", canonicalHome: "Backtracking / DFS", reason: "Primary pattern is DFS search space partitioning." },
    { title: "Text Justification", leetcodeId: "LC 68", canonicalHome: "Greedy / Formatting Simulation", reason: "Dominant pattern is greedy line packing and whitespace padding." },
    { title: "Orderly Queue", leetcodeId: "LC 899", canonicalHome: "Math / Array Sorting", reason: "Dominant pattern is case analysis and full character array sorting." }
  ],
  defensibleStatements: {
    patternMatchingCoverage: "KMP (Knuth-Morris-Pratt) and Rabin-Karp cover the core explicit pattern-matching techniques commonly encountered in standard software engineering technical interviews.",
    exclusionPolicy: "Advanced multi-pattern structures like Aho-Corasick and Suffix Automata are intentionally excluded because they are lower-priority for the target interview-preparation scope.",
    redundancyPolicy: "No exact duplicate problems; controlled pattern overlap is intentionally retained to reinforce important String techniques across increasing difficulty."
  },
  remainingCurriculumGaps: [
    { gap: "Suffix Automata & Suffix Trees", status: "Intentionally Excluded", justification: "Exceeds standard software engineering interview scope." },
    { gap: "Aho-Corasick Automaton", status: "Intentionally Excluded", justification: "Competitive programming multi-pattern search, lower priority for standard hiring." }
  ]
};
