export const ARRAYS_TOPIC_DATA = {
  id: "arrays",
  title: "Arrays & Dynamic Arrays",
  category: "Core Data Structures",
  order: 1,
  description: "Contiguous memory blocks, indexing, dynamic resizing, two-pointer mechanics, sliding window, and prefix sums.",
  interviewWeight: 5,
  estimatedHours: 12,

  // SECTION 1 — TOPIC INTRODUCTION
  introduction: {
    whatIsIt: "An Array is a linear data structure that stores elements of the same or mixed types in contiguous (adjacent) memory locations. In low-level hardware, this contiguity allows the CPU to access any element instantly in O(1) time using an offset calculation: memory_address = base_address + index * element_size.",
    whyExists: "Arrays exist because computers are built around contiguous physical memory (RAM). When you know the index of an element, you don't need to traverse elements sequentially — you can jump straight to the exact RAM location. Additionally, contiguous memory triggers CPU cache line prefetching (spatial locality), making array traversals order-of-magnitude faster than pointer-chasing data structures like Linked Lists.",
    whenToUse: [
      "When you need random access to elements by index in O(1) time.",
      "When the number of items is known in advance or grows predictably.",
      "When sequential iteration over data is the primary performance bottleneck (maximizes CPU cache hits).",
      "When implementing foundational algorithms like Two Pointers, Sliding Window, Kadane's Algorithm, or Binary Search."
    ],
    whenNotToUse: [
      "When frequent insertions or deletions at arbitrary positions (especially the beginning) are required — these take O(N) time due to element shifting.",
      "When memory allocation must be strictly dynamic without over-allocating capacity overhead.",
      "When building persistent queues where dequeuing from the front happens millions of times per second (use a Deque/Doubly Linked List instead of JS shift())."
    ],
    realWorldUseCases: [
      "V8 JavaScript Engine: Internal TypedArrays (Int32Array, Float64Array) power WebGL, WebAssembly, and Canvas ImageData processing.",
      "UI Virtualization: Rendering large feeds (like Twitter/X or Slack) uses virtualized array offsets to render only visible DOM nodes.",
      "Database Buffers: Database engines buffer disk pages into RAM arrays for fast O(1) page index lookup.",
      "Audio/Video Streaming: PCM audio samples and video frame pixels are processed as contiguous float array buffers."
    ],
    interviewRelevance: "Arrays are the single most tested topic in software engineering technical interviews. Over 40% of all interview problems directly involve array manipulation or rely on array-based patterns (Two Pointers, Sliding Window, Prefix Sums, Monotonic Stack). Mastering JavaScript array mechanics and complexity guarantees a strong foundation for interview success."
  },

  // SECTION 2 — CORE CONCEPTS
  coreConcepts: [
    {
      title: "0-Indexed Memory Layout & Address Calculation",
      explanation: "Arrays are 0-indexed because index 0 represents zero offset from the array's base memory address. To read arr[i], the system calculates: Address(i) = BaseAddress + (i * ElementByteSize). This math takes 1 CPU instruction.",
      keyTakeaway: "Index access arr[i] is ALWAYS O(1) time, regardless of whether the array has 10 items or 10,000,000 items."
    },
    {
      title: "V8 Engine Array Optimization: Packed vs Holey Arrays",
      explanation: "In JavaScript engines like V8, arrays adapt dynamically. A 'Packed' array (e.g. [1, 2, 3]) stores contiguous C++ values. A 'Holey' array (e.g. arr = []; arr[100] = 5) contains empty slots, forcing V8 to fall back to expensive prototype chain dictionary lookups.",
      keyTakeaway: "Never create holey arrays in performance-critical DSA code! Avoid assigning indices with gaps (e.g. arr[10] when length is 2)."
    },
    {
      title: "Dynamic Arrays & Amortized O(1) Expansion",
      explanation: "JavaScript arrays are dynamic. When an array reaches capacity, V8 allocates a new memory block (~1.5x to 2x larger) and copies existing elements over. While a resize operation takes O(N) time, it happens so infrequently that the average cost per push() remains O(1) amortized.",
      keyTakeaway: "Array push() is amortized O(1) time. However, pre-allocating size with Array(N) or TypedArrays when bounds are known avoids resize overhead."
    },
    {
      title: "Contiguous Memory vs CPU Cache Locality",
      explanation: "CPUs load memory into high-speed L1/L2 caches in blocks called 'Cache Lines' (typically 64 bytes). Iterating over an array loads adjacent elements into cache simultaneously, yielding massive performance advantages over Linked Lists.",
      keyTakeaway: "Array linear traversal (for loop) is one of the fastest operations in computer hardware due to CPU spatial locality."
    }
  ],

  // SECTION 3 — JAVASCRIPT IMPLEMENTATION & BUILT-IN METHODS
  jsImplementation: {
    overview: "JavaScript provides a rich suite of built-in Array prototype methods. For DSA interviews, you MUST know their underlying algorithmic time complexities and avoid using methods that silently introduce hidden O(N) or O(N log N) bottlenecks inside loops.",
    methods: [
      {
        method: "arr[i]",
        description: "Direct index lookup or update.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)",
        dsaUseCase: "Accessing or updating an element at a known position.",
        avoidWhen: "Never avoid! This is the core operation of arrays.",
        codeExample: "const val = arr[2]; arr[2] = 99;"
      },
      {
        method: "arr.push(x)",
        description: "Appends element x to the end of the array.",
        timeComplexity: "O(1) amortized",
        spaceComplexity: "O(1)",
        dsaUseCase: "Building result arrays, stack operations (LIFO), sliding window buffer building.",
        avoidWhen: "Avoid when prepend (insert at start) is required.",
        codeExample: "arr.push(5); // Returns new length"
      },
      {
        method: "arr.pop()",
        description: "Removes and returns the last element of the array.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)",
        dsaUseCase: "Stack pop, backtracking state cleanup, trailing element removal.",
        avoidWhen: "When removing from the front or middle.",
        codeExample: "const last = arr.pop();"
      },
      {
        method: "arr.shift()",
        description: "Removes and returns the FIRST element of the array.",
        timeComplexity: "O(N)",
        spaceComplexity: "O(1)",
        dsaUseCase: "Simple non-performance-critical queue processing.",
        avoidWhen: "CRITICAL: Never use shift() inside a loop for BFS or queue operations! Shifting N elements takes O(N) due to left-shifting all remaining elements. Use a pointer offset or custom Queue structure instead.",
        codeExample: "const first = arr.shift(); // O(N) shift penalty!"
      },
      {
        method: "arr.unshift(x)",
        description: "Prepends element x to the beginning of the array.",
        timeComplexity: "O(N)",
        spaceComplexity: "O(1)",
        dsaUseCase: "Prepending elements when order needs reversal.",
        avoidWhen: "CRITICAL: Never call unshift() inside an N-iteration loop — turns O(N) algorithm into O(N²). Use push() then arr.reverse() at the end.",
        codeExample: "arr.unshift(0); // Shifts all elements right"
      },
      {
        method: "arr.slice(start, end)",
        description: "Returns a shallow copy of a portion of an array into a new array object.",
        timeComplexity: "O(K) where K = end - start",
        spaceComplexity: "O(K)",
        dsaUseCase: "Subarray extraction, making immutable copies before sorting or recursion.",
        avoidWhen: "Inside inner loops if K is large, as it allocates memory repeatedly.",
        codeExample: "const sub = arr.slice(1, 4); // Index 1, 2, 3"
      },
      {
        method: "arr.splice(start, deleteCount, ...items)",
        description: "Changes the contents of an array by removing or replacing existing elements in-place.",
        timeComplexity: "O(N)",
        spaceComplexity: "O(1) auxiliary",
        dsaUseCase: "In-place element removal or insertion at arbitrary index.",
        avoidWhen: "When in-place two-pointer overwriting can achieve O(1) modification.",
        codeExample: "arr.splice(2, 1); // Deletes 1 item at index 2"
      },
      {
        method: "arr.indexOf(val) / includes(val)",
        description: "Linear search to check existence or find index of value.",
        timeComplexity: "O(N)",
        spaceComplexity: "O(1)",
        dsaUseCase: "Small array search or single existence check.",
        avoidWhen: "Do NOT call inside a loop to check set membership — use a JS Set or Map for O(1) lookups!",
        codeExample: "if (arr.includes(target)) { ... }"
      },
      {
        method: "arr.sort(comparator)",
        description: "Sorts the elements of an array in-place.",
        timeComplexity: "O(N log N)",
        spaceComplexity: "O(N) in V8 Timsort",
        dsaUseCase: "Preprocessing array for Two Pointers, Greedy intervals, Binary Search.",
        avoidWhen: "CRITICAL: Default arr.sort() converts numbers to strings! [10, 2].sort() yields [10, 2]. ALWAYS supply comparator: arr.sort((a, b) => a - b).",
        codeExample: "arr.sort((a, b) => a - b); // Ascending numeric"
      },
      {
        method: "Array.from({length: N}, () => val)",
        description: "Creates a new array initialized with values or dynamic function generation.",
        timeComplexity: "O(N)",
        spaceComplexity: "O(N)",
        dsaUseCase: "Initializing 2D matrices or arrays populated with default values/objects.",
        avoidWhen: "Avoiding sparse arrays. Prefer Array.from() or fill() over new Array(N).",
        codeExample: "const matrix = Array.from({length: R}, () => new Array(C).fill(0));"
      }
    ]
  },

  // SECTION 4 — COMPLEXITY MATRIX
  complexityMatrix: [
    { operation: "Access Element", jsSyntax: "arr[i]", timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewNotes: "Direct RAM base address offset arithmetic." },
    { operation: "Update Element", jsSyntax: "arr[i] = val", timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewNotes: "In-place memory overwrite." },
    { operation: "Append (End)", jsSyntax: "arr.push(val)", timeComplexity: "O(1) amortized", spaceComplexity: "O(1)", interviewNotes: "Occasional O(N) V8 memory reallocation." },
    { operation: "Pop (End)", jsSyntax: "arr.pop()", timeComplexity: "O(1)", spaceComplexity: "O(1)", interviewNotes: "Truncates length property without memory shift." },
    { operation: "Insert at Start", jsSyntax: "arr.unshift(val)", timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewNotes: "Requires shifting all N elements 1 slot right." },
    { operation: "Delete from Start", jsSyntax: "arr.shift()", timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewNotes: "Requires shifting all N elements 1 slot left." },
    { operation: "Arbitrary Insert/Delete", jsSyntax: "arr.splice(idx, count)", timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewNotes: "Shifts tail elements to maintain contiguous layout." },
    { operation: "Linear Search", jsSyntax: "arr.indexOf(val) / find()", timeComplexity: "O(N)", spaceComplexity: "O(1)", interviewNotes: "Scans array linearly from index 0." },
    { operation: "Binary Search (Sorted)", jsSyntax: "custom binarySearch(arr, target)", timeComplexity: "O(log N)", spaceComplexity: "O(1)", interviewNotes: "Halves search space each iteration." },
    { operation: "Sort Array", jsSyntax: "arr.sort((a,b) => a - b)", timeComplexity: "O(N log N)", spaceComplexity: "O(N)", interviewNotes: "V8 uses Timsort (hybrid Merge/Insertion Sort)." },
    { operation: "Subarray Shallow Copy", jsSyntax: "arr.slice(start, end)", timeComplexity: "O(K)", spaceComplexity: "O(K)", interviewNotes: "Allocates new memory for K elements." }
  ],

  // SECTION 5 — VISUAL EXPLANATION
  visualExplanations: [
    {
      title: "Contiguous RAM Array Layout",
      asciiDiagram: `
RAM Address:  0x1000   0x1004   0x1008   0x100C   0x1010
               ┌────────┬────────┬────────┬────────┬────────┐
Array Value:   │   10   │   25   │   42   │   77   │   99   │
               └────────┴────────┴────────┴────────┴────────┘
Index Offset:    [0]      [1]      [2]      [3]      [4]

Access math: Address of arr[3] = 0x1000 + (3 * 4 bytes) = 0x100C  => O(1)
`,
      explanation: "Every element is placed right next to its neighbor in memory. Calculating any index position is a single mathematical formula, enabling instant O(1) random access."
    },
    {
      title: "Shift vs Push In-Place Memory Shifts",
      asciiDiagram: `
PUSH (End insertion) - O(1):
Before: [10, 20, 30] 
Push(40) => [10, 20, 30, 40]  (No existing elements moved!)

SHIFT (Front removal) - O(N):
Before: [10, 20, 30, 40]
Shift() =>  10 is removed!
Step 1: 20 moves to index 0
Step 2: 30 moves to index 1
Step 3: 40 moves to index 2
Result: [20, 30, 40]  (N-1 operations executed!)
`,
      explanation: "Push simply writes to the next empty contiguous memory slot. Shift forces every single remaining item to slide left by 1 index, causing heavy O(N) CPU overhead."
    },
    {
      title: "Two-Pointer Inward Convergence Pattern",
      asciiDiagram: `
Target Sum = 15 | Sorted Array: [2, 4, 7, 11, 14, 18]
                                 ▲                  ▲
                               left               right
Current Sum = 2 + 18 = 20 (Too high! Move right pointer left)

                                 ▲              ▲
                               left           right
Current Sum = 2 + 14 = 16 (Too high! Move right pointer left)

                                 ▲          ▲
                               left       right
Current Sum = 2 + 11 = 13 (Too low! Move left pointer right)

                                    ▲       ▲
                                  left    right
Current Sum = 4 + 11 = 15 (MATCH FOUND! Returns [1, 3])
`,
      explanation: "By placing one pointer at index 0 and another at index N-1 on a sorted array, we can shrink the search space logically in O(N) time without nested loops."
    },
    {
      title: "Sliding Window Dynamic Boundary Expansion",
      asciiDiagram: `
Subarray Sum >= Target (7) | Array: [2, 3, 1, 2, 4, 3]

Window [2, 3, 1, 2]: Sum = 8 >= 7 | Len = 4
       [L--------R]
Shrink Left Pointer:
Window [3, 1, 2]:    Sum = 6 < 7  | Expand Right Pointer
          [L-----R]
Window [3, 1, 2, 4]: Sum = 10 >= 7 | Len = 4
          [L--------R]
Shrink Left Pointer:
Window [1, 2, 4]:    Sum = 7 >= 7  | Len = 3 (New Min Length!)
             [L-----R]
`,
      explanation: "Sliding Window keeps track of a contiguous dynamic range [L...R]. Right expands to satisfy criteria; Left contracts to find the minimal optimal window in O(N) total steps."
    }
  ],

  // SECTION 6 — IMPORTANT ALGORITHMIC PATTERNS
  patterns: [
    {
      id: "two-pointers",
      name: "Two Pointers (Opposite / Same Direction)",
      howToRecognize: [
        "Array is sorted or can be sorted.",
        "Problem asks for pairs/triplets satisfying a target sum or constraint.",
        "Problem asks to modify array in-place (e.g. Remove Duplicates, Move Zeroes)."
      ],
      whyItWorks: "Eliminates nested loops by using monotonic properties of sorted arrays or maintaining writer vs reader indices.",
      jsTemplate: `function twoPointerTemplate(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}`,
      exampleProblemTitle: "3Sum / Two Sum II / Container With Most Water",
      complexityImpact: "Reduces Time Complexity from O(N²) to O(N)."
    },
    {
      id: "sliding-window",
      name: "Sliding Window (Fixed & Variable Size)",
      howToRecognize: [
        "Problem involves contiguous subarrays or substrings.",
        "Asks for max/min sum, longest/shortest subarray satisfying a condition (e.g., sum >= K).",
        "Keywords: 'contiguous subarray', 'longest window', 'max average'."
      ],
      whyItWorks: "Avoids re-computing sums or frequencies from scratch for overlapping windows by adding the incoming right element and subtracting the outgoing left element.",
      jsTemplate: `function slidingWindowVariable(arr, k) {
  let left = 0;
  let currentSum = 0;
  let minLen = Infinity;
  
  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right]; // Expand window
    
    while (currentSum >= k) { // Contract window
      minLen = Math.min(minLen, right - left + 1);
      currentSum -= arr[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}`,
      exampleProblemTitle: "Minimum Size Subarray Sum / Longest Substring Without Repeating Characters",
      complexityImpact: "Reduces Time Complexity from O(N²) to O(N)."
    },
    {
      id: "prefix-sum",
      name: "Prefix Sum & Hash Map Lookup",
      howToRecognize: [
        "Problem asks for range sum queries repeatedly: sum(i to j).",
        "Problem asks to find count or existence of subarrays with sum equal to K (especially with negative numbers!)."
      ],
      whyItWorks: "If prefixSum[j] - prefixSum[i] = K, then the subarray from i+1 to j sums to K. Storing prefix sums in a Map gives O(1) lookup.",
      jsTemplate: `function subarraySumEqualsK(nums, k) {
  const map = new Map();
  map.set(0, 1); // Base case: prefix sum 0 occurs once
  let prefixSum = 0;
  let count = 0;
  
  for (const num of nums) {
    prefixSum += num;
    if (map.has(prefixSum - k)) {
      count += map.get(prefixSum - k);
    }
    map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
  }
  return count;
}`,
      exampleProblemTitle: "Subarray Sum Equals K / Range Sum Query / Find Pivot Index",
      complexityImpact: "Reduces Time Complexity from O(N²) or O(N³) to O(N)."
    },
    {
      id: "kadanes-algorithm",
      name: "Kadane's Algorithm (Dynamic Programming)",
      howToRecognize: [
        "Problem asks for maximum sum contiguous subarray.",
        "Contains positive and negative integers."
      ],
      whyItWorks: "At index i, the maximum subarray ending at i is either nums[i] alone, or currentMax + nums[i]. If currentMax drops below 0, reset it to 0.",
      jsTemplate: `function maxSubArray(nums) {
  let maxSoFar = nums[0];
  let currentMax = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSoFar = Math.max(maxSoFar, currentMax);
  }
  return maxSoFar;
}`,
      exampleProblemTitle: "Maximum Subarray / Maximum Product Subarray",
      complexityImpact: "Reduces Time Complexity from O(N³) or O(N²) to O(N) with O(1) auxiliary space."
    },
    {
      id: "dutch-national-flag",
      name: "3-Way Partitioning (Dutch National Flag)",
      howToRecognize: [
        "Array contains 3 distinct categories or values (e.g. 0s, 1s, 2s).",
        "Asks to sort or partition in a single pass in-place."
      ],
      whyItWorks: "Uses 3 pointers (low, mid, high) to maintain boundaries for 0s, 1s, and 2s simultaneously.",
      jsTemplate: `function sortColors(nums) {
  let low = 0, mid = 0, high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++; mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[high], nums[mid]] = [nums[mid], nums[high]];
      high--;
    }
  }
}`,
      exampleProblemTitle: "Sort Colors / Partition Array",
      complexityImpact: "Sorts in O(N) single pass with O(1) space instead of O(N log N)."
    }
  ],

  // SECTION 7 — TEACHING EXAMPLE QUESTIONS
  teachingExamples: [
    {
      title: "Teaching Example 1: Two Sum",
      problem: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
      bruteForce: {
        code: `function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}`,
        time: "O(N²)",
        space: "O(1)",
        explanation: "Nested loops test every possible pair of numbers. For an array of 10,000 items, this runs ~50,000,000 operations!"
      },
      optimized: {
        code: `function twoSumOptimized(nums, target) {
  const map = new Map(); // stores value -> index
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`,
        time: "O(N)",
        space: "O(N)",
        explanation: "We trade space for time. By storing visited elements in a JS Map, we can check if the needed 'complement' (target - current) exists in instant O(1) time."
      },
      whyOptimizedWorks: "Map lookups take O(1) average time. Traversing the array once yields O(N) total time."
    },
    {
      title: "Teaching Example 2: Maximum Subarray Sum",
      problem: "Find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
      bruteForce: {
        code: `function maxSubArrayBrute(nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum += nums[j];
      max = Math.max(max, currentSum);
    }
  }
  return max;
}`,
        time: "O(N²)",
        space: "O(1)",
        explanation: "Tests every possible starting index i and ending index j, summing elements as it expands."
      },
      optimized: {
        code: `function maxSubArrayKadane(nums) {
  let maxSoFar = nums[0];
  let currentSum = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    // Decision: start new subarray at nums[i] OR extend previous subarray
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSoFar = Math.max(maxSoFar, currentSum);
  }
  return maxSoFar;
}`,
        time: "O(N)",
        space: "O(1)",
        explanation: "Kadane's Algorithm makes a dynamic programming choice at every index: Is it better to extend the existing running subarray sum, or reset and start a fresh subarray right here at nums[i]?"
      },
      whyOptimizedWorks: "A negative running sum will NEVER help increase a future subarray sum, so we drop negative prefix sums immediately."
    }
  ],

  // SECTION 8 — COMMON MISTAKES
  commonMistakes: [
    {
      mistake: "Default arr.sort() Lexicographical Trap",
      whyItHappens: "In JavaScript, [10, 2, 5].sort() converts elements to strings before sorting, resulting in ['10', '2', '5']. '10' comes before '2' alphabetically!",
      howToAvoid: "ALWAYS pass a numerical comparison function: arr.sort((a, b) => a - b) for ascending, or (a, b) => b - a for descending.",
      codeSnippet: `// ❌ WRONG:
[10, 2, 5].sort(); // Yields [10, 2, 5]

// ✅ CORRECT:
[10, 2, 5].sort((a, b) => a - b); // Yields [2, 5, 10]`
    },
    {
      mistake: "Mutating an Array While Iterating Over It",
      whyItHappens: "Calling arr.splice(i, 1) inside a for (let i = 0; i < arr.length; i++) loop changes the indices of all subsequent elements, causing the loop to skip the next element.",
      howToAvoid: "Iterate backwards (for let i = arr.length - 1; i >= 0; i--), or use arr.filter(), or use two pointers.",
      codeSnippet: `// ❌ WRONG:
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) arr.splice(i, 1); // Skips index i+1!
}

// ✅ CORRECT:
let writer = 0;
for (let reader = 0; reader < arr.length; reader++) {
  if (arr[reader] !== 0) {
    arr[writer++] = arr[reader];
  }
}
arr.length = writer;`
    },
    {
      mistake: "Confusing Reference Copying vs Shallow Copying",
      whyItHappens: "Writing const copy = arr does NOT copy the array. It copies the memory pointer! Modifying copy mutates original arr.",
      howToAvoid: "Use const copy = [...arr] or arr.slice() for 1D shallow copies. For 2D matrices, copy row by row: matrix.map(row => [...row]).",
      codeSnippet: `// ❌ WRONG:
const b = a; b[0] = 99; // Modifies a[0] too!

// ✅ CORRECT:
const b = [...a]; b[0] = 99; // a[0] remains unchanged`
    },
    {
      mistake: "Creating Holey Arrays with new Array(N).fill({})",
      whyItHappens: "Writing new Array(3).fill({}) fills all 3 slots with a reference to the EXACT SAME object in memory! Updating res[0].val updates all 3.",
      howToAvoid: "Use Array.from({length: N}, () => ({})) to instantiate unique objects.",
      codeSnippet: `// ❌ WRONG:
const grid = new Array(3).fill([]);
grid[0].push(1); // Modifies grid[1] and grid[2] as well!

// ✅ CORRECT:
const grid = Array.from({length: 3}, () => []);`
    }
  ],

  // SECTION 9 — INTERVIEW CHEAT SHEET
  cheatSheet: {
    formulas: [
      "Midpoint calculation (overflow safe): mid = Math.floor(left + (right - left) / 2)",
      "Subarray sum between indices L and R: sum = prefixSum[R] - (prefixSum[L - 1] || 0)",
      "Subarray length from left to right index: length = right - left + 1",
      "Total non-empty subarrays in array of length N: N * (N + 1) / 2"
    ],
    keyComplexities: [
      "Random access: O(1)",
      "Push / Pop end: O(1)",
      "Shift / Unshift start: O(N)",
      "Sort numeric: O(N log N)",
      "Two Pointers scan: O(N)",
      "Sliding Window scan: O(N)"
    ],
    recognitionTriggers: [
      "Keyword 'Sorted Array' → Think Two Pointers or Binary Search instantly.",
      "Keyword 'Contiguous Subarray' + 'Max/Min/Target' → Think Sliding Window or Kadane's.",
      "Keyword 'Subarray Sum = K' + 'Negative Numbers' → Think Prefix Sum + Hash Map.",
      "Keyword 'Find Duplicates / Missing' in 1..N array → Think In-place Index Mapping (Cyclic Sort)."
    ],
    jsProTips: [
      "Use TypedArrays (Int32Array) when memory footprint or high-performance byte manipulation is required.",
      "To swap elements without temporary variable: [arr[i], arr[j]] = [arr[j], arr[i]];",
      "To initialize an array of zeroes: const arr = new Array(N).fill(0);",
      "To deep clone a 2D matrix: const copy = matrix.map(row => [...row]);"
    ],
    edgeCasesToTest: [
      "Empty array: []",
      "Single element array: [5]",
      "All duplicate elements: [2, 2, 2, 2]",
      "All negative numbers: [-5, -2, -9, -1]",
      "Target sum not possible or array with no matches",
      "Array already sorted vs reverse sorted"
    ]
  }
};
