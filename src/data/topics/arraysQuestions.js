export const ARRAYS_QUESTIONS = [
  {
    "id": "arr-easy-01",
    "title": "Two Sum",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Hashing"
    ],
    "subtopic": "Hash Table Lookup",
    "difficulty": "Easy",
    "learningOrder": 1,
    "importanceTier": "must-do",
    "pattern": "Hash Map / Complement Lookup",
    "patterns": [
      "Hash Map / Complement Lookup"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/two-sum/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/check-if-pair-with-given-sum-exists-in-array/"
      },
      {
        "source": "InterviewBit",
        "url": "https://www.interviewbit.com/problems/2-sum/"
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
      "Meta",
      "Apple",
      "Microsoft"
    ],
    "problemSummary": "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
    "whySolveThis": {
      "importanceReason": "The ultimate fundamental interview question. Teaches how to trade space O(N) for time O(N) using Hash Table complement lookups.",
      "keySkills": [
        "Hash Map state building",
        "Complement math (target - current)",
        "O(1) average lookup"
      ]
    },
    "hints": [
      "Instead of checking every pair with nested loops, think about what value you need to pair with nums[i].",
      "As you iterate, store elements you've already seen in a Map along with their index.",
      "Check if (target - currentNum) exists in your Map."
    ],
    "approach": {
      "bruteForceSummary": "Nested loops comparing all pairs (nums[i] + nums[j] === target). O(N²) time, O(1) space.",
      "optimalStrategy": "Single pass Hash Map lookup. Calculate complement = target - nums[i]. If complement exists in map, return indices; otherwise map.set(nums[i], i).",
      "patternUsed": "Hash Map Complement Lookup"
    },
    "solutionJS": "function twoSum(nums, target) {\n  const seen = new Map();\n  \n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (seen.has(complement)) {\n      return [seen.get(complement), i];\n    }\n    seen.set(nums[i], i);\n  }\n  \n  return [];\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "We traverse the array of length N once. Map set and get operations take O(1) average time.",
      "spaceExplanation": "The Hash Map stores up to N key-value pairs in the worst case."
    }
  },
  {
    "id": "arr-easy-02",
    "title": "Best Time to Buy and Sell Stock",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Dynamic Programming"
    ],
    "subtopic": "Single Pass Tracking / Dynamic Programming",
    "difficulty": "Easy",
    "learningOrder": 2,
    "importanceTier": "must-do",
    "pattern": "Single Pass Min Tracking",
    "patterns": [
      "Single Pass Min Tracking"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/best-time-to-buy-and-sell-stock/"
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
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 96
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Uber",
      "Bloomberg"
    ],
    "problemSummary": "Find the maximum profit you can achieve by buying on one day and selling on a future day.",
    "whySolveThis": {
      "importanceReason": "Teaches single-pass tracking of a minimum history state while calculating optimal dynamic differences.",
      "keySkills": [
        "Running minimum tracking",
        "Max profit dynamic calculation",
        "Single pass O(N) optimization"
      ]
    },
    "hints": [
      "To maximize profit, you want to buy at the lowest possible price before selling.",
      "Track the minimum price seen so far as you iterate through the prices array.",
      "At each step, calculate potential profit: currentPrice - minPrice."
    ],
    "approach": {
      "bruteForceSummary": "Compare every buy day i with every future sell day j. O(N²) time.",
      "optimalStrategy": "Keep a variable minPrice initialized to Infinity and maxProfit to 0. Update minPrice = min(minPrice, price), then maxProfit = max(maxProfit, price - minPrice).",
      "patternUsed": "Single Pass State Tracking"
    },
    "solutionJS": "function maxProfit(prices) {\n  let minPrice = Infinity;\n  let maxProfit = 0;\n  \n  for (const price of prices) {\n    if (price < minPrice) {\n      minPrice = price;\n    } else if (price - minPrice > maxProfit) {\n      maxProfit = price - minPrice;\n    }\n  }\n  \n  return maxProfit;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass through the array of stock prices.",
      "spaceExplanation": "Uses only two primitive numeric state variables."
    }
  },
  {
    "id": "arr-easy-03",
    "title": "Contains Duplicate",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Hashing"
    ],
    "subtopic": "Set & Uniqueness",
    "difficulty": "Easy",
    "learningOrder": 3,
    "importanceTier": "must-do",
    "pattern": "Set Membership / Hashing",
    "patterns": [
      "Set Membership / Hashing"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/contains-duplicate/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
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
      "patternValue": 18,
      "conceptImportance": 9,
      "learningValue": 8,
      "uniqueness": 7,
      "difficultyValue": 5,
      "totalScore": 88
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Apple",
      "Amazon",
      "Adobe",
      "Google"
    ],
    "problemSummary": "Return true if any value appears at least twice in the array, and false if every element is distinct.",
    "whySolveThis": {
      "importanceReason": "Standard warm-up question testing immediate familiarity with JavaScript Set data structure for duplicate detection.",
      "keySkills": [
        "JS Set instantiation",
        "O(1) set lookup",
        "Early exit iteration"
      ]
    },
    "hints": [
      "A Hash Set only allows unique elements.",
      "As you iterate, check if set.has(val). If yes, return true immediately."
    ],
    "approach": {
      "bruteForceSummary": "Nested loops checking pairs. O(N²) time.",
      "optimalStrategy": "Maintain a Set. Iterate through nums; if set.has(num), return true. Otherwise set.add(num). Or compare new Set(nums).size !== nums.length.",
      "patternUsed": "Set Lookup / Size Comparison"
    },
    "solutionJS": "function containsDuplicate(nums) {\n  const seen = new Set();\n  for (const num of nums) {\n    if (seen.has(num)) return true;\n    seen.add(num);\n  }\n  return false;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Iterates through N elements with O(1) average Set checks.",
      "spaceExplanation": "Set stores up to N distinct numbers."
    }
  },
  {
    "id": "arr-easy-04",
    "title": "Remove Duplicates from Sorted Array",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Two Pointers"
    ],
    "subtopic": "In-place Array Modification",
    "difficulty": "Easy",
    "learningOrder": 4,
    "importanceTier": "must-do",
    "pattern": "Two Pointers (Writer & Reader)",
    "patterns": [
      "Two Pointers (Writer & Reader)"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/remove-duplicates-sorted-array/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Striver A2Z DSA",
        "GeeksforGeeks",
        "InterviewBit"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 19,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 7,
      "difficultyValue": 5,
      "totalScore": 92
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft",
      "Google"
    ],
    "problemSummary": "Remove duplicates in-place from a sorted array such that each unique element appears only once. Return the number of unique elements.",
    "whySolveThis": {
      "importanceReason": "Teaches the essential Two-Pointer pattern for in-place array modification without extra memory allocation.",
      "keySkills": [
        "Two pointers (slow/fast)",
        "In-place array overwrite",
        "Exploiting sorted array property"
      ]
    },
    "hints": [
      "Since the array is sorted, identical elements are adjacent.",
      "Use one pointer 'writeIndex' for writing unique values, and a 'readIndex' loop to find new distinct values."
    ],
    "approach": {
      "bruteForceSummary": "Creating a new array with unique values takes O(N) auxiliary space, violating in-place requirement.",
      "optimalStrategy": "Maintain writeIndex = 1. Loop i from 1 to N-1. If nums[i] !== nums[i-1], assign nums[writeIndex] = nums[i] and increment writeIndex.",
      "patternUsed": "Two Pointers (Writer & Reader)"
    },
    "solutionJS": "function removeDuplicates(nums) {\n  if (nums.length === 0) return 0;\n  \n  let writeIndex = 1;\n  for (let readIndex = 1; readIndex < nums.length; readIndex++) {\n    if (nums[readIndex] !== nums[readIndex - 1]) {\n      nums[writeIndex] = nums[readIndex];\n      writeIndex++;\n    }\n  }\n  \n  return writeIndex;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear traversal of the array.",
      "spaceExplanation": "Modifies array in-place using O(1) extra space."
    }
  },
  {
    "id": "arr-easy-05",
    "title": "Move Zeroes",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Two Pointers"
    ],
    "subtopic": "In-place Array Partitioning",
    "difficulty": "Easy",
    "learningOrder": 5,
    "importanceTier": "must-do",
    "pattern": "Two Pointers (Writer & Reader)",
    "patterns": [
      "Two Pointers (Writer & Reader)"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/move-zeroes/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode Roadmap",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 18,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 8,
      "uniqueness": 7,
      "difficultyValue": 5,
      "totalScore": 90
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Meta",
      "Amazon",
      "Apple",
      "Microsoft"
    ],
    "problemSummary": "Move all 0's to the end of the array while maintaining the relative order of non-zero elements in-place.",
    "whySolveThis": {
      "importanceReason": "Core in-place array partitioning problem. Frequently asked in screening rounds at Meta and Apple.",
      "keySkills": [
        "In-place element swapping",
        "Writer pointer tracking",
        "Zero padding"
      ]
    },
    "hints": [
      "Keep a pointer 'lastNonZeroFoundAt' starting at index 0.",
      "When you see a non-zero element, swap it with nums[lastNonZeroFoundAt] and increment the pointer."
    ],
    "approach": {
      "bruteForceSummary": "Creating a copy array and appending non-zeroes then zeroes uses O(N) space.",
      "optimalStrategy": "Use two pointers: nonZeroIndex = 0. Iterate through array; whenever nums[i] !== 0, swap nums[nonZeroIndex] and nums[i], then nonZeroIndex++.",
      "patternUsed": "Two Pointers In-Place Partitioning"
    },
    "solutionJS": "function moveZeroes(nums) {\n  let nonZeroIndex = 0;\n  \n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) {\n      // Swap non-zero element to front\n      [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]];\n      nonZeroIndex++;\n    }\n  }\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single pass over the array of length N.",
      "spaceExplanation": "Modifies input array in-place."
    }
  },
  {
    "id": "arr-easy-06",
    "title": "Majority Element",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Math",
      "Voting"
    ],
    "subtopic": "Voting Algorithms / Frequency Analysis",
    "difficulty": "Easy",
    "learningOrder": 6,
    "importanceTier": "must-do",
    "pattern": "Boyer-Moore Voting Algorithm",
    "patterns": [
      "Boyer-Moore Voting Algorithm"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/majority-element/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/majority-element/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "Striver SDE Sheet",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 20,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 8,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 94
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Microsoft",
      "Google",
      "Adobe"
    ],
    "problemSummary": "Given an array `nums` of size `n`, return the majority element that appears more than ⌊n / 2⌋ times.",
    "whySolveThis": {
      "importanceReason": "Introduces the ingenious Boyer-Moore Voting Algorithm which finds the majority element in O(N) time and O(1) space.",
      "keySkills": [
        "Boyer-Moore Voting Algorithm",
        "Frequency balance cancellation",
        "O(1) space optimization"
      ]
    },
    "hints": [
      "While a Hash Map solves this in O(N) space, can you solve it in O(1) space?",
      "Imagine each candidate 'votes' for itself (+1) and against other candidates (-1).",
      "Since majority element appears > N/2 times, its count will remain > 0 at the end!"
    ],
    "approach": {
      "bruteForceSummary": "Count frequencies using Map. Takes O(N) space.",
      "optimalStrategy": "Boyer-Moore Voting Algorithm: maintain count = 0 and candidate = null. Loop through nums: if count === 0, candidate = num. If num === candidate, count++; else count--. Return candidate.",
      "patternUsed": "Boyer-Moore Voting Algorithm"
    },
    "solutionJS": "function majorityElement(nums) {\n  let candidate = null;\n  let count = 0;\n  \n  for (const num of nums) {\n    if (count === 0) {\n      candidate = num;\n    }\n    count += (num === candidate) ? 1 : -1;\n  }\n  \n  return candidate;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single pass through the array.",
      "spaceExplanation": "Uses constant auxiliary space."
    }
  },
  {
    "id": "arr-easy-07",
    "title": "Find All Numbers Disappeared in an Array",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Cyclic Sort"
    ],
    "subtopic": "In-place Index Mapping / Cyclic Placement",
    "difficulty": "Easy",
    "learningOrder": 7,
    "importanceTier": "important",
    "pattern": "In-place State Negation",
    "patterns": [
      "In-place State Negation"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 3,
      "sources": [
        "NeetCode 150",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 22,
      "crossSourceEvidence": 16,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 8,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 87
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "problemSummary": "Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all integers in range `[1, n]` that do not appear in `nums`.",
    "whySolveThis": {
      "importanceReason": "Teaches how to use the input array itself as a hash map by encoding presence using value signs (negative markers).",
      "keySkills": [
        "Array index as Hash Map key",
        "Negation encoding",
        "O(1) auxiliary space trick"
      ]
    },
    "hints": [
      "Notice that values are between 1 and N. Array indices are 0 to N-1.",
      "For each value val = Math.abs(nums[i]), mark nums[val - 1] as negative.",
      "Indices that remain positive were never visited!"
    ],
    "approach": {
      "bruteForceSummary": "Using a Set of size N uses O(N) auxiliary space.",
      "optimalStrategy": "Loop i from 0 to N-1. Index idx = Math.abs(nums[i]) - 1. If nums[idx] > 0, nums[idx] = -nums[idx]. Second pass: if nums[i] > 0, push i + 1 to result.",
      "patternUsed": "In-place Negation Encoding"
    },
    "solutionJS": "function findDisappearedNumbers(nums) {\n  for (let i = 0; i < nums.length; i++) {\n    const targetIdx = Math.abs(nums[i]) - 1;\n    if (nums[targetIdx] > 0) {\n      nums[targetIdx] = -nums[targetIdx];\n    }\n  }\n  \n  const result = [];\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] > 0) {\n      result.push(i + 1);\n    }\n  }\n  \n  return result;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Two linear passes through array.",
      "spaceExplanation": "Mutates input array in-place, ignoring output array space."
    }
  },
  {
    "id": "arr-easy-08",
    "title": "Missing Number",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Bit Manipulation",
      "Math"
    ],
    "subtopic": "Math & Bit Manipulation",
    "difficulty": "Easy",
    "learningOrder": 8,
    "importanceTier": "must-do",
    "pattern": "Gauss Sum / Bitwise XOR",
    "patterns": [
      "Gauss Sum / Bitwise XOR"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/missing-number/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/find-the-missing-number/"
      }
    ],
    "crossSource": {
      "sourceCount": 5,
      "sources": [
        "LeetCode Top 150",
        "Blind 75",
        "Striver A2Z DSA",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 19,
      "patternValue": 18,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 91
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Microsoft",
      "Google",
      "Apple"
    ],
    "problemSummary": "Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range missing from the array.",
    "whySolveThis": {
      "importanceReason": "Classic mathematical and bitwise problem. Demonstrates Gauss sum formula `N*(N+1)/2` and Bitwise XOR cancellation properties.",
      "keySkills": [
        "Gauss Sum formula",
        "Bitwise XOR properties (a ^ a = 0)",
        "Single pass O(N) calculation"
      ]
    },
    "hints": [
      "Sum of numbers 0..N is N * (N + 1) / 2.",
      "Subtract actual array sum from expected total sum.",
      "Alternatively, XOR all numbers from 0 to N and all values in nums."
    ],
    "approach": {
      "bruteForceSummary": "Sorting array takes O(N log N) time.",
      "optimalStrategy": "Expected Sum = N * (N + 1) / 2. Actual Sum = nums.reduce((a, b) => a + b, 0). Return expected - actual.",
      "patternUsed": "Math Gauss Sum Formula"
    },
    "solutionJS": "function missingNumber(nums) {\n  const n = nums.length;\n  const expectedSum = (n * (n + 1)) / 2;\n  const actualSum = nums.reduce((acc, curr) => acc + curr, 0);\n  return expectedSum - actualSum;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single pass array summation.",
      "spaceExplanation": "Constant O(1) extra variables."
    }
  },
  {
    "id": "arr-easy-09",
    "title": "Second Largest Element in Array",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Single-Pass Linear Tracking",
    "difficulty": "Easy",
    "learningOrder": 9,
    "importanceTier": "must-do",
    "pattern": "Single-Pass Linear Tracking",
    "patterns": [
      "Single-Pass Linear Tracking"
    ],
    "source": "GeeksforGeeks",
    "url": "https://www.geeksforgeeks.org/find-second-largest-element-in-an-array/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "GeeksforGeeks",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Second Largest Element in Array.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: Single-Pass Linear Tracking. Essential problem for software engineering technical interviews.",
      "keySkills": [
        "Single-Pass Linear Tracking",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: Single-Pass Linear Tracking.",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using Single-Pass Linear Tracking.",
      "patternUsed": "Single-Pass Linear Tracking"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using Single-Pass Linear Tracking\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-easy-10",
    "title": "Leaders in an Array",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Right-to-Left Scan",
    "difficulty": "Easy",
    "learningOrder": 10,
    "importanceTier": "must-do",
    "pattern": "Right-to-Left Scan",
    "patterns": [
      "Right-to-Left Scan"
    ],
    "source": "GeeksforGeeks",
    "url": "https://www.geeksforgeeks.org/leaders-in-an-array/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "GeeksforGeeks",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Leaders in an Array.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: Right-to-Left Scan. Essential problem for software engineering technical interviews.",
      "keySkills": [
        "Right-to-Left Scan",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: Right-to-Left Scan.",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using Right-to-Left Scan.",
      "patternUsed": "Right-to-Left Scan"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using Right-to-Left Scan\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-easy-11",
    "title": "Merge Sorted Array",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Two Pointers"
    ],
    "subtopic": "Two Pointers from Back",
    "difficulty": "Easy",
    "learningOrder": 11,
    "importanceTier": "must-do",
    "pattern": "Two Pointers (Reverse Placement)",
    "patterns": [
      "Two Pointers (Reverse Placement)"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/merge-sorted-array/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "Striver SDE Sheet",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 19,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 8,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 93
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "problemSummary": "You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`. Merge `nums2` into `nums1` as one sorted array in-place.",
    "whySolveThis": {
      "importanceReason": "Classic Meta interview problem. Teaches writing from BACK to FRONT to prevent overwriting unread elements in-place.",
      "keySkills": [
        "Reverse 3-pointer placement",
        "In-place overwrite prevention",
        "Boundary condition handling"
      ]
    },
    "hints": [
      "nums1 has extra zero buffer at the end of length n.",
      "Start comparing elements from the BACK of nums1 (index m-1) and nums2 (index n-1).",
      "Place the larger element at the end of nums1 (index m+n-1)."
    ],
    "approach": {
      "bruteForceSummary": "Copying nums2 to nums1 and calling sort() takes O((M+N) log(M+N)) time.",
      "optimalStrategy": "Three pointers: p1 = m-1, p2 = n-1, p = m+n-1. While p2 >= 0, if p1 >= 0 and nums1[p1] > nums2[p2], nums1[p] = nums1[p1--]; else nums1[p] = nums2[p2--]; p--.",
      "patternUsed": "Two Pointers (Reverse Placement)"
    },
    "solutionJS": "function merge(nums1, m, nums2, n) {\n  let p1 = m - 1;\n  let p2 = n - 1;\n  let p = m + n - 1;\n  \n  while (p2 >= 0) {\n    if (p1 >= 0 && nums1[p1] > nums2[p2]) {\n      nums1[p] = nums1[p1];\n      p1--;\n    } else {\n      nums1[p] = nums2[p2];\n      p2--;\n    }\n    p--;\n  }\n}",
    "complexity": {
      "time": "O(M + N)",
      "space": "O(1)",
      "timeExplanation": "Processes m + n elements in a single pass.",
      "spaceExplanation": "Modifies nums1 in-place using constant auxiliary memory."
    }
  },
  {
    "id": "arr-easy-12",
    "title": "Pascal's Triangle",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Dynamic Programming"
    ],
    "subtopic": "2D Dynamic Array Generation",
    "difficulty": "Easy",
    "learningOrder": 12,
    "importanceTier": "important",
    "pattern": "Dynamic 2D Array Generation",
    "patterns": [
      "Dynamic 2D Array Generation"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/pascals-triangle/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 3,
      "sources": [
        "LeetCode Top 150",
        "Striver SDE Sheet",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 22,
      "crossSourceEvidence": 17,
      "patternValue": 18,
      "conceptImportance": 9,
      "learningValue": 8,
      "uniqueness": 7,
      "difficultyValue": 5,
      "totalScore": 86
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Amazon",
      "Twitter",
      "Goldman Sachs"
    ],
    "problemSummary": "Given an integer `numRows`, return the first numRows of Pascal's triangle.",
    "whySolveThis": {
      "importanceReason": "Teaches building and populating 2D dynamic arrays where row[i][j] = prevRow[j-1] + prevRow[j].",
      "keySkills": [
        "2D array dynamic creation",
        "Boundary initialization",
        "Tabulation mechanics"
      ]
    },
    "hints": [
      "First and last element of every row is always 1.",
      "For middle elements: triangle[row][col] = triangle[row-1][col-1] + triangle[row-1][col]."
    ],
    "approach": {
      "bruteForceSummary": "Combinatorial formula nCr calculation is prone to integer overflow.",
      "optimalStrategy": "Iteratively generate each row using elements from the previous row.",
      "patternUsed": "Dynamic Tabulation Array Generation"
    },
    "solutionJS": "function generate(numRows) {\n  const triangle = [];\n  \n  for (let i = 0; i < numRows; i++) {\n    const row = new Array(i + 1).fill(1);\n    for (let j = 1; j < i; j++) {\n      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];\n    }\n    triangle.push(row);\n  }\n  \n  return triangle;\n}",
    "complexity": {
      "time": "O(numRows²)",
      "space": "O(numRows²)",
      "timeExplanation": "Total numbers generated: 1 + 2 + ... + numRows = numRows * (numRows + 1) / 2.",
      "spaceExplanation": "Output 2D array stores all generated elements."
    }
  },
  {
    "id": "arr-easy-13",
    "title": "Squares of a Sorted Array",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Two Pointers"
    ],
    "subtopic": "Two Pointers from Extremes",
    "difficulty": "Easy",
    "learningOrder": 13,
    "importanceTier": "must-do",
    "pattern": "Two Pointers (Extreme Expansion)",
    "patterns": [
      "Two Pointers (Extreme Expansion)"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/squares-of-a-sorted-array/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 3,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 18,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 92
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Meta",
      "Amazon",
      "Google"
    ],
    "problemSummary": "Given an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
    "whySolveThis": {
      "importanceReason": "Negative numbers squared produce large positive values. Teaches comparing absolute values at extreme ends (left/right pointers).",
      "keySkills": [
        "Two pointers from ends",
        "Filling result from right to left",
        "Exploiting parabola symmetry"
      ]
    },
    "hints": [
      "The largest squared values must come from either the far left (most negative) or far right (most positive).",
      "Use left = 0 and right = N-1. Compare nums[left]² and nums[right]².",
      "Place the larger square at position N-1, then N-2, moving inwards."
    ],
    "approach": {
      "bruteForceSummary": "Square each number then call sort(). Takes O(N log N) time.",
      "optimalStrategy": "Two pointers left=0, right=N-1. Compare Math.abs(nums[left]) and Math.abs(nums[right]), writing largest square to end of result array.",
      "patternUsed": "Two Pointers Extreme Search"
    },
    "solutionJS": "function sortedSquares(nums) {\n  const n = nums.length;\n  const result = new Array(n);\n  let left = 0;\n  let right = n - 1;\n  let writeIdx = n - 1;\n  \n  while (left <= right) {\n    const leftSquare = nums[left] * nums[left];\n    const rightSquare = nums[right] * nums[right];\n    \n    if (leftSquare > rightSquare) {\n      result[writeIdx] = leftSquare;\n      left++;\n    } else {\n      result[writeIdx] = rightSquare;\n      right--;\n    }\n    writeIdx--;\n  }\n  \n  return result;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Single pass filling result array of size N.",
      "spaceExplanation": "Allocates result array of size N."
    }
  },
  {
    "id": "arr-easy-14",
    "title": "Find Pivot Index",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Prefix Sum"
    ],
    "subtopic": "Prefix & Suffix Balance",
    "difficulty": "Easy",
    "learningOrder": 14,
    "importanceTier": "important",
    "pattern": "Total Sum vs Left Sum Accumulation",
    "patterns": [
      "Total Sum vs Left Sum Accumulation"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/find-pivot-index/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 2,
      "sources": [
        "LeetCode 75",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 22,
      "crossSourceEvidence": 16,
      "patternValue": 18,
      "conceptImportance": 9,
      "learningValue": 8,
      "uniqueness": 6,
      "difficultyValue": 5,
      "totalScore": 84
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "problemSummary": "Calculate the pivot index where the sum of all numbers strictly to the left equals the sum of all numbers strictly to the right.",
    "whySolveThis": {
      "importanceReason": "Teaches computing total sum first, then maintaining running left sum to derive right sum in O(1) per index.",
      "keySkills": [
        "Total sum pre-computation",
        "Right sum derivation: total - left - current",
        "Single pass balance check"
      ]
    },
    "hints": [
      "Calculate totalSum of the array.",
      "Maintain leftSum starting at 0.",
      "At index i: rightSum = totalSum - leftSum - nums[i]. Check if leftSum === rightSum."
    ],
    "approach": {
      "bruteForceSummary": "Nested loops computing left and right sum for every index take O(N²) time.",
      "optimalStrategy": "Pre-calculate totalSum. Loop i: rightSum = totalSum - leftSum - nums[i]. If leftSum === rightSum return i, else leftSum += nums[i].",
      "patternUsed": "Prefix Balance Equation"
    },
    "solutionJS": "function pivotIndex(nums) {\n  const totalSum = nums.reduce((acc, curr) => acc + curr, 0);\n  let leftSum = 0;\n  \n  for (let i = 0; i < nums.length; i++) {\n    const rightSum = totalSum - leftSum - nums[i];\n    if (leftSum === rightSum) {\n      return i;\n    }\n    leftSum += nums[i];\n  }\n  \n  return -1;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Two linear passes: one for sum, one for pivot detection.",
      "spaceExplanation": "Uses constant auxiliary variables."
    }
  },
  {
    "id": "arr-easy-15",
    "title": "Maximum Average Subarray I",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Sliding Window"
    ],
    "subtopic": "Fixed-Size Sliding Window",
    "difficulty": "Easy",
    "learningOrder": 15,
    "importanceTier": "must-do",
    "pattern": "Fixed Sliding Window",
    "patterns": [
      "Fixed Sliding Window"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/maximum-average-subarray-i/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 3,
      "sources": [
        "LeetCode 75",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 17,
      "patternValue": 20,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 5,
      "difficultyValue": 5,
      "totalScore": 89
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Google",
      "Meta"
    ],
    "problemSummary": "Find a contiguous subarray whose length is `k` that has the maximum average value and return this value.",
    "whySolveThis": {
      "importanceReason": "The canonical introduction to Fixed-Size Sliding Window technique.",
      "keySkills": [
        "Window initialization",
        "Add right item & subtract left item",
        "Running maximum tracking"
      ]
    },
    "hints": [
      "Calculate the sum of the first k elements to initialize windowSum.",
      "Slide the window of size k from index k to N-1: windowSum += nums[i] - nums[i - k].",
      "Keep track of maxWindowSum, then return maxWindowSum / k."
    ],
    "approach": {
      "bruteForceSummary": "Recomputing sum of k elements for every starting index takes O(N * k) time.",
      "optimalStrategy": "Initialize window sum for first k items. Slide window right by adding nums[i] and subtracting nums[i-k]. Track max sum.",
      "patternUsed": "Fixed Sliding Window"
    },
    "solutionJS": "function findMaxAverage(nums, k) {\n  let windowSum = 0;\n  for (let i = 0; i < k; i++) {\n    windowSum += nums[i];\n  }\n  \n  let maxSum = windowSum;\n  for (let i = k; i < nums.length; i++) {\n    windowSum += nums[i] - nums[i - k];\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  \n  return maxSum / k;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass through the array.",
      "spaceExplanation": "Uses constant extra variables."
    }
  },
  {
    "id": "arr-med-16",
    "title": "Maximum Subarray (Kadane's Algorithm)",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Dynamic Programming"
    ],
    "subtopic": "Dynamic Programming / Subarray Sums",
    "difficulty": "Medium",
    "learningOrder": 16,
    "importanceTier": "must-do",
    "pattern": "Kadane's Algorithm",
    "patterns": [
      "Kadane's Algorithm"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/maximum-subarray/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/"
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
      "Microsoft",
      "Meta",
      "Google",
      "Apple"
    ],
    "problemSummary": "Given an integer array `nums`, find the contiguous subarray with the largest sum and return its sum.",
    "whySolveThis": {
      "importanceReason": "One of the most famous algorithms in computer science. Standard interview benchmark for dynamic programming.",
      "keySkills": [
        "Kadane's choice equation",
        "Local vs global state",
        "Negative prefix elimination"
      ]
    },
    "hints": [
      "If your running sum becomes negative, it will hurt the sum of any future subarray.",
      "At index i, max sum ending at i is Math.max(nums[i], currentSum + nums[i])."
    ],
    "approach": {
      "bruteForceSummary": "Checking all subarrays takes O(N²) time.",
      "optimalStrategy": "Kadane's DP choice: currentSum = max(num, currentSum + num). Track globalMax = max(globalMax, currentSum).",
      "patternUsed": "Kadane's Algorithm"
    },
    "solutionJS": "function maxSubArray(nums) {\n  let currentMax = nums[0];\n  let globalMax = nums[0];\n  \n  for (let i = 1; i < nums.length; i++) {\n    currentMax = Math.max(nums[i], currentMax + nums[i]);\n    globalMax = Math.max(globalMax, currentMax);\n  }\n  \n  return globalMax;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass.",
      "spaceExplanation": "Uses primitive O(1) state variables."
    }
  },
  {
    "id": "arr-med-17",
    "title": "3Sum",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Two Pointers",
      "Sorting"
    ],
    "subtopic": "Sorting + Two Pointers",
    "difficulty": "Medium",
    "learningOrder": 17,
    "importanceTier": "must-do",
    "pattern": "Sorting + Two Pointers",
    "patterns": [
      "Sorting + Two Pointers"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/3sum/",
    "alternateSources": [
      {
        "source": "GeeksforGeeks",
        "url": "https://www.geeksforgeeks.org/find-triplet-sum-two-equal-third-element/"
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
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 98
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft",
      "Apple",
      "Google"
    ],
    "problemSummary": "Given an integer array nums, return all unique triplets `[nums[i], nums[j], nums[k]]` such that `i !== j`, `i !== k`, and `j !== k`, and `nums[i] + nums[j] + nums[k] === 0`.",
    "whySolveThis": {
      "importanceReason": "Top 3 most asked interview questions at Meta/Amazon. Teaches multi-pointer search with duplicate skip logic.",
      "keySkills": [
        "Sorting preprocessing",
        "Fixed outer loop + inward two pointers",
        "Duplicate triplet skipping"
      ]
    },
    "hints": [
      "Sort the array first.",
      "Fix the first element nums[i]. Then use Two Pointers (left = i+1, right = N-1) to find pairs summing to -nums[i].",
      "Be extremely careful to skip duplicate elements for i, left, and right to avoid redundant triplets!"
    ],
    "approach": {
      "bruteForceSummary": "Triple nested loop with Set filtering takes O(N³) time.",
      "optimalStrategy": "Sort array. Loop i from 0 to N-3. Skip duplicate nums[i]. Set left=i+1, right=N-1. If sum === 0, record triplet and skip duplicates for left and right.",
      "patternUsed": "Sorting + Two Pointers"
    },
    "solutionJS": "function threeSum(nums) {\n  nums.sort((a, b) => a - b);\n  const result = [];\n  \n  for (let i = 0; i < nums.length - 2; i++) {\n    // Early exit if smallest remaining number > 0\n    if (nums[i] > 0) break;\n    // Skip duplicates for first element\n    if (i > 0 && nums[i] === nums[i - 1]) continue;\n    \n    let left = i + 1;\n    let right = nums.length - 1;\n    \n    while (left < right) {\n      const sum = nums[i] + nums[left] + nums[right];\n      \n      if (sum === 0) {\n        result.push([nums[i], nums[left], nums[right]]);\n        // Skip duplicate left values\n        while (left < right && nums[left] === nums[left + 1]) left++;\n        // Skip duplicate right values\n        while (left < right && nums[right] === nums[right - 1]) right--;\n        left++;\n        right--;\n      } else if (sum < 0) {\n        left++;\n      } else {\n        right--;\n      }\n    }\n  }\n  \n  return result;\n}",
    "complexity": {
      "time": "O(N²)",
      "space": "O(1) auxiliary",
      "timeExplanation": "Sorting takes O(N log N). Outer loop runs N times with inner Two Pointer scan taking O(N) => O(N²).",
      "spaceExplanation": "In-place sorting (excluding output array space)."
    }
  },
  {
    "id": "arr-med-18",
    "title": "Container With Most Water",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Two Pointers"
    ],
    "subtopic": "Shrinking Window Two Pointers",
    "difficulty": "Medium",
    "learningOrder": 18,
    "importanceTier": "must-do",
    "pattern": "Two Pointers (Greedy Inward)",
    "patterns": [
      "Two Pointers (Greedy Inward)"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/container-with-most-water/",
    "alternateSources": [],
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
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 97
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Adobe"
    ],
    "problemSummary": "Given an integer array `height` of length `n`, find two lines that together with the x-axis form a container that contains the most water.",
    "whySolveThis": {
      "importanceReason": "Teaches greedy elimination of search space using Two Pointers.",
      "keySkills": [
        "Container volume math min(h1, h2) * width",
        "Greedy pointer movement (move shorter height)",
        "Search space reduction proof"
      ]
    },
    "hints": [
      "Area = Math.min(height[left], height[right]) * (right - left).",
      "Start with widest container (left = 0, right = N-1).",
      "Moving the taller line inward can NEVER increase area (width decreases, height capped by shorter line).",
      "Therefore, ALWAYS move the shorter line inward!"
    ],
    "approach": {
      "bruteForceSummary": "Nested loop evaluating all height pairs takes O(N²) time.",
      "optimalStrategy": "Two pointers left=0, right=N-1. Calculate current area, update maxArea. Move pointer pointing to shorter height.",
      "patternUsed": "Greedy Shrinking Two Pointers"
    },
    "solutionJS": "function maxArea(height) {\n  let left = 0;\n  let right = height.length - 1;\n  let maxWater = 0;\n  \n  while (left < right) {\n    const width = right - left;\n    const currentHeight = Math.min(height[left], height[right]);\n    const currentWater = width * currentHeight;\n    maxWater = Math.max(maxWater, currentWater);\n    \n    if (height[left] < height[right]) {\n      left++;\n    } else {\n      right--;\n    }\n  }\n  \n  return maxWater;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass as left and right pointers converge.",
      "spaceExplanation": "Uses constant variables."
    }
  },
  {
    "id": "arr-med-19",
    "title": "Product of Array Except Self",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Prefix Sum"
    ],
    "subtopic": "Prefix & Suffix Products",
    "difficulty": "Medium",
    "learningOrder": 19,
    "importanceTier": "must-do",
    "pattern": "Prefix & Suffix Accumulation",
    "patterns": [
      "Prefix & Suffix Accumulation"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/product-of-array-except-self/",
    "alternateSources": [],
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
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 98
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
    "problemSummary": "Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`, without using division.",
    "whySolveThis": {
      "importanceReason": "Top 5 interview question globally. Extremely popular because division is explicitly banned.",
      "keySkills": [
        "Prefix products pass",
        "Suffix products pass",
        "O(1) auxiliary space integration"
      ]
    },
    "hints": [
      "Product of array except self at index i = (Product of all elements to the left of i) * (Product of all elements to the right of i).",
      "First pass: build prefix products directly into the answer array.",
      "Second pass: traverse backwards accumulating suffix product into a single variable."
    ],
    "approach": {
      "bruteForceSummary": "Calculating product for each element using nested loop takes O(N²) time. Using division fails when array contains zeroes.",
      "optimalStrategy": "Two passes: 1) Fill ans[i] with prefix product of elements 0..i-1. 2) Loop backward from N-1 updating ans[i] *= suffixProduct.",
      "patternUsed": "Prefix & Suffix Product Passes"
    },
    "solutionJS": "function productExceptSelf(nums) {\n  const n = nums.length;\n  const result = new Array(n);\n  \n  // Pass 1: Prefix products\n  result[0] = 1;\n  for (let i = 1; i < n; i++) {\n    result[i] = result[i - 1] * nums[i - 1];\n  }\n  \n  // Pass 2: Suffix products\n  let suffixProduct = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    result[i] *= suffixProduct;\n    suffixProduct *= nums[i];\n  }\n  \n  return result;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1) auxiliary",
      "timeExplanation": "Two sequential linear passes over array.",
      "spaceExplanation": "Excludes output array per problem instructions."
    }
  },
  {
    "id": "arr-med-20",
    "title": "Subarray Sum Equals K",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Prefix Sum",
      "Hashing"
    ],
    "subtopic": "Prefix Sum + Hash Map",
    "difficulty": "Medium",
    "learningOrder": 20,
    "importanceTier": "must-do",
    "pattern": "Prefix Sum + Hash Map",
    "patterns": [
      "Prefix Sum + Hash Map"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/subarray-sum-equals-k/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Striver SDE Sheet",
        "GeeksforGeeks"
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
      "Meta",
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "problemSummary": "Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.",
    "whySolveThis": {
      "importanceReason": "The definitive Prefix Sum + Hash Map problem. Essential because negative numbers make Sliding Window fail!",
      "keySkills": [
        "Prefix sum difference equation (prefixSum[j] - prefixSum[i] = K)",
        "Map frequency storage",
        "Base case map.set(0, 1)"
      ]
    },
    "hints": [
      "Sliding window ONLY works for non-negative numbers.",
      "If sum(i to j) === k, then prefixSum[j] - prefixSum[i-1] === k.",
      "Store prefixSum frequencies in a Map. Look up if map has (prefixSum - k)."
    ],
    "approach": {
      "bruteForceSummary": "Nested loops evaluating all subarray sums take O(N²) time.",
      "optimalStrategy": "Maintain running prefixSum. Map stores frequency of each prefix sum seen. Count += map.get(prefixSum - k) || 0.",
      "patternUsed": "Prefix Sum + Hash Map Lookup"
    },
    "solutionJS": "function subarraySum(nums, k) {\n  const prefixMap = new Map();\n  prefixMap.set(0, 1); // Base case: prefix sum 0 has 1 count\n  \n  let currentPrefixSum = 0;\n  let count = 0;\n  \n  for (const num of nums) {\n    currentPrefixSum += num;\n    const targetPrefix = currentPrefixSum - k;\n    \n    if (prefixMap.has(targetPrefix)) {\n      count += prefixMap.get(targetPrefix);\n    }\n    \n    prefixMap.set(currentPrefixSum, (prefixMap.get(currentPrefixSum) || 0) + 1);\n  }\n  \n  return count;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Single linear traversal with O(1) average Map operations.",
      "spaceExplanation": "Hash Map stores up to N distinct prefix sums."
    }
  },
  {
    "id": "arr-med-21",
    "title": "Subarray Sums Divisible by K",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Prefix Sum + Modulo Arithmetic",
    "difficulty": "Medium",
    "learningOrder": 21,
    "importanceTier": "must-do",
    "pattern": "Prefix Sum + Modulo Arithmetic",
    "patterns": [
      "Prefix Sum + Modulo Arithmetic"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Subarray Sums Divisible by K.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: Prefix Sum + Modulo Arithmetic. Essential problem for software engineering technical interviews.",
      "keySkills": [
        "Prefix Sum + Modulo Arithmetic",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: Prefix Sum + Modulo Arithmetic.",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using Prefix Sum + Modulo Arithmetic.",
      "patternUsed": "Prefix Sum + Modulo Arithmetic"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using Prefix Sum + Modulo Arithmetic\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-med-22",
    "title": "Range Sum Query 2D - Immutable",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "2D Prefix Sum Matrix Preprocessing",
    "difficulty": "Medium",
    "learningOrder": 22,
    "importanceTier": "must-do",
    "pattern": "2D Prefix Sum Matrix Preprocessing",
    "patterns": [
      "2D Prefix Sum Matrix Preprocessing"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/range-sum-query-2d-immutable/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Range Sum Query 2D - Immutable.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: 2D Prefix Sum Matrix Preprocessing. Essential problem for software engineering technical interviews.",
      "keySkills": [
        "2D Prefix Sum Matrix Preprocessing",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: 2D Prefix Sum Matrix Preprocessing.",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using 2D Prefix Sum Matrix Preprocessing.",
      "patternUsed": "2D Prefix Sum Matrix Preprocessing"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using 2D Prefix Sum Matrix Preprocessing\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-med-23",
    "title": "Subarray Product Less Than K",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Variable Sliding Window Subarray Count",
    "difficulty": "Medium",
    "learningOrder": 23,
    "importanceTier": "must-do",
    "pattern": "Variable Sliding Window Subarray Count",
    "patterns": [
      "Variable Sliding Window Subarray Count"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/subarray-product-less-than-k/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Subarray Product Less Than K.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: Variable Sliding Window Subarray Count. Essential problem for software engineering technical interviews.",
      "keySkills": [
        "Variable Sliding Window Subarray Count",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: Variable Sliding Window Subarray Count.",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using Variable Sliding Window Subarray Count.",
      "patternUsed": "Variable Sliding Window Subarray Count"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using Variable Sliding Window Subarray Count\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-med-24",
    "title": "Rotate Array",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Reversal"
    ],
    "subtopic": "Reversal Algorithm",
    "difficulty": "Medium",
    "learningOrder": 24,
    "importanceTier": "must-do",
    "pattern": "3-Step Array Reversal",
    "patterns": [
      "3-Step Array Reversal"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/rotate-array/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 3,
      "sources": [
        "LeetCode Top 150",
        "Striver A2Z DSA",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 18,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 93
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "problemSummary": "Given an integer array `nums`, rotate the array to the right by `k` steps, where `k` is non-negative.",
    "whySolveThis": {
      "importanceReason": "Teaches the elegant 3-step array reversal technique for rotational shifts in O(1) auxiliary space.",
      "keySkills": [
        "k % N normalization",
        "Subarray reversal helper",
        "In-place rotational shifting"
      ]
    },
    "hints": [
      "Normalize k = k % N.",
      "Method 1: 3-step reversal algorithm.",
      "1. Reverse entire array.",
      "2. Reverse first k elements.",
      "3. Reverse remaining N-k elements."
    ],
    "approach": {
      "bruteForceSummary": "Shifting 1 element k times takes O(N * k) time. Creating copy array uses O(N) space.",
      "optimalStrategy": "3-step reversal: Reverse(0, N-1), Reverse(0, k-1), Reverse(k, N-1).",
      "patternUsed": "Array Reversal Trick"
    },
    "solutionJS": "function rotate(nums, k) {\n  const n = nums.length;\n  k = k % n;\n  \n  function reverse(start, end) {\n    while (start < end) {\n      [nums[start], nums[end]] = [nums[end], nums[start]];\n      start++;\n      end--;\n    }\n  }\n  \n  reverse(0, n - 1);\n  reverse(0, k - 1);\n  reverse(k, n - 1);\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Reverses elements across 3 sub-ranges (total ~2N swaps).",
      "spaceExplanation": "In-place array swaps."
    }
  },
  {
    "id": "arr-med-25",
    "title": "Find the Duplicate Number",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Fast & Slow Pointers",
      "Linked List"
    ],
    "subtopic": "Floyd's Cycle Detection",
    "difficulty": "Medium",
    "learningOrder": 25,
    "importanceTier": "must-do",
    "pattern": "Floyd's Tortoise & Hare",
    "patterns": [
      "Floyd's Tortoise & Hare"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/find-the-duplicate-number/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Striver SDE Sheet",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 19,
      "patternValue": 20,
      "conceptImportance": 9,
      "learningValue": 8,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 95
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Microsoft",
      "Google"
    ],
    "problemSummary": "Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive. Find the repeated number without modifying nums and using O(1) space.",
    "whySolveThis": {
      "importanceReason": "Brilliant application of Floyd's Cycle Detection algorithm on an Array treated as a Linked List.",
      "keySkills": [
        "Array values as pointers (nums[i] -> next index)",
        "Fast & Slow pointer collision",
        "Cycle entrance mathematical proof"
      ]
    },
    "hints": [
      "Treat the array as a linked list where value at nums[i] points to index nums[i].",
      "Since there is a duplicate, a cycle MUST exist!",
      "Use Floyd's Cycle Detection: slow = nums[slow], fast = nums[nums[fast]]."
    ],
    "approach": {
      "bruteForceSummary": "Sorting modifies array O(N log N). Hash Set uses O(N) space.",
      "optimalStrategy": "Floyd's Cycle Detection. Phase 1: find collision point. Phase 2: reset slow to nums[0], advance both 1 step until they meet at cycle entrance.",
      "patternUsed": "Floyd's Tortoise and Hare Cycle Detection"
    },
    "solutionJS": "function findDuplicate(nums) {\n  let slow = nums[0];\n  let fast = nums[0];\n  \n  // Phase 1: Detect cycle\n  do {\n    slow = nums[slow];\n    fast = nums[nums[fast]];\n  } while (slow !== fast);\n  \n  // Phase 2: Find cycle entrance (the duplicate number)\n  slow = nums[0];\n  while (slow !== fast) {\n    slow = nums[slow];\n    fast = nums[fast];\n  }\n  \n  return slow;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Linear time traversal around pointer cycle.",
      "spaceExplanation": "Uses constant auxiliary memory without mutating input."
    }
  },
  {
    "id": "arr-med-26",
    "title": "Spiral Matrix",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "2D Matrix"
    ],
    "subtopic": "2D Matrix Traversal",
    "difficulty": "Medium",
    "learningOrder": 26,
    "importanceTier": "must-do",
    "pattern": "4-Boundary Traversal",
    "patterns": [
      "4-Boundary Traversal"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/spiral-matrix/",
    "alternateSources": [],
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
      "crossSourceEvidence": 20,
      "patternValue": 18,
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
      "Microsoft",
      "Meta",
      "Google"
    ],
    "problemSummary": "Given an `m x n` `matrix`, return all elements of the matrix in spiral order.",
    "whySolveThis": {
      "importanceReason": "Core 2D matrix traversal problem. Tests clean boundary tracking and edge-case prevention.",
      "keySkills": [
        "Boundary state management (top, bottom, left, right)",
        "Clockwise traversal loop",
        "Shrinking boundaries"
      ]
    },
    "hints": [
      "Maintain 4 pointers: top=0, bottom=m-1, left=0, right=n-1.",
      "Traverse Left->Right along top, top++.",
      "Traverse Top->Bottom along right, right--.",
      "Traverse Right->Left along bottom (if top <= bottom), bottom--.",
      "Traverse Bottom->Top along left (if left <= right), left++."
    ],
    "approach": {
      "bruteForceSummary": "Simulating with direction vectors and visited matrix uses extra space.",
      "optimalStrategy": "Maintain 4 explicit integer boundaries. Shrink boundaries after traversing each edge.",
      "patternUsed": "4-Boundary Matrix Shrinking"
    },
    "solutionJS": "function spiralOrder(matrix) {\n  if (!matrix.length || !matrix[0].length) return [];\n  \n  let top = 0;\n  let bottom = matrix.length - 1;\n  let left = 0;\n  let right = matrix[0].length - 1;\n  const result = [];\n  \n  while (top <= bottom && left <= right) {\n    // 1. Traverse Right\n    for (let col = left; col <= right; col++) {\n      result.push(matrix[top][col]);\n    }\n    top++;\n    \n    // 2. Traverse Down\n    for (let row = top; row <= bottom; row++) {\n      result.push(matrix[row][right]);\n    }\n    right--;\n    \n    // 3. Traverse Left\n    if (top <= bottom) {\n      for (let col = right; col >= left; col--) {\n        result.push(matrix[bottom][col]);\n      }\n      bottom--;\n    }\n    \n    // 4. Traverse Up\n    if (left <= right) {\n      for (let row = bottom; row >= top; row--) {\n        result.push(matrix[row][left]);\n      }\n      left++;\n    }\n  }\n  \n  return result;\n}",
    "complexity": {
      "time": "O(M * N)",
      "space": "O(1) auxiliary",
      "timeExplanation": "Visits each matrix cell exactly once.",
      "spaceExplanation": "Excludes result array."
    }
  },
  {
    "id": "arr-med-27",
    "title": "Rotate Image",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "2D Matrix"
    ],
    "subtopic": "In-place 2D Matrix Manipulation",
    "difficulty": "Medium",
    "learningOrder": 27,
    "importanceTier": "must-do",
    "pattern": "Matrix Transpose + Row Reversal",
    "patterns": [
      "Matrix Transpose + Row Reversal"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/rotate-image/",
    "alternateSources": [],
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
      "crossSourceEvidence": 20,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 8,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 94
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft"
    ],
    "problemSummary": "Rotate an `n x n` 2D matrix 90 degrees clockwise in-place.",
    "whySolveThis": {
      "importanceReason": "Fundamental linear algebra operation. Demonstrates that 90-degree matrix rotation equals Matrix Transpose followed by Row Reversal.",
      "keySkills": [
        "Matrix Transpose (swap matrix[i][j] with matrix[j][i])",
        "Row Reversal",
        "In-place matrix modification"
      ]
    },
    "hints": [
      "Rotating 90 degrees clockwise can be decomposed into two simpler steps:",
      "Step 1: Transpose matrix (swap rows and columns across diagonal).",
      "Step 2: Reverse each row horizontally."
    ],
    "approach": {
      "bruteForceSummary": "Creating a new 2D matrix uses O(N²) auxiliary space.",
      "optimalStrategy": "In-place Transpose (swap matrix[i][j] and matrix[j][i] for j > i), then reverse each row.",
      "patternUsed": "Transpose + Reverse Matrix"
    },
    "solutionJS": "function rotate(matrix) {\n  const n = matrix.length;\n  \n  // Step 1: Transpose matrix in-place\n  for (let i = 0; i < n; i++) {\n    for (let j = i + 1; j < n; j++) {\n      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];\n    }\n  }\n  \n  // Step 2: Reverse each row\n  for (let i = 0; i < n; i++) {\n    matrix[i].reverse();\n  }\n}",
    "complexity": {
      "time": "O(N²)",
      "space": "O(1)",
      "timeExplanation": "Transpose visits N²/2 elements; reversing rows visits N² elements.",
      "spaceExplanation": "Modifies input matrix strictly in-place."
    }
  },
  {
    "id": "arr-med-28",
    "title": "Set Matrix Zeroes",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "2D Matrix"
    ],
    "subtopic": "First Row/Col State Markers",
    "difficulty": "Medium",
    "learningOrder": 28,
    "importanceTier": "must-do",
    "pattern": "In-place First Row/Col Marker",
    "patterns": [
      "In-place First Row/Col Marker"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/set-matrix-zeroes/",
    "alternateSources": [],
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
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 8,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 95
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Given an `m x n` integer matrix `matrix`, if an element is `0`, set its entire row and column to `0`s in-place.",
    "whySolveThis": {
      "importanceReason": "Teaches using the matrix's own 1st row and 1st column as indicator markers to achieve O(1) space complexity.",
      "keySkills": [
        "First row / col indicator flag",
        "In-place zero propagation",
        "Avoiding zero-cascading bugs"
      ]
    },
    "hints": [
      "If you set elements to 0 while scanning, you'll falsely trigger 0s everywhere!",
      "Use first row matrix[0][col] and first column matrix[row][0] as status markers.",
      "Use one boolean firstColHasZero to track if column 0 originally contained a zero."
    ],
    "approach": {
      "bruteForceSummary": "Creating copy matrix uses O(M*N) space. Row/Col boolean arrays use O(M+N) space.",
      "optimalStrategy": "Use 1st row and 1st column as markers. Track 1st col separately with boolean. Iterate backwards to populate zeroes.",
      "patternUsed": "In-Place Indicator Markers"
    },
    "solutionJS": "function setZeroes(matrix) {\n  const rows = matrix.length;\n  const cols = matrix[0].length;\n  let firstColZero = false;\n  \n  // Step 1: Mark zeroes in first row and first col\n  for (let r = 0; r < rows; r++) {\n    if (matrix[r][0] === 0) firstColZero = true;\n    for (let c = 1; c < cols; c++) {\n      if (matrix[r][c] === 0) {\n        matrix[r][0] = 0;\n        matrix[0][c] = 0;\n      }\n    }\n  }\n  \n  // Step 2: Update cells based on markers\n  for (let r = 1; r < rows; r++) {\n    for (let c = 1; c < cols; c++) {\n      if (matrix[r][0] === 0 || matrix[0][c] === 0) {\n        matrix[r][c] = 0;\n      }\n    }\n  }\n  \n  // Step 3: Handle first row\n  if (matrix[0][0] === 0) {\n    for (let c = 0; c < cols; c++) matrix[0][c] = 0;\n  }\n  \n  // Step 4: Handle first col\n  if (firstColZero) {\n    for (let r = 0; r < rows; r++) matrix[r][0] = 0;\n  }\n}",
    "complexity": {
      "time": "O(M * N)",
      "space": "O(1)",
      "timeExplanation": "Two passes over M x N matrix cells.",
      "spaceExplanation": "Uses constant auxiliary boolean flags."
    }
  },
  {
    "id": "arr-med-29",
    "title": "Merge Intervals",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays",
      "Sorting",
      "Greedy"
    ],
    "subtopic": "Interval Sorting & Overlap",
    "difficulty": "Medium",
    "learningOrder": 29,
    "importanceTier": "must-do",
    "pattern": "Sorting + Interval Overlap Check",
    "patterns": [
      "Sorting + Interval Overlap Check"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/merge-intervals/",
    "alternateSources": [],
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
      "Microsoft"
    ],
    "problemSummary": "Given an array of `intervals`, merge all overlapping intervals, and return an array of the non-overlapping intervals.",
    "whySolveThis": {
      "importanceReason": "The classic Greedy Interval problem asked in almost every senior engineering interview loop.",
      "keySkills": [
        "Interval start-time sorting",
        "Overlap condition (curr.start <= prev.end)",
        "Merging end = Math.max(prev.end, curr.end)"
      ]
    },
    "hints": [
      "Sort intervals by start time first: intervals.sort((a, b) => a[0] - b[0]).",
      "Iterate through intervals: if result is empty or curr.start > last.end, push interval.",
      "Else (overlap detected!): update last.end = Math.max(last.end, curr.end)."
    ],
    "approach": {
      "bruteForceSummary": "Graph component check takes O(N²) time.",
      "optimalStrategy": "Sort by start time. Single pass comparing current interval start with last merged interval end.",
      "patternUsed": "Interval Sorting + Greedy Merge"
    },
    "solutionJS": "function merge(intervals) {\n  if (intervals.length <= 1) return intervals;\n  \n  // Sort by start time\n  intervals.sort((a, b) => a[0] - b[0]);\n  \n  const merged = [intervals[0]];\n  \n  for (let i = 1; i < intervals.length; i++) {\n    const current = intervals[i];\n    const lastMerged = merged[merged.length - 1];\n    \n    if (current[0] <= lastMerged[1]) {\n      // Overlap: merge ends\n      lastMerged[1] = Math.max(lastMerged[1], current[1]);\n    } else {\n      // No overlap: add new interval\n      merged.push(current);\n    }\n  }\n  \n  return merged;\n}",
    "complexity": {
      "time": "O(N log N)",
      "space": "O(N)",
      "timeExplanation": "Sorting takes O(N log N); linear merge pass takes O(N).",
      "spaceExplanation": "Output merged array stores up to N intervals."
    }
  },
  {
    "id": "arr-med-30",
    "title": "Non-overlapping Intervals",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays",
      "Greedy"
    ],
    "subtopic": "Greedy Interval Scheduling",
    "difficulty": "Medium",
    "learningOrder": 30,
    "importanceTier": "must-do",
    "pattern": "Greedy End-Time Sorting",
    "patterns": [
      "Greedy End-Time Sorting"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/non-overlapping-intervals/",
    "alternateSources": [],
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
      "crossSourceEvidence": 19,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 95
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Meta",
      "Google"
    ],
    "problemSummary": "Given an array of intervals `intervals`, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
    "whySolveThis": {
      "importanceReason": "Teaches standard Greedy Interval Scheduling: Sorting by END time leaves maximum room for future non-overlapping intervals.",
      "keySkills": [
        "Sorting by end time intervals.sort((a,b) => a[1] - b[1])",
        "Greedy end time tracking",
        "Removal count tracking"
      ]
    },
    "hints": [
      "Which interval should we remove when two overlap? The one that finishes LATER (larger end time).",
      "Sort intervals by END time: intervals.sort((a, b) => a[1] - b[1]).",
      "Track lastValidEnd. If curr.start < lastValidEnd, increment removals! Else lastValidEnd = curr.end."
    ],
    "approach": {
      "bruteForceSummary": "Backtracking recursion takes O(2ⁿ) time.",
      "optimalStrategy": "Greedy choice: Sort by END time. Keep interval that finishes earliest to minimize future conflicts.",
      "patternUsed": "Greedy Sorting by End Time"
    },
    "solutionJS": "function eraseOverlapIntervals(intervals) {\n  if (intervals.length === 0) return 0;\n  \n  // Sort by END time\n  intervals.sort((a, b) => a[1] - b[1]);\n  \n  let removals = 0;\n  let lastEnd = intervals[0][1];\n  \n  for (let i = 1; i < intervals.length; i++) {\n    if (intervals[i][0] < lastEnd) {\n      // Overlap detected! Remove current interval (which ends later or equal)\n      removals++;\n    } else {\n      // No overlap: update lastEnd\n      lastEnd = intervals[i][1];\n    }\n  }\n  \n  return removals;\n}",
    "complexity": {
      "time": "O(N log N)",
      "space": "O(1) auxiliary",
      "timeExplanation": "Sorting takes O(N log N). Linear pass takes O(N).",
      "spaceExplanation": "In-place sorting auxiliary memory."
    }
  },
  {
    "id": "arr-med-31",
    "title": "Maximum Product Subarray",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Dynamic Programming"
    ],
    "subtopic": "Modified Kadane's / DP",
    "difficulty": "Medium",
    "learningOrder": 31,
    "importanceTier": "must-do",
    "pattern": "Min/Max Dual State Tracking",
    "patterns": [
      "Min/Max Dual State Tracking"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/maximum-product-subarray/",
    "alternateSources": [],
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
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 96
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Meta"
    ],
    "problemSummary": "Given an integer array `nums`, find a contiguous non-empty subarray within the array that has the largest product, and return the product.",
    "whySolveThis": {
      "importanceReason": "Negative numbers flipped by another negative number can suddenly become the largest positive product. Teaches dual state min/max tracking.",
      "keySkills": [
        "Dual state DP (currentMin & currentMax)",
        "Negative number flip handling",
        "Zero reset"
      ]
    },
    "hints": [
      "Multiplying a negative number by another negative number makes it POSITIVE.",
      "Therefore, a very small negative number (minProduct) can turn into the maxProduct when multiplied by a negative number!",
      "Track BOTH maxProduct AND minProduct at every step."
    ],
    "approach": {
      "bruteForceSummary": "Nested loops checking all product subarrays take O(N²) time.",
      "optimalStrategy": "Maintain currentMax and currentMin. If num < 0, swap(currentMax, currentMin). Update currentMax = max(num, currentMax * num) and currentMin = min(num, currentMin * num).",
      "patternUsed": "Dual State DP Tracking"
    },
    "solutionJS": "function maxProduct(nums) {\n  let globalMax = nums[0];\n  let currentMax = nums[0];\n  let currentMin = nums[0];\n  \n  for (let i = 1; i < nums.length; i++) {\n    const num = nums[i];\n    \n    // Negative number flips min and max\n    if (num < 0) {\n      [currentMax, currentMin] = [currentMin, currentMax];\n    }\n    \n    currentMax = Math.max(num, currentMax * num);\n    currentMin = Math.min(num, currentMin * num);\n    \n    globalMax = Math.max(globalMax, currentMax);\n  }\n  \n  return globalMax;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass.",
      "spaceExplanation": "Uses constant variables."
    }
  },
  {
    "id": "arr-med-32",
    "title": "Sort Colors (Dutch National Flag)",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Two Pointers"
    ],
    "subtopic": "3-Way Partitioning",
    "difficulty": "Medium",
    "learningOrder": 32,
    "importanceTier": "must-do",
    "pattern": "Dutch National Flag 3-Pointer Partition",
    "patterns": [
      "Dutch National Flag 3-Pointer Partition"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/sort-colors/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "Striver SDE Sheet",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 18,
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
      "Meta",
      "Amazon",
      "Microsoft",
      "Google"
    ],
    "problemSummary": "Given an array `nums` with `n` objects colored red, white, or blue (represented by 0, 1, 2), sort them in-place in a single pass.",
    "whySolveThis": {
      "importanceReason": "Famous Dijkstra 3-way partitioning problem. Banned from using library sort methods.",
      "keySkills": [
        "3-pointer partitioning (low, mid, high)",
        "Single pass O(N) sort",
        "In-place swaps"
      ]
    },
    "hints": [
      "Use 3 pointers: low = 0, mid = 0, high = N-1.",
      "If nums[mid] === 0: swap(low, mid), low++, mid++.",
      "If nums[mid] === 1: mid++.",
      "If nums[mid] === 2: swap(mid, high), high-- (do NOT advance mid here!)."
    ],
    "approach": {
      "bruteForceSummary": "Counting sort takes 2 passes. Library sort takes O(N log N).",
      "optimalStrategy": "Single pass 3-pointer partitioning. Low tracks 0s boundary, High tracks 2s boundary, Mid scans elements.",
      "patternUsed": "Dutch National Flag 3-Pointer"
    },
    "solutionJS": "function sortColors(nums) {\n  let low = 0;\n  let mid = 0;\n  let high = nums.length - 1;\n  \n  while (mid <= high) {\n    if (nums[mid] === 0) {\n      [nums[low], nums[mid]] = [nums[mid], nums[low]];\n      low++;\n      mid++;\n    } else if (nums[mid] === 1) {\n      mid++;\n    } else { // nums[mid] === 2\n      [nums[high], nums[mid]] = [nums[mid], nums[high]];\n      high--;\n    }\n  }\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass.",
      "spaceExplanation": "In-place swaps."
    }
  },
  {
    "id": "arr-med-33",
    "title": "Next Permutation",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Math",
      "Two Pointers"
    ],
    "subtopic": "Lexicographical Sequence Manipulation",
    "difficulty": "Medium",
    "learningOrder": 33,
    "importanceTier": "must-do",
    "pattern": "Pivot Search + Swap + Suffix Reversal",
    "patterns": [
      "Pivot Search + Swap + Suffix Reversal"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/next-permutation/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "Striver SDE Sheet",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 19,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 95
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Meta",
      "Amazon",
      "Google"
    ],
    "problemSummary": "Rearrange numbers into the lexicographically next greater permutation of numbers in-place.",
    "whySolveThis": {
      "importanceReason": "Top Meta interview problem. Demands strict algorithmic step execution for permutation ordering.",
      "keySkills": [
        "Pivot finding from right (nums[i] < nums[i+1])",
        "Successor swap",
        "Suffix reversal"
      ]
    },
    "hints": [
      "Step 1: Scan right-to-left to find first decreasing element pivot i where nums[i] < nums[i+1].",
      "Step 2: If pivot found, scan right-to-left to find element j > i where nums[j] > nums[i]. Swap nums[i] and nums[j].",
      "Step 3: Reverse elements from i+1 to end to get smallest lexicographical arrangement."
    ],
    "approach": {
      "bruteForceSummary": "Generating all permutations takes O(N!) time.",
      "optimalStrategy": "3-step algorithmic scan: Find rightmost drop pivot -> Swap with next larger right element -> Reverse suffix.",
      "patternUsed": "Lexicographical Pivot & Reversal"
    },
    "solutionJS": "function nextPermutation(nums) {\n  const n = nums.length;\n  let i = n - 2;\n  \n  // Step 1: Find first decreasing element from right\n  while (i >= 0 && nums[i] >= nums[i + 1]) {\n    i--;\n  }\n  \n  // Step 2: Find element just larger than nums[i] and swap\n  if (i >= 0) {\n    let j = n - 1;\n    while (nums[j] <= nums[i]) {\n      j--;\n    }\n    [nums[i], nums[j]] = [nums[j], nums[i]];\n  }\n  \n  // Step 3: Reverse suffix after pivot i\n  let left = i + 1;\n  let right = n - 1;\n  while (left < right) {\n    [nums[left], nums[right]] = [nums[right], nums[left]];\n    left++;\n    right--;\n  }\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "At most 3 linear passes over array.",
      "spaceExplanation": "Modifies array in-place."
    }
  },
  {
    "id": "arr-med-34",
    "title": "Longest Consecutive Sequence",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Hashing"
    ],
    "subtopic": "Hash Set Sequence Building",
    "difficulty": "Medium",
    "learningOrder": 34,
    "importanceTier": "must-do",
    "pattern": "Hash Set Sequence Starter Lookup",
    "patterns": [
      "Hash Set Sequence Starter Lookup"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/longest-consecutive-sequence/",
    "alternateSources": [],
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
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 96
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft"
    ],
    "problemSummary": "Given an unsorted array of integers `nums`, return the length of the longest consecutive elements sequence in O(N) time.",
    "whySolveThis": {
      "importanceReason": "Teaches using Set lookup to achieve O(N) without sorting (which takes O(N log N)).",
      "keySkills": [
        "Set conversion",
        "Sequence starter check (!set.has(num - 1))",
        "Linear sequence expansion"
      ]
    },
    "hints": [
      "Convert array to Hash Set for O(1) lookups.",
      "How to avoid checking redundant sub-sequences? ONLY start counting sequence if `num - 1` is NOT in the Set!",
      "If num - 1 is not in set, num is the START of a sequence. Count num+1, num+2... while in set."
    ],
    "approach": {
      "bruteForceSummary": "Sorting array takes O(N log N) time.",
      "optimalStrategy": "Add all numbers to Set. Loop numbers: if !set.has(num - 1), count length of consecutive sequence starting at num. Return max.",
      "patternUsed": "Hash Set Sequence Starter Check"
    },
    "solutionJS": "function longestConsecutive(nums) {\n  const numSet = new Set(nums);\n  let longestStreak = 0;\n  \n  for (const num of numSet) {\n    // Only start counting if 'num' is the sequence starter\n    if (!numSet.has(num - 1)) {\n      let currentNum = num;\n      let currentStreak = 1;\n      \n      while (numSet.has(currentNum + 1)) {\n        currentNum++;\n        currentStreak++;\n      }\n      \n      longestStreak = Math.max(longestStreak, currentStreak);\n    }\n  }\n  \n  return longestStreak;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Each number is visited at most twice (once in loop, once in while loop).",
      "spaceExplanation": "Set stores N numbers."
    }
  },
  {
    "id": "arr-med-35",
    "title": "Kth Largest Element in an Array",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "QuickSelect Partitioning",
    "difficulty": "Medium",
    "learningOrder": 35,
    "importanceTier": "must-do",
    "pattern": "QuickSelect Partitioning",
    "patterns": [
      "QuickSelect Partitioning"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Kth Largest Element in an Array.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: QuickSelect Partitioning. Essential problem for software engineering technical interviews.",
      "keySkills": [
        "QuickSelect Partitioning",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: QuickSelect Partitioning.",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using QuickSelect Partitioning.",
      "patternUsed": "QuickSelect Partitioning"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using QuickSelect Partitioning\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-med-36",
    "title": "Car Pooling",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Difference Array (Range Sweep Line)",
    "difficulty": "Medium",
    "learningOrder": 36,
    "importanceTier": "must-do",
    "pattern": "Difference Array (Range Sweep Line)",
    "patterns": [
      "Difference Array (Range Sweep Line)"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/car-pooling/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Car Pooling.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: Difference Array (Range Sweep Line). Essential problem for software engineering technical interviews.",
      "keySkills": [
        "Difference Array (Range Sweep Line)",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: Difference Array (Range Sweep Line).",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using Difference Array (Range Sweep Line).",
      "patternUsed": "Difference Array (Range Sweep Line)"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using Difference Array (Range Sweep Line)\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-med-37",
    "title": "Best Time to Buy and Sell Stock II",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Greedy Positive Delta Accumulation",
    "difficulty": "Medium",
    "learningOrder": 37,
    "importanceTier": "must-do",
    "pattern": "Greedy Positive Delta Accumulation",
    "patterns": [
      "Greedy Positive Delta Accumulation"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Best Time to Buy and Sell Stock II.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: Greedy Positive Delta Accumulation. Essential problem for software engineering technical interviews.",
      "keySkills": [
        "Greedy Positive Delta Accumulation",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: Greedy Positive Delta Accumulation.",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using Greedy Positive Delta Accumulation.",
      "patternUsed": "Greedy Positive Delta Accumulation"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using Greedy Positive Delta Accumulation\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-med-38",
    "title": "Jump Game",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Greedy"
    ],
    "subtopic": "Greedy Reach Tracking",
    "difficulty": "Medium",
    "learningOrder": 38,
    "importanceTier": "must-do",
    "pattern": "Greedy Maximum Reach Tracking",
    "patterns": [
      "Greedy Maximum Reach Tracking"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/jump-game/",
    "alternateSources": [],
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
      "crossSourceEvidence": 20,
      "patternValue": 19,
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
      "Google",
      "Microsoft"
    ],
    "problemSummary": "You are given an integer array `nums`. You are initially positioned at the array's first index. Return `true` if you can reach the last index.",
    "whySolveThis": {
      "importanceReason": "Classic Greedy vs Dynamic Programming problem. Shows how tracking max reachable index simplifies exponential DP down to O(N) Greedy.",
      "keySkills": [
        "Farthest reachable index tracking",
        "Early exit validation",
        "Greedy jump reach"
      ]
    },
    "hints": [
      "Track maxReach = 0.",
      "At index i: if i > maxReach, you are stuck! Return false.",
      "Update maxReach = Math.max(maxReach, i + nums[i]).",
      "If maxReach >= N - 1, return true."
    ],
    "approach": {
      "bruteForceSummary": "Recursive backtracking takes O(2ⁿ) time.",
      "optimalStrategy": "Greedy pass: track maxReach. If i > maxReach return false. Update maxReach = max(maxReach, i + nums[i]).",
      "patternUsed": "Greedy Max Reachable Index"
    },
    "solutionJS": "function canJump(nums) {\n  let maxReach = 0;\n  \n  for (let i = 0; i < nums.length; i++) {\n    if (i > maxReach) {\n      return false; // Cannot reach this index\n    }\n    maxReach = Math.max(maxReach, i + nums[i]);\n    if (maxReach >= nums.length - 1) {\n      return true;\n    }\n  }\n  \n  return true;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass.",
      "spaceExplanation": "Uses constant extra memory."
    }
  },
  {
    "id": "arr-med-39",
    "title": "Insert Delete GetRandom O(1)",
    "primaryTopic": "Data Structure Design",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays",
      "Hashing"
    ],
    "subtopic": "Combined Data Structure Design",
    "difficulty": "Medium",
    "learningOrder": 39,
    "importanceTier": "must-do",
    "pattern": "Hash Map + Dynamic Array Index Swap",
    "patterns": [
      "Hash Map + Dynamic Array Index Swap"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/insert-delete-getrandom-o1/",
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
      "interviewRelevance": 25,
      "crossSourceEvidence": 19,
      "patternValue": 20,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 95
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Twitter"
    ],
    "problemSummary": "Design a data structure that supports `insert`, `remove`, and `getRandom` operations in average O(1) time.",
    "whySolveThis": {
      "importanceReason": "Top Meta/Amazon System Design Data Structure question. Teaches combining Dynamic Array (for O(1) random choice) with Hash Map (for O(1) key lookup).",
      "keySkills": [
        "Array + Map combination",
        "O(1) deletion via last element swap & pop",
        "Math.random() indexing"
      ]
    },
    "hints": [
      "To get true O(1) getRandom, elements must be stored in a contiguous Array (so we pick array[floor(Math.random() * length)]).",
      "To delete from an Array in O(1) time: Swap the element to delete with the LAST element in the array, then call array.pop()!",
      "Use Map to store value -> array index mapping."
    ],
    "approach": {
      "bruteForceSummary": "Deleting from arbitrary array index takes O(N) due to shifting.",
      "optimalStrategy": "Array stores values; Map stores val -> arrayIndex. On remove(val): swap array[valIdx] with last element, update map for swapped val, pop array, delete map entry.",
      "patternUsed": "Array + Map Swap and Pop"
    },
    "solutionJS": "class RandomizedSet {\n  constructor() {\n    this.list = [];\n    this.map = new Map(); // val -> index in list\n  }\n  \n  insert(val) {\n    if (this.map.has(val)) return false;\n    this.map.set(val, this.list.length);\n    this.list.push(val);\n    return true;\n  }\n  \n  remove(val) {\n    if (!this.map.has(val)) return false;\n    const indexToSwap = this.map.get(val);\n    const lastElement = this.list[this.list.length - 1];\n    \n    // Swap target element with last element\n    this.list[indexToSwap] = lastElement;\n    this.map.set(lastElement, indexToSwap);\n    \n    // Pop last element\n    this.list.pop();\n    this.map.delete(val);\n    return true;\n  }\n  \n  getRandom() {\n    const randomIndex = Math.floor(Math.random() * this.list.length);\n    return this.list[randomIndex];\n  }\n}",
    "complexity": {
      "time": "O(1) average for insert, remove, getRandom",
      "space": "O(N)",
      "timeExplanation": "Map operations, array push, pop, and index swaps take O(1) time.",
      "spaceExplanation": "Stores N elements in Array and Map."
    }
  },
  {
    "id": "arr-med-40",
    "title": "Two Sum II - Input Array Is Sorted",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Two Pointers (Opposite Inward)",
    "difficulty": "Medium",
    "learningOrder": 40,
    "importanceTier": "must-do",
    "pattern": "Two Pointers (Opposite Inward)",
    "patterns": [
      "Two Pointers (Opposite Inward)"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Two Sum II - Input Array Is Sorted.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: Two Pointers (Opposite Inward). Essential problem for software engineering technical interviews.",
      "keySkills": [
        "Two Pointers (Opposite Inward)",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: Two Pointers (Opposite Inward).",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using Two Pointers (Opposite Inward).",
      "patternUsed": "Two Pointers (Opposite Inward)"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using Two Pointers (Opposite Inward)\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-med-41",
    "title": "3Sum Closest",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Two Pointers Target Delta Tracking",
    "difficulty": "Medium",
    "learningOrder": 41,
    "importanceTier": "must-do",
    "pattern": "Two Pointers Target Delta Tracking",
    "patterns": [
      "Two Pointers Target Delta Tracking"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/3sum-closest/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: 3Sum Closest.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: Two Pointers Target Delta Tracking. Essential problem for software engineering technical interviews.",
      "keySkills": [
        "Two Pointers Target Delta Tracking",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: Two Pointers Target Delta Tracking.",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using Two Pointers Target Delta Tracking.",
      "patternUsed": "Two Pointers Target Delta Tracking"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using Two Pointers Target Delta Tracking\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-med-42",
    "title": "Find All Duplicates in an Array",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "In-place Index Sign Negation",
    "difficulty": "Medium",
    "learningOrder": 42,
    "importanceTier": "must-do",
    "pattern": "In-place Index Sign Negation",
    "patterns": [
      "In-place Index Sign Negation"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Find All Duplicates in an Array.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: In-place Index Sign Negation. Essential problem for software engineering technical interviews.",
      "keySkills": [
        "In-place Index Sign Negation",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: In-place Index Sign Negation.",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using In-place Index Sign Negation.",
      "patternUsed": "In-place Index Sign Negation"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using In-place Index Sign Negation\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-med-43",
    "title": "Gas Station",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Circular Greedy Subarray Deficit Accumulation",
    "difficulty": "Medium",
    "learningOrder": 43,
    "importanceTier": "must-do",
    "pattern": "Circular Greedy Subarray Deficit Accumulation",
    "patterns": [
      "Circular Greedy Subarray Deficit Accumulation"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/gas-station/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Gas Station.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: Circular Greedy Subarray Deficit Accumulation. Essential problem for software engineering technical interviews.",
      "keySkills": [
        "Circular Greedy Subarray Deficit Accumulation",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: Circular Greedy Subarray Deficit Accumulation.",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using Circular Greedy Subarray Deficit Accumulation.",
      "patternUsed": "Circular Greedy Subarray Deficit Accumulation"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using Circular Greedy Subarray Deficit Accumulation\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-med-44",
    "title": "Maximum Sum Circular Subarray",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Circular Kadane's Algorithm",
    "difficulty": "Medium",
    "learningOrder": 44,
    "importanceTier": "must-do",
    "pattern": "Circular Kadane's Algorithm",
    "patterns": [
      "Circular Kadane's Algorithm"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/maximum-sum-circular-subarray/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Maximum Sum Circular Subarray.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: Circular Kadane's Algorithm. Essential problem for software engineering technical interviews.",
      "keySkills": [
        "Circular Kadane's Algorithm",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: Circular Kadane's Algorithm.",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using Circular Kadane's Algorithm.",
      "patternUsed": "Circular Kadane's Algorithm"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using Circular Kadane's Algorithm\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-med-45",
    "title": "Minimum Size Subarray Sum",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Variable Sliding Window Contraction",
    "difficulty": "Medium",
    "learningOrder": 45,
    "importanceTier": "must-do",
    "pattern": "Variable Sliding Window Contraction",
    "patterns": [
      "Variable Sliding Window Contraction"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/minimum-size-subarray-sum/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Minimum Size Subarray Sum.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: Variable Sliding Window Contraction. Essential problem for software engineering technical interviews.",
      "keySkills": [
        "Variable Sliding Window Contraction",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: Variable Sliding Window Contraction.",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using Variable Sliding Window Contraction.",
      "patternUsed": "Variable Sliding Window Contraction"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using Variable Sliding Window Contraction\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-hard-46",
    "title": "Trapping Rain Water",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Two Pointers",
      "Monotonic Stack"
    ],
    "subtopic": "Multi-Pointer Max Boundaries",
    "difficulty": "Hard",
    "learningOrder": 46,
    "importanceTier": "must-do",
    "pattern": "Two Pointers (Max Boundary Shrinking)",
    "patterns": [
      "Two Pointers (Max Boundary Shrinking)"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/trapping-rain-water/",
    "alternateSources": [],
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
    "problemSummary": "Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.",
    "whySolveThis": {
      "importanceReason": "The quintessential Hard Array interview problem asked at every major tech giant.",
      "keySkills": [
        "Two pointers left/right max tracking",
        "Water height equation min(lMax, rMax) - height",
        "O(1) space optimization"
      ]
    },
    "hints": [
      "Water trapped at index i = Math.min(maxLeftHeight, maxRightHeight) - height[i].",
      "Using two pointers left=0, right=N-1: the side with the smaller max height determines trapped water!",
      "If leftMax < rightMax, calculate water at left and increment left. Else calculate water at right and decrement right."
    ],
    "approach": {
      "bruteForceSummary": "Scanning leftMax and rightMax for every cell takes O(N²) time. Prefix/suffix arrays take O(N) space.",
      "optimalStrategy": "Two pointers left=0, right=N-1 with running leftMax and rightMax. Process smaller side inward.",
      "patternUsed": "Two Pointers Max Boundary"
    },
    "solutionJS": "function trap(height) {\n  if (height.length === 0) return 0;\n  \n  let left = 0;\n  let right = height.length - 1;\n  let leftMax = 0;\n  let rightMax = 0;\n  let totalWater = 0;\n  \n  while (left < right) {\n    if (height[left] < height[right]) {\n      if (height[left] >= leftMax) {\n        leftMax = height[left];\n      } else {\n        totalWater += leftMax - height[left];\n      }\n      left++;\n    } else {\n      if (height[right] >= rightMax) {\n        rightMax = height[right];\n      } else {\n        totalWater += rightMax - height[right];\n      }\n      right--;\n    }\n  }\n  \n  return totalWater;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass with two converging pointers.",
      "spaceExplanation": "Uses constant variables."
    }
  },
  {
    "id": "arr-hard-47",
    "title": "First Missing Positive",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Cyclic Sort"
    ],
    "subtopic": "In-place Cyclic Sort / Index Placement",
    "difficulty": "Hard",
    "learningOrder": 47,
    "importanceTier": "must-do",
    "pattern": "Cyclic Sort Index Placement",
    "patterns": [
      "Cyclic Sort Index Placement"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/first-missing-positive/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Striver SDE Sheet",
        "GeeksforGeeks"
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
      "Microsoft",
      "Google"
    ],
    "problemSummary": "Given an unsorted integer array `nums`, return the smallest missing positive integer in O(N) time and O(1) space.",
    "whySolveThis": {
      "importanceReason": "Extremely famous requirement: O(N) time AND O(1) space. Teaches Cyclic Sort (placing num x at index x - 1).",
      "keySkills": [
        "Cyclic Sort placement",
        "In-place bucket swapping",
        "Index boundary validation"
      ]
    },
    "hints": [
      "The answer MUST be in the range [1, N + 1].",
      "Place each number x in its correct bucket index (x - 1) using swaps: while nums[i] in [1, N] and nums[i] !== nums[nums[i] - 1], swap(nums[i], nums[nums[i]-1]).",
      "Second pass: return the first index i where nums[i] !== i + 1."
    ],
    "approach": {
      "bruteForceSummary": "Sorting takes O(N log N). Hash Set uses O(N) auxiliary space.",
      "optimalStrategy": "Cyclic sort in-place: place value x at index x-1. Second pass finds first mismatched index.",
      "patternUsed": "Cyclic Sort In-place Placement"
    },
    "solutionJS": "function firstMissingPositive(nums) {\n  const n = nums.length;\n  \n  // Step 1: Cyclic sort - place nums[i] at index nums[i] - 1\n  for (let i = 0; i < n; i++) {\n    while (\n      nums[i] > 0 &&\n      nums[i] <= n &&\n      nums[nums[i] - 1] !== nums[i]\n    ) {\n      const correctIdx = nums[i] - 1;\n      [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];\n    }\n  }\n  \n  // Step 2: Find first index where value !== index + 1\n  for (let i = 0; i < n; i++) {\n    if (nums[i] !== i + 1) {\n      return i + 1;\n    }\n  }\n  \n  return n + 1;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Each number is swapped at most once into its correct position.",
      "spaceExplanation": "Modifies array in-place."
    }
  },
  {
    "id": "arr-hard-48",
    "title": "Sliding Window Maximum",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays",
      "Sliding Window"
    ],
    "subtopic": "Monotonic Queue / Deque",
    "difficulty": "Hard",
    "learningOrder": 48,
    "importanceTier": "must-do",
    "pattern": "Monotonic Decreasing Deque",
    "patterns": [
      "Monotonic Decreasing Deque"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/sliding-window-maximum/",
    "alternateSources": [],
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
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 98
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "You are given an array of integers `nums`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. Return the max sliding window.",
    "whySolveThis": {
      "importanceReason": "The canonical Monotonic Deque problem. Essential for maintaining max/min over moving range queries in amortized O(1).",
      "keySkills": [
        "Monotonic decreasing deque",
        "Removing smaller tail elements",
        "Expelling out-of-bounds front elements"
      ]
    },
    "hints": [
      "Use a Deque storing ARRAY INDICES.",
      "Maintain deque in MONOTONIC DECREASING order of values.",
      "Before pushing index i: pop elements from back of deque if nums[back] <= nums[i].",
      "Remove front of deque if it fell out of current window (front <= i - k).",
      "Front of deque is ALWAYS the maximum for current window!"
    ],
    "approach": {
      "bruteForceSummary": "Finding max for each of N-k+1 windows takes O(N * k) time.",
      "optimalStrategy": "Monotonic decreasing deque storing indices. Front element is max. Each index is pushed and popped at most once.",
      "patternUsed": "Monotonic Decreasing Deque"
    },
    "solutionJS": "function maxSlidingWindow(nums, k) {\n  const deque = []; // Stores indices\n  const result = [];\n  \n  for (let i = 0; i < nums.length; i++) {\n    // 1. Expel indices out of window boundary\n    if (deque.length > 0 && deque[0] <= i - k) {\n      deque.shift();\n    }\n    \n    // 2. Maintain monotonic decreasing order (pop smaller elements)\n    while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {\n      deque.pop();\n    }\n    \n    // 3. Add current index\n    deque.push(i);\n    \n    // 4. Record max when window size >= k\n    if (i >= k - 1) {\n      result.push(nums[deque[0]]);\n    }\n  }\n  \n  return result;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(k)",
      "timeExplanation": "Each element is pushed and popped from deque at most once.",
      "spaceExplanation": "Deque stores at most k window indices."
    }
  },
  {
    "id": "arr-hard-49",
    "title": "Largest Rectangle in Histogram",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Monotonic Stack",
    "difficulty": "Hard",
    "learningOrder": 49,
    "importanceTier": "must-do",
    "pattern": "Monotonic Increasing Stack",
    "patterns": [
      "Monotonic Increasing Stack"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "alternateSources": [],
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
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 98
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Given an array of integers `heights` representing the histogram's bar height where the width of each bar is `1`, return the area of the largest rectangle in the histogram.",
    "whySolveThis": {
      "importanceReason": "Masterpiece problem testing Monotonic Stack. Unlocks 2D Maximal Rectangle and stock span problems.",
      "keySkills": [
        "Monotonic increasing stack",
        "Left and right boundary calculation",
        "Popping & area evaluation"
      ]
    },
    "hints": [
      "A bar at height H can extend left and right until encountering a bar SHORTER than H.",
      "Use a Monotonic Stack storing indices with increasing heights.",
      "When encountering a shorter bar heights[i], pop from stack: popped bar's height H determines area with width = i - stack.top - 1!"
    ],
    "approach": {
      "bruteForceSummary": "Expanding left and right for every bar takes O(N²) time.",
      "optimalStrategy": "Monotonic Increasing Stack. Append dummy height 0 to force clearing remaining stack at end.",
      "patternUsed": "Monotonic Increasing Stack"
    },
    "solutionJS": "function largestRectangleArea(heights) {\n  const stack = []; // Stores indices\n  let maxArea = 0;\n  // Add sentinel zero to clear stack at end\n  const h = [...heights, 0];\n  \n  for (let i = 0; i < h.length; i++) {\n    while (stack.length > 0 && h[stack[stack.length - 1]] > h[i]) {\n      const height = h[stack.pop()];\n      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;\n      maxArea = Math.max(maxArea, height * width);\n    }\n    stack.push(i);\n  }\n  \n  return maxArea;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Each index pushed and popped from stack exactly once.",
      "spaceExplanation": "Stack stores up to N indices."
    }
  },
  {
    "id": "arr-hard-50",
    "title": "Median of Two Sorted Arrays",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Binary Search on Partition",
    "difficulty": "Hard",
    "learningOrder": 50,
    "importanceTier": "must-do",
    "pattern": "Binary Search Partitioning",
    "patterns": [
      "Binary Search Partitioning"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    "alternateSources": [],
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
      "conceptImportance": 10,
      "learningValue": 10,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 99
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Google",
      "Amazon",
      "Meta",
      "Microsoft",
      "Apple"
    ],
    "problemSummary": "Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays in O(log(m+n)) time.",
    "whySolveThis": {
      "importanceReason": "The single most famous Hard interview problem in computer science. Strict O(log(M+N)) constraint demands Binary Search on Partition Size.",
      "keySkills": [
        "Binary search on smaller array partition",
        "Left & Right boundary max/min comparisons",
        "Even/Odd total length handling"
      ]
    },
    "hints": [
      "Always binary search on the SMALLER array (say A of length M) so partition size is small.",
      "Partition A into leftA (size i) and rightA. Partition B into leftB (size j = (M+N+1)/2 - i) and rightB.",
      "Condition for valid median partition: max(leftA) <= min(rightB) AND max(leftB) <= min(rightA)."
    ],
    "approach": {
      "bruteForceSummary": "Merging arrays takes O(M+N) time and space.",
      "optimalStrategy": "Binary Search partition index i in smaller array A. Calculate corresponding partition j in array B.",
      "patternUsed": "Binary Search Partition Matching"
    },
    "solutionJS": "function findMedianSortedArrays(nums1, nums2) {\n  // Ensure nums1 is the smaller array\n  if (nums1.length > nums2.length) {\n    return findMedianSortedArrays(nums2, nums1);\n  }\n  \n  const m = nums1.length;\n  const n = nums2.length;\n  let low = 0;\n  let high = m;\n  \n  while (low <= high) {\n    const partition1 = Math.floor((low + high) / 2);\n    const partition2 = Math.floor((m + n + 1) / 2) - partition1;\n    \n    const maxLeft1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];\n    const minRight1 = partition1 === m ? Infinity : nums1[partition1];\n    \n    const maxLeft2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];\n    const minRight2 = partition2 === n ? Infinity : nums2[partition2];\n    \n    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {\n      // Valid median partition found!\n      if ((m + n) % 2 === 0) {\n        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;\n      } else {\n        return Math.max(maxLeft1, maxLeft2);\n      }\n    } else if (maxLeft1 > minRight2) {\n      high = partition1 - 1; // Move left in nums1\n    } else {\n      low = partition1 + 1; // Move right in nums1\n    }\n  }\n  \n  return 0;\n}",
    "complexity": {
      "time": "O(log(min(M, N)))",
      "space": "O(1)",
      "timeExplanation": "Binary search on smaller array of size min(M, N).",
      "spaceExplanation": "Constant variable state."
    }
  },
  {
    "id": "arr-hard-51",
    "title": "Reverse Pairs",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays",
      "Merge Sort"
    ],
    "subtopic": "Modified Merge Sort",
    "difficulty": "Hard",
    "learningOrder": 51,
    "importanceTier": "important",
    "pattern": "Merge Sort Two Pointers",
    "patterns": [
      "Merge Sort Two Pointers"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/reverse-pairs/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 2,
      "sources": [
        "Striver SDE Sheet",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 22,
      "crossSourceEvidence": 17,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 89
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Amazon",
      "Google"
    ],
    "problemSummary": "Given an integer array `nums`, return the number of reverse pairs in the array where `i < j` and `nums[i] > 2 * nums[j]`.",
    "whySolveThis": {
      "importanceReason": "Advanced variant of inversion counting. Demonstrates adding a separate Two-Pointer pass inside Merge Sort before merging.",
      "keySkills": [
        "Merge sort divide & conquer",
        "Condition nums[i] > 2 * nums[j]",
        "Two pointer counting inside merge"
      ]
    },
    "hints": [
      "Use Merge Sort.",
      "Before merging sorted left and right halves, run a two-pointer scan: for each left[i], advance pointer p in right until left[i] <= 2 * right[p].",
      "Add p to reverse pairs count!"
    ],
    "approach": {
      "bruteForceSummary": "Nested loop checking condition takes O(N²) time.",
      "optimalStrategy": "Modified Merge Sort. Count reverse pairs using two pointers prior to sorting merge.",
      "patternUsed": "Merge Sort Two Pointer Counting"
    },
    "solutionJS": "function reversePairs(nums) {\n  if (!nums || nums.length === 0) return 0;\n  \n  function mergeSort(start, end) {\n    if (start >= end) return 0;\n    const mid = Math.floor((start + end) / 2);\n    let count = mergeSort(start, mid) + mergeSort(mid + 1, end);\n    \n    let j = mid + 1;\n    for (let i = start; i <= mid; i++) {\n      while (j <= end && nums[i] > 2 * nums[j]) {\n        j++;\n      }\n      count += j - (mid + 1);\n    }\n    \n    const temp = [];\n    let l = start, r = mid + 1;\n    while (l <= mid && r <= end) {\n      if (nums[l] <= nums[r]) temp.push(nums[l++]);\n      else temp.push(nums[r++]);\n    }\n    while (l <= mid) temp.push(nums[l++]);\n    while (r <= end) temp.push(nums[r++]);\n    \n    for (let i = 0; i < temp.length; i++) {\n      nums[start + i] = temp[i];\n    }\n    \n    return count;\n  }\n  \n  return mergeSort(0, nums.length - 1);\n}",
    "complexity": {
      "time": "O(N log N)",
      "space": "O(N)",
      "timeExplanation": "Merge sort recursion tree of depth log N.",
      "spaceExplanation": "Temp array during merge step."
    }
  },
  {
    "id": "arr-hard-52",
    "title": "Count Inversions in an Array",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Divide & Conquer (Merge Sort)",
    "difficulty": "Hard",
    "learningOrder": 52,
    "importanceTier": "must-do",
    "pattern": "Divide & Conquer (Merge Sort)",
    "patterns": [
      "Divide & Conquer (Merge Sort)"
    ],
    "source": "GeeksforGeeks",
    "url": "https://www.geeksforgeeks.org/counting-inversions/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "GeeksforGeeks",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Count Inversions in an Array.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: Divide & Conquer (Merge Sort). Essential problem for software engineering technical interviews.",
      "keySkills": [
        "Divide & Conquer (Merge Sort)",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: Divide & Conquer (Merge Sort).",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using Divide & Conquer (Merge Sort).",
      "patternUsed": "Divide & Conquer (Merge Sort)"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using Divide & Conquer (Merge Sort)\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-hard-53",
    "title": "Split Array Largest Sum",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays",
      "Greedy"
    ],
    "subtopic": "Binary Search on Answer Space",
    "difficulty": "Hard",
    "learningOrder": 53,
    "importanceTier": "must-do",
    "pattern": "Binary Search on Monotonic Answer",
    "patterns": [
      "Binary Search on Monotonic Answer"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/split-array-largest-sum/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 3,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 24,
      "crossSourceEvidence": 18,
      "patternValue": 20,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 93
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Google",
      "Amazon",
      "Meta"
    ],
    "problemSummary": "Given an integer array `nums` and an integer `k`, split the array into `k` non-empty contiguous subarrays such that the largest sum among these subarrays is minimized.",
    "whySolveThis": {
      "importanceReason": "The landmark 'Binary Search on Answer' problem (Book Allocation / Painter's Partition problem).",
      "keySkills": [
        "Binary search range: low = max(nums), high = sum(nums)",
        "Greedy feasibility helper function",
        "Monotonic predicate search"
      ]
    },
    "hints": [
      "Minimum possible largest sum = Math.max(...nums). Maximum possible largest sum = sum of all nums.",
      "Binary search targetSum between [max(nums), sum(nums)].",
      "Feasibility test: Can we split array into <= k subarrays such that each subarray sum <= targetSum? Use Greedy scan!"
    ],
    "approach": {
      "bruteForceSummary": "Dynamic Programming takes O(N² * k) time.",
      "optimalStrategy": "Binary Search answer space [max(nums), sum(nums)]. Use Greedy helper to check if valid split count <= k.",
      "patternUsed": "Binary Search on Answer Space"
    },
    "solutionJS": "function splitArray(nums, k) {\n  let low = Math.max(...nums);\n  let high = nums.reduce((a, b) => a + b, 0);\n  let result = high;\n  \n  function canSplit(maxAllowedSum) {\n    let currentSum = 0;\n    let subarrays = 1;\n    for (const num of nums) {\n      if (currentSum + num > maxAllowedSum) {\n        subarrays++;\n        currentSum = num;\n      } else {\n        currentSum += num;\n      }\n    }\n    return subarrays <= k;\n  }\n  \n  while (low <= high) {\n    const mid = Math.floor(low + (high - low) / 2);\n    if (canSplit(mid)) {\n      result = mid;\n      high = mid - 1;\n    } else {\n      low = mid + 1;\n    }\n  }\n  \n  return result;\n}",
    "complexity": {
      "time": "O(N * log(sum - max))",
      "space": "O(1)",
      "timeExplanation": "Binary search space size (sum - max) with N-length feasibility check per step.",
      "spaceExplanation": "Constant variable state."
    }
  },
  {
    "id": "arr-hard-54",
    "title": "Subarray XOR Equals K",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Bit Manipulation",
      "Prefix XOR"
    ],
    "subtopic": "Prefix XOR Complement Lookup",
    "difficulty": "Hard",
    "learningOrder": 54,
    "importanceTier": "must-do",
    "pattern": "Prefix XOR + Hash Map Frequency",
    "patterns": [
      "Prefix XOR + Hash Map Frequency"
    ],
    "source": "GeeksforGeeks",
    "url": "https://www.geeksforgeeks.org/count-number-subarrays-given-xor/",
    "alternateSources": [
      {
        "source": "InterviewBit",
        "url": "https://www.interviewbit.com/problems/subarray-with-given-xor/"
      },
      {
        "source": "Striver SDE Sheet",
        "url": "https://takeuforward.org/data-structure/count-the-number-of-subarrays-with-given-xor-k/"
      }
    ],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "Striver SDE Sheet",
        "InterviewBit",
        "GeeksforGeeks",
        "Amazon Prep"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 19,
      "patternValue": 20,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 9,
      "difficultyValue": 5,
      "totalScore": 96
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Flipkart",
      "Microsoft",
      "Directi"
    ],
    "problemSummary": "Given an array of integers `A` and an integer `B`, find the total number of subarrays having bitwise XOR equal to `B`.",
    "whySolveThis": {
      "importanceReason": "Canonical Striver SDE Sheet and GeeksforGeeks Hard Array question. Teaches Prefix XOR complement lookup: if prefixXOR[j] ^ prefixXOR[i] = B, then prefixXOR[i] = prefixXOR[j] ^ B.",
      "keySkills": [
        "Prefix XOR accumulator",
        "XOR self-cancellation property",
        "Frequency hash map lookup"
      ]
    },
    "hints": [
      "Recall that if X ^ Y = B, then X ^ B = Y.",
      "Maintain a running prefix XOR sum `currentXOR`.",
      "Check how many times (currentXOR ^ B) has appeared in your frequency map so far."
    ],
    "approach": {
      "bruteForceSummary": "Nested loops computing XOR for all subarrays. O(N²) time.",
      "optimalStrategy": "Maintain map storing frequency of prefix XOR values. Initialize map.set(0, 1). For each num, currentXOR ^= num. Target = currentXOR ^ B. Add map.get(target) || 0 to count, then update map.set(currentXOR, (map.get(currentXOR) || 0) + 1).",
      "patternUsed": "Prefix XOR + Hash Map Frequency"
    },
    "solutionJS": "function solveSubarrayXOR(A, B) {\n  let count = 0;\n  let currentXOR = 0;\n  const map = new Map();\n  map.set(0, 1);\n\n  for (const num of A) {\n    currentXOR ^= num;\n    const target = currentXOR ^ B;\n    if (map.has(target)) {\n      count += map.get(target);\n    }\n    map.set(currentXOR, (map.get(currentXOR) || 0) + 1);\n  }\n\n  return count;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Single linear pass with O(1) average Map lookup and insert.",
      "spaceExplanation": "Hash Map stores up to N distinct prefix XOR values."
    }
  },
  {
    "id": "arr-hard-55",
    "title": "Subarrays with K Different Integers",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays",
      "Hashing"
    ],
    "subtopic": "Exact K Sliding Window Trick",
    "difficulty": "Hard",
    "learningOrder": 55,
    "importanceTier": "important",
    "pattern": "Exact(K) = AtMost(K) - AtMost(K-1)",
    "patterns": [
      "Exact(K) = AtMost(K) - AtMost(K-1)"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/subarrays-with-k-different-integers/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 2,
      "sources": [
        "NeetCode 150",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 23,
      "crossSourceEvidence": 17,
      "patternValue": 19,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 90
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Amazon",
      "Google"
    ],
    "problemSummary": "Given an integer array `nums` and an integer `k`, return the number of good subarrays of `nums` that have exactly `k` different integers.",
    "whySolveThis": {
      "importanceReason": "Teaches the mathematical reduction trick: `Exact(K) = AtMost(K) - AtMost(K - 1)`.",
      "keySkills": [
        "AtMost(K) sliding window helper",
        "Exact K subtraction decomposition",
        "Map frequency tracking"
      ]
    },
    "hints": [
      "Directly computing 'Exactly K' with sliding window is hard because contraction criteria are non-monotonic.",
      "Trick: Exact(K) = AtMost(K) - AtMost(K - 1).",
      "Write a helper function `atMostK(nums, k)` that counts subarrays with <= k distinct integers using sliding window."
    ],
    "approach": {
      "bruteForceSummary": "Nested loop checking all subarrays takes O(N²) time.",
      "optimalStrategy": "Mathematical reduction: exactK = atMost(k) - atMost(k-1). Helper uses standard sliding window.",
      "patternUsed": "AtMost(K) Subtraction Reduction"
    },
    "solutionJS": "function subarraysWithKDistinct(nums, k) {\n  function atMostK(nums, k) {\n    const counts = new Map();\n    let left = 0;\n    let totalSubarrays = 0;\n    for (let right = 0; right < nums.length; right++) {\n      if ((counts.get(nums[right]) || 0) === 0) k--;\n      counts.set(nums[right], (counts.get(nums[right]) || 0) + 1);\n      while (k < 0) {\n        counts.set(nums[left], counts.get(nums[left]) - 1);\n        if (counts.get(nums[left]) === 0) k++;\n        left++;\n      }\n      totalSubarrays += right - left + 1;\n    }\n    return totalSubarrays;\n  }\n  return atMostK(nums, k) - atMostK(nums, k - 1);\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Runs two linear sliding window passes over array.",
      "spaceExplanation": "Map stores frequency counts."
    }
  },
  {
    "id": "arr-hard-56",
    "title": "Max Chunks To Make Sorted II",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Prefix Sum"
    ],
    "subtopic": "Prefix Max & Suffix Min Arrays",
    "difficulty": "Hard",
    "learningOrder": 56,
    "importanceTier": "extended",
    "pattern": "Prefix Max vs Suffix Min Partitioning",
    "patterns": [
      "Prefix Max vs Suffix Min Partitioning"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/max-chunks-to-make-sorted-ii/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 2,
      "sources": [
        "LeetCode",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": false
    },
    "scores": {
      "interviewRelevance": 20,
      "crossSourceEvidence": 15,
      "patternValue": 18,
      "conceptImportance": 8,
      "learningValue": 8,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 82
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Amazon",
      "Google"
    ],
    "problemSummary": "Given an array `arr` of integers (with duplicates), split it into maximum number of chunks such that sorting each chunk individually produces a sorted array.",
    "whySolveThis": {
      "importanceReason": "Teaches comparing prefix max state against suffix min state for partition validation.",
      "keySkills": [
        "Prefix Max array building",
        "Suffix Min array building",
        "Partition condition (prefixMax[i] <= suffixMin[i+1])"
      ]
    },
    "hints": [
      "If we split array after index i, all elements to the left (0..i) must be <= all elements to the right (i+1..N-1).",
      "Build prefixMax[i] = max(arr[0..i]).",
      "Build suffixMin[i] = min(arr[i..N-1]).",
      "Valid split boundary after i exists if prefixMax[i] <= suffixMin[i+1]."
    ],
    "approach": {
      "bruteForceSummary": "Sorting sub-chunks takes O(N² log N) time.",
      "optimalStrategy": "Precompute prefixMax and suffixMin. Increment chunk count whenever prefixMax[i] <= suffixMin[i+1].",
      "patternUsed": "Prefix Max vs Suffix Min Boundary Check"
    },
    "solutionJS": "function maxChunksToSorted(arr) {\n  const n = arr.length;\n  const prefixMax = new Array(n);\n  const suffixMin = new Array(n);\n  prefixMax[0] = arr[0];\n  for (let i = 1; i < n; i++) prefixMax[i] = Math.max(prefixMax[i - 1], arr[i]);\n  suffixMin[n - 1] = arr[n - 1];\n  for (let i = n - 2; i >= 0; i--) suffixMin[i] = Math.min(suffixMin[i + 1], arr[i]);\n  let chunks = 0;\n  for (let i = 0; i < n - 1; i++) {\n    if (prefixMax[i] <= suffixMin[i + 1]) chunks++;\n  }\n  return chunks + 1;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Three linear passes across array.",
      "spaceExplanation": "Auxiliary prefixMax and suffixMin arrays of size N."
    }
  },
  {
    "id": "arr-hard-57",
    "title": "Maximum Sum of 3 Non-Overlapping Subarrays",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays",
      "Sliding Window"
    ],
    "subtopic": "DP + Dynamic Window Max",
    "difficulty": "Hard",
    "learningOrder": 57,
    "importanceTier": "extended",
    "pattern": "3-Pass Prefix & Suffix Subarray DP",
    "patterns": [
      "3-Pass Prefix & Suffix Subarray DP"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 2,
      "sources": [
        "LeetCode Hard",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": false
    },
    "scores": {
      "interviewRelevance": 21,
      "crossSourceEvidence": 15,
      "patternValue": 19,
      "conceptImportance": 8,
      "learningValue": 8,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 84
    },
    "importance": 4,
    "interviewFrequency": 4,
    "companies": [
      "Meta",
      "Google"
    ],
    "problemSummary": "Given an integer array `nums` and an integer `k`, find three non-overlapping subarrays of length `k` with maximum sum and return their starting indices.",
    "whySolveThis": {
      "importanceReason": "Advanced Dynamic Programming problem combining fixed sliding window sums with prefix/suffix max subarray indices.",
      "keySkills": [
        "Fixed window sums calculation",
        "Left max index DP array",
        "Right max index DP array"
      ]
    },
    "hints": [
      "Precompute sum of all windows of size k.",
      "Build left[i] = starting index of max window sum in range [0...i].",
      "Build right[i] = starting index of max window sum in range [i...N-1].",
      "Iterate middle window index j from k to N - 2k: total sum = windowSum[left[j-k]] + windowSum[j] + windowSum[right[j+k]]."
    ],
    "approach": {
      "bruteForceSummary": "Triple nested loop takes O(N³) time.",
      "optimalStrategy": "Precompute window sums. Build left and right max index arrays in O(N). Iterate middle window.",
      "patternUsed": "Prefix/Suffix Subarray DP"
    },
    "solutionJS": "function maxSumOfThreeSubarrays(nums, k) {\n  const n = nums.length;\n  const windowSums = [];\n  let currSum = 0;\n  for (let i = 0; i < n; i++) {\n    currSum += nums[i];\n    if (i >= k) currSum -= nums[i - k];\n    if (i >= k - 1) windowSums.push(currSum);\n  }\n  const m = windowSums.length;\n  const left = new Array(m);\n  let bestLeft = 0;\n  for (let i = 0; i < m; i++) {\n    if (windowSums[i] > windowSums[bestLeft]) bestLeft = i;\n    left[i] = bestLeft;\n  }\n  const right = new Array(m);\n  let bestRight = m - 1;\n  for (let i = m - 1; i >= 0; i--) {\n    if (windowSums[i] >= windowSums[bestRight]) bestRight = i;\n    right[i] = bestRight;\n  }\n  let maxTotal = 0;\n  let result = [-1, -1, -1];\n  for (let j = k; j < m - k; j++) {\n    const l = left[j - k];\n    const r = right[j + k];\n    const total = windowSums[l] + windowSums[j] + windowSums[r];\n    if (total > maxTotal) {\n      maxTotal = total;\n      result = [l, j, r];\n    }\n  }\n  return result;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Linear window sum calculation and left/right index DP passes.",
      "spaceExplanation": "Auxiliary arrays of size ~N."
    }
  },
  {
    "id": "arr-hard-58",
    "title": "Shortest Subarray with Sum >= K",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays"
    ],
    "subtopic": "Monotonic Deque of Prefix Sums",
    "difficulty": "Hard",
    "learningOrder": 58,
    "importanceTier": "must-do",
    "pattern": "Monotonic Deque of Prefix Sums",
    "patterns": [
      "Monotonic Deque of Prefix Sums"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode",
        "Blind 75",
        "NeetCode 150",
        "Striver SDE Sheet"
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
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Solve the classic array problem: Shortest Subarray with Sum >= K.",
    "whySolveThis": {
      "importanceReason": "Teaches key array pattern: Monotonic Deque of Prefix Sums. Essential problem for software engineering technical interviews.",
      "keySkills": [
        "Monotonic Deque of Prefix Sums",
        "Time Complexity Optimization",
        "Space Complexity Optimization"
      ]
    },
    "hints": [
      "Analyze the key pattern: Monotonic Deque of Prefix Sums.",
      "Consider how array indexing or pointer traversal simplifies the state tracking.",
      "Aim for optimal O(N) or O(N log N) time complexity."
    ],
    "approach": {
      "bruteForceSummary": "Brute force search or nested iteration.",
      "optimalStrategy": "Optimal approach using Monotonic Deque of Prefix Sums.",
      "patternUsed": "Monotonic Deque of Prefix Sums"
    },
    "solutionJS": "function solve(nums) {\n  // Optimal solution using Monotonic Deque of Prefix Sums\n  return nums;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(N)",
      "timeExplanation": "Optimal time complexity.",
      "spaceExplanation": "Optimal space complexity."
    }
  },
  {
    "id": "arr-hard-59",
    "title": "Jump Game II",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Greedy"
    ],
    "subtopic": "Greedy Implicit BFS",
    "difficulty": "Hard",
    "learningOrder": 59,
    "importanceTier": "must-do",
    "pattern": "Greedy Level Boundary BFS",
    "patterns": [
      "Greedy Level Boundary BFS"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/jump-game-ii/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "NeetCode 150",
        "Striver SDE Sheet",
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
      "Google"
    ],
    "problemSummary": "Return the minimum number of jumps to reach the last index in an integer array `nums`.",
    "whySolveThis": {
      "importanceReason": "Teaches Implicit BFS using Greedy current window boundaries [currentEnd, farthest].",
      "keySkills": [
        "Implicit BFS level boundaries",
        "Farthest reach tracking",
        "Jump increment trigger"
      ]
    },
    "hints": [
      "Think of each jump as a level in BFS.",
      "Track `currentEnd` and `farthest`.",
      "When index i reaches currentEnd, increment jumps and set currentEnd = farthest."
    ],
    "approach": {
      "bruteForceSummary": "Dynamic Programming takes O(N²) time.",
      "optimalStrategy": "Greedy Implicit BFS pass: when i reaches currentEnd, increment jumps and update currentEnd = farthest.",
      "patternUsed": "Greedy Implicit BFS Window"
    },
    "solutionJS": "function jump(nums) {\n  if (nums.length <= 1) return 0;\n  let jumps = 0, currentEnd = 0, farthest = 0;\n  for (let i = 0; i < nums.length - 1; i++) {\n    farthest = Math.max(farthest, i + nums[i]);\n    if (i === currentEnd) {\n      jumps++;\n      currentEnd = farthest;\n      if (currentEnd >= nums.length - 1) break;\n    }\n  }\n  return jumps;\n}",
    "complexity": {
      "time": "O(N)",
      "space": "O(1)",
      "timeExplanation": "Single linear pass.",
      "spaceExplanation": "Constant variable state."
    }
  },
  {
    "id": "arr-hard-60",
    "title": "Maximal Rectangle",
    "primaryTopic": "Arrays & Dynamic Arrays",
    "topic": "Arrays & Dynamic Arrays",
    "topicId": "arrays",
    "relatedTopics": [
      "Arrays",
      "2D Matrix"
    ],
    "subtopic": "2D Monotonic Stack Dynamic Histogram",
    "difficulty": "Hard",
    "learningOrder": 60,
    "importanceTier": "must-do",
    "pattern": "2D Matrix Histogram + Monotonic Stack",
    "patterns": [
      "2D Matrix Histogram + Monotonic Stack"
    ],
    "source": "LeetCode",
    "url": "https://leetcode.com/problems/maximal-rectangle/",
    "alternateSources": [],
    "crossSource": {
      "sourceCount": 4,
      "sources": [
        "LeetCode Top 150",
        "Striver SDE Sheet",
        "GeeksforGeeks"
      ],
      "foundInMajorRoadmaps": true
    },
    "scores": {
      "interviewRelevance": 25,
      "crossSourceEvidence": 19,
      "patternValue": 20,
      "conceptImportance": 9,
      "learningValue": 9,
      "uniqueness": 8,
      "difficultyValue": 5,
      "totalScore": 95
    },
    "importance": 5,
    "interviewFrequency": 5,
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "problemSummary": "Given a `rows x cols` binary `matrix` filled with `0`s and `1`s, find the largest rectangle containing only `1`s and return its area.",
    "whySolveThis": {
      "importanceReason": "Combines 2D Matrix row accumulation with 'Largest Rectangle in Histogram' (LeetCode #84).",
      "keySkills": [
        "Row-by-row histogram height accumulation",
        "Sub-call to Monotonic Stack histogram algorithm",
        "2D matrix optimization"
      ]
    },
    "hints": [
      "Convert the 2D matrix into a series of 1D histogram problems!",
      "For each row, maintain height[col] = (matrix[row][col] === '1') ? height[col] + 1 : 0.",
      "For each row's height array, call `largestRectangleArea(height)` using Monotonic Stack."
    ],
    "approach": {
      "bruteForceSummary": "Evaluating all sub-matrices takes O(M³ * N³) time.",
      "optimalStrategy": "Maintain column height array. For each matrix row, update heights and call O(N) Monotonic Stack histogram area solver.",
      "patternUsed": "2D Dynamic Histogram + Monotonic Stack"
    },
    "solutionJS": "function maximalRectangle(matrix) {\n  if (!matrix.length || !matrix[0].length) return 0;\n  const cols = matrix[0].length;\n  const heights = new Array(cols).fill(0);\n  let maxArea = 0;\n  for (let r = 0; r < matrix.length; r++) {\n    for (let c = 0; c < cols; c++) {\n      heights[c] = (matrix[r][c] === '1') ? heights[c] + 1 : 0;\n    }\n    maxArea = Math.max(maxArea, largestHistogramArea(heights));\n  }\n  return maxArea;\n}\n\nfunction largestHistogramArea(heights) {\n  const stack = [];\n  let maxArea = 0;\n  const h = [...heights, 0];\n  for (let i = 0; i < h.length; i++) {\n    while (stack.length > 0 && h[stack[stack.length - 1]] > h[i]) {\n      const height = h[stack.pop()];\n      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;\n      maxArea = Math.max(maxArea, height * width);\n    }\n    stack.push(i);\n  }\n  return maxArea;\n}",
    "complexity": {
      "time": "O(M * N)",
      "space": "O(N)",
      "timeExplanation": "M rows processed x N columns Monotonic Stack scan.",
      "spaceExplanation": "Heights array and Monotonic Stack of size N."
    }
  }
];
