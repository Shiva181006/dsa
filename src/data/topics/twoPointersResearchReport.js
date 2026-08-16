export const TWO_POINTERS_RESEARCH_REPORT = {
  topic: "Two Pointers & Sliding Window",
  revision: "1.0 Final Micro-Audit & Implementation",
  stats: {
    totalCandidatesEvaluated: 48,
    finalSelectedCount: 28,
    difficultyBreakdown: {
      easy: 6,
      medium: 19,
      hard: 3
    },
    tierBreakdown: {
      tier1MustDo: 15,
      tier2StronglyRecommended: 10,
      tier3AdvancedExtension: 3
    }
  },
  collisionsVerified: {
    frozenBaselineCount: 132,
    arraysCollisions: 0,
    stringsCollisions: 0,
    hashingCollisions: 0,
    status: "100% Cleared & Frozen"
  },
  auditDecisions: [
    { title: "Sliding Window Median (LC 480)", verdict: "Removed", reason: "Primary algorithm is Dual Heap / Priority Queue dynamic median maintenance. Sliding window is incidental." },
    { title: "Shortest Distance to a Character (LC 821)", verdict: "Removed", reason: "Directional array sweep / prefix-suffix preprocessing, not genuine pointer/window state management." },
    { title: "Reverse Vowels of a String (LC 345)", verdict: "Added (Replacement for LC 821)", reason: "Pure converging opposite-direction two pointers swapping vowels in O(N) time and O(1) space." },
    { title: "Maximum Erasure Value (LC 1695)", verdict: "Added (Replacement for LC 480)", reason: "Pure variable sliding window with Set tracking max sum continuous subarray with unique elements." },
    { title: "Continuous Subarrays (LC 2762)", verdict: "Retained (Medium)", reason: "Official LeetCode Medium. Variable sliding window with dual monotonic deques maintaining max - min <= 2." }
  ]
};
