export const HASHING_TOPIC_DATA = {
  id: "hashing",
  title: "Hashing & Hash Tables",
  category: "Core Data Structures",
  order: 3,
  description: "JS Map vs Set vs Object, hash collisions, average O(1) lookups vs worst O(N), frequency counting, prefix hashing, composite keys, and hash data structure design.",
  interviewWeight: 5,
  estimatedHours: 8,

  // SECTION 1 — TOPIC INTRODUCTION
  introduction: {
    whatIsIt: "Hashing is a core data structure paradigm that uses a mathematical Hash Function to map arbitrary keys (strings, numbers, objects) to dynamic bucket indices in memory. In JavaScript, Hash Tables are natively exposed via `Map` (key-value dictionary) and `Set` (unique collection of values).",
    whyExists: "Hashing eliminates the O(N) linear search bottleneck of unsorted arrays. By computing a key's memory address in O(1) average time, Hashing enables constant-time data insertion, deletion, and membership verification, making it the primary tool for performance optimization.",
    whenToUse: [
      "When you need O(1) average time key lookups, insertions, or deletions.",
      "When counting element frequencies or character occurrences in text or arrays.",
      "When checking set membership or eliminating duplicates from a collection.",
      "When tracking last-seen index positions (e.g. for distance constraints or sliding window boundaries).",
      "When solving complement math problems (e.g. target - current, pair remainders).",
      "When caching sub-problem cumulative states using Prefix Sum + Hash Map."
    ],
    whenNotToUse: [
      "When data must be maintained in strict sorted numerical or alphabetical order — use a Tree/Sorted Array or Binary Search Tree.",
      "When memory footprint is severely constrained — Hash Maps consume extra O(N) space for hash table bucket pointers and node wrappers.",
      "When range queries (e.g. 'find all numbers between 10 and 50') are needed — Hash Maps cannot execute range queries in O(1) time without full iterations."
    ],
    realWorldUseCases: [
      "Database Indexing: B-Tree and Hash Indexes in PostgreSQL & MongoDB allow O(1) record lookups by unique primary key ID.",
      "Caching Systems: Redis, Memcached, and browser HTTP caches use Hash Tables for O(1) key-value content caching.",
      "Compiler Symbol Tables: Compilers use Hash Tables to store variable scope bindings and function signature lookups.",
      "V8 Engine Optimization: JS engine hidden classes (Shapes) and property lookup caches use Hash Tables for dynamic object access."
    ],
    interviewRelevance: "Hashing accounts for over 35% of technical interview questions at top tech companies (Google, Meta, Amazon, Apple, Microsoft). Key patterns include Frequency Counting, Complement Lookups, Prefix Sum + HashMap, Composite State Hashing, and custom Hash-Based Data Structure Design (LRU Cache). Understanding JavaScript `Map` vs `Set` vs `{}` and average O(1) vs worst O(N) complexity is essential for technical interviews."
  },

  // SECTION 2 — CORE CONCEPTS
  coreConcepts: [
    {
      title: "Hash Function & Bucket Array",
      explanation: "A Hash Function accepts a key and returns an integer index within the range `[0, capacity - 1]`. The underlying table stores entries in a bucket array. A deterministic hash function always maps identical keys to identical indices.",
      keyTakeaway: "A high-quality hash function distributes keys uniformly across all buckets to minimize collisions."
    },
    {
      title: "Hash Collisions & Resolution Strategies",
      explanation: "A collision occurs when two distinct keys map to the identical bucket index. Common collision resolution strategies include Separate Chaining (each bucket holds a linked list or BST) and Open Addressing (probing nearby buckets). JavaScript engine implementations (such as V8) use separate chaining with dynamic resizing.",
      keyTakeaway: "Collisions cause lookup time to degrade from O(1) average to O(N) worst-case if all keys hash into the same bucket."
    },
    {
      title: "Load Factor & Dynamic Resizing",
      explanation: "The Load Factor α is defined as `N / capacity` (total entries divided by bucket count). When α exceeds a threshold (typically 0.75), the Hash Table resizes (doubles capacity) and re-hashes all existing entries.",
      keyTakeaway: "Dynamic resizing guarantees O(1) amortized insertion time, though individual resize operations cost O(N)."
    },
    {
      title: "Average O(1) vs Worst-Case O(N) Complexity",
      explanation: "In technical interviews, never state that `Map.get()` or `Set.has()` is unconditionally guaranteed O(1). On average, lookups are O(1). However, under worst-case hash collisions (or malicious hash-flooding inputs), lookups degrade to O(N).",
      keyTakeaway: "Always specify: 'O(1) average time complexity, O(N) worst-case under severe hash collisions'."
    },
    {
      title: "JavaScript Map vs Set vs Plain Object {}",
      explanation: "In JS: `Set` holds unique values. `Map` holds key-value pairs with arbitrary key types (numbers, objects, functions). Plain objects `{}` only support string/symbol keys, inherit prototype properties (`constructor`, `toString`), and lack built-in size properties.",
      keyTakeaway: "Prefer `Map` and `Set` over plain objects `{}` in DSA for O(1) size lookups, zero prototype pollution, and clean iteration."
    },
    {
      title: "Prefix Sum + Hash Map Paradigm",
      explanation: "Combining Prefix Sums with a Hash Map allows identifying contiguous subarrays whose sum equals K in O(N) time. By storing `currPrefixSum -> first/count` in a Map, we check if `(currPrefixSum - target)` exists in O(1) time.",
      keyTakeaway: "Transforming subarray problems from O(N²) nested loops to O(N) single-pass Map lookups is a core Hashing pattern."
    }
  ],

  // SECTION 3 — JAVASCRIPT METHODS COMPLEXITY MATRIX
  jsImplementation: {
    overview: "JavaScript provides native `Map` and `Set` classes in ES6+. Knowing their exact methods and runtime complexity is critical for interview coding.",
    methods: [
      {
        method: "new Map() / map.set(key, value)",
        description: "Stores a key-value pair in the map.",
        timeComplexity: "O(1) Avg / O(N) Worst",
        spaceComplexity: "O(1) per entry",
        dsaUseCase: "Building frequency maps, index maps, or storing pair complements.",
        avoidWhen: "N/A — Primary method for key-value storage.",
        codeExample: "const map = new Map(); map.set('a', 1);"
      },
      {
        method: "map.get(key) / map.has(key)",
        description: "Retrieves or checks existence of a key.",
        timeComplexity: "O(1) Avg / O(N) Worst",
        spaceComplexity: "O(1)",
        dsaUseCase: "O(1) complement lookup or frequency checking.",
        avoidWhen: "N/A",
        codeExample: "if (map.has(target - num)) { return [map.get(target - num), i]; }"
      },
      {
        method: "map.delete(key) / map.size",
        description: "Deletes a key-value entry or returns total entry count.",
        timeComplexity: "O(1) Avg",
        spaceComplexity: "O(1)",
        dsaUseCase: "Evicting entries (LRU Cache) or checking active element count.",
        avoidWhen: "N/A",
        codeExample: "map.delete(oldestKey);"
      },
      {
        method: "new Set() / set.add(val) / set.has(val)",
        description: "Adds a unique value or checks existence in a set.",
        timeComplexity: "O(1) Avg / O(N) Worst",
        spaceComplexity: "O(1) per entry",
        dsaUseCase: "Deduplication, cycle detection, or rapid O(1) membership checks.",
        avoidWhen: "Do not use Set when you need to store key-value pairs or indices.",
        codeExample: "const set = new Set(); set.add(num);"
      }
    ]
  },

  // SECTION 4 — COMPLEXITY MATRIX
  matrix: [
    { operation: "Map / Set Insertion", jsSyntax: "map.set(k, v) / set.add(v)", timeComplexity: "O(1) Avg / O(N) Worst", spaceComplexity: "O(1)", interviewNotes: "Amortized O(1) including dynamic resizing." },
    { operation: "Map / Set Lookup", jsSyntax: "map.get(k) / set.has(v)", timeComplexity: "O(1) Avg / O(N) Worst", spaceComplexity: "O(1)", interviewNotes: "Direct hash bucket calculation." },
    { operation: "Map / Set Deletion", jsSyntax: "map.delete(k) / set.delete(v)", timeComplexity: "O(1) Avg / O(N) Worst", spaceComplexity: "O(1)", interviewNotes: "Removes key and node pointer." },
    { operation: "Frequency Map Build", jsSyntax: "map.set(k, (map.get(k) || 0) + 1)", timeComplexity: "O(N) Avg", spaceComplexity: "O(U) unique keys", interviewNotes: "Single pass iteration over array or string." },
    { operation: "Prefix Sum + Map Lookup", jsSyntax: "map.has(prefixSum - K)", timeComplexity: "O(N) Total", spaceComplexity: "O(N)", interviewNotes: "Trades O(N) space to reduce subarray search from O(N²) to O(N)." }
  ],

  // SECTION 5 — VISUAL EXPLANATIONS
  visuals: [
    {
      title: "Hash Table Bucket Array & Separate Chaining",
      asciiDiagram: `
Keys: "apple" -> Hash: 2 | "banana" -> Hash: 5 | "cherry" -> Hash: 2 (Collision!)

BUCKET ARRAY:
[ 0 ] -> null
[ 1 ] -> null
[ 2 ] -> [ "apple": 10 ] -> [ "cherry": 25 ] -> null (Chaining!)
[ 3 ] -> null
[ 4 ] -> null
[ 5 ] -> [ "banana": 15 ] -> null
      `,
      explanation: "When 'apple' and 'cherry' produce the identical hash index (2), separate chaining links them in a singly linked list at bucket [2]. Lookups traverse the list at index 2."
    },
    {
      title: "Prefix Sum + Hash Map Subarray Lookup",
      asciiDiagram: `
Array:  [ 1,   2,   3,  -2,   2 ]   Target K = 3
Prefix: [ 1,   3,   6,   4,   6 ]

At index 1 (prefixSum = 3):
Check if (3 - 3 = 0) exists in Map. Map has {0: -1}. Subarray [1..2] found!
      `,
      explanation: "Storing prefix sums in a Hash Map allows finding any continuous subarray summing to K in a single pass O(N) time."
    }
  ],

  // SECTION 6 — PATTERNS
  patterns: [
    {
      name: "Frequency Map / Counting",
      complexityImpact: "Reduces frequency analysis from O(N²) to O(N) time",
      howToRecognize: [
        "Problem asks for most frequent elements, character occurrences, or anagram matching.",
        "Need to count occurrences of elements and compare counts."
      ],
      whyItWorks: "Hash Map tracks `element -> count` in O(1) per insertion.",
      exampleProblemTitle: "Top K Frequent Elements (LC 347), Intersection II (LC 350)",
      jsTemplate: `const freq = new Map();
for (const x of arr) {
  freq.set(x, (freq.get(x) || 0) + 1);
}`
    },
    {
      name: "Last-Seen Index Tracking",
      complexityImpact: "Enables O(1) distance & window boundary validation",
      howToRecognize: [
        "Problem specifies index distance constraint: |i - j| <= k.",
        "Need to find the most recent index where an element appeared."
      ],
      whyItWorks: "Hash Map stores `element -> lastSeenIndex`. Comparing current index with stored index yields distance in O(1).",
      exampleProblemTitle: "Contains Duplicate II (LC 219)",
      jsTemplate: `const lastSeen = new Map();
for (let i = 0; i < nums.length; i++) {
  if (lastSeen.has(nums[i]) && i - lastSeen.get(nums[i]) <= k) return true;
  lastSeen.set(nums[i], i);
}`
    },
    {
      name: "Prefix Sum + Hash Map",
      complexityImpact: "Eliminates nested loops for zero-sum or target-sum subarrays",
      howToRecognize: [
        "Problem asks for continuous subarrays summing to K, divisible by K, or equal 0s/1s."
      ],
      whyItWorks: "If prefixSum[j] - prefixSum[i] = K, then prefixSum[i] = prefixSum[j] - K. Hash Map stores prefix sums encountered so far.",
      exampleProblemTitle: "Longest Subarray with Zero Sum, Contiguous Array (LC 525)",
      jsTemplate: `const map = new Map([[0, -1]]); // prefixSum -> firstIndex
let sum = 0, maxLen = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  if (map.has(sum)) maxLen = Math.max(maxLen, i - map.get(sum));
  else map.set(sum, i);
}`
    },
    {
      name: "Composite & Coordinate State Hashing",
      complexityImpact: "Allows multi-dimensional state lookups in O(1) time",
      howToRecognize: [
        "Problem involves 2D grid coordinates, slopes (dy/dx), or multi-cell constraints."
      ],
      whyItWorks: "Encoding multi-part states into a canonical string key (e.g. `row + ',' + col` or `dy + '/' + dx`) enables Hash Map lookup.",
      exampleProblemTitle: "Valid Sudoku (LC 36), Max Points on a Line (LC 149)",
      jsTemplate: `const key = \`\${r},\${c}\`;
const slopeKey = \`\${dy / gcd(dy,dx)}/\${dx / gcd(dy,dx)}\`;`
    }
  ],

  // SECTION 7 — EXAMPLE TEACHING WALKTHROUGHS
  examples: [
    {
      title: "Teaching Example 1 — Intersection of Two Arrays (LC 349)",
      problem: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique.",
      bruteForce: {
        time: "O(N * M)",
        space: "O(1)",
        explanation: "Nested loops checking if each element of nums1 exists in nums2 and deduplicating.",
        code: `function intersectionBrute(nums1, nums2) {
  const result = [];
  for (let x of nums1) {
    if (nums2.includes(x) && !result.includes(x)) result.push(x);
  }
  return result;
}`
      },
      optimized: {
        time: "O(N + M)",
        space: "O(N)",
        explanation: "Store nums1 elements in a Set. Iterate nums2 and query Set in O(1) average time.",
        code: `function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const result = new Set();
  for (const num of nums2) {
    if (set1.has(num)) result.add(num);
  }
  return Array.from(result);
}`
      },
      whyOptimizedWorks: "Converting nums1 into a Set enables O(1) average membership lookups, reducing total runtime from O(N * M) to O(N + M)."
    }
  ],

  // SECTION 8 — COMMON PITFALLS & MISTAKES
  mistakes: [
    {
      mistake: "Assuming Map.has() or Set.has() is unconditionally O(1)",
      whyItHappens: "Developers forget about hash collisions under worst-case inputs.",
      howToAvoid: "Always specify in interviews: 'O(1) average time, O(N) worst-case under severe hash collisions'.",
      codeSnippet: `// Average O(1) per lookup, but O(N) in worst case if all keys collide!`
    },
    {
      mistake: "Using Plain Object {} with Non-String Keys",
      whyItHappens: "Plain JavaScript objects automatically stringify all keys (`obj[1]` becomes `obj['1']`, `obj[{}]` becomes `obj['[object Object]']`).",
      howToAvoid: "Use `new Map()` whenever keys are numeric, object references, or arbitrary types.",
      codeSnippet: `const obj = {};
obj[{a:1}] = 100;
obj[{b:2}] = 200; // Overwrites obj['[object Object]']!`
    },
    {
      mistake: "Mutating Objects Used as Map Keys",
      whyItHappens: "If an object's reference properties change after being stored as a key in a Map, its hash identity may be corrupted.",
      howToAvoid: "Use immutable primitive keys or canonical string representations (`row + ',' + col`).",
      codeSnippet: `const key = [1, 2];
map.set(key, "val");
key.push(3); // Mutation can lead to subtle lookup bugs!`
    }
  ],

  // SECTION 9 — REVISION CHEAT SHEET
  cheatSheet: {
    formulas: [
      "Load Factor α = N / Capacity",
      "Prefix Sum Subarray: prefixSum[j] - prefixSum[i] = K",
      "Slope Key: dy / gcd(dy, dx) + '/' + dx / gcd(dy, dx)",
      "Complement Key: target - currentNum"
    ],
    recognitionTriggers: [
      "Need O(1) membership check -> Use HashSet",
      "Need element frequency counts -> Use HashMap (elem -> count)",
      "Need distance between duplicate elements -> Use HashMap (elem -> lastIndex)",
      "Subarray sum equals K / 0 -> Use Prefix Sum + HashMap",
      "Need O(1) Key Lookup + O(1) Eviction -> Use HashMap + Doubly Linked List"
    ],
    jsProTips: [
      "Use Map.get(k) || 0 when incrementing frequency counters.",
      "Use Array.from(set) or [...set] to convert Set back to Array.",
      "Use map.size or set.size for instant O(1) element counting.",
      "Use Map/Set for clean iteration via for...of loops."
    ],
    edgeCasesToTest: [
      "Empty input array / empty string",
      "All duplicate elements vs all distinct elements",
      "Negative numbers in prefix sum arrays",
      "Hash collision edge cases",
      "Single element inputs"
    ]
  }
};
