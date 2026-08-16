export const HASHING_RESEARCH_REPORT = {
  topic: "Hashing & Hash Tables",
  revision: "3.0 Expansion Audit (Approved)",
  stats: {
    totalCandidatesEvaluated: 54,
    finalSelectedCount: 30,
    difficultyBreakdown: {
      easy: 9,
      medium: 17,
      hard: 4
    },
    tierBreakdown: {
      tier1MustDo: 18,
      tier2StronglyRecommended: 8,
      tier3AdvancedExtension: 4
    }
  },
  collisionsVerified: {
    arraysCollisions: 0,
    stringsCollisions: 0,
    status: "100% Cleared & Frozen"
  },
  additionsInExpansion: [
    { title: "Find the Difference of Two Arrays (LC 2215)", difficulty: "Easy", pattern: "HashSet Relative Complement", tier: "Tier 1" },
    { title: "Group the People Given the Group Size (LC 1282)", difficulty: "Medium", pattern: "HashMap Grouping / Dynamic Bucket Slicing", tier: "Tier 2" },
    { title: "Bulls and Cows (LC 299)", difficulty: "Medium", pattern: "Dual Multi-Inventory Frequency Comparison", tier: "Tier 2" },
    { title: "Copy List with Random Pointer (LC 138)", difficulty: "Medium", pattern: "HashMap Object Reference Mapping", tier: "Tier 1" },
    { title: "Design Underground System (LC 1396)", difficulty: "Medium", pattern: "Dual HashMap System State Tracking", tier: "Tier 2" },
    { title: "Avoid Flood in The City (LC 1488)", difficulty: "Hard", pattern: "Last-Seen Index Map + Greedy Search", tier: "Tier 3" }
  ]
};
