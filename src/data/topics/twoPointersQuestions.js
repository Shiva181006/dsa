export const TWO_POINTERS_QUESTIONS = [
  // ==========================================
  // EASY QUESTIONS (6)
  // ==========================================
  {
    id: "tp-easy-01",
    title: "Is Subsequence",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Same-Direction Dual String Pointer",
    difficulty: "Easy",
    learningOrder: 1,
    importanceTier: "must-do",
    pattern: "Same-Direction Dual String Pointer",
    patterns: ["Same-Direction Dual String Pointer", "String Matching"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/is-subsequence/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/given-two-strings-find-first-string-subsequence-second/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Blind 75", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 24, crossSourceEvidence: 19, patternValue: 18, conceptImportance: 8, learningValue: 8, uniqueness: 7, difficultyValue: 5, totalScore: 89 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Amazon", "Google", "Meta", "TCS"],
    problemSummary: "Given two strings s and t, return true if s is a subsequence of t, or false otherwise.",
    whySolveThis: {
      importanceReason: "The foundational dual same-direction string pointer problem. Teaches scanning two sequences at different speeds.",
      keySkills: ["Dual string pointer tracking", "Sequential character matching", "Early termination logic"]
    },
    hints: [
      "Use pointer i for s and pointer j for t.",
      "If s[i] === t[j], advance pointer i.",
      "Always advance pointer j.",
      "If i reaches s.length, return true."
    ],
    approach: {
      bruteForceSummary: "Generate all 2^N subsequences of t and search for s. Exponential O(2^N) time.",
      optimalStrategy: "Two pointers i and j. Advance i when characters match; advance j on every step.",
      patternUsed: "Dual String Pointer Sweep"
    },
    solutionJS: `function isSubsequence(s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
}`,
    complexity: {
      time: "O(N) time complexity where N is t.length.",
      space: "O(1) auxiliary space.",
      explanation: "Single pass over target string t with constant time character comparisons."
    },
    edgeCases: ["s is empty string (returns true)", "t is empty string", "s longer than t"],
    commonMistakes: "Advancing both pointers simultaneously regardless of character match.",
    interviewTakeaway: "Same-direction dual pointers evaluate subsequence matching in linear time without extra space."
  },
  {
    id: "tp-easy-02",
    title: "Sort Array By Parity",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "In-Place Partitioning Pointers",
    difficulty: "Easy",
    learningOrder: 2,
    importanceTier: "must-do",
    pattern: "In-Place Partitioning Pointers",
    patterns: ["In-Place Partitioning Pointers", "Opposite Direction"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/sort-array-by-parity/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/segregate-even-and-odd-numbers/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 22, crossSourceEvidence: 17, patternValue: 19, conceptImportance: 8, learningValue: 8, uniqueness: 8, difficultyValue: 5, totalScore: 87 },
    importance: 4,
    interviewFrequency: 3,
    companies: ["Amazon", "Google", "Meta", "TCS"],
    problemSummary: "Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.",
    whySolveThis: {
      importanceReason: "Teaches in-place 2-way array partitioning using converging pointers without extra memory allocation.",
      keySkills: ["In-place element swapping", "Parity condition check (% 2 === 0)", "Converging pointer boundary shrink"]
    },
    hints: [
      "Use `left = 0` and `right = nums.length - 1`.",
      "If nums[left] is odd and nums[right] is even, swap them.",
      "If nums[left] is even, increment left. If nums[right] is odd, decrement right."
    ],
    approach: {
      bruteForceSummary: "Allocate two separate arrays for evens and odds, then concatenate. O(N) extra space.",
      optimalStrategy: "In-place converging pointers left and right. Swap misaligned odd/even elements.",
      patternUsed: "Converging Partition Pointers"
    },
    solutionJS: `function sortArrayByParity(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] % 2 > nums[right] % 2) {
      // Swap odd at left with even at right
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
    }

    if (nums[left] % 2 === 0) left++;
    if (nums[right] % 2 === 1) right--;
  }

  return nums;
}`,
    complexity: {
      time: "O(N) time complexity for single pass over nums.",
      space: "O(1) auxiliary space (in-place modification).",
      explanation: "Pointers left and right meet in the middle in N/2 iterations max."
    },
    edgeCases: ["Array with all evens", "Array with all odds", "Single element array"],
    commonMistakes: "Not checking left < right inside inner pointer increments.",
    interviewTakeaway: "Partitioning two categories in-place requires converging pointers and element swapping."
  },
  {
    id: "tp-easy-03",
    title: "Sort Array By Parity II",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Dual Interleaved Pointers (Even/Odd)",
    difficulty: "Easy",
    learningOrder: 3,
    importanceTier: "strongly-recommended",
    pattern: "Dual Interleaved Pointers (Even/Odd)",
    patterns: ["Dual Interleaved Pointers (Even/Odd)", "Stride-2 Pointers"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/sort-array-by-parity-ii/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/even-numbers-at-even-index-and-odd-numbers-at-odd-index/" }
    ],
    crossSource: {
      sourceCount: 3,
      sources: ["LeetCode Top 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 20, crossSourceEvidence: 16, patternValue: 18, conceptImportance: 7, learningValue: 8, uniqueness: 7, difficultyValue: 5, totalScore: 81 },
    importance: 3,
    interviewFrequency: 3,
    companies: ["Amazon", "Infosys", "Cognizant"],
    problemSummary: "Given an array of integers nums of even length where half the integers are even and half are odd, sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.",
    whySolveThis: {
      importanceReason: "Teaches dual stride-2 pointers operating independently on even and odd array indices.",
      keySkills: ["Stride-2 pointer incrementing (+2)", "Index parity alignment", "In-place swapping"]
    },
    hints: [
      "Maintain `evenIdx = 0` and `oddIdx = 1`.",
      "Advance `evenIdx` by 2 until you find an odd number.",
      "Advance `oddIdx` by 2 until you find an even number.",
      "Swap `nums[evenIdx]` and `nums[oddIdx]`."
    ],
    approach: {
      bruteForceSummary: "Allocate fresh result array, fill even indices and odd indices. O(N) space.",
      optimalStrategy: "In-place stride-2 dual pointers. `evenIdx` steps by 2, `oddIdx` steps by 2. Swap misaligned numbers.",
      patternUsed: "Dual Stride Pointers"
    },
    solutionJS: `function sortArrayByParityII(nums) {
  let evenIdx = 0;
  let oddIdx = 1;
  const n = nums.length;

  while (evenIdx < n && oddIdx < n) {
    while (evenIdx < n && nums[evenIdx] % 2 === 0) {
      evenIdx += 2;
    }
    while (oddIdx < n && nums[oddIdx] % 2 === 1) {
      oddIdx += 2;
    }

    if (evenIdx < n && oddIdx < n) {
      const temp = nums[evenIdx];
      nums[evenIdx] = nums[oddIdx];
      nums[oddIdx] = temp;
    }
  }

  return nums;
}`,
    complexity: {
      time: "O(N) time complexity for single pass.",
      space: "O(1) auxiliary space (in-place).",
      explanation: "evenIdx and oddIdx advance through the array in step sizes of 2."
    },
    edgeCases: ["Array already correctly aligned", "Alternating even/odd input"],
    commonMistakes: "Incrementing pointers by 1 instead of 2, breaking index parity alignment.",
    interviewTakeaway: "Use stride-K pointers to enforce index position constraints in-place."
  },
  {
    id: "tp-easy-04",
    title: "Backspace String Compare",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Reverse Traversal Skip Pointers",
    difficulty: "Easy",
    learningOrder: 4,
    importanceTier: "must-do",
    pattern: "Reverse Traversal Skip Pointers",
    patterns: ["Reverse Traversal Skip Pointers", "Two Pointers"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/backspace-string-compare/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-if-two-strings-after-processing-backspaces-are-equal/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Blind 75", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 24, crossSourceEvidence: 19, patternValue: 20, conceptImportance: 9, learningValue: 9, uniqueness: 8, difficultyValue: 5, totalScore: 94 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Google", "Amazon", "Meta", "Microsoft"],
    problemSummary: "Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.",
    whySolveThis: {
      importanceReason: "Masterclass problem demonstrating how scanning backwards with skip counters eliminates Stack allocation, achieving O(1) auxiliary space.",
      keySkills: ["Reverse string pointer scanning", "Skip counter management", "O(1) space string comparison"]
    },
    hints: [
      "Scan strings s and t backwards starting from the last index.",
      "If you see '#', increment skip counter. If you see a character and skip > 0, decrement skip counter.",
      "Compare actual valid characters from s and t from right to left."
    ],
    approach: {
      bruteForceSummary: "Build clean strings using Stack data structure. O(N + M) time and O(N + M) space.",
      optimalStrategy: "Two pointers scanning backwards with skip counters `skipS` and `skipT`. Compare characters in O(1) space.",
      patternUsed: "Reverse Traversal Skip Pointers"
    },
    solutionJS: `function backspaceCompare(s, t) {
  let i = s.length - 1;
  let j = t.length - 1;
  let skipS = 0;
  let skipT = 0;

  while (i >= 0 || j >= 0) {
    // Find next valid character in s
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else {
        break;
      }
    }

    // Find next valid character in t
    while (j >= 0) {
      if (t[j] === '#') {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else {
        break;
      }
    }

    // Compare characters
    if (i >= 0 && j >= 0 && s[i] !== t[j]) {
      return false;
    }
    if ((i >= 0) !== (j >= 0)) {
      return false;
    }

    i--;
    j--;
  }

  return true;
}`,
    complexity: {
      time: "O(N + M) time complexity for single backward pass.",
      space: "O(1) auxiliary space.",
      explanation: "Pointers i and j move strictly leftward from end to start without extra string allocation."
    },
    edgeCases: ["Strings with all '#' characters", "Backspaces at index 0", "Empty resulting strings"],
    commonMistakes: "Scanning forwards instead of backwards, making skip tracking complex.",
    interviewTakeaway: "Traversing strings backwards with skip counters evaluates backspaces in O(1) auxiliary space."
  },
  {
    id: "tp-easy-05",
    title: "Reverse Vowels of a String",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Converging Opposite Two Pointers",
    difficulty: "Easy",
    learningOrder: 5,
    importanceTier: "must-do",
    pattern: "Converging Opposite Two Pointers",
    patterns: ["Converging Opposite Two Pointers", "In-Place Reversal"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/reverse-vowels-of-a-string/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/reverse-vowels-given-string/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 22, crossSourceEvidence: 17, patternValue: 18, conceptImportance: 8, learningValue: 8, uniqueness: 7, difficultyValue: 5, totalScore: 85 },
    importance: 4,
    interviewFrequency: 3,
    companies: ["Amazon", "Meta", "Google", "TCS"],
    problemSummary: "Given a string s, reverse only all the vowels in the string and return it. Vowels are 'a', 'e', 'i', 'o', 'u' in both lower and upper cases.",
    whySolveThis: {
      importanceReason: "Teaches standard opposite-direction converging pointers with character condition checking on string/char arrays.",
      keySkills: ["Char array conversion", "Vowel Set/Lookup check", "In-place pointer swapping"]
    },
    hints: [
      "Convert string to character array for in-place modifications.",
      "Use `left = 0` and `right = s.length - 1`.",
      "Advance left while s[left] is not a vowel; decrement right while s[right] is not a vowel.",
      "Swap vowels when both pointers land on vowels."
    ],
    approach: {
      bruteForceSummary: "Extract vowels to array, reverse array, replace vowels in string. O(N) space.",
      optimalStrategy: "Convert string to char array. Converging pointers left and right skip non-vowels and swap vowels in-place.",
      patternUsed: "Converging Pointer Swapping"
    },
    solutionJS: `function reverseVowels(s) {
  const chars = s.split('');
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }
    while (left < right && !vowels.has(chars[right])) {
      right--;
    }

    if (left < right) {
      const temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;
      left++;
      right--;
    }
  }

  return chars.join('');
}`,
    complexity: {
      time: "O(N) time complexity for single pass.",
      space: "O(N) space for character array conversion.",
      explanation: "Pointers left and right meet in the middle in N/2 iterations max."
    },
    edgeCases: ["String with no vowels", "String with all vowels", "Single character string"],
    commonMistakes: "Forgetting to handle uppercase vowels ('A', 'E', 'I', 'O', 'U').",
    interviewTakeaway: "Converging pointers efficiently reverse targeted subset elements in linear time."
  },
  {
    id: "tp-easy-06",
    title: "Maximum Number of Vowels in a Substring of Given Length",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Fixed Sliding Window Frequency",
    difficulty: "Easy",
    learningOrder: 6,
    importanceTier: "must-do",
    pattern: "Fixed Sliding Window Frequency",
    patterns: ["Fixed Sliding Window Frequency", "Fixed Sliding Window"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/maximum-number-of-vowels-in-a-substring-of-given-length/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 23, crossSourceEvidence: 18, patternValue: 19, conceptImportance: 8, learningValue: 8, uniqueness: 8, difficultyValue: 5, totalScore: 89 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Amazon", "Microsoft", "Google"],
    problemSummary: "Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.",
    whySolveThis: {
      importanceReason: "The canonical demonstration of Fixed Sliding Window of size K. Teaches adding incoming element and removing outgoing element in O(1) time.",
      keySkills: ["Fixed window maintenance", "Incremental state update (+incoming, -outgoing)", "Early termination optimization"]
    },
    hints: [
      "Compute vowel count for the first window of size k (indices 0 to k-1).",
      "Slide the window from index k to s.length - 1.",
      "Add 1 if incoming character `s[i]` is a vowel; subtract 1 if outgoing character `s[i - k]` was a vowel."
    ],
    approach: {
      bruteForceSummary: "Check all substrings of length k, counting vowels. O(N * K) time.",
      optimalStrategy: "Maintain fixed window of size k. Update vowel count incrementally in O(1) time per shift.",
      patternUsed: "Fixed Sliding Window"
    },
    solutionJS: `function maxVowels(s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let currentVowels = 0;

  // Build initial window of size k
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      currentVowels++;
    }
  }

  let maxVowelCount = currentVowels;

  // Slide window from k to s.length - 1
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) currentVowels++;     // Add incoming
    if (vowels.has(s[i - k])) currentVowels--; // Remove outgoing

    maxVowelCount = Math.max(maxVowelCount, currentVowels);
    if (maxVowelCount === k) return k; // Early optimization
  }

  return maxVowelCount;
}`,
    complexity: {
      time: "O(N) time complexity for single pass over string s.",
      space: "O(1) auxiliary space (fixed set of 5 vowels).",
      explanation: "Initial window takes O(K), sliding pass takes O(N - K) with O(1) updates per index."
    },
    edgeCases: ["k equals s.length", "s contains no vowels", "k = 1"],
    commonMistakes: "Re-counting vowels across the entire window of size k on every step resulting in O(N * K) time.",
    interviewTakeaway: "Fixed sliding windows calculate rolling range metrics in linear O(N) time via incremental updates."
  },

  // ==========================================
  // MEDIUM QUESTIONS (19)
  // ==========================================
  {
    id: "tp-medium-01",
    title: "Remove Duplicates from Sorted Array II",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Same-Direction Read/Write Pointer (K=2)",
    difficulty: "Medium",
    learningOrder: 7,
    importanceTier: "must-do",
    pattern: "Same-Direction Read/Write Pointer (K=2)",
    patterns: ["Same-Direction Read/Write Pointer (K=2)", "In-Place Compaction"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/remove-duplicates-sorted-array-allow-at-most-k-duplicates/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Blind 75", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 24, crossSourceEvidence: 19, patternValue: 21, conceptImportance: 9, learningValue: 9, uniqueness: 8, difficultyValue: 7, totalScore: 93 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Meta", "Amazon", "Microsoft", "Google"],
    problemSummary: "Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. Return the new length of nums.",
    whySolveThis: {
      importanceReason: "Generalizes in-place read/write pointers to arbitrary duplicate tolerances ($K = 2$) via `nums[write - 2] !== nums[read]` condition.",
      keySkills: ["Read/write pointer management", "Tolerance condition `nums[write - K] !== nums[read]`", "In-place array overwrite"]
    },
    hints: [
      "If array length is <= 2, return nums.length.",
      "Maintain `write = 2` pointer for destination position.",
      "Iterate `read = 2` to nums.length - 1.",
      "If `nums[read] !== nums[write - 2]`, write element `nums[write] = nums[read]` and increment `write`."
    ],
    approach: {
      bruteForceSummary: "Splice elements from array when frequency exceeds 2. O(N²) time due to array shifting.",
      optimalStrategy: "Two pointers read and write. Compare current element with nums[write - 2] to enforce at-most-2 duplicate tolerance in O(N) time.",
      patternUsed: "Read/Write Pointer with Tolerance K"
    },
    solutionJS: `function removeDuplicates(nums) {
  if (nums.length <= 2) return nums.length;

  let write = 2;

  for (let read = 2; read < nums.length; read++) {
    if (nums[read] !== nums[write - 2]) {
      nums[write] = nums[read];
      write++;
    }
  }

  return write;
}`,
    complexity: {
      time: "O(N) time complexity for single pass over nums.",
      space: "O(1) auxiliary space (in-place modification).",
      explanation: "Read pointer iterates once from index 2 to N-1 with constant time comparisons and writes."
    },
    edgeCases: ["Array length <= 2", "All elements identical", "No duplicates present"],
    commonMistakes: "Comparing `nums[read]` with `nums[read - 2]` instead of `nums[write - 2]`.",
    interviewTakeaway: "To allow at most K duplicates in-place on a sorted array, write when `nums[read] !== nums[write - K]`."
  },
  {
    id: "tp-medium-02",
    title: "4Sum",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "K-Sum Multi-Pointer Convergence",
    difficulty: "Medium",
    learningOrder: 8,
    importanceTier: "must-do",
    pattern: "K-Sum Multi-Pointer Convergence",
    patterns: ["K-Sum Multi-Pointer Convergence", "Opposite Direction"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/4sum/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-four-elements-that-sum-to-a-given-value-set-2/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Striver SDE Sheet", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 19, patternValue: 22, conceptImportance: 9, learningValue: 10, uniqueness: 8, difficultyValue: 7, totalScore: 95 },
    importance: 5,
    interviewFrequency: 4,
    companies: ["Amazon", "Meta", "Google", "Apple"],
    problemSummary: "Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that nums[a] + nums[b] + nums[c] + nums[d] == target.",
    whySolveThis: {
      importanceReason: "Completes the N-Sum pointer sequence (2Sum -> 3Sum -> 4Sum). Teaches multi-pointer nested search with duplicate skipping.",
      keySkills: ["Sorting + multi-pointer search", "Duplicate quadruplet pruning", "64-bit integer overflow protection"]
    },
    hints: [
      "Sort the input array nums.",
      "Use two nested loops for indices i and j.",
      "Use two converging pointers `left = j + 1` and `right = n - 1` for the remaining sum.",
      "Skip duplicate values for i, j, left, and right to prevent duplicate quadruplets."
    ],
    approach: {
      bruteForceSummary: "4 nested loops testing all quadruplets with deduplication. O(N⁴) time.",
      optimalStrategy: "Sort array. Fix first two numbers with nested loops i and j; use converging pointers left and right for remaining sum in O(N³) time.",
      patternUsed: "Nested Converging Pointers"
    },
    solutionJS: `function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate i

    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicate j

      let left = j + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicate left
          while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicate right
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}`,
    complexity: {
      time: "O(N³) time complexity where N is nums.length.",
      space: "O(1) auxiliary space (excluding result output array and sorting space).",
      explanation: "Sorting takes O(N log N). Two nested loops taking O(N²) contain an O(N) 2-pointer scan."
    },
    edgeCases: ["Array length < 4", "Target is negative", "All elements identical"],
    commonMistakes: "Forgetting to skip duplicates at any of the 4 pointer positions, producing duplicate quadruplets.",
    interviewTakeaway: "K-Sum problems reduce to (K-2) nested loops + 1 pair of converging two pointers."
  },
  {
    id: "tp-medium-03",
    title: "Valid Triangle Number",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Reverse Opposite Two Pointers",
    difficulty: "Medium",
    learningOrder: 9,
    importanceTier: "must-do",
    pattern: "Reverse Opposite Two Pointers",
    patterns: ["Reverse Opposite Two Pointers", "Combination Counting"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/valid-triangle-number/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-number-of-triangles-possible/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 23, crossSourceEvidence: 18, patternValue: 20, conceptImportance: 8, learningValue: 9, uniqueness: 8, difficultyValue: 7, totalScore: 92 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Amazon", "Google", "Meta"],
    problemSummary: "Given an integer array nums, return the number of triplets chosen from the array that can make sides of a triangle.",
    whySolveThis: {
      importanceReason: "Teaches fixing the largest side in reverse (`k = n - 1 down to 2`) so that when `nums[i] + nums[j] > nums[k]`, all elements from `i` to `j-1` automatically form valid triangles.",
      keySkills: ["Triangle inequality theorem (a + b > c)", "Reverse fixed pointer iteration", "Batch combination counting `count += (j - i)`"]
    },
    hints: [
      "Triangle inequality rule: a + b > c (when sides are sorted a <= b <= c).",
      "Sort nums in ascending order.",
      "Fix the largest side `c = nums[k]` from right to left.",
      "Use two pointers `i = 0` and `j = k - 1`. If `nums[i] + nums[j] > nums[k]`, then all pairs `(i..j-1, j)` are valid! Add `j - i` to count and decrement `j`."
    ],
    approach: {
      bruteForceSummary: "3 nested loops checking triangle inequality on all triplets. O(N³) time.",
      optimalStrategy: "Sort array. Iterate largest side k from right to left. Converging pointers i and j count valid pairs in O(N²) time.",
      patternUsed: "Reverse Fixed Pointer Sweep"
    },
    solutionJS: `function triangleNumber(nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  const n = nums.length;

  // Fix largest side c = nums[k]
  for (let k = n - 1; k >= 2; k--) {
    let i = 0;
    let j = k - 1;

    while (i < j) {
      if (nums[i] + nums[j] > nums[k]) {
        // Since array is sorted, all elements from i to j-1 paired with j satisfy the inequality
        count += (j - i);
        j--;
      } else {
        i++;
      }
    }
  }

  return count;
}`,
    complexity: {
      time: "O(N²) time complexity for sorting O(N log N) + two pointer search O(N²).",
      space: "O(1) auxiliary space (excluding sorting space).",
      explanation: "Outer loop runs N times; inner two-pointer scan runs N steps per outer iteration."
    },
    edgeCases: ["Array length < 3", "Array containing 0s", "All side lengths equal"],
    commonMistakes: "Fixing smallest side instead of largest side, which prevents batch `(j - i)` counting.",
    interviewTakeaway: "Fixing the largest element in sorted order unlocks batch O(1) combination counting `(j - i)`."
  },
  {
    id: "tp-medium-04",
    title: "Boats to Save People",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Greedy Opposite Two Pointers",
    difficulty: "Medium",
    learningOrder: 10,
    importanceTier: "must-do",
    pattern: "Greedy Opposite Two Pointers",
    patterns: ["Greedy Opposite Two Pointers", "Greedy Allocation"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/boats-to-save-people/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/minimum-boats-to-save-people/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 23, crossSourceEvidence: 18, patternValue: 20, conceptImportance: 8, learningValue: 9, uniqueness: 8, difficultyValue: 7, totalScore: 92 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Google", "Amazon", "Uber"],
    problemSummary: "You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time. Return the minimum number of boats to carry every given person.",
    whySolveThis: {
      importanceReason: "Teaches greedy two-pointer pairing: attempting to pair the heaviest person (`right`) with the lightest person (`left`) in a single boat.",
      keySkills: ["Greedy two-pointer strategy", "Boundary check `people[left] + people[right] <= limit`", "Optimal resource allocation"]
    },
    hints: [
      "Sort people in ascending weight order.",
      "Use `left = 0` (lightest) and `right = people.length - 1` (heaviest).",
      "Heaviest person `people[right]` MUST take a boat.",
      "Check if lightest person `people[left]` can share that boat. If `people[left] + people[right] <= limit`, advance `left`."
    ],
    approach: {
      bruteForceSummary: "Search for optimal pair combinations recursively. Exponential O(2^N) time.",
      optimalStrategy: "Sort weights. Always assign boat to heaviest person. Include lightest person if capacity allows in O(N log N) time.",
      patternUsed: "Greedy Converging Pointers"
    },
    solutionJS: `function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b);

  let left = 0;
  let right = people.length - 1;
  let boats = 0;

  while (left <= right) {
    // If lightest and heaviest can share a boat
    if (people[left] + people[right] <= limit) {
      left++;
    }
    // Heaviest always takes a boat
    right--;
    boats++;
  }

  return boats;
}`,
    complexity: {
      time: "O(N log N) time complexity due to sorting array of size N.",
      space: "O(1) auxiliary space (excluding sorting space).",
      explanation: "Sorting takes O(N log N). Two-pointer loop runs N times in O(N) time."
    },
    edgeCases: ["Single person", "Everyone's weight is half the limit", "Heaviest person weighs exactly limit"],
    commonMistakes: "Trying to pair two light people together instead of pairing lightest with heaviest.",
    interviewTakeaway: "Pair extreme boundaries (lightest + heaviest) to maximize greedy resource utilization."
  },
  {
    id: "tp-medium-05",
    title: "Interval List Intersections",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Two-Pointer Merge / List Sweeping",
    difficulty: "Medium",
    learningOrder: 11,
    importanceTier: "must-do",
    pattern: "Two-Pointer Merge / List Sweeping",
    patterns: ["Two-Pointer Merge / List Sweeping", "Interval Sweeping"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/interval-list-intersections/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-intersection-of-intervals-given-by-two-lists/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Blind 75", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 19, patternValue: 22, conceptImportance: 9, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 96 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Meta", "Google", "Uber", "Amazon"],
    problemSummary: "You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order. Return the intersection of these two interval lists.",
    whySolveThis: {
      importanceReason: "The premier two-pointer multi-list sweeping problem. Teaches calculating intersection bounds and advancing the pointer whose interval ends first.",
      keySkills: ["Interval intersection math [max(s1,s2), min(e1,e2)]", "Pointer advancement condition (e1 < e2)", "Dual list sweeping"]
    },
    hints: [
      "Use pointer `i` for firstList and pointer `j` for secondList.",
      "Intersection start is `start = Math.max(firstList[i][0], secondList[j][0])`.",
      "Intersection end is `end = Math.min(firstList[i][1], secondList[j][1])`.",
      "If `start <= end`, a valid intersection `[start, end]` exists.",
      "Advance `i` if `firstList[i][1] < secondList[j][1]`, otherwise advance `j`."
    ],
    approach: {
      bruteForceSummary: "Compare all pairs of intervals between list 1 and list 2. O(N * M) time.",
      optimalStrategy: "Two pointers i and j. Compute overlap using max start and min end. Advance pointer with earlier end time in O(N + M) time.",
      patternUsed: "Interval Sweep Pointers"
    },
    solutionJS: `function intervalIntersection(firstList, secondList) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < firstList.length && j < secondList.length) {
    const start = Math.max(firstList[i][0], secondList[j][0]);
    const end = Math.min(firstList[i][1], secondList[j][1]);

    // Valid intersection occurs if start <= end
    if (start <= end) {
      result.push([start, end]);
    }

    // Advance pointer with earlier end time
    if (firstList[i][1] < secondList[j][1]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}`,
    complexity: {
      time: "O(N + M) time complexity where N = firstList.length and M = secondList.length.",
      space: "O(1) auxiliary space (excluding output array).",
      explanation: "Each step advances pointer i or pointer j, traversing both lists in linear time."
    },
    edgeCases: ["One or both lists empty", "No overlapping intervals", "Intervals touching at a single point"],
    commonMistakes: "Advancing the pointer based on start time instead of end time.",
    interviewTakeaway: "When merging/intersecting sorted intervals across two lists, advance the pointer whose interval ends first."
  },
  {
    id: "tp-medium-06",
    title: "Minimum Length of String After Deleting Similar Ends",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Converging Two Pointers Trimming",
    difficulty: "Medium",
    learningOrder: 12,
    importanceTier: "strongly-recommended",
    pattern: "Converging Two Pointers Trimming",
    patterns: ["Converging Two Pointers Trimming", "Boundary Contraction"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/minimum-length-of-string-after-deleting-similar-ends/" }
    ],
    crossSource: {
      sourceCount: 3,
      sources: ["LeetCode Top 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 21, crossSourceEvidence: 16, patternValue: 18, conceptImportance: 7, learningValue: 8, uniqueness: 8, difficultyValue: 7, totalScore: 84 },
    importance: 4,
    interviewFrequency: 3,
    companies: ["Amazon", "Google"],
    problemSummary: "Given a string s consisting only of characters 'a', 'b', and 'c', you can repeatedly pick a non-empty prefix and suffix that have matching characters and delete them. Return the minimum length of s after performing the operation any number of times.",
    whySolveThis: {
      importanceReason: "Teaches boundary contraction: moving left and right pointers inward while characters match the common outer character.",
      keySkills: ["Prefix/suffix matching check", "Inner loop pointer advancement", "Remaining length math `right - left + 1`"]
    },
    hints: [
      "Use `left = 0` and `right = s.length - 1`.",
      "While `left < right` and `s[left] === s[right]`, pick `char = s[left]`.",
      "Advance `left` while `left <= right` and `s[left] === char`.",
      "Decrement `right` while `left <= right` and `s[right] === char`.",
      "Return `right - left + 1`."
    ],
    approach: {
      bruteForceSummary: "Repeated string slicing on matches. O(N²) time due to substring allocations.",
      optimalStrategy: "Converging pointers left and right. Strip matching outer characters in linear O(N) time.",
      patternUsed: "Boundary Contraction Pointers"
    },
    solutionJS: `function minimumLength(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right && s[left] === s[right]) {
    const char = s[left];

    // Strip prefix characters equal to char
    while (left <= right && s[left] === char) {
      left++;
    }
    // Strip suffix characters equal to char
    while (left <= right && s[right] === char) {
      right--;
    }
  }

  return right - left + 1;
}`,
    complexity: {
      time: "O(N) time complexity for single pass over string s.",
      space: "O(1) auxiliary space.",
      explanation: "Pointers left and right move inward, inspecting each character at most once."
    },
    edgeCases: ["Single character string (returns 1)", "All characters identical (returns 0)", "No matching prefix/suffix"],
    commonMistakes: "Using `left < right` inside inner while loops, failing to consume the last duplicate character when pointers meet.",
    interviewTakeaway: "Use `left <= right` in inner character-stripping loops to consume single remaining target characters."
  },
  {
    id: "tp-medium-07",
    title: "Shortest Subarray to be Removed to Make Array Sorted",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Prefix/Suffix Converging Pointers",
    difficulty: "Medium",
    learningOrder: 13,
    importanceTier: "strongly-recommended",
    pattern: "Prefix/Suffix Converging Pointers",
    patterns: ["Prefix/Suffix Converging Pointers", "Boundary Merging"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/shortest-subarray-to-be-removed-to-make-array-sorted/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "Google", "Amazon", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 23, crossSourceEvidence: 17, patternValue: 20, conceptImportance: 8, learningValue: 9, uniqueness: 9, difficultyValue: 7, totalScore: 92 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Google", "Amazon"],
    problemSummary: "Given an integer array arr, remove a contiguous subarray (possibly empty) such that the remaining elements in arr are non-decreasing. Return the length of the shortest such subarray to remove.",
    whySolveThis: {
      importanceReason: "Advanced two-pointer boundary problem. Teaches identifying non-decreasing prefix and suffix boundaries, then merging them with two pointers.",
      keySkills: ["Prefix/suffix non-decreasing scanning", "Initial answer upper-bounding", "Dual pointer boundary merging"]
    },
    hints: [
      "Find longest non-decreasing prefix `[0..left]`.",
      "Find longest non-decreasing suffix `[right..n-1]`.",
      "Initial answer is `min(n - left - 1, right)` (removing entire suffix or entire prefix).",
      "Use two pointers `i = 0` and `j = right` to merge prefix `i` with suffix `j` whenever `arr[i] <= arr[j]`."
    ],
    approach: {
      bruteForceSummary: "Try removing all O(N²) subarrays and check if remaining array is sorted. O(N³) time.",
      optimalStrategy: "Scan non-decreasing prefix left and suffix right. Two pointers i and j merge prefix and suffix boundaries in O(N) time.",
      patternUsed: "Prefix/Suffix Two Pointer Merge"
    },
    solutionJS: `function findLengthOfShortestSubarray(arr) {
  const n = arr.length;
  let left = 0;
  while (left < n - 1 && arr[left] <= arr[left + 1]) {
    left++;
  }

  // Already non-decreasing
  if (left === n - 1) return 0;

  let right = n - 1;
  while (right > 0 && arr[right - 1] <= arr[right]) {
    right--;
  }

  // Remove suffix [left+1..n-1] OR remove prefix [0..right-1]
  let result = Math.min(n - left - 1, right);

  // Merge prefix [0..left] with suffix [right..n-1]
  let i = 0;
  let j = right;

  while (i <= left && j < n) {
    if (arr[i] <= arr[j]) {
      result = Math.min(result, j - i - 1);
      i++;
    } else {
      j++;
    }
  }

  return result;
}`,
    complexity: {
      time: "O(N) time complexity for linear prefix scan, suffix scan, and pointer merging pass.",
      space: "O(1) auxiliary space.",
      explanation: "All steps iterate array boundaries in linear O(N) total time."
    },
    edgeCases: ["Array already sorted (returns 0)", "Strictly decreasing array", "Single element array"],
    commonMistakes: "Not testing removing prefix-only or suffix-only as initial baseline bounds.",
    interviewTakeaway: "Merge independent sorted boundaries using two pointers to minimize removed subarray gaps."
  },
  {
    id: "tp-medium-08",
    title: "Max Consecutive Ones III",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Variable Sliding Window (Flip K)",
    difficulty: "Medium",
    learningOrder: 14,
    importanceTier: "must-do",
    pattern: "Variable Sliding Window (Flip K)",
    patterns: ["Variable Sliding Window (Flip K)", "Variable Sliding Window"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/max-consecutive-ones-iii/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/maximum-number-of-consecutive-1s-after-flipping-k-zeroes/" }
    ],
    crossSource: {
      sourceCount: 6,
      sources: ["LeetCode Top 150", "Blind 75", "NeetCode 150", "Striver SDE Sheet", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 20, patternValue: 22, conceptImportance: 10, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 98 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Meta", "Amazon", "Google", "Microsoft"],
    problemSummary: "Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.",
    whySolveThis: {
      importanceReason: "The benchmark variable sliding window problem. Teaches maintaining dynamic window $[left, right]$ where zero count $\\le k$.",
      keySkills: ["Variable window expansion (`right++`)", "Constraint check (`zeros > k`)", "Window contraction (`left++`)"]
    },
    hints: [
      "Maintain variable window `[left, right]` and `zeroCount`.",
      "Iterate `right` from 0 to nums.length - 1. If `nums[right] === 0`, increment `zeroCount`.",
      "While `zeroCount > k`, if `nums[left] === 0` decrement `zeroCount`, then increment `left`.",
      "Update `maxLen = Math.max(maxLen, right - left + 1)`."
    ],
    approach: {
      bruteForceSummary: "Test all O(N²) subarrays, counting zeros. O(N²) time.",
      optimalStrategy: "Variable sliding window. Expand right, shrink left when zero count > k in O(N) amortized time.",
      patternUsed: "Variable Sliding Window"
    },
    solutionJS: `function longestOnes(nums, k) {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}`,
    complexity: {
      time: "O(N) amortized time complexity.",
      space: "O(1) auxiliary space.",
      explanation: "Each index is visited at most twice (once by right, once by left)."
    },
    edgeCases: ["k = 0", "Array contains no zeros", "k >= nums.length"],
    commonMistakes: "Using `if` instead of `while` when shrinking left, leaving zero count > k.",
    interviewTakeaway: "Variable sliding windows shrink left until window constraints are fully satisfied."
  },
  {
    id: "tp-medium-09",
    title: "Fruit Into Baskets",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Variable Window (At Most 2 Types)",
    difficulty: "Medium",
    learningOrder: 15,
    importanceTier: "must-do",
    pattern: "Variable Window (At Most 2 Types)",
    patterns: ["Variable Window (At Most 2 Types)", "Frequency Map Window"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/fruit-into-baskets/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/maximum-fruits-that-can-be-picked-into-2-baskets/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Striver A2Z", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 19, patternValue: 22, conceptImportance: 9, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 96 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Google", "Amazon", "Meta"],
    problemSummary: "You are visiting a farm that has a single row of fruit trees represented by an integer array fruits. You have two baskets, and each basket can only hold a single type of fruit. Return the maximum number of fruits you can pick.",
    whySolveThis: {
      importanceReason: "The canonical 'at most K distinct elements' (K = 2) variable sliding window problem using a Map for frequency tracking.",
      keySkills: ["Frequency Map inside window", "Distinct type count check `map.size > 2`", "Map key deletion on zero frequency"]
    },
    hints: [
      "This problem is equivalent to: 'Find the longest subarray containing at most 2 distinct integers'.",
      "Use a Map to track fruit frequencies in current window `[left, right]`.",
      "If `basket.size > 2`, decrement `fruits[left]` count in Map and delete key when count reaches 0, then advance `left`."
    ],
    approach: {
      bruteForceSummary: "Check all O(N²) subarrays, using Set for distinct fruit types. O(N²) time.",
      optimalStrategy: "Variable sliding window with Map. Expand right, shrink left when distinct types > 2 in O(N) time.",
      patternUsed: "Frequency Map Sliding Window"
    },
    solutionJS: `function totalFruit(fruits) {
  const basket = new Map();
  let left = 0;
  let maxFruits = 0;

  for (let right = 0; right < fruits.length; right++) {
    const f = fruits[right];
    basket.set(f, (basket.get(f) || 0) + 1);

    while (basket.size > 2) {
      const leftFruit = fruits[left];
      basket.set(leftFruit, basket.get(leftFruit) - 1);
      if (basket.get(leftFruit) === 0) {
        basket.delete(leftFruit);
      }
      left++;
    }

    maxFruits = Math.max(maxFruits, right - left + 1);
  }

  return maxFruits;
}`,
    complexity: {
      time: "O(N) amortized time complexity.",
      space: "O(1) auxiliary space (Map stores at most 3 fruit keys at any time).",
      explanation: "Each tree is added once by right and deleted once by left."
    },
    edgeCases: ["Array with only 1 or 2 fruit types", "All fruits distinct", "Empty array"],
    commonMistakes: "Forgetting to `basket.delete(key)` when frequency hits 0, causing `basket.size` to remain large.",
    interviewTakeaway: "Delete keys from frequency Maps when count hits 0 to maintain accurate `map.size` window metrics."
  },
  {
    id: "tp-medium-10",
    title: "Count Number of Nice Subarrays",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "At-Most K Odds Window Transform",
    difficulty: "Medium",
    learningOrder: 16,
    importanceTier: "must-do",
    pattern: "At-Most K Odds Window Transform",
    patterns: ["At-Most K Odds Window Transform", "At-Most K Transformation"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/count-number-of-nice-subarrays/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/count-subarrays-with-k-odd-numbers/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Striver A2Z", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 19, patternValue: 23, conceptImportance: 10, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 97 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Amazon", "Meta", "Google"],
    problemSummary: "Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it. Return the number of nice sub-arrays.",
    whySolveThis: {
      importanceReason: "First application of the mathematical formula `Exact(K) = AtMost(K) - AtMost(K - 1)`. Eliminates complex two-pointer edge cases cleanly.",
      keySkills: ["At-Most K sliding window helper function", "Mathematical difference `atMost(k) - atMost(k-1)`", "Subarray count accumulation `(right - left + 1)`"]
    },
    hints: [
      "Directly counting subarrays with EXACTLY k odd numbers is difficult.",
      "Write a helper function `atMost(k)` that counts subarrays with AT MOST k odd numbers.",
      "Number of subarrays with exactly k odd numbers is `atMost(k) - atMost(k - 1)`."
    ],
    approach: {
      bruteForceSummary: "Check all O(N²) subarrays, counting odds. O(N²) time.",
      optimalStrategy: "Use sliding window helper atMost(k). Compute exact k as atMost(k) - atMost(k - 1) in O(N) time.",
      patternUsed: "At-Most K Subtraction"
    },
    solutionJS: `function numberOfSubarrays(nums, k) {
  return atMost(nums, k) - atMost(nums, k - 1);
}

function atMost(nums, k) {
  if (k < 0) return 0;
  let left = 0;
  let count = 0;
  let oddCount = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] % 2 === 1) {
      oddCount++;
    }

    while (oddCount > k) {
      if (nums[left] % 2 === 1) {
        oddCount--;
      }
      left++;
    }

    count += (right - left + 1);
  }

  return count;
}`,
    complexity: {
      time: "O(N) time complexity for two linear passes.",
      space: "O(1) auxiliary space.",
      explanation: "atMost() runs in O(N) time twice, yielding linear O(N) total runtime."
    },
    edgeCases: ["k = 0", "Array contains no odd numbers", "All numbers odd"],
    commonMistakes: "Trying to handle exactly K in a single pass with multi-pointer increments, creating subtle bug-prone edge cases.",
    interviewTakeaway: "Use `Exact(K) = AtMost(K) - AtMost(K - 1)` to solve exact subarray count queries effortlessly."
  },
  {
    id: "tp-medium-11",
    title: "Number of Substrings Containing All Three Characters",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Last-Seen Min Index Window Count",
    difficulty: "Medium",
    learningOrder: 17,
    importanceTier: "must-do",
    pattern: "Last-Seen Min Index Window Count",
    patterns: ["Last-Seen Min Index Window Count", "Last-Seen Indexing"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/count-of-substrings-containing-all-three-characters/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "Striver A2Z", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 24, crossSourceEvidence: 18, patternValue: 21, conceptImportance: 9, learningValue: 9, uniqueness: 9, difficultyValue: 7, totalScore: 94 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Google", "Amazon", "Microsoft"],
    problemSummary: "Given a string s consisting only of characters a, b and c, return the number of substrings containing at least one occurrence of all these characters a, b and c.",
    whySolveThis: {
      importanceReason: "Teaches using last-seen character indices to count all valid left endpoints in O(1) space: `count += min(lastA, lastB, lastC) + 1`.",
      keySkills: ["Last-seen character index vector", "Minimum index lookup", "O(1) space window counting"]
    },
    hints: [
      "Track last seen index of 'a', 'b', 'c' initialized to -1: `lastSeen = [-1, -1, -1]`.",
      "Iterate `right` from 0 to s.length - 1, updating `lastSeen[s[right]] = right`.",
      "The number of valid substrings ending at `right` is `Math.min(lastSeen[0], lastSeen[1], lastSeen[2]) + 1` (if min !== -1)."
    ],
    approach: {
      bruteForceSummary: "Check all O(N²) substrings for presence of 'a', 'b', 'c'. O(N²) time.",
      optimalStrategy: "Track last seen position of each character. Minimum position + 1 yields count of valid starting points in O(N) time and O(1) space.",
      patternUsed: "Last-Seen Min Index Sliding Window"
    },
    solutionJS: `function numberOfSubstrings(s) {
  const lastSeen = [-1, -1, -1];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    lastSeen[s.charCodeAt(i) - 97] = i;

    const minIdx = Math.min(lastSeen[0], lastSeen[1], lastSeen[2]);
    if (minIdx !== -1) {
      count += minIdx + 1;
    }
  }

  return count;
}`,
    complexity: {
      time: "O(N) time complexity for single pass over s.",
      space: "O(1) auxiliary space (fixed 3-element array).",
      explanation: "Iterating s takes O(N) time with O(1) min index evaluation per step."
    },
    edgeCases: ["String missing one character (count = 0)", "Shortest valid string 'abc'"],
    commonMistakes: "Using variable sliding window with nested loops when last-seen index yields O(1) exact count.",
    interviewTakeaway: "Minimum last-seen index of required characters yields valid starting endpoints in O(1) space."
  },
  {
    id: "tp-medium-12",
    title: "Maximum Points You Can Obtain from Cards",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Inverted Fixed Sliding Window",
    difficulty: "Medium",
    learningOrder: 18,
    importanceTier: "must-do",
    pattern: "Inverted Fixed Sliding Window",
    patterns: ["Inverted Fixed Sliding Window", "Problem Inversion"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/maximum-points-you-can-obtain-from-cards/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Striver A2Z", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 19, patternValue: 22, conceptImportance: 9, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 96 },
    importance: 5,
    interviewFrequency: 4,
    companies: ["Google", "Amazon", "Microsoft"],
    problemSummary: "There are several cards arranged in a row, and each card has an associated number of points. In one step, you can take one card from the beginning or from the end of the row. You have to take exactly k cards. Return the maximum score.",
    whySolveThis: {
      importanceReason: "Masterclass problem inversion: taking k cards from the ends is equivalent to leaving a contiguous window of length (N - k) in the middle with MINIMUM sum.",
      keySkills: ["Problem inversion (max ends = totalSum - min middle)", "Fixed sliding window of size (N - k)", "Complementary sum math"]
    },
    hints: [
      "Taking k cards from ends leaves a contiguous subarray of size `windowSize = n - k` in the middle.",
      "To maximize the sum of k cards, MINIMIZE the sum of the remaining `n - k` contiguous cards.",
      "Use a fixed sliding window of size `n - k` to find the minimum middle sum.",
      "Return `totalSum - minMiddleSum`."
    ],
    approach: {
      bruteForceSummary: "Recursion checking all 2^k end pick choices. O(2^k) time.",
      optimalStrategy: "Find min sum subarray of length n - k using fixed sliding window. Subtract from totalSum in O(N) time.",
      patternUsed: "Inverted Fixed Window"
    },
    solutionJS: `function maxScore(cardPoints, k) {
  const n = cardPoints.length;
  const windowSize = n - k;
  let totalSum = 0;

  for (const pts of cardPoints) {
    totalSum += pts;
  }

  // If k equals n, take all cards
  if (k === n) return totalSum;

  // Build initial window of size n - k
  let currentWindowSum = 0;
  for (let i = 0; i < windowSize; i++) {
    currentWindowSum += cardPoints[i];
  }

  let minWindowSum = currentWindowSum;

  // Slide window across middle
  for (let i = windowSize; i < n; i++) {
    currentWindowSum += cardPoints[i] - cardPoints[i - windowSize];
    minWindowSum = Math.min(minWindowSum, currentWindowSum);
  }

  return totalSum - minWindowSum;
}`,
    complexity: {
      time: "O(N) time complexity for single pass.",
      space: "O(1) auxiliary space.",
      explanation: "Total sum takes O(N), fixed sliding window pass takes O(N)."
    },
    edgeCases: ["k = n (take all cards)", "k = 1 (max of first or last element)"],
    commonMistakes: "Trying complex recursion or dynamic programming instead of simple inverted sliding window.",
    interviewTakeaway: "Invert end-picking problems into complementary middle-window minimization problems."
  },
  {
    id: "tp-medium-13",
    title: "Longest Subarray of 1's After Deleting One Element",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Variable Window (At Most 1 Zero)",
    difficulty: "Medium",
    learningOrder: 19,
    importanceTier: "strongly-recommended",
    pattern: "Variable Window (At Most 1 Zero)",
    patterns: ["Variable Window (At Most 1 Zero)", "Variable Sliding Window"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/longest-subarray-of-1s-after-deleting-one-element/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 23, crossSourceEvidence: 18, patternValue: 20, conceptImportance: 8, learningValue: 8, uniqueness: 8, difficultyValue: 7, totalScore: 91 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Amazon", "Google", "Meta"],
    problemSummary: "Given a binary array nums, you should delete one element from it. Return the length of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.",
    whySolveThis: {
      importanceReason: "Clean variation of Max Consecutive Ones III where $K = 1$ zero is allowed inside the window, and answer is `maxLen - 1` because 1 element must be deleted.",
      keySkills: ["Zero count window constraint (`zeros <= 1`)", "Mandatory deletion offset `maxLen - 1`"]
    },
    hints: [
      "This problem is equivalent to: 'Find the longest subarray containing at most one 0'.",
      "Because you MUST delete 1 element, the final answer will be `windowLength - 1`.",
      "Maintain variable window `[left, right]` where zero count is at most 1."
    ],
    approach: {
      bruteForceSummary: "Delete each index one by one and find max consecutive 1s. O(N²) time.",
      optimalStrategy: "Variable sliding window allowing at most 1 zero. Max length minus 1 is the answer in O(N) time.",
      patternUsed: "Variable Window (At Most 1 Zero)"
    },
    solutionJS: `function longestSubarray(nums) {
  let left = 0;
  let zeroCount = 0;
  let maxLen = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left); // right - left equals (windowSize - 1)
  }

  return maxLen;
}`,
    complexity: {
      time: "O(N) time complexity.",
      space: "O(1) auxiliary space.",
      explanation: "Single pass over nums array with amortized linear time pointer advancement."
    },
    edgeCases: ["Array with all 1s (must delete 1 element, returns N-1)", "Array with all 0s (returns 0)"],
    commonMistakes: "Forgetting that 1 element MUST be deleted even if array contains all 1s.",
    interviewTakeaway: "Mandatory deletion transforms into window size minus 1 under at-most-1 zero constraint."
  },
  {
    id: "tp-medium-14",
    title: "Grumpy Bookstore Owner",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Fixed Sliding Window Gain Max",
    difficulty: "Medium",
    learningOrder: 20,
    importanceTier: "strongly-recommended",
    pattern: "Fixed Sliding Window Gain Max",
    patterns: ["Fixed Sliding Window Gain Max", "Fixed Sliding Window"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/grumpy-bookstore-owner/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/grumpy-bookstore-owner/" }
    ],
    crossSource: {
      sourceCount: 3,
      sources: ["LeetCode Top 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 22, crossSourceEvidence: 16, patternValue: 19, conceptImportance: 8, learningValue: 8, uniqueness: 8, difficultyValue: 7, totalScore: 88 },
    importance: 4,
    interviewFrequency: 3,
    companies: ["Google", "Amazon"],
    problemSummary: "There is a bookstore owner that has a store open for n minutes. Every minute, some number of customers enter the store. You are given an integer array customers and a binary array grumpy. The owner can keep themselves non-grumpy for minutes consecutive minutes. Return the maximum number of satisfied customers.",
    whySolveThis: {
      importanceReason: "Teaches partitioning total score into base satisfied customers + maximum gain from a fixed window of size `minutes`.",
      keySkills: ["Base score accumulation", "Incremental gain calculation over fixed window", "Fixed sliding window sweep"]
    },
    hints: [
      "First pass: calculate base satisfied customers when owner is not grumpy (`grumpy[i] === 0`).",
      "Second pass: use a fixed sliding window of size `minutes` to maximize additional customers gained from suppressing grumpiness (`grumpy[i] === 1`).",
      "Result = `baseCustomers + maxWindowGain`."
    ],
    approach: {
      bruteForceSummary: "Try suppressing grumpiness at all starting minutes, re-calculating total sum. O(N * minutes) time.",
      optimalStrategy: "Calculate base score. Fixed sliding window of size `minutes` finds max extra customers gained in O(N) time.",
      patternUsed: "Fixed Window Gain Optimization"
    },
    solutionJS: `function maxSatisfied(customers, grumpy, minutes) {
  let baseSatisfied = 0;
  const n = customers.length;

  // Base customers satisfied when owner is not grumpy
  for (let i = 0; i < n; i++) {
    if (grumpy[i] === 0) {
      baseSatisfied += customers[i];
    }
  }

  // Calculate gain for initial window of size 'minutes'
  let currentGain = 0;
  for (let i = 0; i < minutes; i++) {
    if (grumpy[i] === 1) {
      currentGain += customers[i];
    }
  }

  let maxGain = currentGain;

  // Slide window across array
  for (let i = minutes; i < n; i++) {
    if (grumpy[i] === 1) currentGain += customers[i];            // Add incoming gain
    if (grumpy[i - minutes] === 1) currentGain -= customers[i - minutes]; // Remove outgoing gain

    maxGain = Math.max(maxGain, currentGain);
  }

  return baseSatisfied + maxGain;
}`,
    complexity: {
      time: "O(N) time complexity for two single passes over arrays.",
      space: "O(1) auxiliary space.",
      explanation: "Base calculation takes O(N), fixed sliding window sweep takes O(N)."
    },
    edgeCases: ["minutes >= n (suppress grumpiness entire day)", "Owner never grumpy", "Owner always grumpy"],
    commonMistakes: "Adding customer count to gain window when owner is already non-grumpy (`grumpy[i] === 0`).",
    interviewTakeaway: "Separate fixed base contributions from window-controlled incremental gains."
  },
  {
    id: "tp-medium-15",
    title: "Get Equal Substrings Within Budget",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Variable Window Budget Constraint",
    difficulty: "Medium",
    learningOrder: 21,
    importanceTier: "strongly-recommended",
    pattern: "Variable Window Budget Constraint",
    patterns: ["Variable Window Budget Constraint", "Variable Sliding Window"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/get-equal-substrings-within-budget/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/get-equal-substrings-within-budget/" }
    ],
    crossSource: {
      sourceCount: 3,
      sources: ["LeetCode Top 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 22, crossSourceEvidence: 16, patternValue: 19, conceptImportance: 8, learningValue: 8, uniqueness: 8, difficultyValue: 7, totalScore: 88 },
    importance: 4,
    interviewFrequency: 3,
    companies: ["Google", "Amazon"],
    problemSummary: "You are given two strings s and t of the same length and an integer maxCost. You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]|. Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost.",
    whySolveThis: {
      importanceReason: "Teaches accumulating dynamic numerical costs `Math.abs(s[i] - t[i])` in a variable sliding window.",
      keySkills: ["ASCII difference cost calculation", "Cost accumulation inside window", "Budget contraction loop"]
    },
    hints: [
      "Convert character differences into a cost array `costs[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i))`.",
      "Maintain variable window `[left, right]` tracking `currentCost`.",
      "Add `costs[right]` to `currentCost`. While `currentCost > maxCost`, subtract `costs[left]` and increment `left`.",
      "Track `maxLen = Math.max(maxLen, right - left + 1)`."
    ],
    approach: {
      bruteForceSummary: "Test all O(N²) substrings, calculating total cost. O(N²) time.",
      optimalStrategy: "Variable sliding window. Expand right, shrink left when total cost > maxCost in O(N) time.",
      patternUsed: "Budget Constrained Window"
    },
    solutionJS: `function equalSubstring(s, t, maxCost) {
  let left = 0;
  let currentCost = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const charCost = Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
    currentCost += charCost;

    while (currentCost > maxCost) {
      const leftCost = Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
      currentCost -= leftCost;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}`,
    complexity: {
      time: "O(N) time complexity for single pass.",
      space: "O(1) auxiliary space.",
      explanation: "Iterating s and t takes linear O(N) time with amortized single-pass pointer advancement."
    },
    edgeCases: ["maxCost = 0", "s and t identical", "Individual character cost > maxCost"],
    commonMistakes: "Allocating extra O(N) cost array when ASCII differences can be computed on the fly.",
    interviewTakeaway: "Variable sliding windows track non-negative numeric cost accumulation in linear O(N) time."
  },
  {
    id: "tp-medium-16",
    title: "Frequency of the Most Frequent Element",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Sorted Window Multiplication Area",
    difficulty: "Medium",
    learningOrder: 22,
    importanceTier: "must-do",
    pattern: "Sorted Window Multiplication Area",
    patterns: ["Sorted Window Multiplication Area", "Sorting + Sliding Window"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/frequency-of-the-most-frequent-element/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/frequency-of-the-most-frequent-element-after-k-increments/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Blind 75", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 19, patternValue: 24, conceptImportance: 10, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 97 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Meta", "Amazon", "Google"],
    problemSummary: "The frequency of an element is the number of times it occurs in an array. You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1. Return the maximum possible frequency of an element after performing at most k operations.",
    whySolveThis: {
      importanceReason: "High-level sliding window math problem: sorting array allows target value to be `nums[right]`. Total operations needed to turn all elements in window `[left, right]` into `nums[right]` is `(right - left + 1) * nums[right] - windowSum`.",
      keySkills: ["Sorting input array", "Window area equation `(right - left + 1) * nums[right] - windowSum`", "Shrinking left when operations exceed K"]
    },
    hints: [
      "Sort nums in non-decreasing order.",
      "If we want to make all elements in window `[left, right]` equal to `nums[right]`, total operations required is `(right - left + 1) * nums[right] - windowSum`.",
      "If operations > k, shrink window by subtracting `nums[left]` and incrementing `left`.",
      "Track `maxFreq = Math.max(maxFreq, right - left + 1)`."
    ],
    approach: {
      bruteForceSummary: "Test all elements as targets and calculate increment operations. O(N²) time.",
      optimalStrategy: "Sort array. Sliding window [left, right] maintaining operation cost equation <= k in O(N log N) time.",
      patternUsed: "Pre-Sorted Window Area Math"
    },
    solutionJS: `function maxFrequency(nums, k) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let windowSum = 0;
  let maxFreq = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    // Operations needed = (windowSize * targetValue) - actualSum
    while ((right - left + 1) * nums[right] - windowSum > k) {
      windowSum -= nums[left];
      left++;
    }

    maxFreq = Math.max(maxFreq, right - left + 1);
  }

  return maxFreq;
}`,
    complexity: {
      time: "O(N log N) time complexity due to sorting array of size N.",
      space: "O(1) auxiliary space (excluding sorting space).",
      explanation: "Sorting takes O(N log N). Sliding window pass takes linear O(N) time."
    },
    edgeCases: ["k = 0 (returns max existing frequency)", "All elements equal", "k is very large"],
    commonMistakes: "Not sorting array first, breaking the monotonic window area equation.",
    interviewTakeaway: "Pre-sorting enables geometric window area equations `(size * target) - sum <= K`."
  },
  {
    id: "tp-medium-17",
    title: "Minimum Operations to Reduce X to Zero",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Inverted Variable Sliding Window Target Sum",
    difficulty: "Medium",
    learningOrder: 23,
    importanceTier: "must-do",
    pattern: "Inverted Variable Sliding Window Target Sum",
    patterns: ["Inverted Variable Sliding Window Target Sum", "Problem Inversion"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/minimum-operations-to-reduce-x-to-zero/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Blind 75", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 19, patternValue: 23, conceptImportance: 10, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 96 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Google", "Amazon", "Meta"],
    problemSummary: "You are given an integer array nums and an integer x. In one operation, you can remove either the leftmost or the rightmost element from the array nums and subtract its value from x. Return the minimum number of operations to reduce x to exactly 0, or -1 if it is impossible.",
    whySolveThis: {
      importanceReason: "Masterclass problem inversion: removing elements from ends summing to X is equivalent to finding the LONGEST contiguous subarray summing to `totalSum - X`.",
      keySkills: ["Target sum inversion `target = totalSum - X`", "Variable sliding window for exact target sum", "Operation count `n - maxSubarrayLen`"]
    },
    hints: [
      "Calculate `totalSum` of array.",
      "Target sum of remaining middle subarray is `target = totalSum - x`.",
      "If `target < 0`, return -1. If `target === 0`, return `nums.length`.",
      "Find longest subarray summing to `target` using variable sliding window. Result = `n - maxLen`."
    ],
    approach: {
      bruteForceSummary: "Recursion picking left or right element at each step. O(2^N) time.",
      optimalStrategy: "Invert problem to find longest middle subarray summing to totalSum - x using variable sliding window in O(N) time.",
      patternUsed: "Inverted Target Sum Window"
    },
    solutionJS: `function minOperations(nums, x) {
  let totalSum = 0;
  for (const num of nums) {
    totalSum += num;
  }

  const target = totalSum - x;
  if (target < 0) return -1;
  if (target === 0) return nums.length;

  let left = 0;
  let currentSum = 0;
  let maxLen = -1;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    while (currentSum > target && left <= right) {
      currentSum -= nums[left];
      left++;
    }

    if (currentSum === target) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }

  return maxLen === -1 ? -1 : nums.length - maxLen;
}`,
    complexity: {
      time: "O(N) time complexity for single pass.",
      space: "O(1) auxiliary space.",
      explanation: "Total sum takes O(N), variable sliding window pass takes linear O(N) time."
    },
    edgeCases: ["x > totalSum (returns -1)", "x === totalSum (returns N)", "No valid subarray exists"],
    commonMistakes: "Not checking `target < 0` before running sliding window loop.",
    interviewTakeaway: "Invert end-removal target sum queries into middle-subarray target sum maximization."
  },
  {
    id: "tp-medium-18",
    title: "Maximum Erasure Value",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Variable Window Unique Elements",
    difficulty: "Medium",
    learningOrder: 24,
    importanceTier: "strongly-recommended",
    pattern: "Variable Window Unique Elements",
    patterns: ["Variable Window Unique Elements", "Set Sliding Window"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/maximum-erasure-value/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/maximum-erasure-value/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 23, crossSourceEvidence: 18, patternValue: 20, conceptImportance: 8, learningValue: 9, uniqueness: 8, difficultyValue: 7, totalScore: 92 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Amazon", "Google", "Meta"],
    problemSummary: "You are given an array of positive integers nums and want to erase a subarray containing unique elements. The score you get by erasing the subarray is equal to the sum of its elements. Return the maximum score you can get.",
    whySolveThis: {
      importanceReason: "Teaches combining a Set (for O(1) duplicate detection) with a running window sum in a variable sliding window.",
      keySkills: ["Set duplicate tracking", "Running window sum maintenance", "Window contraction until duplicate is evicted"]
    },
    hints: [
      "Use a Set `seen` to track unique elements in current window `[left, right]`.",
      "Maintain `currentSum`.",
      "When `nums[right]` is already in `seen`, delete `nums[left]` from `seen`, subtract `nums[left]` from `currentSum`, and increment `left`.",
      "Add `nums[right]` to `seen` and `currentSum`, updating `maxSum`."
    ],
    approach: {
      bruteForceSummary: "Check all O(N²) subarrays for uniqueness and calculate sums. O(N²) time.",
      optimalStrategy: "Variable sliding window with Set. Expand right, shrink left when duplicate is encountered in O(N) time.",
      patternUsed: "Unique Element Set Window"
    },
    solutionJS: `function maximumUniqueSubarray(nums) {
  const seen = new Set();
  let left = 0;
  let currentSum = 0;
  let maxSum = 0;

  for (let right = 0; right < nums.length; right++) {
    const val = nums[right];

    // Evict elements from left until duplicate val is removed
    while (seen.has(val)) {
      seen.delete(nums[left]);
      currentSum -= nums[left];
      left++;
    }

    seen.add(val);
    currentSum += val;
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}`,
    complexity: {
      time: "O(N) time complexity for single pass over nums.",
      space: "O(U) auxiliary space where U is number of unique elements in nums.",
      explanation: "Each element is inserted once into set and deleted at most once."
    },
    edgeCases: ["Array with all unique elements", "Array with all duplicate elements", "Single element array"],
    commonMistakes: "Forgetting to subtract `nums[left]` from `currentSum` during set deletion.",
    interviewTakeaway: "Combine Set existence checks with running window sums to track unique subarray scores."
  },
  {
    id: "tp-medium-19",
    title: "Continuous Subarrays",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Variable Window Dual Monotonic Deques",
    difficulty: "Medium",
    learningOrder: 25,
    importanceTier: "strongly-recommended",
    pattern: "Variable Window Dual Monotonic Deques",
    patterns: ["Variable Window Dual Monotonic Deques", "Monotonic Queue Window"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/continuous-subarrays/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/continuous-subarrays/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "Google", "Meta", "Code360"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 24, crossSourceEvidence: 18, patternValue: 23, conceptImportance: 9, learningValue: 9, uniqueness: 9, difficultyValue: 7, totalScore: 94 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Google", "Meta"],
    problemSummary: "You are given a 0-indexed integer array nums. A subarray is continuous if for any two indices i and j in the subarray, |nums[i] - nums[j]| <= 2. Return the total number of continuous subarrays.",
    whySolveThis: {
      importanceReason: "Modern high-frequency Google/Meta interview problem. Teaches maintaining `max(W) - min(W) <= 2` over a variable window using dual monotonic deques.",
      keySkills: ["Dual monotonic deques (maxDeque & minDeque)", "Window bound check `max - min <= 2`", "Subarray count accumulation `count += (right - left + 1)`"]
    },
    hints: [
      "A window is continuous if `max(window) - min(window) <= 2`.",
      "Maintain a decreasing deque `maxDeque` and an increasing deque `minDeque` storing indices.",
      "For each `right`, maintain deques. While `nums[maxDeque[0]] - nums[minDeque[0]] > 2`, shrink `left` by evicting expired deque indices.",
      "Add `right - left + 1` to total count."
    ],
    approach: {
      bruteForceSummary: "Check all O(N²) subarrays for max - min <= 2. O(N²) time.",
      optimalStrategy: "Variable sliding window with dual monotonic deques maintaining window max and min in O(N) time.",
      patternUsed: "Dual Monotonic Deque Window"
    },
    solutionJS: `function continuousSubarrays(nums) {
  let left = 0;
  let count = 0;
  const maxDeque = []; // Decreasing deque for max
  const minDeque = []; // Increasing deque for min

  for (let right = 0; right < nums.length; right++) {
    const val = nums[right];

    // Maintain maxDeque
    while (maxDeque.length > 0 && nums[maxDeque[maxDeque.length - 1]] <= val) {
      maxDeque.pop();
    }
    maxDeque.push(right);

    // Maintain minDeque
    while (minDeque.length > 0 && nums[minDeque[minDeque.length - 1]] >= val) {
      minDeque.pop();
    }
    minDeque.push(right);

    // Shrink window if max - min > 2
    while (nums[maxDeque[0]] - nums[minDeque[0]] > 2) {
      left++;
      if (maxDeque[0] < left) maxDeque.shift();
      if (minDeque[0] < left) minDeque.shift();
    }

    count += (right - left + 1);
  }

  return count;
}`,
    complexity: {
      time: "O(N) time complexity for single pass over nums.",
      space: "O(N) auxiliary space for deques.",
      explanation: "Each index is pushed and popped from deques at most once."
    },
    edgeCases: ["All elements identical", "Array strictly increasing by > 2", "Single element array"],
    commonMistakes: "Not popping out-of-window indices from the front of deques when left advances.",
    interviewTakeaway: "Use dual monotonic deques to maintain window min and max bounds in linear time."
  },

  // ==========================================
  // HARD QUESTIONS (3)
  // ==========================================
  {
    id: "tp-hard-01",
    title: "Subarrays with K Different Integers",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Exact(K) = AtMost(K) - AtMost(K-1)",
    difficulty: "Hard",
    learningOrder: 26,
    importanceTier: "must-do",
    pattern: "Exact(K) = AtMost(K) - AtMost(K-1)",
    patterns: ["Exact(K) = AtMost(K) - AtMost(K-1)", "At-Most K Transformation"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/subarrays-with-k-different-integers/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/subarrays-with-k-different-integers/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Striver SDE Sheet", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 20, patternValue: 25, conceptImportance: 10, learningValue: 10, uniqueness: 10, difficultyValue: 9, totalScore: 99 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Amazon", "Meta", "Google", "Microsoft"],
    problemSummary: "Given an integer array nums and an integer k, return the number of good subarrays of nums. A good array is an array where the number of different integers in that array is exactly k.",
    whySolveThis: {
      importanceReason: "The pinnacle masterclass problem for the At-Most K transformation. Demonstrates why directly counting Exact(K) sliding windows is fragile and how `atMost(K) - atMost(K-1)` provides clean O(N) correctness.",
      keySkills: ["Masterclass Exact(K) = AtMost(K) - AtMost(K-1) transformation", "Frequency Map window maintenance", "Linear subarray counting `(right - left + 1)`"]
    },
    hints: [
      "Directly counting subarrays with EXACTLY k different integers with a single sliding window is complex because shrinking left can break valid windows.",
      "Instead, write a helper function `atMost(nums, k)` that counts subarrays with AT MOST k different integers.",
      "Return `atMost(nums, k) - atMost(nums, k - 1)`."
    ],
    approach: {
      bruteForceSummary: "Check all O(N²) subarrays for distinct count === k using Set. O(N²) time.",
      optimalStrategy: "Masterclass sliding window helper atMost(k). Compute exact k as atMost(k) - atMost(k - 1) in O(N) time.",
      patternUsed: "At-Most K Subtraction Masterclass"
    },
    solutionJS: `function subarraysWithKDistinct(nums, k) {
  return atMost(nums, k) - atMost(nums, k - 1);
}

function atMost(nums, k) {
  if (k <= 0) return 0;

  const freqMap = new Map();
  let left = 0;
  let totalSubarrays = 0;

  for (let right = 0; right < nums.length; right++) {
    const val = nums[right];
    freqMap.set(val, (freqMap.get(val) || 0) + 1);

    while (freqMap.size > k) {
      const leftVal = nums[left];
      freqMap.set(leftVal, freqMap.get(leftVal) - 1);
      if (freqMap.get(leftVal) === 0) {
        freqMap.delete(leftVal);
      }
      left++;
    }

    totalSubarrays += (right - left + 1);
  }

  return totalSubarrays;
}`,
    complexity: {
      time: "O(N) time complexity for two linear passes.",
      space: "O(K) auxiliary space for frequency Map.",
      explanation: "atMost() runs in O(N) time twice, yielding linear O(N) total runtime."
    },
    edgeCases: ["k = 1", "k > unique elements in nums", "All elements identical"],
    commonMistakes: "Not checking `k <= 0` in atMost() helper, causing incorrect subtraction.",
    interviewTakeaway: "Master the `Exact(K) = AtMost(K) - AtMost(K-1)` formula to convert hard exact-count problems into easy sliding window passes."
  },
  {
    id: "tp-hard-02",
    title: "Shortest Subarray with Sum at Least K",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Prefix Sum + Monotonic Deque Window",
    difficulty: "Hard",
    learningOrder: 27,
    importanceTier: "advanced-extension",
    pattern: "Prefix Sum + Monotonic Deque Window",
    patterns: ["Prefix Sum + Monotonic Deque Window", "Monotonic Queue Window"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/shortest-subarray-with-sum-at-least-k/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Striver SDE Sheet", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 19, patternValue: 25, conceptImportance: 10, learningValue: 10, uniqueness: 10, difficultyValue: 9, totalScore: 98 },
    importance: 5,
    interviewFrequency: 4,
    companies: ["Google", "Meta", "Amazon", "Microsoft"],
    problemSummary: "Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a sum of at least k. If there is no such subarray, return -1.",
    whySolveThis: {
      importanceReason: "Extremely famous hard problem bridging Sliding Window and Monotonic Deques. Standard sliding window fails because array contains negative numbers; monotonic prefix sum deque restores O(N) correctness.",
      keySkills: ["Prefix sum array construction", "Monotonic increasing prefix sum deque", "Shortest valid window contraction"]
    },
    hints: [
      "Because nums can contain negative numbers, standard two pointers / sliding window fails.",
      "Build prefix sum array `P` of length `N + 1` where `P[i] = sum(nums[0..i-1])`.",
      "We want shortest index pair `(i, j)` such that `P[j] - P[i] >= k`.",
      "Maintain an increasing Monotonic Deque of prefix sum indices.",
      "While `P[j] - P[deque.front()] >= k`, update min length and `deque.pop_front()`.",
      "While `P[j] <= P[deque.back()]`, `deque.pop_back()` to maintain monotonicity."
    ],
    approach: {
      bruteForceSummary: "Check all O(N²) subarrays for sum >= k. O(N²) time.",
      optimalStrategy: "Prefix sum array + Monotonic increasing index Deque. Front pops valid windows; back pops non-monotonic prefix sums in O(N) time.",
      patternUsed: "Monotonic Deque Prefix Window"
    },
    solutionJS: `function shortestSubarray(nums, k) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }

  let minLen = n + 1;
  const deque = []; // Monotonic increasing deque of prefix indices

  for (let j = 0; j <= n; j++) {
    // Check if valid window sum >= k is found
    while (deque.length > 0 && prefix[j] - prefix[deque[0]] >= k) {
      minLen = Math.min(minLen, j - deque[0]);
      deque.shift(); // Evict front as future windows starting here would be longer
    }

    // Maintain monotonic increasing property of prefix sums
    while (deque.length > 0 && prefix[j] <= prefix[deque[deque.length - 1]]) {
      deque.pop();
    }

    deque.push(j);
  }

  return minLen <= n ? minLen : -1;
}`,
    complexity: {
      time: "O(N) time complexity for single pass.",
      space: "O(N) auxiliary space for prefix sum array and deque.",
      explanation: "Each index is pushed and popped from deque at most once."
    },
    edgeCases: ["No subarray sums to >= k (returns -1)", "Array contains large negative numbers", "Single element >= k"],
    commonMistakes: "Using standard sliding window on arrays with negative numbers, producing wrong answers.",
    interviewTakeaway: "Use Monotonic Increasing Deque of Prefix Sums to find shortest target-sum windows under negative numbers."
  },
  {
    id: "tp-hard-03",
    title: "Count Subarrays With Score Less Than K",
    primaryTopic: "Two Pointers & Sliding Window",
    topic: "Two Pointers & Sliding Window",
    topicId: "two-pointers",
    subtopic: "Variable Window Dynamic Score Math",
    difficulty: "Hard",
    learningOrder: 28,
    importanceTier: "advanced-extension",
    pattern: "Variable Window Dynamic Score Math",
    patterns: ["Variable Window Dynamic Score Math", "Non-Linear Math Window"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/count-subarrays-with-score-less-than-k/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/count-subarrays-with-score-less-than-k/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "Google", "Amazon", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 24, crossSourceEvidence: 18, patternValue: 24, conceptImportance: 9, learningValue: 9, uniqueness: 9, difficultyValue: 9, totalScore: 93 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Google", "Amazon"],
    problemSummary: "The score of an array is defined as the product of its sum and its length. Given an array of positive integers nums and an integer k, return the number of non-empty subarrays of nums whose score is strictly less than k.",
    whySolveThis: {
      importanceReason: "Teaches variable sliding window over non-linear score conditions `currentSum * windowLength < k`.",
      keySkills: ["Non-linear score tracking (`currentSum * length < k`)", "Window contraction on score breach", "Subarray count accumulation `(right - left + 1)`"]
    },
    hints: [
      "Score of window `[left, right]` is `currentSum * (right - left + 1)`.",
      "Because all elements are positive integers, score grows monotonically when expanding right.",
      "Iterate `right`. Add `nums[right]` to `currentSum`.",
      "While `currentSum * (right - left + 1) >= k`, subtract `nums[left]` from `currentSum` and increment `left`.",
      "Add `(right - left + 1)` to total count."
    ],
    approach: {
      bruteForceSummary: "Check all O(N²) subarrays for score < k. O(N²) time.",
      optimalStrategy: "Variable sliding window. Expand right, shrink left when score >= k. Add (right - left + 1) per step in O(N) time.",
      patternUsed: "Non-Linear Math Window"
    },
    solutionJS: `function countSubarrays(nums, k) {
  let left = 0;
  let currentSum = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    currentSum += nums[right];

    // Shrink window while score is >= k
    while (currentSum * (right - left + 1) >= k) {
      currentSum -= nums[left];
      left++;
    }

    count += (right - left + 1);
  }

  return count;
}`,
    complexity: {
      time: "O(N) time complexity for single pass over nums.",
      space: "O(1) auxiliary space.",
      explanation: "Iterating nums takes O(N) time with amortized linear time pointer advancement."
    },
    edgeCases: ["k <= 1 (returns 0 since positive numbers score >= 1)", "Large array with values near k"],
    commonMistakes: "Not checking `k <= 1` boundary condition or using integer values causing potential precision overflows.",
    interviewTakeaway: "Monotonic non-linear window score conditions `(sum * length < k)` are solved in linear O(N) time using variable sliding windows."
  }
];
