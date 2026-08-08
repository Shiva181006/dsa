export const STRINGS_QUESTIONS = [
  {
    "id": "str-easy-01",
    "title": "Valid Anagram",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Hashing",
      "Sorting"
    ],
    "subtopic": "Character Frequency Vectors",
    "difficulty": "Easy",
    "learningOrder": 1,
    "importanceTier": "must-do",
    "pattern": "Character Frequency Vector",
    "patterns": [
      "Character Frequency Vector"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/valid-anagram/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/"
      }
    ],
    "crossSource": {
      "sourceCount": 6,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet",
        "GeeksforGeeks",
        "InterviewBit"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 20,
      "patternValue": 20,
      "conceptImportance": 10,
      "learningValue": 10,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 98
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Google",
      "Uber",
      "Microsoft",
      "Bloomberg"
    ],
    "problemSummary": "Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.",
    "whySolveThis": {
      "importanceReason": "The canonical character frequency question. Demonstrates fixed 26-element array counting in O(N) time and O(1) space.",
      "keySkills": [
        "ASCII offset indexing",
        "Fixed frequency array vs Hash Map",
        "O(1) space optimization"
      ]
    },
    "hints": [
      "If lengths differ, return false immediately.",
      "Use 26-element frequency array.",
      "Increment for s[i], decrement for t[i]."
    ],
    "approach": {
      "bruteForceSummary": "Sort strings and compare. O(N log N) time.",
      "optimalStrategy": "Length check. Loop s and t updating 26-element count array. Verify all frequencies are 0.",
      "patternUsed": "Character Frequency Vector"
    },
    "solutionJS": "function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const count = new Array(26).fill(0);\n  for (let i = 0; i < s.length; i++) {\n    count[s.charCodeAt(i) - 97]++;\n    count[t.charCodeAt(i) - 97]--;\n  }\n  return count.every(val => val === 0);\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass.",
      "spaceExplanation": "Fixed 26-element array."
    },
    "edgeCases": [
      "Strings of unequal length",
      "Repeated characters"
    ],
    "commonMistake": "Sorting strings resulting in O(N log N) instead of O(N).",
    "interviewTakeaway": "Fixed 26-element array is optimal for lowercase English letter frequency counts."
  },
  {
    "id": "str-easy-02",
    "title": "Valid Palindrome",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Two Pointers"
    ],
    "subtopic": "Opposite Two Pointers",
    "difficulty": "Easy",
    "learningOrder": 2,
    "importanceTier": "must-do",
    "pattern": "Two Pointers (Opposite Inward)",
    "patterns": [
      "Two Pointers (Opposite Inward)"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/valid-palindrome/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/sentence-palindrome-palindrome-after-removing-spaces-etc/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Striver A2Z",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 20,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 95
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft",
      "Apple"
    ],
    "problemSummary": "Return `true` if phrase is a palindrome after converting uppercase to lowercase and removing non-alphanumeric characters.",
    "whySolveThis": {
      "importanceReason": "Teaches inward two-pointer traversal on strings while dynamically skipping non-alphanumeric characters.",
      "keySkills": [
        "Alphanumeric check",
        "Case normalization",
        "Two pointers inward"
      ]
    },
    "hints": [
      "Use left = 0, right = N-1.",
      "Skip non-alphanumeric characters.",
      "Compare lowercased characters."
    ],
    "approach": {
      "bruteForceSummary": "Clean string with Regex, compare reversed. O(N) space.",
      "optimalStrategy": "Two pointers left/right skipping non-alphanumeric. Compare s[left].toLowerCase() === s[right].toLowerCase().",
      "patternUsed": "Two Pointers Opposite Inward"
    },
    "solutionJS": "function isPalindrome(s) {\n  let left = 0, right = s.length - 1;\n  function isAlphaNum(char) {\n    const code = char.charCodeAt(0);\n    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);\n  }\n  while (left < right) {\n    while (left < right && !isAlphaNum(s[left])) left++;\n    while (left < right && !isAlphaNum(s[right])) right--;\n    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;\n    left++; right--;\n  }\n  return true;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass.",
      "spaceExplanation": "Operates in-place."
    },
    "edgeCases": [
      "Empty string",
      "Punctuation only"
    ],
    "commonMistake": "Regex clean allocating O(N) memory.",
    "interviewTakeaway": "Two pointers allow palindrome checks in O(1) space."
  },
  {
    "id": "str-easy-03",
    "title": "First Unique Character in a String",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Hashing"
    ],
    "subtopic": "Frequency Table Search",
    "difficulty": "Easy",
    "learningOrder": 3,
    "importanceTier": "must-do",
    "pattern": "Two-Pass Frequency Lookup",
    "patterns": [
      "Two-Pass Frequency Lookup"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/first-unique-character-in-a-string/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/given-a-string-find-its-first-non-repeating-character/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Striver A2Z",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 18,
      "conceptImportance": 8,
      "learningValue": 8,
      "uniqueness": 7,
      "difficultyValue": 5,
      "totalScore": 87
    },
    "importance": 4,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Find the index of the first non-repeating character in a string. Return -1 if none exists.",
    "whySolveThis": {
      "importanceReason": "Classic two-pass frequency table problem. Pass 1 counts frequencies; Pass 2 finds first char with count 1.",
      "keySkills": [
        "Two-pass linear algorithm",
        "Frequency counting",
        "First match index"
      ]
    },
    "hints": [
      "Pass 1: Count character frequencies.",
      "Pass 2: Find first character with count 1."
    ],
    "approach": {
      "bruteForceSummary": "Nested loops checking index. O(N²) time.",
      "optimalStrategy": "Pass 1: 26-element count array. Pass 2: return first index i where count === 1.",
      "patternUsed": "Two-Pass Frequency Lookup"
    },
    "solutionJS": "function firstUniqChar(s) {\n  const count = new Array(26).fill(0);\n  for (let i = 0; i < s.length; i++) count[s.charCodeAt(i) - 97]++;\n  for (let i = 0; i < s.length; i++) {\n    if (count[s.charCodeAt(i) - 97] === 1) return i;\n  }\n  return -1;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Two linear passes.",
      "spaceExplanation": "Fixed 26-element array."
    },
    "edgeCases": [
      "All characters unique",
      "All repeated"
    ],
    "commonMistake": "Using `indexOf` inside loop.",
    "interviewTakeaway": "Two-pass algorithms enable instant O(1) state lookups."
  },
  {
    "id": "str-easy-04",
    "title": "Longest Common Prefix",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "String Scanning"
    ],
    "subtopic": "Vertical Scanning",
    "difficulty": "Easy",
    "learningOrder": 4,
    "importanceTier": "must-do",
    "pattern": "Vertical Character Scan",
    "patterns": [
      "Vertical Character Scan"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/longest-common-prefix/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/longest-common-prefix-using-sorting/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Striver A2Z",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 19,
      "patternValue": 18,
      "conceptImportance": 8,
      "learningValue": 8,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 90
    },
    "importance": 4,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Google",
      "Apple",
      "Meta"
    ],
    "problemSummary": "Find the longest common prefix string amongst an array of strings.",
    "whySolveThis": {
      "importanceReason": "Teaches vertical character scanning across multiple string streams simultaneously.",
      "keySkills": [
        "Vertical scanning",
        "Early exit termination",
        "Character match comparison"
      ]
    },
    "hints": [
      "Compare characters column by column across all strings.",
      "Stop on mismatch or end of any string."
    ],
    "approach": {
      "bruteForceSummary": "Horizontal prefix comparison. O(S) time.",
      "optimalStrategy": "Iterate column 0..strs[0].length-1. Check strs[i][col] === char. Return slice on mismatch.",
      "patternUsed": "Vertical Character Scan"
    },
    "solutionJS": "function longestCommonPrefix(strs) {\n  if (!strs || strs.length === 0) return \"\";\n  for (let col = 0; col < strs[0].length; col++) {\n    const char = strs[0][col];\n    for (let i = 1; i < strs.length; i++) {\n      if (col >= strs[i].length || strs[i][col] !== char) {\n        return strs[0].slice(0, col);\n      }\n    }\n  }\n  return strs[0];\n}",
    "complexity": {
      "time": "O(S)",
      "space": "O(1)",
      "timeExplanation": "S is total characters.",
      "spaceExplanation": "Constant auxiliary memory."
    },
    "edgeCases": [
      "Empty array",
      "No common prefix"
    ],
    "commonMistake": "Sorting string array first adding O(N log N) sorting overhead.",
    "interviewTakeaway": "Vertical scanning terminates at the very first mismatched character."
  },
  {
    "id": "str-easy-05",
    "title": "Isomorphic Strings",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Hashing"
    ],
    "subtopic": "Bijective Character Mapping",
    "difficulty": "Easy",
    "learningOrder": 5,
    "importanceTier": "must-do",
    "pattern": "Bijective Map / Dual Mapping",
    "patterns": [
      "Bijective Map / Dual Mapping"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/isomorphic-strings/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/check-if-two-given-strings-are-isomorphic-to-each-other/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Striver A2Z",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 19,
      "conceptImportance": 8,
      "learningValue": 9,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 90
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "LinkedIn",
      "Google",
      "Amazon"
    ],
    "problemSummary": "Determine if two strings `s` and `t` are isomorphic.",
    "whySolveThis": {
      "importanceReason": "Teaches enforcing strict 1-to-1 bijective mapping between character sets using dual maps.",
      "keySkills": [
        "Bijective mapping (1-to-1)",
        "Dual Hash Map state tracking",
        "Character translation"
      ]
    },
    "hints": [
      "Maintain mapS2T and mapT2S.",
      "If s[i] maps to t[i] and t[i] maps back to s[i], mapping is valid."
    ],
    "approach": {
      "bruteForceSummary": "Search and replace characters. O(N²) time.",
      "optimalStrategy": "Dual maps mapS2T and mapT2S. Validate bidirectional mapping at each step.",
      "patternUsed": "Bijective Map / Dual Mapping"
    },
    "solutionJS": "function isIsomorphic(s, t) {\n  if (s.length !== t.length) return false;\n  const mapS2T = new Map();\n  const mapT2S = new Map();\n  for (let i = 0; i < s.length; i++) {\n    const charS = s[i], charT = t[i];\n    if (mapS2T.has(charS) && mapS2T.get(charS) !== charT) return false;\n    if (mapT2S.has(charT) && mapT2S.get(charT) !== charS) return false;\n    mapS2T.set(charS, charT);\n    mapT2S.set(charT, charS);\n  }\n  return true;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(K)",
      "timeExplanation": "Single linear pass.",
      "spaceExplanation": "K is alphabet size (max 256)."
    },
    "edgeCases": [
      "Different lengths",
      "Two chars mapping to same char"
    ],
    "commonMistake": "Using only 1 map, missing N-to-1 collisions.",
    "interviewTakeaway": "1-to-1 bijection requires dual-map validation."
  },
  {
    "id": "str-easy-06",
    "title": "Word Pattern",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Hashing"
    ],
    "subtopic": "Token Bijective Mapping",
    "difficulty": "Easy",
    "learningOrder": 6,
    "importanceTier": "important",
    "pattern": "Token Splitting + Bijective Map",
    "patterns": [
      "Token Splitting + Bijective Map"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/word-pattern/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 22,
      "crossSourceEvidence": 17,
      "patternValue": 18,
      "conceptImportance": 8,
      "learningValue": 8,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 86
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Amazon",
      "Uber",
      "Microsoft"
    ],
    "problemSummary": "Find if string `s` follows the same pattern as string `pattern`.",
    "whySolveThis": {
      "importanceReason": "Extends Isomorphic Strings from character-to-character mapping to character-to-word token mapping.",
      "keySkills": [
        "String tokenization `s.split(' ')`",
        "Bijective character-to-word mapping",
        "Length validation"
      ]
    },
    "hints": [
      "Split s into word array.",
      "Validate pattern.length === words.length.",
      "Dual map character <-> word."
    ],
    "approach": {
      "bruteForceSummary": "Replace words and compare. O(N²) time.",
      "optimalStrategy": "words = s.split(' '). Check lengths. Dual maps charToWord and wordToChar.",
      "patternUsed": "Token Splitting + Bijective Map"
    },
    "solutionJS": "function wordPattern(pattern, s) {\n  const words = s.split(\" \");\n  if (pattern.length !== words.length) return false;\n  const charToWord = new Map(), wordToChar = new Map();\n  for (let i = 0; i < pattern.length; i++) {\n    const c = pattern[i], w = words[i];\n    if (charToWord.has(c) && charToWord.get(c) !== w) return false;\n    if (wordToChar.has(w) && wordToChar.get(w) !== c) return false;\n    charToWord.set(c, w); wordToChar.set(w, c);\n  }\n  return true;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Single pass tokenization.",
      "spaceExplanation": "Stores words and maps."
    },
    "edgeCases": [
      "Length mismatch",
      "Multiple letters mapping to same word"
    ],
    "commonMistake": "Forgetting to validate pattern length equals words length.",
    "interviewTakeaway": "Tokenization generalizes character mapping to word units."
  },
  {
    "id": "str-easy-07",
    "title": "Length of Last Word",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "String Scanning"
    ],
    "subtopic": "Backward Pointer Traversal",
    "difficulty": "Easy",
    "learningOrder": 7,
    "importanceTier": "important",
    "pattern": "Backward Pointer Traversal",
    "patterns": [
      "Backward Pointer Traversal"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/length-of-last-word/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 22,
      "crossSourceEvidence": 17,
      "patternValue": 17,
      "conceptImportance": 7,
      "learningValue": 8,
      "uniqueness": 7,
      "difficultyValue": 5,
      "totalScore": 83
    },
    "importance": 3,
    "interviewFrequency": 4,
    "companies": [
      "Amazon",
      "Apple",
      "Google"
    ],
    "problemSummary": "Return the length of the last word in a string consisting of words and spaces.",
    "whySolveThis": {
      "importanceReason": "Teaches backward pointer scanning to skip trailing spaces and count last word length in O(1) extra space.",
      "keySkills": [
        "Backward pointer scan",
        "Trailing whitespace skipping",
        "O(1) space"
      ]
    },
    "hints": [
      "Start from end.",
      "Skip trailing spaces.",
      "Count characters until space or start."
    ],
    "approach": {
      "bruteForceSummary": "s.trim().split(' ') and return last length. O(N) space.",
      "optimalStrategy": "Pointer p = N-1. Skip ' '. Count chars until ' ' or p < 0.",
      "patternUsed": "Backward Pointer Traversal"
    },
    "solutionJS": "function lengthOfLastWord(s) {\n  let p = s.length - 1, length = 0;\n  while (p >= 0 && s[p] === ' ') p--;\n  while (p >= 0 && s[p] !== ' ') { length++; p--; }\n  return length;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single backward pass.",
      "spaceExplanation": "Constant auxiliary memory."
    },
    "edgeCases": [
      "Trailing spaces",
      "Single word"
    ],
    "commonMistake": "Allocating word array with split() when O(1) pointer scan suffices.",
    "interviewTakeaway": "Scanning backward eliminates memory overhead when evaluating trailing properties."
  },
  {
    "id": "str-easy-08",
    "title": "Add Binary",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Bit Manipulation",
      "Math"
    ],
    "subtopic": "Right-to-Left Carry Propagation",
    "difficulty": "Easy",
    "learningOrder": 8,
    "importanceTier": "must-do",
    "pattern": "Right-to-Left Carry Propagation",
    "patterns": [
      "Right-to-Left Carry Propagation"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/add-binary/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/program-to-add-two-binary-strings/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Striver A2Z",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 19,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 93
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Meta",
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "problemSummary": "Given two binary strings `a` and `b`, return their sum as a binary string.",
    "whySolveThis": {
      "importanceReason": "Teaches string arithmetic carry propagation from right to left without converting strings to BigInt/Number.",
      "keySkills": [
        "Right-to-left character sum",
        "Carry state tracking",
        "Digit string construction"
      ]
    },
    "hints": [
      "Use pointers i = a.length - 1, j = b.length - 1.",
      "Track carry.",
      "sum = carry + a[i] + b[j]."
    ],
    "approach": {
      "bruteForceSummary": "BigInt('0b'+a) + BigInt('0b'+b). Fails on huge inputs.",
      "optimalStrategy": "Two pointers i, j from end + carry. Digit sum % 2, carry = floor(sum / 2). Reverse result.",
      "patternUsed": "Right-to-Left Carry Propagation"
    },
    "solutionJS": "function addBinary(a, b) {\n  let i = a.length - 1, j = b.length - 1, carry = 0;\n  const result = [];\n  while (i >= 0 || j >= 0 || carry > 0) {\n    let sum = carry;\n    if (i >= 0) { sum += a.charCodeAt(i) - 48; i--; }\n    if (j >= 0) { sum += b.charCodeAt(j) - 48; j--; }\n    result.push(sum % 2);\n    carry = Math.floor(sum / 2);\n  }\n  return result.reverse().join('');\n}",
    "complexity": {
      "time": "O(max(N, M))",
      "space": "O(max(N, M))",
      "timeExplanation": "Single linear pass.",
      "spaceExplanation": "Stores result digits."
    },
    "edgeCases": [
      "Unequal lengths",
      "Remaining carry at end"
    ],
    "commonMistake": "Using parseInt(a, 2) which overflows > 53 bits.",
    "interviewTakeaway": "Digit-by-digit simulation handles arbitrary large number inputs safely."
  },
  {
    "id": "str-easy-09",
    "title": "Reverse String",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Two Pointers"
    ],
    "subtopic": "In-Place Character Swap",
    "difficulty": "Easy",
    "learningOrder": 9,
    "importanceTier": "must-do",
    "pattern": "Two Pointers In-Place Swap",
    "patterns": [
      "Two Pointers In-Place Swap"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/reverse-string/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/reverse-a-string-in-java-5-different-ways/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Striver A2Z",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 18,
      "conceptImportance": 8,
      "learningValue": 8,
      "uniqueness": 7,
      "difficultyValue": 5,
      "totalScore": 87
    },
    "importance": 4,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Apple",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Reverse a string given as an array of characters `s` in-place.",
    "whySolveThis": {
      "importanceReason": "The standard baseline two-pointer character array reversal question.",
      "keySkills": [
        "In-place element swapping",
        "Two pointers left/right",
        "O(1) extra space"
      ]
    },
    "hints": [
      "left = 0, right = s.length - 1.",
      "Swap s[left] and s[right]."
    ],
    "approach": {
      "bruteForceSummary": "Copy to extra array in reverse order. O(N) space.",
      "optimalStrategy": "Two pointers left = 0, right = N-1. Swap elements while left < right.",
      "patternUsed": "Two Pointers In-Place Swap"
    },
    "solutionJS": "function reverseString(s) {\n  let left = 0, right = s.length - 1;\n  while (left < right) {\n    const temp = s[left];\n    s[left] = s[right];\n    s[right] = temp;\n    left++; right--;\n  }\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "N/2 swaps.",
      "spaceExplanation": "In-place constant memory."
    },
    "edgeCases": [
      "Single character",
      "Empty array"
    ],
    "commonMistake": "Calling built-in `s.reverse()` when manual algorithm is requested.",
    "interviewTakeaway": "In-place element swapping requires only scalar temporary memory."
  },
  {
    "id": "str-easy-10",
    "title": "Reverse Vowels of a String",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Two Pointers"
    ],
    "subtopic": "Conditional Pointer Skipping",
    "difficulty": "Easy",
    "learningOrder": 10,
    "importanceTier": "important",
    "pattern": "Two Pointers Conditional Skipping",
    "patterns": [
      "Two Pointers Conditional Skipping"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/reverse-vowels-of-a-string/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Striver A2Z"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 22,
      "crossSourceEvidence": 17,
      "patternValue": 18,
      "conceptImportance": 8,
      "learningValue": 8,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 86
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Apple",
      "Amazon",
      "Google"
    ],
    "problemSummary": "Reverse only all the vowels in string `s` and return it.",
    "whySolveThis": {
      "importanceReason": "Teaches two pointers with conditional predicate checks, skipping non-vowels dynamically.",
      "keySkills": [
        "Vowel predicate Set lookup",
        "Conditional two-pointer advancement",
        "Character array mutation"
      ]
    },
    "hints": [
      "Store vowels in a Set.",
      "Advance left until vowel; retreat right until vowel. Swap."
    ],
    "approach": {
      "bruteForceSummary": "Extract vowels, reverse, replace. O(N) space.",
      "optimalStrategy": "Convert s to char array. Set of vowels. Two pointers skipping non-vowels, swapping vowels.",
      "patternUsed": "Two Pointers Conditional Skipping"
    },
    "solutionJS": "function reverseVowels(s) {\n  const arr = s.split('');\n  const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    while (left < right && !vowels.has(arr[left])) left++;\n    while (left < right && !vowels.has(arr[right])) right--;\n    if (left < right) {\n      const temp = arr[left]; arr[left] = arr[right]; arr[right] = temp;\n      left++; right--;\n    }\n  }\n  return arr.join('');\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Single pass.",
      "spaceExplanation": "Char array size N."
    },
    "edgeCases": [
      "No vowels",
      "All vowels"
    ],
    "commonMistake": "Forgetting uppercase vowels.",
    "interviewTakeaway": "Set lookup provides instantaneous O(1) predicate evaluation."
  },
  {
    "id": "str-easy-11",
    "title": "Rotate String",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "String Matching"
    ],
    "subtopic": "Concatenation Substring Check",
    "difficulty": "Easy",
    "learningOrder": 11,
    "importanceTier": "important",
    "pattern": "String Concatenation Substring Check",
    "patterns": [
      "String Concatenation Substring Check"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/rotate-string/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/a-program-to-check-if-strings-are-rotations-of-each-other-or-not/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Striver A2Z",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 19,
      "conceptImportance": 8,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 91
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "problemSummary": "Return `true` if `s` can become `goal` after some number of shifts on `s`.",
    "whySolveThis": {
      "importanceReason": "Demonstrates a mathematical string property trick: any valid rotation of string S is a substring of S + S.",
      "keySkills": [
        "String rotation property",
        "Length check",
        "(s + s).includes(goal)"
      ]
    },
    "hints": [
      "What is s + s?",
      "Any rotation of s appears inside s + s."
    ],
    "approach": {
      "bruteForceSummary": "Simulate all N rotations manually. O(N²) time.",
      "optimalStrategy": "Check lengths. Return (s + s).includes(goal).",
      "patternUsed": "String Concatenation Substring Check"
    },
    "solutionJS": "function rotateString(s, goal) {\n  if (s.length !== goal.length) return false;\n  return (s + s).includes(goal);\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Concatenation and substring check take O(N).",
      "spaceExplanation": "Allocates s + s string."
    },
    "edgeCases": [
      "Unequal lengths",
      "Single character"
    ],
    "commonMistake": "Simulating rotations manually.",
    "interviewTakeaway": "String structural properties can simplify complex rotation checks to linear substring lookups."
  },
  {
    "id": "str-easy-12",
    "title": "Roman to Integer",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Math",
      "Parsing"
    ],
    "subtopic": "Lookahead Symbol Subtraction",
    "difficulty": "Easy",
    "learningOrder": 12,
    "importanceTier": "must-do",
    "pattern": "Lookahead Symbol Subtraction",
    "patterns": [
      "Lookahead Symbol Subtraction"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/roman-to-integer/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/converting-roman-numerals-to-decimal-lying-1-3999/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 19,
      "patternValue": 18,
      "conceptImportance": 8,
      "learningValue": 8,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 90
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft",
      "Apple"
    ],
    "problemSummary": "Given a roman numeral `s`, convert it to an integer.",
    "whySolveThis": {
      "importanceReason": "High-frequency string parsing problem testing lookahead condition evaluation (`val[i] < val[i+1]`).",
      "keySkills": [
        "Symbol map lookup",
        "Lookahead comparison",
        "Accumulative parsing"
      ]
    },
    "hints": [
      "Map Roman symbols to values.",
      "If current < next (e.g. IV), subtract current; else add current."
    ],
    "approach": {
      "bruteForceSummary": "Replace subtraction pairs then sum remaining. O(N) space.",
      "optimalStrategy": "Single pass. If map[s[i]] < map[s[i+1]] total -= map[s[i]]; else total += map[s[i]].",
      "patternUsed": "Lookahead Symbol Subtraction"
    },
    "solutionJS": "function romanToInt(s) {\n  const map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };\n  let total = 0;\n  for (let i = 0; i < s.length; i++) {\n    const current = map[s[i]], next = map[s[i + 1]];\n    if (next && current < next) total -= current;\n    else total += current;\n  }\n  return total;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass.",
      "spaceExplanation": "Fixed map size 7."
    },
    "edgeCases": [
      "Subtraction pairs (IV, IX, CD)",
      "Single char"
    ],
    "commonMistake": "Hardcoding branch logic for all 6 subtraction cases.",
    "interviewTakeaway": "Lookahead comparisons (`arr[i] vs arr[i+1]`) eliminate complex branch rules."
  },
  {
    "id": "str-easy-13",
    "title": "Valid Palindrome II",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Two Pointers"
    ],
    "subtopic": "Single Deletion Fallback",
    "difficulty": "Easy",
    "learningOrder": 13,
    "importanceTier": "must-do",
    "pattern": "Two Pointers Single Deletion Fallback",
    "patterns": [
      "Two Pointers Single Deletion Fallback"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/valid-palindrome-ii/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Striver A2Z"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 19,
      "conceptImportance": 8,
      "learningValue": 9,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 90
    },
    "importance": 4,
    "interviewFrequency": 5,
    "companies": [
      "Meta",
      "Amazon",
      "Google"
    ],
    "problemSummary": "Return `true` if `s` can be a palindrome after deleting at most one character.",
    "whySolveThis": {
      "importanceReason": "Teaches two pointers with fallback branching upon first mismatch to test skipping left or right character.",
      "keySkills": [
        "Two pointers inward",
        "Single deletion fallback",
        "Helper method"
      ]
    },
    "hints": [
      "left = 0, right = N-1.",
      "On mismatch s[left] !== s[right], test isPalindrome(left+1, right) || isPalindrome(left, right-1)."
    ],
    "approach": {
      "bruteForceSummary": "Try deleting every char. O(N²) time.",
      "optimalStrategy": "Two pointers. On first mismatch, return helper check on `left+1` OR `right-1`.",
      "patternUsed": "Two Pointers Single Deletion Fallback"
    },
    "solutionJS": "function validPalindrome(s) {\n  function isSubPalindrome(left, right) {\n    while (left < right) {\n      if (s[left] !== s[right]) return false;\n      left++; right--;\n    }\n    return true;\n  }\n  let left = 0, right = s.length - 1;\n  while (left < right) {\n    if (s[left] !== s[right]) {\n      return isSubPalindrome(left + 1, right) || isSubPalindrome(left, right - 1);\n    }\n    left++; right--;\n  }\n  return true;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "At most two linear passes.",
      "spaceExplanation": "Constant auxiliary memory."
    },
    "edgeCases": [
      "Already valid palindrome",
      "Deleting first or last char"
    ],
    "commonMistake": "Greedy deletion without checking both branch possibilities.",
    "interviewTakeaway": "Helper functions cleanly evaluate alternative fallback paths."
  },
  {
    "id": "str-easy-14",
    "title": "Greatest Common Divisor of Strings",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Math",
      "String GCD"
    ],
    "subtopic": "String Division Math",
    "difficulty": "Easy",
    "learningOrder": 14,
    "importanceTier": "important",
    "pattern": "String GCD Math + Concatenation Check",
    "patterns": [
      "String GCD Math + Concatenation Check"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/greatest-common-divisor-of-strings/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Striver A2Z"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 22,
      "crossSourceEvidence": 17,
      "patternValue": 19,
      "conceptImportance": 8,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 89
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Google",
      "Amazon",
      "Apple"
    ],
    "problemSummary": "Return the largest string `x` such that `x` divides both `str1` and `str2`.",
    "whySolveThis": {
      "importanceReason": "Combines mathematical Euclidean GCD algorithm with string concatenation equality verification.",
      "keySkills": [
        "Concatenation symmetry check",
        "Euclidean GCD algorithm",
        "Prefix slice"
      ]
    },
    "hints": [
      "If common divisor exists, str1 + str2 === str2 + str1.",
      "GCD string length is gcd(str1.length, str2.length)."
    ],
    "approach": {
      "bruteForceSummary": "Test all prefixes of shorter string. O(N²) time.",
      "optimalStrategy": "Check str1 + str2 === str2 + str1. Return str1.slice(0, gcd(len1, len2)).",
      "patternUsed": "String GCD Math"
    },
    "solutionJS": "function gcdOfStrings(str1, str2) {\n  if (str1 + str2 !== str2 + str1) return \"\";\n  function gcd(a, b) {\n    while (b !== 0) { const temp = b; b = a % b; a = temp; }\n    return a;\n  }\n  return str1.slice(0, gcd(str1.length, str2.length));\n}",
    "complexity": {
      "time": "O(N + M)",
      "space": "O(N + M)",
      "timeExplanation": "String concatenation check O(N+M), GCD O(log(min(N,M))).",
      "spaceExplanation": "Allocates combined strings."
    },
    "edgeCases": [
      "No common divisor",
      "One string is multiple repetitions of another"
    ],
    "commonMistake": "Trying to manually subtract substrings instead of using numerical GCD on lengths.",
    "interviewTakeaway": "Commutative string concatenation (`A + B === B + A`) proves shared repeating units."
  },
  {
    "id": "str-med-15",
    "title": "Group Anagrams",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Hashing"
    ],
    "subtopic": "Frequency Hash Keys",
    "difficulty": "Medium",
    "learningOrder": 15,
    "importanceTier": "must-do",
    "pattern": "Categorization by Frequency Hash Key",
    "patterns": [
      "Categorization by Frequency Hash Key"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/group-anagrams/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/given-a-sequence-of-words-print-all-anagrams-together/"
      }
    ],
    "crossSource": {
      "sourceCount": 6,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet",
        "GeeksforGeeks",
        "InterviewBit"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 20,
      "patternValue": 20,
      "conceptImportance": 10,
      "learningValue": 10,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 99
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft",
      "Uber"
    ],
    "problemSummary": "Given an array of strings `strs`, group the anagrams together. Return the answer in any order.",
    "whySolveThis": {
      "importanceReason": "Core interview question demonstrating generating unique frequency key strings (`#1#0#2...`) or sorted keys to group items in Hash Map.",
      "keySkills": [
        "Frequency key tuple generation",
        "Map values grouping",
        "String hashing"
      ]
    },
    "hints": [
      "Two strings are anagrams if their 26-element character frequency count is identical.",
      "Convert 26-count array into a string key (e.g. '#1#0#2...').",
      "Store arrays of words in Map under their frequency key."
    ],
    "approach": {
      "bruteForceSummary": "Sort every word and store in Map. O(N * K log K) where K is max word length.",
      "optimalStrategy": "Generate 26-element frequency tuple key in O(K) per word. Map key -> Array of words. Return Array.from(map.values()). O(N * K) time.",
      "patternUsed": "Categorization by Frequency Hash Key"
    },
    "solutionJS": "function groupAnagrams(strs) {\n  const map = new Map();\n  for (const str of strs) {\n    const count = new Array(26).fill(0);\n    for (let i = 0; i < str.length; i++) {\n      count[str.charCodeAt(i) - 97]++;\n    }\n    const key = count.join('#');\n    if (!map.has(key)) map.set(key, []);\n    map.get(key).push(str);\n  }\n  return Array.from(map.values());\n}",
    "complexity": {
      "time": "O(N * K)",
      "space": "O(N * K)",
      "timeExplanation": "N words of max length K. Key generation takes O(K).",
      "spaceExplanation": "Map stores all strings."
    },
    "edgeCases": [
      "Empty strings",
      "Single character strings",
      "No anagram pairs"
    ],
    "commonMistake": "Sorting every string O(N * K log K) instead of O(N * K) frequency key generation.",
    "interviewTakeaway": "Serialized character frequency tuples serve as immutable O(K) Hash Map grouping keys."
  },
  {
    "id": "str-med-16",
    "title": "Longest Substring Without Repeating Characters",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Sliding Window",
      "Hashing"
    ],
    "subtopic": "Variable Window Uniqueness",
    "difficulty": "Medium",
    "learningOrder": 16,
    "importanceTier": "must-do",
    "pattern": "Variable Sliding Window + Index Map",
    "patterns": [
      "Variable Sliding Window + Index Map"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/"
      }
    ],
    "crossSource": {
      "sourceCount": 6,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet",
        "GeeksforGeeks",
        "InterviewBit"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 20,
      "patternValue": 20,
      "conceptImportance": 10,
      "learningValue": 10,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 99
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft",
      "Apple"
    ],
    "problemSummary": "Given a string `s`, find the length of the longest substring without repeating characters.",
    "whySolveThis": {
      "importanceReason": "The canonical variable sliding window string problem. Teaches skipping left pointer directly to `seenMap.get(char) + 1`.",
      "keySkills": [
        "Variable sliding window",
        "Last-seen character index map",
        "Window length calculation"
      ]
    },
    "hints": [
      "Use sliding window pointers left and right.",
      "Store last seen index of each character in a Map.",
      "When a repeat is found, jump left pointer to max(left, seenMap.get(char) + 1)."
    ],
    "approach": {
      "bruteForceSummary": "Check all substrings for uniqueness. O(N³) time.",
      "optimalStrategy": "Sliding window right = 0..N-1. If seenMap has char and index >= left, update left = seenMap.get(char) + 1. Update seenMap and maxLength.",
      "patternUsed": "Variable Sliding Window"
    },
    "solutionJS": "function lengthOfLongestSubstring(s) {\n  const seen = new Map();\n  let left = 0;\n  let maxLength = 0;\n  for (let right = 0; right < s.length; right++) {\n    const char = s[right];\n    if (seen.has(char) && seen.get(char) >= left) {\n      left = seen.get(char) + 1;\n    }\n    seen.set(char, right);\n    maxLength = Math.max(maxLength, right - left + 1);\n  }\n  return maxLength;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(K)",
      "timeExplanation": "Single linear pass of right pointer.",
      "spaceExplanation": "K is alphabet size stored in map."
    },
    "edgeCases": [
      "Empty string",
      "All identical characters",
      "All unique characters"
    ],
    "commonMistake": "Not checking `seen.get(char) >= left`, causing left pointer to jump backwards.",
    "interviewTakeaway": "Storing last-seen character indices allows jumping the left pointer in O(1) without inner loop contraction."
  },
  {
    "id": "str-med-17",
    "title": "Longest Palindromic Substring",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Two Pointers"
    ],
    "subtopic": "Center Expansion",
    "difficulty": "Medium",
    "learningOrder": 17,
    "importanceTier": "must-do",
    "pattern": "Expand Around Center (Odd & Even)",
    "patterns": [
      "Expand Around Center (Odd & Even)"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/longest-palindromic-substring/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/longest-palindromic-substring/"
      }
    ],
    "crossSource": {
      "sourceCount": 6,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet",
        "GeeksforGeeks",
        "InterviewBit"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 20,
      "patternValue": 20,
      "conceptImportance": 10,
      "learningValue": 10,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 99
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft",
      "Uber"
    ],
    "problemSummary": "Given a string `s`, return the longest palindromic substring in `s`.",
    "whySolveThis": {
      "importanceReason": "Teaches expanding outward from center pointers in O(N²) time and O(1) space, avoiding expensive 2D DP matrix memory overhead.",
      "keySkills": [
        "2N-1 center expansion",
        "Odd & even palindrome handling",
        "Substring index tracking"
      ]
    },
    "hints": [
      "A palindrome expands symmetrically from its center.",
      "There are 2N-1 potential centers: single chars (odd) and adjacent char pairs (even).",
      "Expand `left--` and `right++` while s[left] === s[right]."
    ],
    "approach": {
      "bruteForceSummary": "Check all O(N²) substrings for palindrome property O(N³).",
      "optimalStrategy": "Iterate i from 0 to N-1. Expand around (i, i) and (i, i+1). Track maxStart and maxLength.",
      "patternUsed": "Expand Around Center"
    },
    "solutionJS": "function longestPalindrome(s) {\n  if (!s || s.length < 1) return \"\";\n  let start = 0, maxLength = 0;\n  \n  function expand(left, right) {\n    while (left >= 0 && right < s.length && s[left] === s[right]) {\n      left--;\n      right++;\n    }\n    const len = right - left - 1;\n    if (len > maxLength) {\n      maxLength = len;\n      start = left + 1;\n    }\n  }\n  \n  for (let i = 0; i < s.length; i++) {\n    expand(i, i);     // Odd length\n    expand(i, i + 1); // Even length\n  }\n  \n  return s.slice(start, start + maxLength);\n}",
    "complexity": {
      "time": "O(N²)",
      "space": "O(1)",
      "timeExplanation": "2N-1 centers expanded up to N steps.",
      "spaceExplanation": "O(1) auxiliary space."
    },
    "edgeCases": [
      "Single char",
      "All same chars (e.g. 'aaaa')",
      "Even length palindromes"
    ],
    "commonMistake": "Forgetting even-length center expansion `(i, i+1)`.",
    "interviewTakeaway": "Center expansion achieves optimal O(1) space palindrome discovery without DP memory allocation."
  },
  {
    "id": "str-med-18",
    "title": "Palindromic Substrings",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Two Pointers"
    ],
    "subtopic": "Center Expansion Count",
    "difficulty": "Medium",
    "learningOrder": 18,
    "importanceTier": "must-do",
    "pattern": "Center Expansion Substring Count",
    "patterns": [
      "Center Expansion Substring Count"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/palindromic-substrings/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/count-palindrome-sub-strings-string/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Striver A2Z",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 19,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 93
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Meta",
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "problemSummary": "Given a string `s`, return the number of palindromic substrings in it.",
    "whySolveThis": {
      "importanceReason": "Direct application of Center Expansion counting every valid expansion as a unique palindromic substring.",
      "keySkills": [
        "Center expansion counting",
        "Odd & even center iteration",
        "O(1) space state count"
      ]
    },
    "hints": [
      "Every successful expansion step is a valid palindromic substring.",
      "Expand (i, i) and (i, i+1) and increment count at each matching step."
    ],
    "approach": {
      "bruteForceSummary": "Check all substrings. O(N³) time.",
      "optimalStrategy": "Loop i from 0 to N-1. Expand (i, i) and (i, i+1). Increment count while s[left] === s[right].",
      "patternUsed": "Center Expansion Substring Count"
    },
    "solutionJS": "function countSubstrings(s) {\n  let count = 0;\n  function expand(left, right) {\n    while (left >= 0 && right < s.length && s[left] === s[right]) {\n      count++;\n      left--;\n      right++;\n    }\n  }\n  for (let i = 0; i < s.length; i++) {\n    expand(i, i);     // Odd length\n    expand(i, i + 1); // Even length\n  }\n  return count;\n}",
    "complexity": {
      "time": "O(N²)",
      "space": "O(1)",
      "timeExplanation": "Expand across 2N-1 centers.",
      "spaceExplanation": "Constant memory."
    },
    "edgeCases": [
      "Single char",
      "All same chars"
    ],
    "commonMistake": "Allocating 2D DP matrix when simple center expansion counter is O(1) space.",
    "interviewTakeaway": "Each outward step in center expansion represents a newly discovered valid palindrome."
  },
  {
    "id": "str-med-19",
    "title": "String to Integer (atoi)",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Parsing",
      "State Machine"
    ],
    "subtopic": "State Machine Integer Parsing",
    "difficulty": "Medium",
    "learningOrder": 19,
    "importanceTier": "must-do",
    "pattern": "Deterministic State Machine Parsing",
    "patterns": [
      "Deterministic State Machine Parsing"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/string-to-integer-atoi/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/write-your-own-atoi/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 19,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 94
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Apple",
      "Google"
    ],
    "problemSummary": "Implement the `myAtoi(string s)` function, which converts a string to a 32-bit signed integer.",
    "whySolveThis": {
      "importanceReason": "Essential industrial string parsing question. Tests handling whitespace, optional signs, digit accumulation, non-digit break, and 32-bit integer clamping.",
      "keySkills": [
        "Whitespace trimming",
        "Sign flag state",
        "Digit accumulation math",
        "32-bit overflow clamping"
      ]
    },
    "hints": [
      "Step 1: Skip leading whitespace.",
      "Step 2: Check for '+' or '-' sign.",
      "Step 3: Read digits until non-digit.",
      "Step 4: Clamp value to [-2^31, 2^31 - 1]."
    ],
    "approach": {
      "bruteForceSummary": "Regex parsing (may fail on overflow bounds).",
      "optimalStrategy": "Sequential state machine iteration. Skip spaces. Parse sign. Accumulate `res = res * 10 + digit`. Check overflow clamping after each digit.",
      "patternUsed": "Deterministic State Machine Parsing"
    },
    "solutionJS": "function myAtoi(s) {\n  let i = 0, sign = 1, total = 0;\n  const INT_MAX = 2147483647, INT_MIN = -2147483648;\n  \n  while (i < s.length && s[i] === ' ') i++;\n  \n  if (i < s.length && (s[i] === '+' || s[i] === '-')) {\n    sign = s[i] === '-' ? -1 : 1;\n    i++;\n  }\n  \n  while (i < s.length) {\n    const code = s.charCodeAt(i) - 48;\n    if (code < 0 || code > 9) break;\n    \n    total = total * 10 + code;\n    if (sign * total >= INT_MAX) return INT_MAX;\n    if (sign * total <= INT_MIN) return INT_MIN;\n    i++;\n  }\n  \n  return sign * total;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass.",
      "spaceExplanation": "Constant numeric variables."
    },
    "edgeCases": [
      "Leading spaces",
      "Multiple signs (e.g. '+-12')",
      "Overflow beyond 32-bit integer range"
    ],
    "commonMistake": "Using `parseInt()` which has different edge-case behavior than the formal problem specification.",
    "interviewTakeaway": "Sequential state machines handle multi-step string validation cleanly without regex overhead."
  },
  {
    "id": "str-med-20",
    "title": "Zigzag Conversion",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Simulation"
    ],
    "subtopic": "Row Direction Bounce Simulation",
    "difficulty": "Medium",
    "learningOrder": 20,
    "importanceTier": "important",
    "pattern": "Row Direction Toggle Simulation",
    "patterns": [
      "Row Direction Toggle Simulation"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/zigzag-conversion/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 18,
      "conceptImportance": 8,
      "learningValue": 8,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 89
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Amazon",
      "PayPal",
      "Google"
    ],
    "problemSummary": "The string `\"PAYPALISHIRING\"` is written in a zigzag pattern on a given number of rows. Read line by line.",
    "whySolveThis": {
      "importanceReason": "Teaches simulating a 2D row index trajectory using a row index and direction toggle flag (`goingDown`).",
      "keySkills": [
        "Row buffer array allocation",
        "Direction toggle logic (`goingDown = !goingDown`)",
        "Row string concatenation"
      ]
    },
    "hints": [
      "Maintain numRows string buffers.",
      "Track currRow and goingDown flag.",
      "Toggle goingDown when reaching top row 0 or bottom row numRows - 1."
    ],
    "approach": {
      "bruteForceSummary": "Build full 2D matrix with spaces. O(N * numRows) space.",
      "optimalStrategy": "Array of numRows strings. Iterate char in s: append to rows[currRow]. If currRow === 0 or numRows-1, toggle goingDown. currRow += goingDown ? 1 : -1. Join rows.",
      "patternUsed": "Row Direction Toggle Simulation"
    },
    "solutionJS": "function convert(s, numRows) {\n  if (numRows === 1 || s.length <= numRows) return s;\n  const rows = new Array(numRows).fill(\"\");\n  let currRow = 0;\n  let goingDown = false;\n  \n  for (const char of s) {\n    rows[currRow] += char;\n    if (currRow === 0 || currRow === numRows - 1) {\n      goingDown = !goingDown;\n    }\n    currRow += goingDown ? 1 : -1;\n  }\n  \n  return rows.join(\"\");\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Single linear pass.",
      "spaceExplanation": "Stores characters across numRows string buffers."
    },
    "edgeCases": [
      "numRows === 1",
      "String shorter than numRows"
    ],
    "commonMistake": "Building a sparse 2D grid matrix instead of just tracking row string buffers.",
    "interviewTakeaway": "Tracking direction toggles simplifies 2D trajectories into 1D row buffer updates."
  },
  {
    "id": "str-med-21",
    "title": "Reverse Words in a String",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Two Pointers"
    ],
    "subtopic": "Token Trimming & Reversal",
    "difficulty": "Medium",
    "learningOrder": 21,
    "importanceTier": "must-do",
    "pattern": "Token Trimming & Array Reversal",
    "patterns": [
      "Token Trimming & Array Reversal"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/reverse-words-in-a-string/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/reverse-words-in-a-given-string/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 19,
      "patternValue": 18,
      "conceptImportance": 8,
      "learningValue": 8,
      "uniqueness": 7,
      "difficultyValue": 5,
      "totalScore": 91
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Apple"
    ],
    "problemSummary": "Given an input string `s`, reverse the order of the words. Return a string of the words concatenated by a single space.",
    "whySolveThis": {
      "importanceReason": "Standard word reversal question requiring handling multiple spaces, leading/trailing whitespace, and word ordering.",
      "keySkills": [
        "Regex whitespace filter `\\s+`",
        "Word sequence reversal",
        "Space join formatting"
      ]
    },
    "hints": [
      "Trim leading and trailing spaces.",
      "Split by one or more spaces using regex `\\s+`.",
      "Reverse word array and join with a single space."
    ],
    "approach": {
      "bruteForceSummary": "Manual token scan with backward pointer.",
      "optimalStrategy": "s.trim().split(/\\s+/).reverse().join(' ').",
      "patternUsed": "Token Trimming & Array Reversal"
    },
    "solutionJS": "function reverseWords(s) {\n  return s.trim().split(/\\s+/).reverse().join(' ');\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Single linear pass to trim, split, reverse, and join.",
      "spaceExplanation": "Stores words array."
    },
    "edgeCases": [
      "Multiple spaces between words",
      "Leading and trailing spaces"
    ],
    "commonMistake": "Splitting by single space `' '` leaving empty string tokens `\"\"` in the word list.",
    "interviewTakeaway": "Regex `/\\s+/` cleanly handles multi-space delimiters during string splitting."
  },
  {
    "id": "str-med-22",
    "title": "Find All Anagrams in a String",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Sliding Window",
      "Hashing"
    ],
    "subtopic": "Fixed Sliding Window Frequency Match",
    "difficulty": "Medium",
    "learningOrder": 22,
    "importanceTier": "must-do",
    "pattern": "Fixed Sliding Window Frequency Match",
    "patterns": [
      "Fixed Sliding Window Frequency Match"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/anagram-substring-search-or-search-for-all-permutations/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Striver A2Z",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 19,
      "patternValue": 20,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 94
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Google"
    ],
    "problemSummary": "Given two strings `s` and `p`, return an array of all the start indices of `p`'s anagrams in `s`.",
    "whySolveThis": {
      "importanceReason": "Teaches fixed-size sliding window (window size = p.length) using 26-element frequency matching in O(1) per shift.",
      "keySkills": [
        "Fixed sliding window",
        "26-element frequency match",
        "Incoming/outgoing character balance"
      ]
    },
    "hints": [
      "Window size is p.length.",
      "Build frequency count for p and first window of s.",
      "Slide window: add incoming s[i], remove outgoing s[i - p.length]. Compare 26 counts."
    ],
    "approach": {
      "bruteForceSummary": "Sort every substring of length p. O(N * P log P) time.",
      "optimalStrategy": "Fixed window size P. Maintain pCount and sCount arrays of size 26. Check array match at each step. O(N) time.",
      "patternUsed": "Fixed Sliding Window Frequency Match"
    },
    "solutionJS": "function findAnagrams(s, p) {\n  const result = [];\n  if (s.length < p.length) return result;\n  \n  const pCount = new Array(26).fill(0);\n  const sCount = new Array(26).fill(0);\n  \n  for (let i = 0; i < p.length; i++) {\n    pCount[p.charCodeAt(i) - 97]++;\n    sCount[s.charCodeAt(i) - 97]++;\n  }\n  \n  function matches() {\n    for (let i = 0; i < 26; i++) {\n      if (pCount[i] !== sCount[i]) return false;\n    }\n    return true;\n  }\n  \n  if (matches()) result.push(0);\n  \n  for (let i = p.length; i < s.length; i++) {\n    sCount[s.charCodeAt(i) - 97]++;                     // Add incoming\n    sCount[s.charCodeAt(i - p.length) - 97]--;          // Remove outgoing\n    if (matches()) {\n      result.push(i - p.length + 1);\n    }\n  }\n  \n  return result;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "N window steps with fixed 26 checks.",
      "spaceExplanation": "Fixed 26-element arrays."
    },
    "edgeCases": [
      "s shorter than p",
      "No anagrams found"
    ],
    "commonMistake": "Re-sorting substring at every position.",
    "interviewTakeaway": "Fixed sliding windows update counts in O(1) by adding incoming and subtracting outgoing elements."
  },
  {
    "id": "str-med-23",
    "title": "Longest Repeating Character Replacement",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Sliding Window"
    ],
    "subtopic": "Variable Window Max Frequency",
    "difficulty": "Medium",
    "learningOrder": 23,
    "importanceTier": "must-do",
    "pattern": "Variable Sliding Window + Max Frequency",
    "patterns": [
      "Variable Sliding Window + Max Frequency"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/longest-repeating-character-replacement/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Striver A2Z"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 20,
      "patternValue": 20,
      "conceptImportance": 9,
      "learningValue": 10,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 98
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft"
    ],
    "problemSummary": "Return the length of the longest substring containing the same letter you can get after replacing at most `k` characters.",
    "whySolveThis": {
      "importanceReason": "Master-level sliding window question. Teaches window validity formula: `(windowLen - maxFreq) <= k`.",
      "keySkills": [
        "Variable sliding window",
        "Max frequency tracking",
        "Window validity invariant"
      ]
    },
    "hints": [
      "Window size is right - left + 1.",
      "Number of replacements needed = windowSize - maxFreq.",
      "If replacements > k, contract window by left++."
    ],
    "approach": {
      "bruteForceSummary": "Check all substrings. O(N²) time.",
      "optimalStrategy": "Sliding window right = 0..N-1. Track count of chars and maxFreq. If (right - left + 1) - maxFreq > k, decrement count[s[left]] and left++. Max length is right - left + 1.",
      "patternUsed": "Variable Sliding Window Max Frequency"
    },
    "solutionJS": "function characterReplacement(s, k) {\n  const count = new Array(26).fill(0);\n  let left = 0, maxFreq = 0, maxLength = 0;\n  \n  for (let right = 0; right < s.length; right++) {\n    const idx = s.charCodeAt(right) - 65; // Upper case A-Z\n    count[idx]++;\n    maxFreq = Math.max(maxFreq, count[idx]);\n    \n    while ((right - left + 1) - maxFreq > k) {\n      count[s.charCodeAt(left) - 65]--;\n      left++;\n    }\n    \n    maxLength = Math.max(maxLength, right - left + 1);\n  }\n  \n  return maxLength;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass.",
      "spaceExplanation": "Fixed 26-element array."
    },
    "edgeCases": [
      "k >= s.length",
      "Single character string"
    ],
    "commonMistake": "Trying to decrement maxFreq when contracting left, which is unnecessary since maxLength only increases when maxFreq grows.",
    "interviewTakeaway": "Window validity invariant `windowLen - maxFreq <= k` cleanly controls variable window contraction."
  },
  {
    "id": "str-med-24",
    "title": "Encode and Decode Strings",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Serialization"
    ],
    "subtopic": "Length-Prefix Encoding",
    "difficulty": "Medium",
    "learningOrder": 24,
    "importanceTier": "must-do",
    "pattern": "Length-Prefix Delimiter Encoding",
    "patterns": [
      "Length-Prefix Delimiter Encoding"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/encode-and-decode-strings/",
    "alternateSources": [
      {
        "source": "NeetCode",
        "url": "https://neetcode.io/problems/string-encode-and-decode"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Meta Prep"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 20,
      "patternValue": 20,
      "conceptImportance": 10,
      "learningValue": 10,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 99
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Meta",
      "Amazon",
      "Google"
    ],
    "problemSummary": "Design an algorithm to encode a list of strings to a string, and decode a string to a list of strings.",
    "whySolveThis": {
      "importanceReason": "Fundamental system design and string serialization problem. Teaches length-prefix delimiter encoding (`4#lint4#code`) to prevent delimiter collision when strings contain special characters.",
      "keySkills": [
        "Length-prefix encoding (`len#str`)",
        "Delimiter parsing",
        "Serialization without escaping bugs"
      ]
    },
    "hints": [
      "Simple join with ',' fails if string contains ','.",
      "Format each word as `${word.length}#${word}`.",
      "To decode, find '#', parse length, read length characters, advance pointer."
    ],
    "approach": {
      "bruteForceSummary": "Join by unique delimiter (fails if string contains that delimiter).",
      "optimalStrategy": "Encode: `${word.length}#${word}` for each word. Decode: find `#`, parse integer length, slice next `length` chars, jump pointer.",
      "patternUsed": "Length-Prefix Delimiter Encoding"
    },
    "solutionJS": "function encode(strs) {\n  return strs.map(str => `${str.length}#${str}`).join('');\n}\n\nfunction decode(s) {\n  const result = [];\n  let i = 0;\n  \n  while (i < s.length) {\n    let j = i;\n    while (s[j] !== '#') j++;\n    const length = parseInt(s.substring(i, j), 10);\n    i = j + 1; // Move past '#'\n    result.push(s.substring(i, i + length));\n    i += length;\n  }\n  \n  return result;\n}",
    "complexity": {
      "time": "O(Total Chars)",
      "space": "O(Total Chars)",
      "timeExplanation": "Single linear pass to encode and decode.",
      "spaceExplanation": "Stores encoded stream."
    },
    "edgeCases": [
      "Strings containing '#' or numbers",
      "Empty strings in list `[\"\"]`",
      "Empty list `[]`"
    ],
    "commonMistake": "Using comma or symbol join without length prefix, causing collisions when string contains the delimiter.",
    "interviewTakeaway": "Length-prefix encoding (`length#data`) guarantees collision-free string serialization."
  },
  {
    "id": "str-med-25",
    "title": "Find the Index of the First Occurrence in a String",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "KMP Algorithm",
      "Pattern Matching"
    ],
    "subtopic": "LPS Table Construction",
    "difficulty": "Medium",
    "learningOrder": 25,
    "importanceTier": "must-do",
    "pattern": "KMP Algorithm (LPS Array)",
    "patterns": [
      "KMP Algorithm (LPS Array)"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/"
      }
    ],
    "crossSource": {
      "sourceCount": 6,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet",
        "GeeksforGeeks",
        "InterviewBit"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 20,
      "patternValue": 20,
      "conceptImportance": 10,
      "learningValue": 10,
      "uniqueness": 10,
      "difficultyValue": 5,
      "totalScore": 100
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Microsoft",
      "Google",
      "Meta"
    ],
    "problemSummary": "Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.",
    "whySolveThis": {
      "importanceReason": "The canonical Knuth-Morris-Pratt (KMP) pattern matching algorithm. Demonstrates building the Longest Prefix Suffix (LPS) array for O(N + M) matching without text pointer backtracking.",
      "keySkills": [
        "KMP algorithm",
        "LPS (Longest Prefix Suffix) array construction",
        "Non-backtracking linear text search"
      ]
    },
    "hints": [
      "Precompute LPS array for pattern `needle`.",
      "LPS[i] stores length of longest proper prefix of needle[0...i] that is also a suffix.",
      "When mismatch occurs, fallback needle pointer to `j = LPS[j-1]` without moving text pointer."
    ],
    "approach": {
      "bruteForceSummary": "Naive nested loops O(N * M) time.",
      "optimalStrategy": "Build LPS array of needle in O(M). Match haystack and needle. On mismatch, j = LPS[j-1]. Return i - M + 1 on match. O(N + M) time.",
      "patternUsed": "KMP Algorithm"
    },
    "solutionJS": "function strStr(haystack, needle) {\n  if (needle.length === 0) return 0;\n  const m = needle.length;\n  const n = haystack.length;\n  \n  // Build LPS array\n  const lps = new Array(m).fill(0);\n  let len = 0, i = 1;\n  while (i < m) {\n    if (needle[i] === needle[len]) {\n      len++;\n      lps[i] = len;\n      i++;\n    } else {\n      if (len !== 0) {\n        len = lps[len - 1];\n      } else {\n        lps[i] = 0;\n        i++;\n      }\n    }\n  }\n  \n  // KMP Search\n  let h = 0, nIdx = 0;\n  while (h < n) {\n    if (haystack[h] === needle[nIdx]) {\n      h++; nIdx++;\n    }\n    if (nIdx === m) {\n      return h - m;\n    } else if (h < n && haystack[h] !== needle[nIdx]) {\n      if (nIdx !== 0) {\n        nIdx = lps[nIdx - 1];\n      } else {\n        h++;\n      }\n    }\n  }\n  \n  return -1;\n}",
    "complexity": {
      "time": "O(N + M)",
      "space": "O(M)",
      "timeExplanation": "LPS construction O(M) + KMP search O(N).",
      "spaceExplanation": "LPS array size M."
    },
    "edgeCases": [
      "needle empty",
      "needle longer than haystack",
      "Repeated partial matches (e.g. 'aaaaa', 'aaa')"
    ],
    "commonMistake": "Backtracking the haystack pointer `h` on mismatch instead of using `LPS[nIdx - 1]`.",
    "interviewTakeaway": "KMP avoids text pointer backtracking by utilizing pattern self-symmetry captured in the LPS table."
  },
  {
    "id": "str-med-26",
    "title": "Repeated Substring Pattern",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "KMP Algorithm",
      "String Symmetry"
    ],
    "subtopic": "String Concatenation / LPS Check",
    "difficulty": "Medium",
    "learningOrder": 26,
    "importanceTier": "important",
    "pattern": "String Concatenation Slice Trick / KMP",
    "patterns": [
      "String Concatenation Slice Trick / KMP"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/repeated-substring-pattern/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Striver A2Z"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 19,
      "conceptImportance": 8,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 91
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Google",
      "Amazon"
    ],
    "problemSummary": "Given a string `s`, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.",
    "whySolveThis": {
      "importanceReason": "Demonstrates two optimal solutions: `(s + s).slice(1, -1).includes(s)` or KMP LPS array division rule (`n % (n - LPS[n-1]) === 0`).",
      "keySkills": [
        "String rotation slice trick",
        "KMP LPS array property",
        "Sub-pattern division"
      ]
    },
    "hints": [
      "Trick 1: Duplicate s: s + s. Remove first and last char. If s is still inside, return true!",
      "Trick 2: Compute LPS table. If LPS[n-1] > 0 and n % (n - LPS[n-1]) === 0, return true."
    ],
    "approach": {
      "bruteForceSummary": "Try all divisor substring lengths. O(N²) time.",
      "optimalStrategy": "Return (s + s).slice(1, -1).includes(s). O(N) time.",
      "patternUsed": "String Concatenation Slice Trick"
    },
    "solutionJS": "function repeatedSubstringPattern(s) {\n  return (s + s).slice(1, -1).includes(s);\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "String concatenation and slice/includes take O(N).",
      "spaceExplanation": "Allocates duplicated sliced string."
    },
    "edgeCases": [
      "Single char string",
      "String with no repeated pattern"
    ],
    "commonMistake": "Not removing first and last char from `s + s`, which would always make `s + s` contain `s`.",
    "interviewTakeaway": "Removing first and last chars of `S + S` guarantees testing non-trivial periodic rotations."
  },
  {
    "id": "str-med-27",
    "title": "String Compression",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Two Pointers"
    ],
    "subtopic": "In-Place Run-Length Encoding",
    "difficulty": "Medium",
    "learningOrder": 27,
    "importanceTier": "must-do",
    "pattern": "In-Place Two Pointers Writer/Reader Grouping",
    "patterns": [
      "In-Place Two Pointers Writer/Reader Grouping"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/string-compression/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Microsoft Prep"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 19,
      "patternValue": 19,
      "conceptImportance": 8,
      "learningValue": 9,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 93
    },
    "importance": 4,
    "interviewFrequency": 5,
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta",
      "Google"
    ],
    "problemSummary": "Compress an array of characters `chars` in-place using run-length encoding. Return the new length.",
    "whySolveThis": {
      "importanceReason": "Teaches write-pointer and read-pointer grouping to compress consecutive duplicate characters in O(1) auxiliary space.",
      "keySkills": [
        "In-place write pointer",
        "Run-length grouping",
        "Multi-digit number character writing"
      ]
    },
    "hints": [
      "Use write = 0, read = 0.",
      "Count consecutive identical characters chars[read].",
      "Write character at chars[write++]. If count > 1, write digits of count into chars[write++]."
    ],
    "approach": {
      "bruteForceSummary": "Build new compressed array. O(N) space.",
      "optimalStrategy": "Two pointers write & read. Count identical characters. Write char to chars[write++]. If count > 1, write count digits.",
      "patternUsed": "In-Place Writer/Reader Grouping"
    },
    "solutionJS": "function compress(chars) {\n  let write = 0;\n  let read = 0;\n  \n  while (read < chars.length) {\n    const char = chars[read];\n    let count = 0;\n    \n    while (read < chars.length && chars[read] === char) {\n      read++;\n      count++;\n    }\n    \n    chars[write++] = char;\n    \n    if (count > 1) {\n      const countStr = count.toString();\n      for (let i = 0; i < countStr.length; i++) {\n        chars[write++] = countStr[i];\n      }\n    }\n  }\n  \n  return write;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass through char array.",
      "spaceExplanation": "In-place modification using write pointer."
    },
    "edgeCases": [
      "Single char groups",
      "Group count >= 10 (multi-digit)",
      "All identical chars"
    ],
    "commonMistake": "Writing count as string token when count == 1 (specification says omitted when count is 1).",
    "interviewTakeaway": "In-place write pointers overwrite consumed input slots without auxiliary memory."
  },
  {
    "id": "str-med-28",
    "title": "Multiply Strings",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Math",
      "String Arithmetic"
    ],
    "subtopic": "Grade-School Multiplication",
    "difficulty": "Medium",
    "learningOrder": 28,
    "importanceTier": "important",
    "pattern": "Digit Product Array Accumulation",
    "patterns": [
      "Digit Product Array Accumulation"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/multiply-strings/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/multiply-large-numbers-represented-as-strings/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 19,
      "conceptImportance": 8,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 91
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Meta",
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "problemSummary": "Given two non-negative integers `num1` and `num2` represented as strings, return the product of `num1` and `num2`, also represented as a string.",
    "whySolveThis": {
      "importanceReason": "Teaches grade-school digit multiplication placement in result array `res[i + j + 1]` without BigInt library built-ins.",
      "keySkills": [
        "Grade-school digit multiplication",
        "Index position product placement (`i + j + 1`)",
        "Leading zero trimming"
      ]
    },
    "hints": [
      "Product of num1[i] and num2[j] belongs at indices [i + j, i + j + 1] in result array of size N + M.",
      "Add product to res[i + j + 1], compute carry into res[i + j]."
    ],
    "approach": {
      "bruteForceSummary": "BigInt multiplication (disallowed by prompt).",
      "optimalStrategy": "Result array size N + M filled with 0. Loop i from N-1 down to 0, j from M-1 down to 0: mul = num1[i] * num2[j] + res[i+j+1]. res[i+j+1] = mul % 10, res[i+j] += floor(mul / 10). Trim leading zeros.",
      "patternUsed": "Digit Product Array Accumulation"
    },
    "solutionJS": "function multiply(num1, num2) {\n  if (num1 === \"0\" || num2 === \"0\") return \"0\";\n  const n = num1.length, m = num2.length;\n  const pos = new Array(n + m).fill(0);\n  \n  for (let i = n - 1; i >= 0; i--) {\n    for (let j = m - 1; j >= 0; j--) {\n      const mul = (num1.charCodeAt(i) - 48) * (num2.charCodeAt(j) - 48);\n      const p1 = i + j, p2 = i + j + 1;\n      const sum = mul + pos[p2];\n      \n      pos[p2] = sum % 10;\n      pos[p1] += Math.floor(sum / 10);\n    }\n  }\n  \n  while (pos[0] === 0) pos.shift();\n  return pos.join('');\n}",
    "complexity": {
      "time": "O(N * M)",
      "space": "O(N + M)",
      "timeExplanation": "Nested loop multiplying all digit pairs.",
      "spaceExplanation": "Result array size N + M."
    },
    "edgeCases": [
      "Inputs equal '0'",
      "Inputs of very large lengths"
    ],
    "commonMistake": "Converting strings directly to Number or BigInt.",
    "interviewTakeaway": "Digit multiplication index placement `res[i + j + 1]` mirrors paper-and-pencil multiplication."
  },
  {
    "id": "str-med-29",
    "title": "Compare Version Numbers",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Parsing",
      "Two Pointers"
    ],
    "subtopic": "Revision Token Parsing",
    "difficulty": "Medium",
    "learningOrder": 29,
    "importanceTier": "important",
    "pattern": "Dual Pointer Revision Token Parsing",
    "patterns": [
      "Dual Pointer Revision Token Parsing"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/compare-version-numbers/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Apple Prep"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 18,
      "conceptImportance": 8,
      "learningValue": 8,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 89
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Apple",
      "Amazon",
      "Microsoft"
    ],
    "problemSummary": "Given two version numbers, `version1` and `version2`, compare them.",
    "whySolveThis": {
      "importanceReason": "Teaches parsing dot-delimited string revision tokens while handling leading zeroes and missing revision defaults (`0`).",
      "keySkills": [
        "Dot-delimited token splitting",
        "Numeric token comparison",
        "Default zero padding"
      ]
    },
    "hints": [
      "Split version strings by '.'.",
      "Iterate up to max(v1.length, v2.length).",
      "Treat missing revision tokens as 0."
    ],
    "approach": {
      "bruteForceSummary": "Manual pointer scan. O(N + M) time.",
      "optimalStrategy": "v1 = version1.split('.'), v2 = version2.split('.'). Loop i up to max length. Parse int or 0. Compare numbers.",
      "patternUsed": "Revision Token Parsing"
    },
    "solutionJS": "function compareVersion(version1, version2) {\n  const v1 = version1.split('.');\n  const v2 = version2.split('.');\n  const maxLength = Math.max(v1.length, v2.length);\n  \n  for (let i = 0; i < maxLength; i++) {\n    const num1 = i < v1.length ? parseInt(v1[i], 10) : 0;\n    const num2 = i < v2.length ? parseInt(v2[i], 10) : 0;\n    \n    if (num1 < num2) return -1;\n    if (num1 > num2) return 1;\n  }\n  \n  return 0;\n}",
    "complexity": {
      "time": "O(N + M)",
      "space": "O(N + M)",
      "timeExplanation": "Single linear pass to split and compare.",
      "spaceExplanation": "Stores split token arrays."
    },
    "edgeCases": [
      "Versions with different number of dot segments (e.g. '1.0' vs '1')",
      "Leading zeros (e.g. '1.01' vs '1.001')"
    ],
    "commonMistake": "Comparing string tokens directly `'01' !== '1'` instead of parsing integer values `parseInt()`, which strips leading zeroes.",
    "interviewTakeaway": "Parsing tokens to integers automatically handles leading zeroes and numeric formatting."
  },
  {
    "id": "str-med-30",
    "title": "Count and Say",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Simulation"
    ],
    "subtopic": "Iterative Run-Length Encoding",
    "difficulty": "Medium",
    "learningOrder": 30,
    "importanceTier": "important",
    "pattern": "Iterative Run-Length Encoding",
    "patterns": [
      "Iterative Run-Length Encoding"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/count-and-say/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 22,
      "crossSourceEvidence": 17,
      "patternValue": 18,
      "conceptImportance": 7,
      "learningValue": 8,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 85
    },
    "importance": 3,
    "interviewFrequency": 4,
    "companies": [
      "Meta",
      "Amazon",
      "Google"
    ],
    "problemSummary": "The count-and-say sequence is a sequence of digit strings defined by a recursive formula. Generate the nth term.",
    "whySolveThis": {
      "importanceReason": "Teaches iterative run-length encoding string generation where each term describes consecutive character runs of the previous term.",
      "keySkills": [
        "Run-length character counting",
        "Iterative sequence generation",
        "String builder accumulation"
      ]
    },
    "hints": [
      "Start with string '1'.",
      "To generate next string, scan current string counting consecutive identical digits.",
      "Format as `${count}${digit}`."
    ],
    "approach": {
      "bruteForceSummary": "Recursive implementation. O(2^N) space.",
      "optimalStrategy": "Iterative loop 1 to n-1. Scan current string tracking count of s[j]. Append `${count}${s[j]}` to nextStr. Update curr = nextStr.",
      "patternUsed": "Iterative Run-Length Encoding"
    },
    "solutionJS": "function countAndSay(n) {\n  let curr = \"1\";\n  for (let i = 1; i < n; i++) {\n    let nextStr = \"\";\n    let j = 0;\n    while (j < curr.length) {\n      const char = curr[j];\n      let count = 0;\n      while (j < curr.length && curr[j] === char) {\n        count++;\n        j++;\n      }\n      nextStr += count.toString() + char;\n    }\n    curr = nextStr;\n  }\n  return curr;\n}",
    "complexity": {
      "time": "O(2^N)",
      "space": "O(2^N)",
      "timeExplanation": "Sequence length grows exponentially.",
      "spaceExplanation": "Stores intermediate sequence strings."
    },
    "edgeCases": [
      "n === 1"
    ],
    "commonMistake": "Using recursion without memoization when simple iterative generation is cleaner.",
    "interviewTakeaway": "Run-length encoding translates consecutive identical runs into `${count}${value}` string pairs."
  },
  {
    "id": "str-med-31",
    "title": "Custom Sort String",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Hashing",
      "Sorting"
    ],
    "subtopic": "Custom Frequency Reconstruction",
    "difficulty": "Medium",
    "learningOrder": 31,
    "importanceTier": "important",
    "pattern": "Custom Order Frequency Reconstruction",
    "patterns": [
      "Custom Order Frequency Reconstruction"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/custom-sort-string/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Meta Prep"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 18,
      "conceptImportance": 8,
      "learningValue": 8,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 89
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Meta",
      "Amazon",
      "Google"
    ],
    "problemSummary": "Permute the characters of `s` so that they match the order that `order` was sorted.",
    "whySolveThis": {
      "importanceReason": "Teaches character frequency counting and custom string reconstruction according to an arbitrary character priority array.",
      "keySkills": [
        "Frequency counting",
        "Custom order traversal",
        "String builder construction"
      ]
    },
    "hints": [
      "Count character frequencies of s using a 26-element array or Map.",
      "Iterate through chars of order: append available counts from s.",
      "Append remaining unmentioned chars from s."
    ],
    "approach": {
      "bruteForceSummary": "Custom array sort using `order.indexOf()`. O(N log N) time.",
      "optimalStrategy": "26-element frequency count for s in O(N). Loop char in order: append count[char] times. Loop 0..25: append remaining count[i] times. O(N + M) time.",
      "patternUsed": "Custom Order Frequency Reconstruction"
    },
    "solutionJS": "function customSortString(order, s) {\n  const count = new Array(26).fill(0);\n  for (let i = 0; i < s.length; i++) {\n    count[s.charCodeAt(i) - 97]++;\n  }\n  \n  const result = [];\n  for (let i = 0; i < order.length; i++) {\n    const idx = order.charCodeAt(i) - 97;\n    while (count[idx] > 0) {\n      result.push(order[i]);\n      count[idx]--;\n    }\n  }\n  \n  for (let i = 0; i < 26; i++) {\n    while (count[i] > 0) {\n      result.push(String.fromCharCode(i + 97));\n      count[i]--;\n    }\n  }\n  \n  return result.join('');\n}",
    "complexity": {
      "time": "O(N + M)",
      "space": "O(N)",
      "timeExplanation": "Linear pass of s and order.",
      "spaceExplanation": "Stores result array size N."
    },
    "edgeCases": [
      "Characters in s not present in order",
      "Duplicate characters in s"
    ],
    "commonMistake": "Using `s.split('').sort((a,b) => order.indexOf(a) - order.indexOf(b))`, adding unnecessary O(N log N) sorting time.",
    "interviewTakeaway": "Frequency bucket reconstruction sorts characters in O(N) linear time according to any custom order."
  },
  {
    "id": "str-med-32",
    "title": "Sort Characters By Frequency",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Hashing",
      "Sorting",
      "Bucket Sort"
    ],
    "subtopic": "Character Frequency Bucket Sort",
    "difficulty": "Medium",
    "learningOrder": 32,
    "importanceTier": "must-do",
    "pattern": "Character Frequency Bucket Sorting",
    "patterns": [
      "Character Frequency Bucket Sorting"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/sort-characters-by-frequency/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/sort-string-according-to-frequency-of-characters/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Amazon Prep",
        "Meta Prep"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 19,
      "patternValue": 20,
      "conceptImportance": 9,
      "learningValue": 10,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 97
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "problemSummary": "Given a string `s`, sort it in decreasing order based on the frequency of the characters. Return the sorted string.",
    "whySolveThis": {
      "importanceReason": "High-frequency Amazon and Meta interview question. Teaches Bucket Sort on character frequencies in linear O(N) time without black-box sorting algorithms.",
      "keySkills": [
        "Character frequency mapping",
        "Frequency bucket array allocation",
        "O(N) Bucket Sort construction"
      ]
    },
    "hints": [
      "Count frequency of each character using a Map.",
      "Build a bucket array `buckets` of size N + 1 where `buckets[freq]` holds characters that appear `freq` times.",
      "Iterate from index N down to 1 in `buckets` and append each character `freq` times to construct the result."
    ],
    "approach": {
      "bruteForceSummary": "Sort character array using custom comparator `map.get(b) - map.get(a)`. O(N log N) time.",
      "optimalStrategy": "Build frequency Map. Allocate bucket array of size s.length + 1 where bucket[i] is an array of chars. Iterate bucket array backwards from max frequency down to 1. Append characters. O(N) time.",
      "patternUsed": "Character Frequency Bucket Sorting"
    },
    "solutionJS": "function frequencySort(s) {\n  const map = new Map();\n  for (const char of s) {\n    map.set(char, (map.get(char) || 0) + 1);\n  }\n  \n  const buckets = new Array(s.length + 1).fill(null).map(() => []);\n  for (const [char, freq] of map.entries()) {\n    buckets[freq].push(char);\n  }\n  \n  const result = [];\n  for (let freq = buckets.length - 1; freq > 0; freq--) {\n    for (const char of buckets[freq]) {\n      result.push(char.repeat(freq));\n    }\n  }\n  \n  return result.join('');\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Frequency pass O(N) + Bucket insertion O(K) + Bucket iteration O(N) = O(N) linear time.",
      "spaceExplanation": "Allocates frequency map and bucket arrays storing N characters."
    },
    "edgeCases": [
      "Single character string",
      "All characters same frequency",
      "Mixed uppercase/lowercase and numbers"
    ],
    "commonMistake": "Sorting character array directly using `arr.sort((a,b) => map.get(b) - map.get(a))`, taking O(N log N) time instead of optimal O(N) Bucket Sort.",
    "interviewTakeaway": "Bucket sorting by frequency index sorts character counts in linear O(N) time."
  },
  {
    "id": "str-med-33",
    "title": "Check If a String Contains All Binary Codes of Size K",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Bit Manipulation",
      "Rolling Hash"
    ],
    "subtopic": "Bitwise Window Masking",
    "difficulty": "Medium",
    "learningOrder": 33,
    "importanceTier": "important",
    "pattern": "Rolling Hash / Bitwise Window Masking",
    "patterns": [
      "Rolling Hash / Bitwise Window Masking"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Google Prep"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 19,
      "conceptImportance": 8,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 91
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Google",
      "Amazon"
    ],
    "problemSummary": "Given a binary string `s` and an integer `k`, return `true` if every binary code of length `k` is a substring of `s`. Otherwise, return `false`.",
    "whySolveThis": {
      "importanceReason": "Teaches rolling bitwise window masking to track all distinct binary sub-words of size K into a Set.",
      "keySkills": [
        "Rolling bitwise window mask",
        "Set size comparison (`set.size === 1 << k`)",
        "Sub-word set tracking"
      ]
    },
    "hints": [
      "There are 2^k distinct binary codes of length k.",
      "Slide a window of size k across s and add all substrings to a Set.",
      "Return set.size === (1 << k)."
    ],
    "approach": {
      "bruteForceSummary": "Extract substrings of size k. O(N * K) space.",
      "optimalStrategy": "Rolling integer bitwise hash: `hash = ((hash << 1) & mask) | bit`. Add hash to Set. If set.size === 1 << k, return true early. O(N) time.",
      "patternUsed": "Rolling Bitwise Window Masking"
    },
    "solutionJS": "function hasAllCodes(s, k) {\n  const totalCodes = 1 << k;\n  if (s.length < k + totalCodes - 1) return false;\n  \n  const seen = new Set();\n  let hash = 0;\n  const mask = totalCodes - 1;\n  \n  for (let i = 0; i < s.length; i++) {\n    hash = ((hash << 1) & mask) | (s.charCodeAt(i) - 48);\n    if (i >= k - 1) {\n      seen.add(hash);\n      if (seen.size === totalCodes) return true;\n    }\n  }\n  \n  return seen.size === totalCodes;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(2^K)",
      "timeExplanation": "Single pass rolling hash in O(N).",
      "spaceExplanation": "Set stores up to 2^K integer hashes."
    },
    "edgeCases": [
      "s length shorter than k + 2^k - 1"
    ],
    "commonMistake": "Storing substring strings `s.substring(i, i+k)` in Set, adding string allocation overhead compared to integer bitwise rolling hash.",
    "interviewTakeaway": "Bitwise rolling hashes store fixed binary windows as primitive O(1) integers."
  },
  {
    "id": "str-med-34",
    "title": "Minimum Deletions to Make Character Frequencies Unique",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Greedy",
      "Hashing"
    ],
    "subtopic": "Frequency Bucket Decrement",
    "difficulty": "Medium",
    "learningOrder": 34,
    "importanceTier": "important",
    "pattern": "Frequency Bucket Greedy Decrement",
    "patterns": [
      "Frequency Bucket Greedy Decrement"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Microsoft Prep"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 18,
      "conceptImportance": 8,
      "learningValue": 8,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 89
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Microsoft",
      "Amazon"
    ],
    "problemSummary": "Return the minimum number of characters you need to delete to make the frequency of each character unique.",
    "whySolveThis": {
      "importanceReason": "Teaches frequency counting combined with a Hash Set of seen frequencies to greedily resolve frequency collisions.",
      "keySkills": [
        "Frequency counting",
        "Set collision resolution",
        "Greedy frequency decrement"
      ]
    },
    "hints": [
      "Count frequency of each character.",
      "Use a Set to keep track of frequencies already seen.",
      "If a frequency is in the Set, decrement it (deleting 1 char) until it becomes unique or 0."
    ],
    "approach": {
      "bruteForceSummary": "Try all deletion combinations. O(N²) time.",
      "optimalStrategy": "26-element frequency count. For each freq > 0, while freq > 0 and seen.has(freq): freq--, deletions++. Add non-zero freq to seen. O(N) time.",
      "patternUsed": "Frequency Bucket Greedy Decrement"
    },
    "solutionJS": "function minDeletions(s) {\n  const count = new Array(26).fill(0);\n  for (let i = 0; i < s.length; i++) {\n    count[s.charCodeAt(i) - 97]++;\n  }\n  \n  const seenFrequencies = new Set();\n  let deletions = 0;\n  \n  for (let freq of count) {\n    while (freq > 0 && seenFrequencies.has(freq)) {\n      freq--;\n      deletions++;\n    }\n    if (freq > 0) {\n      seenFrequencies.add(freq);\n    }\n  }\n  \n  return deletions;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Pass to count frequencies + at most 26 decrements.",
      "spaceExplanation": "Fixed 26-element array and set."
    },
    "edgeCases": [
      "All characters already have unique frequencies",
      "String with multiple identical frequencies"
    ],
    "commonMistake": "Sorting frequency array when a simple `seenFrequencies` Set resolves collisions directly.",
    "interviewTakeaway": "A frequency Set allows resolving count collisions in linear time."
  },
  {
    "id": "str-med-35",
    "title": "Break a Palindrome",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Greedy"
    ],
    "subtopic": "Lexicographically Smallest Substitution",
    "difficulty": "Medium",
    "learningOrder": 35,
    "importanceTier": "important",
    "pattern": "Lexicographically Smallest Greedy Substitution",
    "patterns": [
      "Lexicographically Smallest Greedy Substitution"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/break-a-palindrome/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Amazon Prep"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 22,
      "crossSourceEvidence": 17,
      "patternValue": 18,
      "conceptImportance": 8,
      "learningValue": 8,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 86
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Amazon",
      "Google"
    ],
    "problemSummary": "Replace exactly one character with any lowercase English letter so that the resulting string is not a palindrome and that it is the lexicographically smallest string possible.",
    "whySolveThis": {
      "importanceReason": "Teaches greedy lexicographical string manipulation rules: change the first non-'a' in the first half of string to 'a'; if all are 'a', change last character to 'b'.",
      "keySkills": [
        "Lexicographical greedy choice",
        "First half string scan",
        "Single character replacement"
      ]
    },
    "hints": [
      "If string length === 1, impossible to break palindrome, return \"\".",
      "Scan first half of string (0 to Math.floor(N/2) - 1). Replace first non-'a' with 'a'.",
      "If all characters in first half are 'a', replace the last character of string with 'b'."
    ],
    "approach": {
      "bruteForceSummary": "Try replacing every char with 'a'..'z' and check palindrome. O(26 * N) time.",
      "optimalStrategy": "If N <= 1 return \"\". Loop i 0..floor(N/2)-1: if s[i] !== 'a', return replace s[i] with 'a'. Otherwise replace s[N-1] with 'b'. O(N) time.",
      "patternUsed": "Lexicographically Smallest Greedy Substitution"
    },
    "solutionJS": "function breakPalindrome(palindrome) {\n  const n = palindrome.length;\n  if (n <= 1) return \"\";\n  \n  const arr = palindrome.split('');\n  for (let i = 0; i < Math.floor(n / 2); i++) {\n    if (arr[i] !== 'a') {\n      arr[i] = 'a';\n      return arr.join('');\n    }\n  }\n  \n  arr[n - 1] = 'b';\n  return arr.join('');\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Scans first half of string.",
      "spaceExplanation": "Char array size N."
    },
    "edgeCases": [
      "Single character string `\"a\"`",
      "All 'a's string `\"aba\"`"
    ],
    "commonMistake": "Replacing middle character in odd-length palindrome (e.g. replacing 'b' in 'aba' to 'aaa', which remains a palindrome!).",
    "interviewTakeaway": "Only scan the first half `N/2` of palindromes to avoid modifying the invariant center character."
  },
  {
    "id": "str-med-36",
    "title": "Word Subsets",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Hashing"
    ],
    "subtopic": "Maximal Character Frequency Vector Union",
    "difficulty": "Medium",
    "learningOrder": 36,
    "importanceTier": "important",
    "pattern": "Maximal Character Frequency Vector Union",
    "patterns": [
      "Maximal Character Frequency Vector Union"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/word-subsets/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Google Prep"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 19,
      "conceptImportance": 8,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 91
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Google",
      "Amazon"
    ],
    "problemSummary": "Return an array of all Universal strings in `words1` that contain all words in `words2` as subsets.",
    "whySolveThis": {
      "importanceReason": "Teaches pre-aggregating multiple requirements into a single maximal frequency vector `maxFreq[26]` to validate candidates in O(1) space.",
      "keySkills": [
        "Requirement array consolidation",
        "Maximal frequency vector union",
        "Universal subset validation"
      ]
    },
    "hints": [
      "Instead of checking each word in words1 against every word in words2 (O(N*M)), combine words2 into a single max frequency array maxFreq[26].",
      "For each word in words2, maxFreq[c] = max(maxFreq[c], wordCount[c]).",
      "A word in words1 is universal if word1Count[c] >= maxFreq[c] for all 26 characters."
    ],
    "approach": {
      "bruteForceSummary": "Nested loops checking every word1 against every word2. O(N * M * L) time.",
      "optimalStrategy": "Consolidate words2 into maxFreq[26] in O(M * L). Filter words1 by comparing word1Count[26] >= maxFreq[26]. O((N + M) * L) time.",
      "patternUsed": "Maximal Character Frequency Vector Union"
    },
    "solutionJS": "function wordSubsets(words1, words2) {\n  const maxFreq = new Array(26).fill(0);\n  \n  for (const word of words2) {\n    const count = new Array(26).fill(0);\n    for (let i = 0; i < word.length; i++) {\n      count[word.charCodeAt(i) - 97]++;\n    }\n    for (let i = 0; i < 26; i++) {\n      maxFreq[i] = Math.max(maxFreq[i], count[i]);\n    }\n  }\n  \n  const result = [];\n  for (const word of words1) {\n    const count = new Array(26).fill(0);\n    for (let i = 0; i < word.length; i++) {\n      count[word.charCodeAt(i) - 97]++;\n    }\n    let isUniversal = true;\n    for (let i = 0; i < 26; i++) {\n      if (count[i] < maxFreq[i]) {\n        isUniversal = false;\n        break;\n      }\n    }\n    if (isUniversal) result.push(word);\n  }\n  \n  return result;\n}",
    "complexity": {
      "time": "O((N + M) * L)",
      "space": "O(1)",
      "timeExplanation": "L is max word length. Pre-aggregation takes O(M * L), validation takes O(N * L).",
      "spaceExplanation": "Fixed 26-element count arrays."
    },
    "edgeCases": [
      "words2 has words with duplicate letters (e.g. ['oo', 'e'])"
    ],
    "commonMistake": "Checking each words1 candidate against all words in words2 individually, turning O(N+M) into O(N*M).",
    "interviewTakeaway": "Pre-consolidating multiple requirement sets into a single `maxFreq` constraint vector eliminates redundant checks."
  },
  {
    "id": "str-hard-37",
    "title": "Minimum Window Substring",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Sliding Window",
      "Hashing"
    ],
    "subtopic": "Variable Window Requirement Match",
    "difficulty": "Hard",
    "learningOrder": 37,
    "importanceTier": "must-do",
    "pattern": "Variable Sliding Window + Requirement Counter",
    "patterns": [
      "Variable Sliding Window + Requirement Counter"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/minimum-window-substring/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/"
      }
    ],
    "crossSource": {
      "sourceCount": 6,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet",
        "GeeksforGeeks",
        "InterviewBit"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 20,
      "patternValue": 20,
      "conceptImportance": 10,
      "learningValue": 10,
      "uniqueness": 10,
      "difficultyValue": 5,
      "totalScore": 100
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Meta",
      "Amazon",
      "Google",
      "Microsoft",
      "Uber"
    ],
    "problemSummary": "Given two strings `s` and `t`, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window.",
    "whySolveThis": {
      "importanceReason": "The pinnacle String Sliding Window interview problem. Demonstrates expanding right to satisfy character requirement count, then contracting left to find minimal substring window length.",
      "keySkills": [
        "Variable sliding window expansion/contraction",
        "Frequency requirement counter (`neededCount`)",
        "Substring bounds tracking"
      ]
    },
    "hints": [
      "Build frequency map of t.",
      "Maintain neededCount = t.length.",
      "Expand right pointer: if s[right] in map and map[s[right]] > 0, neededCount--. Decrement map[s[right]].",
      "When neededCount === 0, contract left pointer while restoring map counts."
    ],
    "approach": {
      "bruteForceSummary": "Check all O(N²) substrings for requirement match. O(N³).",
      "optimalStrategy": "Sliding window right = 0..N-1. Expand right. When neededCount === 0, update minWindow, contract left++ while restoring map[s[left]]. O(N) time.",
      "patternUsed": "Variable Sliding Window Requirement Counter"
    },
    "solutionJS": "function minWindow(s, t) {\n  if (!s || !t || s.length < t.length) return \"\";\n  \n  const map = new Map();\n  for (const char of t) {\n    map.set(char, (map.get(char) || 0) + 1);\n  }\n  \n  let left = 0, neededCount = t.length;\n  let minLen = Infinity, minStart = 0;\n  \n  for (let right = 0; right < s.length; right++) {\n    const char = s[right];\n    if (map.has(char)) {\n      if (map.get(char) > 0) neededCount--;\n      map.set(char, map.get(char) - 1);\n    }\n    \n    while (neededCount === 0) {\n      if (right - left + 1 < minLen) {\n        minLen = right - left + 1;\n        minStart = left;\n      }\n      \n      const leftChar = s[left];\n      if (map.has(leftChar)) {\n        map.set(leftChar, map.get(leftChar) + 1);\n        if (map.get(leftChar) > 0) neededCount++;\n      }\n      left++;\n    }\n  }\n  \n  return minLen === Infinity ? \"\" : s.substring(minStart, minStart + minLen);\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(K)",
      "timeExplanation": "Both left and right pointers traverse string s at most once.",
      "spaceExplanation": "K is number of unique characters in t."
    },
    "edgeCases": [
      "No valid window exists",
      "t longer than s",
      "s and t identical"
    ],
    "commonMistake": "Re-scanning window frequency on every iteration instead of using `neededCount` decrement/increment.",
    "interviewTakeaway": "A dedicated `neededCount` variable eliminates map re-validation inside sliding window loops."
  },
  {
    "id": "str-hard-38",
    "title": "Shortest Palindrome",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "KMP Algorithm",
      "String Symmetry"
    ],
    "subtopic": "LPS Table Palindromic Prefix",
    "difficulty": "Hard",
    "learningOrder": 38,
    "importanceTier": "must-do",
    "pattern": "KMP LPS Array on Combined String (S + # + S_rev)",
    "patterns": [
      "KMP LPS Array on Combined String (S + # + S_rev)"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/shortest-palindrome/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/minimum-characters-added-front-make-string-palindrome/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 20,
      "patternValue": 20,
      "conceptImportance": 9,
      "learningValue": 10,
      "uniqueness": 10,
      "difficultyValue": 5,
      "totalScore": 99
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "problemSummary": "Given a string `s`, convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.",
    "whySolveThis": {
      "importanceReason": "Master-level application of KMP LPS table. Finding the longest palindromic prefix of S equals finding the LPS value of `S + '#' + reverse(S)`.",
      "keySkills": [
        "KMP LPS table construction",
        "Combined string formatting (`s + '#' + rev`)",
        "Prefix palindrome optimization"
      ]
    },
    "hints": [
      "To minimize added characters in front, find the LONGEST palindromic prefix of s.",
      "Notice that longest palindromic prefix of s is the longest prefix of s that is also a suffix of reverse(s).",
      "Build combined string `temp = s + '#' + reverse(s)`. Compute its LPS table. The last value `LPS[temp.length - 1]` gives longest palindromic prefix length!"
    ],
    "approach": {
      "bruteForceSummary": "Check prefixes of s for palindrome property. O(N²) time.",
      "optimalStrategy": "rev = s.split('').reverse().join(''). temp = s + '#' + rev. Build LPS table for temp in O(N). Longest palindromic prefix len = LPS[temp.length - 1]. Return rev.substring(0, s.length - len) + s.",
      "patternUsed": "KMP LPS Table on Combined String"
    },
    "solutionJS": "function shortestPalindrome(s) {\n  if (!s || s.length <= 1) return s;\n  const rev = s.split('').reverse().join('');\n  const temp = s + '#' + rev;\n  \n  const lps = new Array(temp.length).fill(0);\n  let len = 0, i = 1;\n  while (i < temp.length) {\n    if (temp[i] === temp[len]) {\n      len++;\n      lps[i] = len;\n      i++;\n    } else {\n      if (len !== 0) {\n        len = lps[len - 1];\n      } else {\n        lps[i] = 0;\n        i++;\n      }\n    }\n  }\n  \n  const palLen = lps[temp.length - 1];\n  const suffixToAdd = rev.substring(0, s.length - palLen);\n  return suffixToAdd + s;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "LPS array generation on combined string of length 2N+1 takes O(N) time.",
      "spaceExplanation": "Stores combined string and LPS array of size 2N+1."
    },
    "edgeCases": [
      "s is already a palindrome",
      "Single char string"
    ],
    "commonMistake": "Forgetting separator '#' in combined string, causing prefix matches to cross boundary into `rev`.",
    "interviewTakeaway": "Appending `S + '#' + S_rev` maps longest palindromic prefix discovery directly onto KMP LPS table construction."
  },
  {
    "id": "str-hard-39",
    "title": "Longest Happy Prefix",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "KMP Algorithm"
    ],
    "subtopic": "LPS Table Value Extraction",
    "difficulty": "Hard",
    "learningOrder": 39,
    "importanceTier": "important",
    "pattern": "KMP LPS Table Construction",
    "patterns": [
      "KMP LPS Table Construction"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/longest-happy-prefix/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Google Prep"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 20,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 93
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Google",
      "Amazon"
    ],
    "problemSummary": "A string is called a happy prefix if is a non-empty prefix which is also a suffix (excluding the string itself). Given a string `s`, return the longest happy prefix.",
    "whySolveThis": {
      "importanceReason": "Direct pure test of KMP LPS table logic. The length of the longest proper prefix that is also a suffix is precisely `LPS[s.length - 1]`.",
      "keySkills": [
        "KMP LPS table generation",
        "Proper prefix-suffix definition",
        "O(N) prefix extraction"
      ]
    },
    "hints": [
      "The problem asks for the longest proper prefix which is also a suffix.",
      "This is the exact definition of KMP's LPS (Longest Prefix Suffix) array at index N-1!",
      "Build LPS array for s, return s.substring(0, LPS[s.length - 1])."
    ],
    "approach": {
      "bruteForceSummary": "Compare all prefixes against suffixes. O(N²) time.",
      "optimalStrategy": "Build KMP LPS array for s in O(N). Length = LPS[s.length - 1]. Return s.substring(0, Length).",
      "patternUsed": "KMP LPS Table Construction"
    },
    "solutionJS": "function longestPrefix(s) {\n  const n = s.length;\n  const lps = new Array(n).fill(0);\n  let len = 0, i = 1;\n  \n  while (i < n) {\n    if (s[i] === s[len]) {\n      len++;\n      lps[i] = len;\n      i++;\n    } else {\n      if (len !== 0) {\n        len = lps[len - 1];\n      } else {\n        lps[i] = 0;\n        i++;\n      }\n    }\n  }\n  \n  return s.substring(0, lps[n - 1]);\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "LPS array construction takes linear O(N) time.",
      "spaceExplanation": "LPS array of size N."
    },
    "edgeCases": [
      "No happy prefix exists (returns empty string \"\")",
      "Single character string"
    ],
    "commonMistake": "Using naive string comparisons instead of linear O(N) KMP LPS table construction.",
    "interviewTakeaway": "The KMP LPS table directly stores proper prefix-suffix match lengths for every prefix of a string."
  },
  {
    "id": "str-hard-40",
    "title": "Substring with Concatenation of All Words",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Sliding Window",
      "Hashing"
    ],
    "subtopic": "Multi-Offset Fixed Window",
    "difficulty": "Hard",
    "learningOrder": 40,
    "importanceTier": "must-do",
    "pattern": "Multi-Offset Fixed Sliding Window",
    "patterns": [
      "Multi-Offset Fixed Sliding Window"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "Meta Prep"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 19,
      "patternValue": 20,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 10,
      "difficultyValue": 5,
      "totalScore": 96
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Meta",
      "Amazon",
      "Google",
      "Apple"
    ],
    "problemSummary": "Given a string `s` and an array of strings `words` (all of the same length), return the starting indices of all concatenated substrings in `s` that contain all words in `words`.",
    "whySolveThis": {
      "importanceReason": "Advanced sliding window problem. Runs `wordLength` independent sliding window passes with word-frequency Map checks in O(N) total time.",
      "keySkills": [
        "Multi-offset sliding window passes",
        "Word-frequency Map match tracking",
        "Window reset & contraction"
      ]
    },
    "hints": [
      "All words have the same length L. Total length = words.length * L.",
      "Run L independent sliding window passes starting at offsets 0, 1, ..., L-1.",
      "In each pass, slide window by steps of length L, maintaining a Map of word counts."
    ],
    "approach": {
      "bruteForceSummary": "Extract substrings of total length and check word permutations. O(N * M * L) time.",
      "optimalStrategy": "Run L sliding window passes (offset 0..L-1). Slide right by L. Update word map. Reset window if invalid word encountered. O(N * L) time.",
      "patternUsed": "Multi-Offset Fixed Sliding Window"
    },
    "solutionJS": "function findSubstring(s, words) {\n  const result = [];\n  if (!s || !words || words.length === 0) return result;\n  \n  const wordLen = words[0].length;\n  const wordCount = words.length;\n  const totalLen = wordLen * wordCount;\n  if (s.length < totalLen) return result;\n  \n  const wordMap = new Map();\n  for (const w of words) {\n    wordMap.set(w, (wordMap.get(w) || 0) + 1);\n  }\n  \n  for (let offset = 0; offset < wordLen; offset++) {\n    let left = offset;\n    let count = 0;\n    const seenMap = new Map();\n    \n    for (let right = offset; right <= s.length - wordLen; right += wordLen) {\n      const sub = s.substring(right, right + wordLen);\n      if (wordMap.has(sub)) {\n        seenMap.set(sub, (seenMap.get(sub) || 0) + 1);\n        count++;\n        \n        while (seenMap.get(sub) > wordMap.get(sub)) {\n          const leftWord = s.substring(left, left + wordLen);\n          seenMap.set(leftWord, seenMap.get(leftWord) - 1);\n          count--;\n          left += wordLen;\n        }\n        \n        if (count === wordCount) {\n          result.push(left);\n        }\n      } else {\n        seenMap.clear();\n        count = 0;\n        left = right + wordLen;\n      }\n    }\n  }\n  \n  return result;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(M * L)",
      "timeExplanation": "L passes each traversing N/L steps gives O(N) total time.",
      "spaceExplanation": "Stores word maps of size M * L."
    },
    "edgeCases": [
      "s shorter than total concatenated length",
      "Duplicate words in words array"
    ],
    "commonMistake": "Only running 1 sliding window pass from offset 0, missing valid concatenated alignments starting at offsets 1 to L-1.",
    "interviewTakeaway": "Running L independent offset passes ensures no valid word boundary alignment is missed."
  },
  {
    "id": "str-hard-41",
    "title": "Count Unique Characters of All Substrings of a Given String",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Math",
      "Character Contribution"
    ],
    "subtopic": "Index Distance Contribution Math",
    "difficulty": "Hard",
    "learningOrder": 41,
    "importanceTier": "must-do",
    "pattern": "Character Contribution Mathematics & Index Distance Multiplication",
    "patterns": [
      "Character Contribution Mathematics & Index Distance Multiplication"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Google Prep"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 19,
      "patternValue": 20,
      "conceptImportance": 9,
      "learningValue": 10,
      "uniqueness": 10,
      "difficultyValue": 5,
      "totalScore": 97
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Google",
      "Amazon",
      "Meta"
    ],
    "problemSummary": "Let's define a function `UNIQ(s)` that returns the number of unique characters in `s`. Return the sum of `UNIQ(sub)` for all substrings of `s`.",
    "whySolveThis": {
      "importanceReason": "High-level character contribution mathematics problem. Instead of evaluating O(N²) substrings, calculates the total number of substrings in which character `s[i]` appears exactly once: `(i - prev[i]) * (next[i] - i)`.",
      "keySkills": [
        "Character contribution counting",
        "Previous/Next index tracking",
        "Combinatorial substring multiplication"
      ]
    },
    "hints": [
      "Instead of counting unique characters for each substring, count how many substrings contain s[i] as a UNIQUE character!",
      "Character s[i] is unique in a substring if it extends from (prevIndex + 1) to (nextIndex - 1).",
      "Contribution of s[i] = `(i - prevIndex) * (nextIndex - i)`."
    ],
    "approach": {
      "bruteForceSummary": "Evaluate UNIQ(sub) for all O(N²) substrings. O(N³) time.",
      "optimalStrategy": "Store index list for each character 'A'..'Z'. For index i with prev index L and next index R, add `(i - L) * (R - i)` to total sum. O(N) time.",
      "patternUsed": "Character Contribution Distance Multiplication"
    },
    "solutionJS": "function uniqueLetterString(s) {\n  const indexMap = new Map();\n  for (let i = 0; i < s.length; i++) {\n    const char = s[i];\n    if (!indexMap.has(char)) indexMap.set(char, [-1]);\n    indexMap.get(char).push(i);\n  }\n  \n  let totalSum = 0;\n  for (const [char, indices] of indexMap.entries()) {\n    indices.push(s.length);\n    for (let i = 1; i < indices.length - 1; i++) {\n      const prev = indices[i - 1];\n      const curr = indices[i];\n      const next = indices[i + 1];\n      totalSum += (curr - prev) * (next - curr);\n    }\n  }\n  \n  return totalSum;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Single linear pass to record indices + single pass to compute contributions.",
      "spaceExplanation": "Stores index lists for 26 letters."
    },
    "edgeCases": [
      "Single character string",
      "All unique characters",
      "All identical characters"
    ],
    "commonMistake": "Attempting to generate or sum substrings directly instead of calculating element contribution bounds.",
    "interviewTakeaway": "Inverting perspective from 'substring -> unique chars' to 'char -> valid substrings count' converts O(N²) into O(N)."
  },
  {
    "id": "str-hard-42",
    "title": "Repeated String Match",
    "primaryTopic": "Strings & Pattern Matching",
    "topic": "Strings & Pattern Matching",
    "topicId": "strings",
    "relatedTopics": [
      "Rabin-Karp",
      "String Multiplication"
    ],
    "subtopic": "Rabin-Karp Bounds Check",
    "difficulty": "Hard",
    "learningOrder": 42,
    "importanceTier": "important",
    "pattern": "Rabin-Karp / Minimum Multiplication Bounds Check",
    "patterns": [
      "Rabin-Karp / Minimum Multiplication Bounds Check"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/repeated-string-match/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/minimum-number-of-times-a-has-to-be-repeated-such-that-b-is-a-substring-of-it/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "NeetCode 150",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 18,
      "patternValue": 19,
      "conceptImportance": 8,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 91
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Google",
      "Amazon"
    ],
    "problemSummary": "Given two strings `a` and `b`, return the minimum number of times `a` has to be repeated such that `b` is a substring of it. Return -1 if impossible.",
    "whySolveThis": {
      "importanceReason": "Teaches mathematical multiplication upper bounds: minimum repetitions $k = \\lceil b.length / a.length \\rceil$. Check $k$ repetitions and $k+1$ repetitions.",
      "keySkills": [
        "Repetition lower/upper bound math",
        "Rabin-Karp / Substring check",
        "Early impossible exit"
      ]
    },
    "hints": [
      "Minimum repetitions count k = Math.ceil(b.length / a.length).",
      "Repeat string a k times: test if `a.repeat(k).includes(b)`. If yes, return k.",
      "Test `a.repeat(k + 1).includes(b)`. If yes, return k + 1. Otherwise return -1."
    ],
    "approach": {
      "bruteForceSummary": "Keep appending a until length exceeds 1000. O(N²) space/time.",
      "optimalStrategy": "k = Math.ceil(b.length / a.length). If a.repeat(k).includes(b) return k. If a.repeat(k+1).includes(b) return k+1. Else return -1.",
      "patternUsed": "Rabin-Karp Minimum Multiplication Bounds Check"
    },
    "solutionJS": "function repeatedStringMatch(a, b) {\n  const k = Math.ceil(b.length / a.length);\n  const repeatedK = a.repeat(k);\n  if (repeatedK.includes(b)) return k;\n  \n  const repeatedKPlus1 = repeatedK + a;\n  if (repeatedKPlus1.includes(b)) return k + 1;\n  \n  return -1;\n}",
    "complexity": {
      "time": "O(N + M)",
      "space": "O(N + M)",
      "timeExplanation": "String repetition and substring check take O(N + M) time.",
      "spaceExplanation": "Allocates repeated string buffer size (k+1)*N."
    },
    "edgeCases": [
      "b already substring of a",
      "Impossible match (returns -1)"
    ],
    "commonMistake": "Looping indefinitely without bounding repetition count to `k + 1`.",
    "interviewTakeaway": "Mathematical upper bounds (`k` and `k+1`) strictly bound string expansion searches."
  }
];
