export const TWO_POINTERS_TOPIC_DATA = {
  id: "two-pointers",
  title: "Two Pointers & Sliding Window",
  category: "Algorithmic Paradigms",
  order: 4,
  description: "Converging pointers, same-direction read/write pointers, multi-pointer K-Sum search, fixed sliding windows, variable expand/shrink windows, and At-Most K transformations.",
  interviewWeight: 5,
  estimatedHours: 10,

  // SECTION 1 — TOPIC INTRODUCTION
  introduction: {
    whatIsIt: "Two Pointers and Sliding Window are fundamental linear-time O(N) search space reduction techniques. Two Pointers use dual index variables to traverse sequences from opposite ends or at varying speeds. Sliding Window maintains a dynamic or fixed subarray range [left, right] to track continuous sequence metrics in real time.",
    whyExists: "Naive evaluation of continuous subarrays or pairs requires O(N²) nested loops. Two Pointers and Sliding Window leverage array monotonicity, sorting, or cumulative state tracking to skip redundant search states, achieving optimal O(N) time and O(1) auxiliary space.",
    whenToUse: [
      "When working with sorted arrays or sequences requiring pair/triplet search (opposite-direction pointers).",
      "When modifying arrays in-place (same-direction read/write pointers).",
      "When finding the maximum, minimum, or count of contiguous subarrays/substrings satisfying a condition (sliding window).",
      "When a problem specifies fixed range sizes K or distinct element counts.",
      "When transforming 'Exactly K' subarray queries into AtMost(K) - AtMost(K-1) sliding window differences."
    ],
    whenNotToUse: [
      "When array order cannot be preserved and problem requires non-contiguous random elements — use Hash Maps or Dynamic Programming.",
      "When input contains arbitrary negative numbers without monotonic properties for subarray sum queries — use Prefix Sum + Hash Map instead of simple variable sliding window.",
      "When graph traversal or tree paths are involved — use BFS / DFS."
    ],
    realWorldUseCases: [
      "Network Packet Buffer Flow Control: Sliding window protocols (TCP) adjust transmission window boundaries based on receiver ack capacity.",
      "Database Stream Processing: Real-time window aggregations (e.g. 5-minute rolling average stock ticks in Apache Flink or Kafka).",
      "Memory Allocation & Garbage Collection: Two-pointer mark-and-compact garbage collection algorithms for contiguous heap compaction.",
      "Media Streaming & Video Decoding: Frame rate buffer windows maintaining continuous playback buffer bounds."
    ],
    interviewRelevance: "Two Pointers and Sliding Window represent ~30% of technical interview questions at top technology companies (Meta, Amazon, Google, Microsoft). Common interview patterns include Opposite-Direction Pair Matching, In-Place Compaction, Fixed Window Aggregations, Variable Window Expand/Shrink, and the Exact(K) = AtMost(K) - AtMost(K-1) transformation."
  },

  // SECTION 2 — CORE CONCEPTS
  coreConcepts: [
    {
      title: "Opposite-Direction Converging Pointers",
      explanation: "Pointers start at outer boundaries (`left = 0`, `right = N - 1`) and move inward based on comparison logic. On sorted inputs, if `sum < target`, `left++` increases sum; if `sum > target`, `right--` decreases sum.",
      keyTakeaway: "Reduces O(N²) nested pair evaluation to linear O(N) time on sorted arrays."
    },
    {
      title: "Same-Direction Read/Write Pointers",
      explanation: "Two pointers move forward together. The `read` pointer scans every input element while the `write` pointer writes valid elements to their destination position in-place.",
      keyTakeaway: "Enables O(N) time and O(1) auxiliary space in-place array modification and deduplication."
    },
    {
      title: "Fixed-Size Sliding Window",
      explanation: "Maintains a fixed range of size K (`right - left + 1 === K`). As `right` advances, `incoming` element `nums[right]` is added to window state and `outgoing` element `nums[left]` is subtracted, updating state in O(1) time.",
      keyTakeaway: "Computes rolling metrics across all size-K subarrays in O(N) total time."
    },
    {
      title: "Variable-Size Sliding Window (Expand & Shrink)",
      explanation: "Expands `right` to include elements. When window state violates the problem constraint, `left` contracts until validity is restored. Tracks `maxLen = Math.max(maxLen, right - left + 1)`.",
      keyTakeaway: "Locates optimal contiguous subarray boundaries in a single O(N) pass."
    },
    {
      title: "At-Most K Subarray Transformation Framework",
      explanation: "Directly counting subarrays with 'Exactly K distinct elements' is difficult because contracting `left` can break valid windows. Instead, compute `Exact(K) = AtMost(K) - AtMost(K - 1)`.",
      keyTakeaway: "Converts complex exact-count subarray queries into two simple monotonic sliding window functions."
    },
    {
      title: "Monotonic Deque Window Optimization",
      explanation: "When tracking window maximum/minimum under non-monotonic or negative inputs, maintain a Monotonic Deque storing indices in decreasing/increasing order of values.",
      keyTakeaway: "Provides O(1) access to window extrema while sliding."
    }
  ],

  // SECTION 3 — JAVASCRIPT IMPLEMENTATION PATTERNS
  jsImplementation: {
    overview: "Mastering JS pointer manipulation and sliding window templates enables clean, error-free interview coding.",
    methods: [
      {
        method: "Converging Pointers Template",
        description: "Standard opposite direction setup.",
        timeComplexity: "O(N)",
        spaceComplexity: "O(1)",
        dsaUseCase: "Sorted array pair search, palindrome check, area maximization.",
        avoidWhen: "Do not use on unsorted arrays unless sorting step O(N log N) is acceptable.",
        codeExample: "let left = 0, right = arr.length - 1;\nwhile (left < right) {\n  const sum = arr[left] + arr[right];\n  if (sum === target) return [left, right];\n  else if (sum < target) left++;\n  else right--;\n}"
      },
      {
        method: "Variable Sliding Window Template",
        description: "Expand right, shrink left when invalid.",
        timeComplexity: "O(N)",
        spaceComplexity: "O(K) or O(1)",
        dsaUseCase: "Longest subarray with at most K distinct/zeros/flips.",
        avoidWhen: "Avoid when subarray elements contain negative numbers without monotonic properties.",
        codeExample: "let left = 0, maxLen = 0;\nfor (let right = 0; right < arr.length; right++) {\n  add(arr[right]);\n  while (isInvalid()) {\n    remove(arr[left]);\n    left++;\n  }\n  maxLen = Math.max(maxLen, right - left + 1);\n}"
      },
      {
        method: "At-Most K Subarray Counting Template",
        description: "Returns count of subarrays with at most K elements.",
        timeComplexity: "O(N)",
        spaceComplexity: "O(K)",
        dsaUseCase: "Counting subarrays with exact K properties via atMost(K) - atMost(K-1).",
        avoidWhen: "N/A",
        codeExample: "function atMost(k) {\n  let left = 0, count = 0;\n  for (let right = 0; right < arr.length; right++) {\n    updateState(arr[right]);\n    while (stateInvalid(k)) {\n      removeState(arr[left]);\n      left++;\n    }\n    count += (right - left + 1);\n  }\n  return count;\n}"
      }
    ]
  },

  // SECTION 4 — COMPLEXITY MATRIX
  matrix: [
    { operation: "Opposite Two Pointers", jsSyntax: "left++, right--", timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewNotes: "Requires sorted array or boundary convergence." },
    { operation: "Same-Direction Read/Write", jsSyntax: "arr[write++] = arr[read]", timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewNotes: "In-place compaction without allocating new arrays." },
    { operation: "Fixed Sliding Window", jsSyntax: "right++, left++ (fixed width K)", timeComplexity: "O(N)", spaceComplexity: "O(1) / O(K)", interviewNotes: "O(1) state update per step." },
    { operation: "Variable Sliding Window", jsSyntax: "right++ loop, while(invalid) left++", timeComplexity: "O(N) Amortized", spaceComplexity: "O(K)", interviewNotes: "Each index is visited at most twice (once by right, once by left)." },
    { operation: "At-Most K Transformation", jsSyntax: "atMost(K) - atMost(K-1)", timeComplexity: "O(N)", spaceComplexity: "O(K)", interviewNotes: "Runs variable sliding window pass twice." }
  ],

  // SECTION 5 — VISUAL EXPLANATIONS
  visuals: [
    {
      title: "Opposite Two Pointers Converging",
      asciiDiagram: `
Array: [ 1,   3,   5,   7,   11,  15 ]  Target = 12
        ^                         ^
       left                      right (sum = 16 > 12 -> right--)

Array: [ 1,   3,   5,   7,   11,  15 ]
        ^                   ^
       left                right (sum = 12 === 12 -> MATCH!)
      `,
      explanation: "Opposite pointers start at array ends. Comparing sum with target determines whether left advances or right retreats."
    },
    {
      title: "Variable Sliding Window Expansion & Contraction",
      asciiDiagram: `
Window: [ 1,  0,  1,  1,  0 ]  Max 1 zero allowed (K = 1)
Index:    0   1   2   3   4

[1, 0, 1, 1] -> Zeros = 1 <= 1 (Valid, Len = 4)
Expand right to 4 (0):
[1, 0, 1, 1, 0] -> Zeros = 2 > 1 (INVALID!)
Shrink left past first zero to restore validity:
      [1, 1, 0] -> Zeros = 1 <= 1 (Valid again!)
      `,
      explanation: "Expand `right` until constraint breaks, then shrink `left` until validity is restored."
    }
  ],

  // SECTION 6 — PATTERNS
  patterns: [
    {
      name: "Opposite Direction Converging Pointers",
      complexityImpact: "Reduces O(N²) nested loops to O(N) time and O(1) space",
      howToRecognize: ["Sorted array input", "Finding pairs or triplets matching target sum", "Boundary containment (e.g. Container With Most Water)"],
      whyItWorks: "Monotonic sorted order guarantees that moving left increases sum while moving right decreases sum.",
      exampleProblemTitle: "4Sum (LC 18), Valid Triangle Number (LC 611), Boats to Save People (LC 881)",
      jsTemplate: `let left = 0, right = arr.length - 1;
while (left < right) {
  if (condition) left++;
  else right--;
}`
    },
    {
      name: "Variable Sliding Window (Expand / Shrink)",
      complexityImpact: "Finds optimal subarray boundaries in linear O(N) amortized time",
      howToRecognize: ["Continuous subarray or substring problem", "Maximize/minimize length under constraint"],
      whyItWorks: "Expanding right adds elements; shrinking left restores valid state without re-evaluating internal elements.",
      exampleProblemTitle: "Max Consecutive Ones III (LC 1004), Fruit Into Baskets (LC 904)",
      jsTemplate: `let left = 0, maxLen = 0;
for (let right = 0; right < arr.length; right++) {
  // update state
  while (invalid()) {
    // shrink left
    left++;
  }
  maxLen = Math.max(maxLen, right - left + 1);
}`
    },
    {
      name: "At-Most K Subarray Transformation",
      complexityImpact: "Converts intractable Exact(K) subarray counts into O(N) linear window subtractions",
      howToRecognize: ["Count subarrays with EXACTLY K distinct elements / odd numbers / conditions"],
      whyItWorks: "Exact(K) = AtMost(K) - AtMost(K - 1) because AtMost(K) includes all valid configurations up to K.",
      exampleProblemTitle: "Subarrays with K Different Integers (LC 992), Count Nice Subarrays (LC 1248)",
      jsTemplate: `function numSubarraysWithExactK(arr, k) {
  return atMost(arr, k) - atMost(arr, k - 1);
}`
    }
  ],

  // SECTION 7 — EXAMPLE TEACHING WALKTHROUGHS
  examples: [
    {
      title: "Teaching Example — Max Consecutive Ones III (LC 1004)",
      problem: "Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.",
      bruteForce: {
        time: "O(N²)",
        space: "O(1)",
        explanation: "Check all possible subarrays [i..j], counting zeros in each subarray.",
        code: `function bruteForce(nums, k) {
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    let zeros = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] === 0) zeros++;
      if (zeros <= k) maxLen = Math.max(maxLen, j - i + 1);
    }
  }
  return maxLen;
}`
      },
      optimized: {
        time: "O(N)",
        space: "O(1)",
        explanation: "Maintain sliding window [left, right]. Increment zero count on 0. Shrink left when zeros > k.",
        code: `function longestOnes(nums, k) {
  let left = 0, zeroCount = 0, maxLen = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;
    while (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}`
      },
      whyOptimizedWorks: "Each element is processed at most twice (once by right, once by left), yielding linear O(N) time."
    }
  ],

  // SECTION 8 — COMMON PITFALLS & MISTAKES
  mistakes: [
    {
      mistake: "Applying Variable Sliding Window on Arrays with Negative Numbers",
      whyItHappens: "Expanding a window over negative numbers does not guarantee monotonic sum growth.",
      howToAvoid: "Use Prefix Sum + Hash Map (or Monotonic Deque LC 862) when array contains negative numbers.",
      codeSnippet: `// WRONG: Simple sliding window on array with negative numbers!`
    },
    {
      mistake: "Off-By-One Errors in Window Length Calculation",
      whyItHappens: "Forgetting that array window length from index left to right is (right - left + 1).",
      howToAvoid: "Always use (right - left + 1) for inclusive 0-indexed window length.",
      codeSnippet: `const windowLen = right - left + 1; // Correct!`
    },
    {
      mistake: "Forgetting to Shrink Window inside While Loop",
      whyItHappens: "Using an if statement instead of a while loop when shrinking left pointer, leaving invalid states.",
      howToAvoid: "Use `while (invalid)` to ensure window is completely valid before updating answer.",
      codeSnippet: `while (zeros > k) { if (nums[left] === 0) zeros--; left++; }`
    }
  ],

  // SECTION 9 — REVISION CHEAT SHEET
  cheatSheet: {
    formulas: [
      "Window Length: length = right - left + 1",
      "Exact K Subarrays: Exact(K) = AtMost(K) - AtMost(K - 1)",
      "Valid Subarrays ending at right: count += (right - left + 1)",
      "Inverted Window Sum: targetSum = totalSum - X"
    ],
    recognitionTriggers: [
      "Sorted array + pair target -> Opposite Two Pointers",
      "In-place compaction -> Read/Write Two Pointers",
      "Fixed range size K -> Fixed Sliding Window",
      "Subarray with at most K condition -> Variable Sliding Window",
      "Subarray with exactly K condition -> AtMost(K) - AtMost(K - 1)"
    ],
    jsProTips: [
      "Use `left++` inside while loops for clean state eviction.",
      "Use `Math.max(maxLen, right - left + 1)` after restoring window validity.",
      "For string windows, array of size 128 `new Array(128).fill(0)` gives O(1) frequency checks."
    ],
    edgeCasesToTest: [
      "Array length smaller than window size K",
      "K = 0 or maxCost = 0 constraints",
      "All identical elements vs all distinct elements",
      "Pointers crossing bounds"
    ]
  }
};
