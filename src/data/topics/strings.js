export const STRINGS_TOPIC_DATA = {
  id: "strings",
  title: "Strings & Pattern Matching",
  category: "Core Data Structures",
  order: 2,
  description: "JS string immutability, character encoding (ASCII/Unicode), frequency vectors, palindromic center expansion, sliding window, and pattern matching (KMP / Rabin-Karp).",
  interviewWeight: 5,
  estimatedHours: 10,

  // SECTION 1 — TOPIC INTRODUCTION
  introduction: {
    whatIsIt: "A String is an ordered sequence of characters stored as character codes. In JavaScript, strings are UTF-16 code unit sequences where each character is immutable once instantiated. Conceptually, a string behaves as an array of characters, but in memory, string values cannot be mutated element-by-element.",
    whyExists: "Strings exist to represent textual data, protocol buffers, formatted documents, and natural language. In computer systems, strings act as communication interfaces between systems, APIs, user interfaces, and serialization formats (JSON, XML).",
    whenToUse: [
      "When working with textual data, word tokens, or character sequences.",
      "When evaluating palindromes, anagrams, or character frequency vectors.",
      "When searching for sub-patterns inside a text body using sliding window or KMP.",
      "When serializing complex data structures into formatted strings (length-prefix encoding)."
    ],
    whenNotToUse: [
      "When frequent in-place character mutations are required inside performance-critical loops — use a character array `s.split('')` or TypedArray instead to avoid creating intermediate string garbage.",
      "When evaluating mathematical state machines where integer states avoid string conversion overhead.",
      "When building persistent dynamic stacks/queues — use dynamic arrays or dedicated queue structures."
    ],
    realWorldUseCases: [
      "Search Engines: Substring pattern matching (KMP / Rabin-Karp) fuels document indexing and search query highlight matching.",
      "V8 Engine Optimization: Small strings are internalized ('string interning') in V8 to allow instantaneous O(1) pointer equality checks.",
      "Network Protocol Parsing: HTTP request header parsing, URL query string decoding, and IP address validation.",
      "Text Editors & IDEs: Syntax highlighting, auto-complete, and fuzzy search rely on string prefix matching and diff alignment."
    ],
    interviewRelevance: "Strings represent ~30% of all technical interview problems asked by top technology companies (Google, Meta, Amazon, Microsoft). Key interview topics include Sliding Window String Matching, Anagram Character Frequency Vectors, Palindromic Center Expansion, Length-Prefix Encoding, and KMP LPS Pattern Searching. Understanding JS string immutability and memory allocation prevents common O(N²) string concatenation pitfalls in interviews."
  },

  // SECTION 2 — CORE CONCEPTS
  coreConcepts: [
    {
      title: "JavaScript String Immutability & Memory Allocation",
      explanation: "In JavaScript, strings are primitive values and IMMUTABLE. Once a string 'abc' is created, its individual characters cannot be changed (`s[0] = 'z'` fails silently or throws in strict mode). Modifying a string creates an entirely new string in memory and copies characters over in O(N) time.",
      keyTakeaway: "Concatenating strings inside a loop (`s += char`) creates N intermediate strings, leading to an O(N²) time penalty! Always push characters to an array `arr.push(char)` and call `arr.join('')` at the end for O(N) linear time string construction."
    },
    {
      title: "ASCII vs Unicode vs UTF-16 Encoding",
      explanation: "JavaScript strings are encoded in UTF-16. Standard English lowercase letters ('a' to 'z') map directly to ASCII codes 97 to 122 (`'a'.charCodeAt(0) === 97`). To compute a 0-indexed character frequency offset, use `char.charCodeAt(0) - 97`.",
      keyTakeaway: "For lowercase English letters, a fixed 26-element array `new Array(26).fill(0)` provides O(1) space character frequency counting."
    },
    {
      title: "String vs Character Array (Array of Chars)",
      explanation: "A string provides O(1) index reads (`s[i]`) but O(N) slice/concatenation updates. A character array (`s.split('')`) allows O(1) in-place character swaps (`arr[left] = arr[right]`), making two-pointer reversals efficient.",
      keyTakeaway: "Convert string to array `s.split('')` when performing in-place modifications, then convert back using `arr.join('')`."
    },
    {
      title: "Center Expansion for Palindromes",
      explanation: "A palindrome reads the same forwards and backwards. Expanding outward from potential centers evaluates palindromes in O(N²) time and O(1) space without allocating extra string memory. An N-character string has 2N - 1 centers (N single-char centers and N-1 adjacent-char centers).",
      keyTakeaway: "Always expand outward from center pointers `left` and `right` while `s[left] === s[right]` for optimal palindrome detection."
    }
  ],

  // SECTION 3 — JAVASCRIPT STRING METHODS COMPLEXITY MATRIX
  jsImplementation: {
    overview: "JavaScript provides built-in String methods. Understanding their exact time and space complexities prevents hidden performance traps in interviews.",
    methods: [
      {
        method: "s[i] or s.charAt(i)",
        description: "Returns the character at index i.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)",
        dsaUseCase: "Reading character at specific index.",
        avoidWhen: "Never avoid! Standard character lookup.",
        codeExample: "const char = s.charAt(i);"
      },
      {
        method: "s.charCodeAt(i)",
        description: "Returns UTF-16 numeric ASCII code of character at index i.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)",
        dsaUseCase: "Character frequency bucket indexing: s.charCodeAt(i) - 97.",
        avoidWhen: "N/A — Essential for ASCII frequency arrays.",
        codeExample: "const idx = s.charCodeAt(i) - 97; // 0 for 'a'"
      },
      {
        method: "String.fromCharCode(code)",
        description: "Converts numeric UTF-16/ASCII code back into a single-character string.",
        timeComplexity: "O(1)",
        spaceComplexity: "O(1)",
        dsaUseCase: "Reconstructing character from frequency offset.",
        avoidWhen: "N/A",
        codeExample: "const char = String.fromCharCode(97); // 'a'"
      },
      {
        method: "s.substring(start, end) / s.slice(start, end)",
        description: "Extracts a portion of string from start up to (excluding) end.",
        timeComplexity: "O(K) where K = end - start",
        spaceComplexity: "O(K)",
        dsaUseCase: "Extracting substrings, sliding window window capture.",
        avoidWhen: "Avoid calling slice/substring inside nested loops if you only need length or comparison.",
        codeExample: "const sub = s.slice(2, 5);"
      },
      {
        method: "s.split(delimiter)",
        description: "Splits a string into an array of substrings based on delimiter.",
        timeComplexity: "O(N)",
        spaceComplexity: "O(N)",
        dsaUseCase: "Tokenizing words, converting string to character array `s.split('')`.",
        avoidWhen: "Avoid inside tight loops.",
        codeExample: "const words = s.split(' ');"
      },
      {
        method: "arr.join(delimiter)",
        description: "Joins array elements into a single string with delimiter.",
        timeComplexity: "O(N)",
        spaceComplexity: "O(N)",
        dsaUseCase: "Optimal O(N) string construction from character array.",
        avoidWhen: "N/A — Recommended pattern for string building.",
        codeExample: "const str = charArr.join('');"
      },
      {
        method: "s.indexOf(sub) / s.includes(sub)",
        description: "Searches for substring `sub` inside string `s`.",
        timeComplexity: "O(N * M) naive / engine optimized",
        spaceComplexity: "O(1)",
        dsaUseCase: "Basic substring existence checks.",
        avoidWhen: "When sub-linear O(N + M) pattern matching is required — use KMP or Rabin-Karp.",
        codeExample: "if (s.includes('abc')) { ... }"
      }
    ]
  },

  // SECTION 4 — STRINGS INTERVIEW CHEAT SHEET & PATTERN MATRIX
  patterns: [
    {
      name: "Character Frequency Vector (26-Element Array)",
      whenToUse: "When problem involves lowercase English letter counting, valid anagrams, or character count comparisons.",
      keyTechnique: "Maintain `const freq = new Array(26).fill(0)` and index using `char.charCodeAt(0) - 97`.",
      timeSpace: "Time: O(N), Space: O(1) auxiliary fixed 26 array."
    },
    {
      name: "Two Pointers (Opposite Inward)",
      whenToUse: "When verifying palindromes, reversing strings, or filtering alphanumeric characters.",
      keyTechnique: "Pointers `left = 0, right = N - 1`. Move inward while evaluating condition.",
      timeSpace: "Time: O(N), Space: O(1)."
    },
    {
      name: "Expand Around Center (Palindromic Substrings)",
      whenToUse: "When searching for longest palindromic substring or counting palindromic substrings.",
      keyTechnique: "Expand outward from center `i, i` (odd) and `i, i+1` (even) while `s[left] === s[right]`.",
      timeSpace: "Time: O(N²), Space: O(1)."
    },
    {
      name: "Variable Sliding Window (String Substrings)",
      whenToUse: "When searching for longest substring without repeating characters or minimum window containing targets.",
      keyTechnique: "Expand `right` pointer to include character, contract `left` pointer when window condition is invalidated.",
      timeSpace: "Time: O(N), Space: O(K) where K = alphabet size."
    },
    {
      name: "Length-Prefix Delimiter Encoding",
      whenToUse: "When encoding an array of strings into a single string for transmission or caching.",
      keyTechnique: "Format each string as `${str.length}#${str}`. Read length N up to `#`, then read N chars.",
      timeSpace: "Time: O(Total Chars), Space: O(1) auxiliary."
    },
    {
      name: "KMP Algorithm (LPS - Longest Prefix Suffix Table)",
      whenToUse: "When matching a pattern P in text T in O(N + M) time without text pointer backtracking.",
      keyTechnique: "Precompute `LPS` array for pattern. Upon mismatch, fallback pattern pointer `j = LPS[j - 1]`.",
      timeSpace: "Time: O(N + M), Space: O(M) for LPS array."
    },
    {
      name: "Rabin-Karp Rolling Hash",
      whenToUse: "When matching fixed-length pattern in stream or checking binary substrings of size K.",
      keyTechnique: "Maintain rolling polynomial hash. Remove outgoing char hash and add incoming char hash in O(1).",
      timeSpace: "Time: O(N) average, Space: O(1)."
    }
  ],

  // SECTION 5 — PATTERN RECOGNITION GUIDE: WHEN YOU SEE X, THINK Y
  patternRecognition: [
    {
      whenYouSee: "Check if two strings contain identical character counts regardless of order",
      thinkY: "Character Frequency Vector: `const count = new Array(26).fill(0)` or Map count comparison."
    },
    {
      whenYouSee: "Find longest substring without repeating characters",
      thinkY: "Variable Sliding Window with `seenMap` storing last seen index of each character."
    },
    {
      whenYouSee: "Find minimum window in text S containing all characters of pattern T",
      thinkY: "Variable Sliding Window with frequency requirement counter `requiredCount`."
    },
    {
      whenYouSee: "Find longest palindromic substring or count palindromes",
      thinkY: "Expand Around Center: expand `left--` and `right++` for all 2N-1 centers."
    },
    {
      whenYouSee: "Find first occurrence of pattern P in text T",
      thinkY: "KMP Algorithm with LPS array or Rabin-Karp Rolling Hash."
    },
    {
      whenYouSee: "Safely encode string list `['a', 'b#c']` into single string",
      thinkY: "Length-Prefix Delimiter Encoding: format as `${len}#${str}`."
    }
  ]
};
