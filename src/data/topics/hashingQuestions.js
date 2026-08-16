export const HASHING_QUESTIONS = [
  // ==========================================
  // EASY QUESTIONS (9)
  // ==========================================
  {
    id: "hash-easy-01",
    title: "Design HashSet",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Hash Table Implementation",
    difficulty: "Easy",
    learningOrder: 1,
    importanceTier: "must-do",
    pattern: "Bucket Array & Separate Chaining",
    patterns: ["Bucket Array & Separate Chaining", "Hash Table Implementation"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/design-hashset/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/design-a-hashset-without-using-any-built-in-hash-table-libraries/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 22, crossSourceEvidence: 18, patternValue: 20, conceptImportance: 10, learningValue: 10, uniqueness: 8, difficultyValue: 5, totalScore: 93 },
    importance: 5,
    interviewFrequency: 4,
    companies: ["Amazon", "Microsoft", "Apple", "Google"],
    problemSummary: "Design a HashSet without using any built-in hash table libraries. Implement add(key), remove(key), and contains(key) methods.",
    whySolveThis: {
      importanceReason: "Understanding the underlying mechanics of Hash Tables (buckets, hash code calculation, and collision chaining) is the ultimate foundation for Hashing.",
      keySkills: ["Hash function design", "Separate chaining with linked lists or arrays", "Modulo index wrapping"]
    },
    hints: [
      "Use a prime number (e.g. 769) for the number of buckets to minimize hash collisions.",
      "Each bucket can store a simple dynamic array or linked list to handle collisions.",
      "Calculate key % numBuckets to find the appropriate bucket index."
    ],
    approach: {
      bruteForceSummary: "Use a huge static array of size 1,000,001. O(1) time but wastes massive memory.",
      optimalStrategy: "Bucket Array with Separate Chaining. Maintain 769 buckets. Map keys using key % 769 and manage collisions with a small array inside each bucket.",
      patternUsed: "Separate Chaining"
    },
    solutionJS: `class MyHashSet {
  constructor() {
    this.numBuckets = 769; // Prime number for uniform distribution
    this.buckets = Array.from({ length: this.numBuckets }, () => []);
  }

  _hash(key) {
    return key % this.numBuckets;
  }

  add(key) {
    const bucketIndex = this._hash(key);
    const bucket = this.buckets[bucketIndex];
    if (!bucket.includes(key)) {
      bucket.push(key);
    }
  }

  remove(key) {
    const bucketIndex = this._hash(key);
    const bucket = this.buckets[bucketIndex];
    const index = bucket.indexOf(key);
    if (index !== -1) {
      bucket.splice(index, 1);
    }
  }

  contains(key) {
    const bucketIndex = this._hash(key);
    return this.buckets[bucketIndex].includes(key);
  }
}`,
    complexity: {
      time: "O(1) Average, O(N) Worst-case if all keys collide into one bucket.",
      space: "O(K + N) where K is number of buckets (769) and N is number of inserted elements.",
      explanation: "Modulo hashing distributes keys uniformly across 769 buckets. Lookups inspect a small bucket array."
    },
    edgeCases: ["Inserting same key multiple times", "Removing non-existent keys", "Key 0"],
    commonMistakes: "Using a giant boolean array of size 10^6 which wastes space and fails if key bounds expand.",
    interviewTakeaway: "Separate chaining handles collisions by converting single entries into bucket collections."
  },
  {
    id: "hash-easy-02",
    title: "Design HashMap",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Hash Table Implementation",
    difficulty: "Easy",
    learningOrder: 2,
    importanceTier: "must-do",
    pattern: "Bucket Array & Key-Value Pairs",
    patterns: ["Bucket Array & Key-Value Pairs", "Hash Table Implementation"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/design-hashmap/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/design-a-hashmap-without-using-any-built-in-hash-table-libraries/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 22, crossSourceEvidence: 18, patternValue: 20, conceptImportance: 10, learningValue: 10, uniqueness: 8, difficultyValue: 5, totalScore: 93 },
    importance: 5,
    interviewFrequency: 4,
    companies: ["Amazon", "Microsoft", "Oracle", "Goldman Sachs"],
    problemSummary: "Design a HashMap without using any built-in hash table libraries. Implement put(key, value), get(key), and remove(key).",
    whySolveThis: {
      importanceReason: "Teaches key-value tuple storage and updating existing keys versus inserting new keys within separate chaining buckets.",
      keySkills: ["Key-value tuple management", "Bucket searching and value updating", "Collision handling"]
    },
    hints: [
      "Store [key, value] pairs inside bucket arrays.",
      "When putting a key, search the bucket first. If key exists, update value; otherwise append [key, value].",
      "Return -1 for non-existent keys in get(key)."
    ],
    approach: {
      bruteForceSummary: "Static array of size 1,000,001 initialized to -1.",
      optimalStrategy: "Bucket Array with Separate Chaining storing [key, value] tuples. Map key to bucket using modulo math.",
      patternUsed: "Key-Value Chaining"
    },
    solutionJS: `class MyHashMap {
  constructor() {
    this.numBuckets = 1009; // Prime number
    this.buckets = Array.from({ length: this.numBuckets }, () => []);
  }

  _hash(key) {
    return key % this.numBuckets;
  }

  put(key, value) {
    const bucket = this.buckets[this._hash(key)];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // Update existing key
        return;
      }
    }
    bucket.push([key, value]); // Insert new key-value pair
  }

  get(key) {
    const bucket = this.buckets[this._hash(key)];
    for (const [k, v] of bucket) {
      if (k === key) return v;
    }
    return -1;
  }

  remove(key) {
    const bucket = this.buckets[this._hash(key)];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return;
      }
    }
  }
}`,
    complexity: {
      time: "O(1) Average per operation, O(N) Worst-case if all keys collide.",
      space: "O(K + N) auxiliary space for K buckets and N stored key-value pairs.",
      explanation: "Separate chaining maintains short bucket lists for O(1) average tuple lookups."
    },
    edgeCases: ["Overwriting existing key with new value", "Getting non-existent key returns -1", "Removing non-existent key"],
    commonMistakes: "Pushing duplicate keys to the bucket instead of updating existing key value.",
    interviewTakeaway: "Key updates require searching the destination bucket before appending a new pair."
  },
  {
    id: "hash-easy-03",
    title: "Intersection of Two Arrays",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "HashSet Membership",
    difficulty: "Easy",
    learningOrder: 3,
    importanceTier: "must-do",
    pattern: "HashSet Membership",
    patterns: ["HashSet Membership", "Deduplication"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/intersection-of-two-arrays/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-union-and-intersection-of-two-unsorted-arrays/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Blind 75", "Striver A2Z", "GeeksforGeeks"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 24, crossSourceEvidence: 19, patternValue: 18, conceptImportance: 9, learningValue: 9, uniqueness: 7, difficultyValue: 5, totalScore: 91 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Meta", "Amazon", "Google", "Microsoft"],
    problemSummary: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and may be returned in any order.",
    whySolveThis: {
      importanceReason: "The canonical demonstration of using a Set to convert O(N * M) nested array searches into O(N + M) constant-time membership lookups.",
      keySkills: ["Set construction", "Set membership check via set.has()", "Result deduplication"]
    },
    hints: [
      "Convert nums1 into a Set to allow O(1) membership lookups.",
      "Iterate through nums2 and check if each element exists in your Set.",
      "Collect matching elements into a result Set to avoid duplicate entries."
    ],
    approach: {
      bruteForceSummary: "Nested loops checking if nums1[i] === nums2[j] and filtering duplicates. O(N * M) time.",
      optimalStrategy: "Load nums1 into a Set. Iterate nums2, adding elements present in the Set to a result Set.",
      patternUsed: "HashSet Lookup"
    },
    solutionJS: `function intersection(nums1, nums2) {
  const set1 = new Set(nums1);
  const resultSet = new Set();

  for (const num of nums2) {
    if (set1.has(num)) {
      resultSet.add(num);
    }
  }

  return Array.from(resultSet);
}`,
    complexity: {
      time: "O(N + M) average time, where N = nums1.length and M = nums2.length.",
      space: "O(N) auxiliary space to store elements of nums1 in Set.",
      explanation: "Building set1 takes O(N). Iterating nums2 takes O(M) with O(1) average set lookups."
    },
    edgeCases: ["No overlapping elements", "Entirely identical arrays", "Arrays of different lengths"],
    commonMistakes: "Returning duplicate intersection elements because result was collected in an array instead of a Set.",
    interviewTakeaway: "Use Set for O(1) existence checks and automatic duplicate elimination."
  },
  {
    id: "hash-easy-04",
    title: "Intersection of Two Arrays II",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "HashMap Frequency Counting",
    difficulty: "Easy",
    learningOrder: 4,
    importanceTier: "must-do",
    pattern: "HashMap Frequency Counting",
    patterns: ["HashMap Frequency Counting", "Frequency Decrement"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/intersection-of-two-arrays-with-duplicate-elements/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Striver A2Z", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 24, crossSourceEvidence: 19, patternValue: 19, conceptImportance: 9, learningValue: 9, uniqueness: 8, difficultyValue: 5, totalScore: 93 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Amazon", "Meta", "Google", "Bloomberg"],
    problemSummary: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays.",
    whySolveThis: {
      importanceReason: "Teaches frequency map construction and frequency decrementing when duplicate matches must be preserved.",
      keySkills: ["Frequency counting with Map", "Frequency decrementing", "Multi-set intersection logic"]
    },
    hints: [
      "Instead of a Set, use a Map to count frequencies of each element in nums1.",
      "When iterating nums2, check if current element has a count > 0 in the Map.",
      "If it does, add it to result and decrement its count in the Map."
    ],
    approach: {
      bruteForceSummary: "Sort both arrays and use two pointers, or mark visited elements. O(N log N + M log M) time.",
      optimalStrategy: "Build frequency Map for nums1. Iterate nums2, appending matched elements to result and decrementing Map count.",
      patternUsed: "Frequency Decrement Map"
    },
    solutionJS: `function intersect(nums1, nums2) {
  const counts = new Map();
  const result = [];

  for (const num of nums1) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  for (const num of nums2) {
    const count = counts.get(num) || 0;
    if (count > 0) {
      result.push(num);
      counts.set(num, count - 1);
    }
  }

  return result;
}`,
    complexity: {
      time: "O(N + M) average time, where N = nums1.length and M = nums2.length.",
      space: "O(min(N, M)) auxiliary space for storing frequency counts.",
      explanation: "Map building takes O(N), traversing nums2 takes O(M) with O(1) average map operations."
    },
    edgeCases: ["One array is subset of another", "No overlapping numbers", "Arrays with high duplicate frequencies"],
    commonMistakes: "Forgetting to decrement frequency count in Map, leading to over-counting matches.",
    interviewTakeaway: "Frequency maps with count decrementing handle duplicate element matching in linear time."
  },
  {
    id: "hash-easy-05",
    title: "Find the Difference of Two Arrays",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "HashSet Relative Complement",
    difficulty: "Easy",
    learningOrder: 5,
    importanceTier: "must-do",
    pattern: "HashSet Relative Complement",
    patterns: ["HashSet Relative Complement", "Set Difference"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/find-the-difference-of-two-arrays/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-elements-present-first-array-not-second/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "GeeksforGeeks", "InterviewBit", "Code360"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 22, crossSourceEvidence: 17, patternValue: 18, conceptImportance: 8, learningValue: 8, uniqueness: 8, difficultyValue: 5, totalScore: 86 },
    importance: 4,
    interviewFrequency: 3,
    companies: ["Amazon", "TCS", "Infosys", "Cognizant"],
    problemSummary: "Given two integer arrays nums1 and nums2, return a list answer of size 2 where answer[0] is a list of all distinct integers in nums1 which are not present in nums2, and answer[1] is a list of all distinct integers in nums2 which are not present in nums1.",
    whySolveThis: {
      importanceReason: "Completes the fundamental Set algebra sequence by demonstrating Set Relative Complement (A \\ B and B \\ A) using constant-time set lookups.",
      keySkills: ["Set difference calculation", "Set construction from arrays", "Dual relative complement"]
    },
    hints: [
      "Convert nums1 and nums2 into two Sets: `set1` and `set2`.",
      "Iterate `set1` and collect elements not in `set2` into `diff1`.",
      "Iterate `set2` and collect elements not in `set1` into `diff2`.",
      "Return `[diff1, diff2]`."
    ],
    approach: {
      bruteForceSummary: "Nested loops checking existence of each element in opposite array with duplicate removal. O(N * M) time.",
      optimalStrategy: "Create set1 from nums1 and set2 from nums2. Filter set1 for elements not in set2, and set2 for elements not in set1.",
      patternUsed: "HashSet Relative Complement"
    },
    solutionJS: `function findDifference(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const diff1 = [];
  const diff2 = [];

  for (const num of set1) {
    if (!set2.has(num)) {
      diff1.push(num);
    }
  }

  for (const num of set2) {
    if (!set1.has(num)) {
      diff2.push(num);
    }
  }

  return [diff1, diff2];
}`,
    complexity: {
      time: "O(N + M) average time complexity where N = nums1.length and M = nums2.length.",
      space: "O(N + M) auxiliary space to store elements in set1 and set2.",
      explanation: "Building Sets takes O(N + M) and iterating set values with set.has() takes O(1) average time per element."
    },
    edgeCases: ["Arrays are completely disjoint", "Arrays are identical", "One array is empty"],
    commonMistakes: "Pushing duplicates to result by iterating original arrays instead of unique Sets.",
    interviewTakeaway: "Iterating Set keys directly guarantees unique relative complement extraction in linear time."
  },
  {
    id: "hash-easy-06",
    title: "Happy Number",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "HashSet Cycle Detection",
    difficulty: "Easy",
    learningOrder: 6,
    importanceTier: "must-do",
    pattern: "HashSet Cycle Detection",
    patterns: ["HashSet Cycle Detection", "Floyd's Cycle Detection"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/happy-number/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/happy-number/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 23, crossSourceEvidence: 18, patternValue: 18, conceptImportance: 8, learningValue: 8, uniqueness: 8, difficultyValue: 5, totalScore: 88 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Amazon", "Uber", "Google", "Airbnb"],
    problemSummary: "Write an algorithm to determine if a number n is happy. A happy number is defined by replacing the number by the sum of the squares of its digits, repeating until n = 1, or looping endlessly in a cycle.",
    whySolveThis: {
      importanceReason: "Demonstrates using a HashSet to detect infinite loops and cycles in numerical sequence generation.",
      keySkills: ["Digit extraction math (% 10, Math.floor)", "HashSet cycle detection", "Sequence transformation"]
    },
    hints: [
      "Calculate sum of squared digits repeatedly.",
      "If n reaches 1, the number is happy (return true).",
      "If a sum repeats itself, you are trapped in an infinite cycle (return false)."
    ],
    approach: {
      bruteForceSummary: "Looping up to fixed arbitrary limit (e.g. 1000 iterations). Unreliable and risks infinite loops.",
      optimalStrategy: "Maintain a HashSet of seen sum values. If current sum exists in set, a cycle is detected. Otherwise add to set and continue.",
      patternUsed: "HashSet Cycle Detection"
    },
    solutionJS: `function isHappy(n) {
  const seen = new Set();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNext(n);
  }

  return n === 1;
}

function getNext(num) {
  let totalSum = 0;
  while (num > 0) {
    const digit = num % 10;
    totalSum += digit * digit;
    num = Math.floor(num / 10);
  }
  return totalSum;
}`,
    complexity: {
      time: "O(log N) average time.",
      space: "O(log N) auxiliary space for storing visited numbers in HashSet.",
      explanation: "Sum of squared digits reduces number bounds rapidly. Numbers either reach 1 or cycle in a small set."
    },
    edgeCases: ["n = 1 (already happy)", "n = 7 (happy after iterations)", "Numbers trapping in known 4-cycle"],
    commonMistakes: "Not converting number to string/digits properly or creating infinite while loop without cycle detection.",
    interviewTakeaway: "Use HashSet to detect cycles when sequences transform deterministically."
  },
  {
    id: "hash-easy-07",
    title: "Contains Duplicate II",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Last-Seen Index Map",
    difficulty: "Easy",
    learningOrder: 7,
    importanceTier: "must-do",
    pattern: "Last-Seen Index Map",
    patterns: ["Last-Seen Index Map", "Sliding Window + Hash Table"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/contains-duplicate-ii/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-given-array-contains-duplicate-elements-within-k-distance/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 23, crossSourceEvidence: 18, patternValue: 19, conceptImportance: 8, learningValue: 8, uniqueness: 8, difficultyValue: 5, totalScore: 89 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Amazon", "Google", "Palantir", "Adobe"],
    problemSummary: "Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.",
    whySolveThis: {
      importanceReason: "Teaches Last-Seen Index tracking (`map.set(value, index)`), combining Hash Map lookups with sliding distance bounds.",
      keySkills: ["Index mapping with Map", "Distance constraint check", "Map index updating"]
    },
    hints: [
      "Use a Map to store element -> lastSeenIndex.",
      "When inspecting nums[i], check if it already exists in Map.",
      "If it exists and (current_i - stored_index) <= k, return true. Otherwise update map with current_i."
    ],
    approach: {
      bruteForceSummary: "Nested loops checking all pairs (i, j) where j - i <= k. O(N * K) time.",
      optimalStrategy: "Single pass Hash Map. Store last seen index of each number. If distance <= k, return true.",
      patternUsed: "Last-Seen Index Mapping"
    },
    solutionJS: `function containsNearbyDuplicate(nums, k) {
  const lastSeen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (lastSeen.has(num) && i - lastSeen.get(num) <= k) {
      return true;
    }
    lastSeen.set(num, i);
  }

  return false;
}`,
    complexity: {
      time: "O(N) average time complexity for single pass over nums.",
      space: "O(N) auxiliary space to store elements in Map.",
      explanation: "Checking map.has() and updating map.set() takes O(1) average time per element."
    },
    edgeCases: ["k = 0 (always false)", "Array with no duplicates", "Duplicate elements separated by > k"],
    commonMistakes: "Not updating the last seen index when an existing element is encountered at distance > k.",
    interviewTakeaway: "Storing indices in a Hash Map allows verifying positional constraints in O(1) time."
  },
  {
    id: "hash-easy-08",
    title: "Unique Number of Occurrences",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Frequency Map + Set Validation",
    difficulty: "Easy",
    learningOrder: 8,
    importanceTier: "must-do",
    pattern: "Frequency Map + Set Validation",
    patterns: ["Frequency Map + Set Validation", "Frequency Counting"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/unique-number-of-occurrences/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-if-frequency-of-each-element-in-array-is-unique/" }
    ],
    crossSource: {
      sourceCount: 3,
      sources: ["LeetCode Top 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 20, crossSourceEvidence: 16, patternValue: 18, conceptImportance: 7, learningValue: 8, uniqueness: 7, difficultyValue: 5, totalScore: 81 },
    importance: 3,
    interviewFrequency: 3,
    companies: ["Google", "Amazon", "Apple"],
    problemSummary: "Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.",
    whySolveThis: {
      importanceReason: "Combines a Frequency Map (counting occurrences) with a Set (validating occurrence uniqueness) in a clean 2-step pattern.",
      keySkills: ["Building Map from array", "Extracting map.values()", "Set size comparison"]
    },
    hints: [
      "First pass: build frequency Map for arr.",
      "Second step: collect all frequency values from the Map.",
      "Check if number of total values equals number of unique values in a Set."
    ],
    approach: {
      bruteForceSummary: "Sort array, count frequencies, sort frequencies, check adjacent duplicates. O(N log N) time.",
      optimalStrategy: "Count frequencies using Map. Insert counts into Set. Return countsMap.size === set.size.",
      patternUsed: "Map + Set Verification"
    },
    solutionJS: `function uniqueOccurrences(arr) {
  const freqMap = new Map();

  for (const num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  const freqSet = new Set(freqMap.values());
  return freqMap.size === freqSet.size;
}`,
    complexity: {
      time: "O(N) average time complexity.",
      space: "O(U) auxiliary space where U is number of unique values in arr.",
      explanation: "Single pass to populate Map O(N), second pass to populate Set O(U)."
    },
    edgeCases: ["Array with all unique elements (counts = 1, returns false if length > 1)", "Single element array"],
    commonMistakes: "Comparing unique element count to array length instead of comparing frequency count to set size.",
    interviewTakeaway: "Pairing Map (for counting) with Set (for uniqueness) solves composite verification problems cleanly."
  },
  {
    id: "hash-easy-09",
    title: "Ransom Note",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Character Frequency Matching",
    difficulty: "Easy",
    learningOrder: 9,
    importanceTier: "must-do",
    pattern: "Character Frequency Matching",
    patterns: ["Character Frequency Matching", "Frequency Decrement"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/ransom-note/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-if-a-string-can-be-formed-from-another-string/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Blind 75", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 23, crossSourceEvidence: 19, patternValue: 18, conceptImportance: 8, learningValue: 8, uniqueness: 7, difficultyValue: 5, totalScore: 88 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Amazon", "Apple", "Google", "Spotify"],
    problemSummary: "Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise. Each letter in magazine can only be used once.",
    whySolveThis: {
      importanceReason: "The canonical character resource matching problem. Teaches frequency building from source supply and decrementing against demand.",
      keySkills: ["Character frequency counting", "Frequency depletion validation", "Early return optimization"]
    },
    hints: [
      "If ransomNote is longer than magazine, it is impossible (return false).",
      "Build a character frequency Map or array (26 slots) from magazine.",
      "Iterate ransomNote and decrement available character frequencies. If count < 0, return false."
    ],
    approach: {
      bruteForceSummary: "For each char in ransomNote, search and erase it from magazine string. O(N * M) time.",
      optimalStrategy: "Populate frequency count for magazine. Decrement counts while iterating ransomNote.",
      patternUsed: "Frequency Inventory Map"
    },
    solutionJS: `function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const counts = new Map();

  for (const char of magazine) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  for (const char of ransomNote) {
    const available = counts.get(char) || 0;
    if (available === 0) {
      return false;
    }
    counts.set(char, available - 1);
  }

  return true;
}`,
    complexity: {
      time: "O(N + M) time where N = ransomNote.length and M = magazine.length.",
      space: "O(1) auxiliary space (since alphabet is limited to 26 lowercase English letters).",
      explanation: "Iterating magazine takes O(M), iterating ransomNote takes O(N) with O(1) map operations."
    },
    edgeCases: ["ransomNote longer than magazine", "Missing characters", "Exact character count match"],
    commonMistakes: "Not stopping early when character frequency reaches 0, leading to incorrect true returns.",
    interviewTakeaway: "Model resource allocation as frequency inventory maps with decrement validation."
  },

  // ==========================================
  // MEDIUM QUESTIONS (17)
  // ==========================================
  {
    id: "hash-medium-01",
    title: "4Sum II",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Tuple / Pair Sum Complement Lookup",
    difficulty: "Medium",
    learningOrder: 10,
    importanceTier: "must-do",
    pattern: "Tuple / Pair Sum Complement Lookup",
    patterns: ["Tuple / Pair Sum Complement Lookup", "Split-Search Strategy"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/4sum-ii/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/count-quadruples-four-arrays-sum-target-value/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 19, patternValue: 22, conceptImportance: 10, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 97 },
    importance: 5,
    interviewFrequency: 4,
    companies: ["Amazon", "Google", "Microsoft", "Uber"],
    problemSummary: "Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0.",
    whySolveThis: {
      importanceReason: "Masterpiece problem demonstrating the Split-Search technique: reducing O(N⁴) 4-loop brute force to O(N²) by storing pairwise sums (A + B) in a Hash Map.",
      keySkills: ["Split-Search strategy (2 + 2 grouping)", "Pairwise sum frequency hashing", "O(N⁴) to O(N²) reduction"]
    },
    hints: [
      "Instead of 4 nested loops O(N⁴), group the arrays into two pairs: (nums1, nums2) and (nums3, nums4).",
      "Compute all pairwise sums of nums1[i] + nums2[j] and store their frequencies in a Hash Map.",
      "Iterate through all pairs of (nums3[k] + nums4[l]). Check if -(nums3[k] + nums4[l]) exists in your Map."
    ],
    approach: {
      bruteForceSummary: "4 nested loops testing all quadruples. O(N⁴) time, O(1) space.",
      optimalStrategy: "Build frequency Map for (nums1[i] + nums2[j]). Iterate (nums3[k] + nums4[l]) and accumulate Map counts for complement -(c + d).",
      patternUsed: "Split Pairwise Hashing"
    },
    solutionJS: `function fourSumCount(nums1, nums2, nums3, nums4) {
  const sumMap = new Map();
  let count = 0;

  // Store frequency of all pairwise sums from nums1 and nums2
  for (const a of nums1) {
    for (const b of nums2) {
      const sum = a + b;
      sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
    }
  }

  // Find complementary pairwise sums from nums3 and nums4
  for (const c of nums3) {
    for (const d of nums4) {
      const target = -(c + d);
      if (sumMap.has(target)) {
        count += sumMap.get(target);
      }
    }
  }

  return count;
}`,
    complexity: {
      time: "O(N²) average time complexity, down from O(N⁴).",
      space: "O(N²) auxiliary space to store up to N² pairwise sums in Map.",
      explanation: "Two separate nested loops of size N * N execute sequentially instead of 4 deeply nested loops."
    },
    edgeCases: ["All zeros in arrays", "No matching quadruples", "High frequency duplicate pair sums"],
    commonMistakes: "Incrementing count by 1 instead of adding sumMap.get(target), ignoring tuple multiplicity.",
    interviewTakeaway: "Divide N-variable equations into N/2 groups and use Hash Maps for O(N^(N/2)) lookup reduction."
  },
  {
    id: "hash-medium-02",
    title: "Top K Frequent Elements",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Frequency Map + Bucket Distribution",
    difficulty: "Medium",
    learningOrder: 11,
    importanceTier: "must-do",
    pattern: "Frequency Map + Bucket Distribution",
    patterns: ["Frequency Map + Bucket Distribution", "Bucket Sort"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/top-k-frequent-elements/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/find-k-numbers-occurrences-given-array/" }
    ],
    crossSource: {
      sourceCount: 6,
      sources: ["LeetCode Top 150", "Blind 75", "NeetCode 150", "Striver SDE Sheet", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 20, patternValue: 20, conceptImportance: 10, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 98 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Amazon", "Meta", "Google", "Uber", "Microsoft"],
    problemSummary: "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    whySolveThis: {
      importanceReason: "Extremely popular interview question combining Frequency Map counting with Bucket Sort to achieve strictly O(N) time complexity.",
      keySkills: ["Frequency map building", "Bucket sort Array of Arrays", "Linear time top-K retrieval"]
    },
    hints: [
      "First pass: build frequency Map (num -> count).",
      "Instead of sorting by frequency O(N log N), create a bucket array where index represents frequency.",
      "Iterate bucket array from right to left (highest frequency) to collect top K elements in O(N) time."
    ],
    approach: {
      bruteForceSummary: "Map frequencies, sort keys by frequency descending O(N log N) time.",
      optimalStrategy: "Frequency Map + Bucket Array of length N + 1. Place numbers in bucket[freq]. Gather top K from right to left in O(N) time.",
      patternUsed: "Bucket Sort Hashing"
    },
    solutionJS: `function topKFrequent(nums, k) {
  const freqMap = new Map();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Create buckets where index = frequency
  const buckets = Array.from({ length: nums.length + 1 }, () => []);

  for (const [num, freq] of freqMap.entries()) {
    buckets[freq].push(num);
  }

  const result = [];

  // Traverse buckets from highest frequency to lowest
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    if (buckets[i].length > 0) {
      result.push(...buckets[i]);
    }
  }

  return result.slice(0, k);
}`,
    complexity: {
      time: "O(N) time complexity for frequency counting, bucket placement, and reverse traversal.",
      space: "O(N) auxiliary space for frequency Map and buckets array.",
      explanation: "Bucket array indexing eliminates the O(N log N) sorting step."
    },
    edgeCases: ["k equals number of unique elements", "All elements have identical frequency", "Negative numbers"],
    commonMistakes: "Using quicksort/heapsort resulting in O(N log N) time instead of optimal O(N) bucket sort.",
    interviewTakeaway: "Use frequency buckets indexed by count to achieve true O(N) top-K element sorting."
  },
  {
    id: "hash-medium-03",
    title: "Longest Subarray with Zero Sum",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Prefix Sum + First-Seen Index Map",
    difficulty: "Medium",
    learningOrder: 12,
    importanceTier: "must-do",
    pattern: "Prefix Sum + First-Seen Index Map",
    patterns: ["Prefix Sum + First-Seen Index Map", "Prefix Sum Hashing"],
    source: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/find-the-largest-subarray-with-0-sum/",
    alternateSources: [
      { source: "InterviewBit", url: "https://www.interviewbit.com/problems/largest-continuous-sequence-zero-sum/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["Striver SDE Sheet", "Striver A2Z", "GeeksforGeeks", "InterviewBit", "LeetCode"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 20, patternValue: 22, conceptImportance: 10, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 97 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Amazon", "Microsoft", "Meta", "MakeMyTrip"],
    problemSummary: "Given an array of integers, find the length of the longest subarray with a sum equal to 0.",
    whySolveThis: {
      importanceReason: "The foundational Prefix Sum + Hash Map problem. Unlocks the entire class of zero-sum and target-sum subarray algorithms.",
      keySkills: ["Prefix sum cumulative tracking", "First-seen index storage in Map", "Subarray length math (i - prevIndex)"]
    },
    hints: [
      "Maintain a running prefix sum.",
      "If running prefix sum becomes 0, the subarray from index 0 to current index has sum 0.",
      "If running prefix sum was seen before at index `prevIdx`, then subarray from `prevIdx + 1` to `i` has sum 0.",
      "Only store the FIRST occurrence of each prefix sum to maximize subarray length."
    ],
    approach: {
      bruteForceSummary: "Nested loops checking sum of all O(N²) subarrays. O(N²) time.",
      optimalStrategy: "Single pass prefix sum. Store `prefixSum -> firstSeenIndex` in Hash Map. If sum repeats, update maxLen with `i - map.get(sum)`.",
      patternUsed: "Prefix Sum First-Seen Indexing"
    },
    solutionJS: `function maxLen(arr) {
  const map = new Map();
  let maxSubLen = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum === 0) {
      maxSubLen = i + 1;
    } else if (map.has(currentSum)) {
      maxSubLen = Math.max(maxSubLen, i - map.get(currentSum));
    } else {
      // Store ONLY the first occurrence to maximize length
      map.set(currentSum, i);
    }
  }

  return maxSubLen;
}`,
    complexity: {
      time: "O(N) average time complexity for single pass traversal.",
      space: "O(N) auxiliary space to store unique prefix sums in Map.",
      explanation: "Looking up previous prefix sum index takes O(1) average time."
    },
    edgeCases: ["Entire array sums to 0", "No zero sum subarray exists", "Array with single 0 element"],
    commonMistakes: "Updating the index in map when a prefix sum repeats (which shrinks the subarray length instead of maximizing it).",
    interviewTakeaway: "To maximize subarray length, store ONLY the earliest index of each prefix sum in the Hash Map."
  },
  {
    id: "hash-medium-04",
    title: "Contiguous Array",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Balance State (+1 / -1) Prefix Map",
    difficulty: "Medium",
    learningOrder: 13,
    importanceTier: "must-do",
    pattern: "Balance State (+1 / -1) Prefix Map",
    patterns: ["Balance State (+1 / -1) Prefix Map", "Prefix Sum Hashing"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/contiguous-array/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/largest-subarray-with-equal-number-of-0s-and-1s/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Blind 75", "Striver A2Z", "GeeksforGeeks"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 24, crossSourceEvidence: 19, patternValue: 21, conceptImportance: 9, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 94 },
    importance: 5,
    interviewFrequency: 4,
    companies: ["Amazon", "Meta", "Google", "Microsoft"],
    problemSummary: "Given a binary array nums containing only 0s and 1s, return the maximum length of a contiguous subarray with an equal number of 0s and 1s.",
    whySolveThis: {
      importanceReason: "Teaches state transformation: converting 0s to -1s transforms the equal 0s/1s problem into finding the longest subarray with sum = 0.",
      keySkills: ["Binary transformation (0 -> -1)", "Balance variable tracking", "Prefix balance Map indexing"]
    },
    hints: [
      "Treat 1 as +1 and 0 as -1.",
      "An equal number of 0s and 1s means the cumulative balance sum will equal 0 over that subarray.",
      "Use a Map initialized with `{ 0: -1 }` storing `balance -> firstIndex`."
    ],
    approach: {
      bruteForceSummary: "Check all O(N²) subarrays, counting 0s and 1s. O(N²) time.",
      optimalStrategy: "Transform 0 to -1 on the fly. Maintain cumulative balance sum. Store first-seen index of each balance in Map.",
      patternUsed: "Prefix Balance Hashing"
    },
    solutionJS: `function findMaxLength(nums) {
  const map = new Map([[0, -1]]); // balance 0 seen before array starts at -1
  let balance = 0;
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    balance += nums[i] === 1 ? 1 : -1;

    if (map.has(balance)) {
      maxLen = Math.max(maxLen, i - map.get(balance));
    } else {
      map.set(balance, i);
    }
  }

  return maxLen;
}`,
    complexity: {
      time: "O(N) average time complexity for single pass.",
      space: "O(N) auxiliary space to store balance states in Map.",
      explanation: "Iterating array once takes O(N) time with O(1) average Map lookup and insertion."
    },
    edgeCases: ["Alternating 0s and 1s [0, 1, 0, 1]", "All 0s or all 1s", "Empty array"],
    commonMistakes: "Initializing Map without {0: -1}, missing subarrays starting at index 0.",
    interviewTakeaway: "Transform binary matching problems into zero-sum prefix problems using +1/-1 weight assignment."
  },
  {
    id: "hash-medium-05",
    title: "Subarray with Given XOR",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Prefix XOR Hashing",
    difficulty: "Medium",
    learningOrder: 14,
    importanceTier: "must-do",
    pattern: "Prefix XOR Hashing",
    patterns: ["Prefix XOR Hashing", "Bitwise Hashing"],
    source: "InterviewBit",
    url: "https://www.interviewbit.com/problems/subarray-with-given-xor/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/count-number-subarrays-given-xor/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["Striver SDE Sheet", "Striver A2Z", "InterviewBit", "GeeksforGeeks"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 19, patternValue: 22, conceptImportance: 10, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 97 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Amazon", "Meta", "Flipkart", "Directi"],
    problemSummary: "Given an array of integers A and an integer B, find the total number of subarrays having bitwise XOR of all elements equal to B.",
    whySolveThis: {
      importanceReason: "Applies Prefix Sum Hashing principles to Bitwise XOR logic: if `currXOR ^ k = B`, then `k = currXOR ^ B`.",
      keySkills: ["Prefix XOR cumulative tracking", "XOR inverse property (Y = X ^ B)", "XOR frequency Map management"]
    },
    hints: [
      "XOR has self-inverse property: A ^ B = C => A = C ^ B.",
      "Maintain running prefix XOR `currXOR`.",
      "We want a target prefix XOR `k` such that `currXOR ^ k = B` => `k = currXOR ^ B`.",
      "Store frequencies of prefix XORs in a Map initialized with `{ 0: 1 }`."
    ],
    approach: {
      bruteForceSummary: "Compute XOR of all O(N²) subarrays. O(N²) time.",
      optimalStrategy: "Maintain running XOR. Query Map for frequency of `currXOR ^ B` and increment total count.",
      patternUsed: "Prefix XOR Frequency Mapping"
    },
    solutionJS: `function solve(A, B) {
  const xorMap = new Map([[0, 1]]); // Base prefix XOR 0 has count 1
  let currXOR = 0;
  let count = 0;

  for (const num of A) {
    currXOR ^= num;
    const target = currXOR ^ B;

    if (xorMap.has(target)) {
      count += xorMap.get(target);
    }

    xorMap.set(currXOR, (xorMap.get(currXOR) || 0) + 1);
  }

  return count;
}`,
    complexity: {
      time: "O(N) average time complexity.",
      space: "O(N) auxiliary space for XOR frequency Map.",
      explanation: "Single pass iteration with O(1) average Map checks and updates."
    },
    edgeCases: ["B = 0", "Array elements identical to B", "No subarray matches XOR B"],
    commonMistakes: "Forgetting to initialize Map with {0: 1}, ignoring valid prefix subarrays starting from index 0.",
    interviewTakeaway: "Bitwise XOR prefix queries map directly to Hash Map lookups using XOR self-inversion."
  },
  {
    id: "hash-medium-06",
    title: "Continuous Subarray Sum",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Prefix Remainder / Modulo Hashing",
    difficulty: "Medium",
    learningOrder: 15,
    importanceTier: "must-do",
    pattern: "Prefix Remainder / Modulo Hashing",
    patterns: ["Prefix Remainder / Modulo Hashing", "Modulo Math Hashing"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/continuous-subarray-sum/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-if-there-is-a-subarray-with-sum-divisible-by-k/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Striver A2Z", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 24, crossSourceEvidence: 19, patternValue: 21, conceptImportance: 9, learningValue: 9, uniqueness: 9, difficultyValue: 7, totalScore: 94 },
    importance: 5,
    interviewFrequency: 4,
    companies: ["Meta", "Amazon", "Google", "Microsoft"],
    problemSummary: "Given an integer array nums and an integer k, return true if nums has a good subarray of length at least two whose sum is a multiple of k.",
    whySolveThis: {
      importanceReason: "Teaches Modulo Remainder Hashing combined with distance constraint checks ($i - \\text{prevIdx} \\ge 2$).",
      keySkills: ["Modulo arithmetic (prefixSum % k)", "First-seen index storage for remainder", "Minimum subarray length validation (>= 2)"]
    },
    hints: [
      "If (prefixSum[j] - prefixSum[i]) % k === 0, then prefixSum[j] % k === prefixSum[i] % k.",
      "Store `remainder -> firstSeenIndex` in a Map initialized with `{ 0: -1 }`.",
      "Only return true if `current_i - firstSeenIndex >= 2`."
    ],
    approach: {
      bruteForceSummary: "Nested loops checking all subarrays of length >= 2. O(N²) time.",
      optimalStrategy: "Maintain running remainder `(sum % k)`. If remainder exists in Map and index difference >= 2, return true.",
      patternUsed: "Modulo Remainder Index Hashing"
    },
    solutionJS: `function checkSubarraySum(nums, k) {
  const remainderMap = new Map([[0, -1]]); // Remainder 0 seen at index -1
  let runningSum = 0;

  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i];
    let remainder = runningSum % k;

    // Handle potential negative remainder in JS
    if (remainder < 0) remainder += k;

    if (remainderMap.has(remainder)) {
      if (i - remainderMap.get(remainder) >= 2) {
        return true;
      }
    } else {
      // Only set on first occurrence to preserve max distance
      remainderMap.set(remainder, i);
    }
  }

  return false;
}`,
    complexity: {
      time: "O(N) average time complexity.",
      space: "O(min(N, K)) auxiliary space for storing remainders in Map.",
      explanation: "Single pass over nums with O(1) average Map lookup and insertion."
    },
    edgeCases: ["Subarray length = 1 (should return false)", "k is very large", "Multiple zeros in array [0, 0]"],
    commonMistakes: "Updating remainder index when remainder repeats, violating the >= 2 distance check.",
    interviewTakeaway: "Modulo math reduces sum divisibility queries to remainder equality checks in Hash Maps."
  },
  {
    id: "hash-medium-07",
    title: "Valid Sudoku",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Multi-Dimensional Composite Key Hashing",
    difficulty: "Medium",
    learningOrder: 16,
    importanceTier: "must-do",
    pattern: "Multi-Dimensional Composite Key Hashing",
    patterns: ["Multi-Dimensional Composite Key Hashing", "Matrix Hashing"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/valid-sudoku/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/check-if-given-sudoku-board-configuration-is-valid-or-not/" }
    ],
    crossSource: {
      sourceCount: 6,
      sources: ["LeetCode Top 150", "Blind 75", "NeetCode 150", "Striver SDE Sheet", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 20, patternValue: 22, conceptImportance: 10, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 97 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Amazon", "Uber", "Apple", "Google", "Meta"],
    problemSummary: "Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to 3 rules: rows must contain 1-9 without repetition, columns must contain 1-9 without repetition, and 3x3 sub-boxes must contain 1-9 without repetition.",
    whySolveThis: {
      importanceReason: "Premier matrix constraint validation problem. Teaches composite string key formatting (`r_{row}_{val}`, `c_{col}_{val}`, `b_{box}_{val}`) to validate 3 distinct constraints in a single pass.",
      keySkills: ["Composite string key creation", "3x3 sub-box index math `Math.floor(r/3) * 3 + Math.floor(c/3)`", "Single-pass Set validation"]
    },
    hints: [
      "Iterate through all 81 cells of the 9x9 board.",
      "Skip empty cells '.'",
      "For each digit val at (r, c), generate 3 unique string keys: row key, column key, and 3x3 box key.",
      "If any of the 3 keys already exist in your Set, the Sudoku is invalid."
    ],
    approach: {
      bruteForceSummary: "Check 9 rows separately, 9 columns separately, 9 sub-boxes separately (27 total passes).",
      optimalStrategy: "Single pass with a Set. Encode row, column, and box constraints into composite string keys. Return false on any key collision.",
      patternUsed: "Composite String Key Set"
    },
    solutionJS: `function isValidSudoku(board) {
  const seen = new Set();

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const val = board[r][c];

      if (val === '.') continue;

      const rowKey = \`row_\${r}_\${val}\`;
      const colKey = \`col_\${c}_\${val}\`;
      const boxKey = \`box_\${Math.floor(r / 3)}_\${Math.floor(c / 3)}_\${val}\`;

      if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
        return false;
      }

      seen.add(rowKey);
      seen.add(colKey);
      seen.add(boxKey);
    }
  }

  return true;
}`,
    complexity: {
      time: "O(1) time since board size is fixed at 9x9 (81 iterations).",
      space: "O(1) auxiliary space (storing at most 3 * 81 = 243 string keys in Set).",
      explanation: "Fixed 81 cell grid executes in constant time and space."
    },
    edgeCases: ["Board with all '.'", "Duplicates in same 3x3 box", "Duplicates in same row/col"],
    commonMistakes: "Incorrect 3x3 box index calculation (must use Math.floor(r / 3) and Math.floor(c / 3)).",
    interviewTakeaway: "Encode multi-dimensional grid constraints into unique string keys for single-pass Set validation."
  },
  {
    id: "hash-medium-08",
    title: "Group the People Given the Group Size They Belong To",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "HashMap Grouping / Dynamic Bucket Slicing",
    difficulty: "Medium",
    learningOrder: 17,
    importanceTier: "strongly-recommended",
    pattern: "HashMap Grouping / Dynamic Bucket Slicing",
    patterns: ["HashMap Grouping / Dynamic Bucket Slicing", "Array Chunking"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/group-elements-given-group-sizes/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "GeeksforGeeks", "InterviewBit", "Code360"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 23, crossSourceEvidence: 18, patternValue: 20, conceptImportance: 8, learningValue: 9, uniqueness: 8, difficultyValue: 7, totalScore: 93 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Amazon", "Google", "Meta"],
    problemSummary: "There are n people that are split into some number of unknown groups. Each person is given a unique ID from 0 to n - 1. You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i belongs to. Return a list of groups such that each person i is in a group of size groupSizes[i].",
    whySolveThis: {
      importanceReason: "Teaches dynamic HashMap grouping: accumulating person IDs into Map buckets keyed by `groupSize` and flushing buckets when capacity reaches `groupSize`.",
      keySkills: ["HashMap key-bucket mapping", "Dynamic capacity checking", "Array flushing & chunking"]
    },
    hints: [
      "Use a Map storing `groupSize -> arrayOfPersonIDs`.",
      "Iterate through groupSizes. For person `i` with size `sz`, append `i` to `map.get(sz)`.",
      "When `map.get(sz).length === sz`, push that bucket to result and clear the bucket."
    ],
    approach: {
      bruteForceSummary: "Sort indices by group size and slice subarrays. O(N log N) time.",
      optimalStrategy: "Single pass Hash Map. Accumulate person IDs into `groupSize` arrays. Flush to result whenever array length equals `groupSize`.",
      patternUsed: "HashMap Bucket Chunking"
    },
    solutionJS: `function groupThePeople(groupSizes) {
  const groupsMap = new Map();
  const result = [];

  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i];

    if (!groupsMap.has(size)) {
      groupsMap.set(size, []);
    }

    const currentGroup = groupsMap.get(size);
    currentGroup.push(i);

    // When the group reaches its specified size, flush it to result
    if (currentGroup.length === size) {
      result.push(currentGroup);
      groupsMap.set(size, []);
    }
  }

  return result;
}`,
    complexity: {
      time: "O(N) time complexity for single pass over groupSizes.",
      space: "O(N) auxiliary space to store group buckets in Map.",
      explanation: "Iterating array once takes O(N) time with O(1) average Map pushes and flushes."
    },
    edgeCases: ["All people belong to group of size 1", "All people belong to single group of size N"],
    commonMistakes: "Not clearing the bucket array after flushing, causing duplicate people in subsequent groups.",
    interviewTakeaway: "Use HashMap buckets with capacity checks to group and chunk elements in linear time."
  },
  {
    id: "hash-medium-09",
    title: "Bulls and Cows",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Dual Multi-Inventory Frequency Comparison",
    difficulty: "Medium",
    learningOrder: 18,
    importanceTier: "strongly-recommended",
    pattern: "Dual Multi-Inventory Frequency Comparison",
    patterns: ["Dual Multi-Inventory Frequency Comparison", "Frequency Inventory"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/bulls-and-cows/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/bulls-and-cows-game/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 23, crossSourceEvidence: 18, patternValue: 19, conceptImportance: 8, learningValue: 9, uniqueness: 8, difficultyValue: 7, totalScore: 92 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Google", "Amazon", "Microsoft"],
    problemSummary: "You are playing the Bulls and Cows game with your friend. Write a function to return a hint according to the secret number and friend's guess. Bulls are digits in the correct position; Cows are digits in secret but in wrong position.",
    whySolveThis: {
      importanceReason: "Teaches dual multi-category frequency matching: separating exact position matches (Bulls) from value-only misplaced matches (Cows) using frequency counts.",
      keySkills: ["Exact index match filtering", "Digit frequency count vectoring", "Min overlap calculation Math.min()"]
    },
    hints: [
      "First pass: compare secret[i] and guess[i]. If equal, increment bulls count.",
      "If unequal, count digit frequencies for secret and guess separately in 10-element frequency arrays.",
      "Cows count is the sum of `Math.min(secretFreq[digit], guessFreq[digit])` for digits 0-9."
    ],
    approach: {
      bruteForceSummary: "Mark matched characters in strings using nested loops. O(N²) time.",
      optimalStrategy: "Single pass or 2-pass frequency counting. Match bulls on index equality; sum `min(secretCount, guessCount)` for cows.",
      patternUsed: "Dual Frequency Vector Match"
    },
    solutionJS: `function getHint(secret, guess) {
  let bulls = 0;
  let cows = 0;

  const secretCounts = new Array(10).fill(0);
  const guessCounts = new Array(10).fill(0);

  for (let i = 0; i < secret.length; i++) {
    const sChar = secret[i];
    const gChar = guess[i];

    if (sChar === gChar) {
      bulls++;
    } else {
      secretCounts[sChar.charCodeAt(0) - 48]++;
      guessCounts[gChar.charCodeAt(0) - 48]++;
    }
  }

  // Calculate cows by taking minimum overlap of unmatched digit frequencies
  for (let d = 0; d < 10; d++) {
    cows += Math.min(secretCounts[d], guessCounts[d]);
  }

  return \`\${bulls}A\${cows}B\`;
}`,
    complexity: {
      time: "O(N) time complexity where N is length of secret string.",
      space: "O(1) auxiliary space (fixed 10-element digit frequency arrays).",
      explanation: "Iterating secret and guess strings takes O(N) time with O(1) fixed digit frequency array updates."
    },
    edgeCases: ["All digits match exactly (bulls = N, cows = 0)", "No digits match at all", "Duplicate digits in guess"],
    commonMistakes: "Counting a digit as both a bull and a cow.",
    interviewTakeaway: "Filter exact index matches first before computing character frequency inventory overlaps."
  },
  {
    id: "hash-medium-10",
    title: "Pairs of Songs With Total Durations Divisible by 60",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Modulo Remainder Complement Lookup",
    difficulty: "Medium",
    learningOrder: 19,
    importanceTier: "strongly-recommended",
    pattern: "Modulo Remainder Complement Lookup",
    patterns: ["Modulo Remainder Complement Lookup", "Complement Math"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/count-pairs-in-an-array-whose-sum-is-divisible-by-k/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 23, crossSourceEvidence: 18, patternValue: 20, conceptImportance: 9, learningValue: 9, uniqueness: 8, difficultyValue: 7, totalScore: 94 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Amazon", "Goldman Sachs", "Cisco", "Google"],
    problemSummary: "Given a list of songs where the ith song has a duration of time[i] seconds, return the number of pairs of songs (i, j) with i < j such that the total duration of the two songs is divisible by 60.",
    whySolveThis: {
      importanceReason: "Combines Two Sum complement logic with modulo remainder arithmetic: `targetRemainder = (60 - (duration % 60)) % 60`.",
      keySkills: ["Remainder bucket array (size 60)", "Modulo complement formula", "Single-pass pair counting"]
    },
    hints: [
      "A pair (a, b) is divisible by 60 if (a % 60 + b % 60) % 60 === 0.",
      "Maintain a remainder frequency array `remainderCount` of size 60.",
      "For each song duration, calculate `rem = duration % 60`.",
      "The needed complement remainder is `(60 - rem) % 60`."
    ],
    approach: {
      bruteForceSummary: "Nested loops checking if (time[i] + time[j]) % 60 === 0. O(N²) time.",
      optimalStrategy: "Use remainder array of size 60. For each song, add count of stored `(60 - rem) % 60` remainders, then increment `remainderCount[rem]`.",
      patternUsed: "Remainder Complement Bucket"
    },
    solutionJS: `function numPairsDivisibleBy60(time) {
  const remainderCounts = new Array(60).fill(0);
  let count = 0;

  for (const t of time) {
    const rem = t % 60;
    const targetRem = (60 - rem) % 60;

    count += remainderCounts[targetRem];
    remainderCounts[rem]++;
  }

  return count;
}`,
    complexity: {
      time: "O(N) time complexity for single pass over time array.",
      space: "O(1) auxiliary space (fixed array of size 60).",
      explanation: "Fixed 60-bucket array yields O(1) space and constant time bucket access."
    },
    edgeCases: ["Songs with duration 60, 120 (rem = 0)", "Songs with duration 30 (targetRem = 30)", "No matching pairs"],
    commonMistakes: "Using `60 - rem` without secondary `% 60`, which yields 60 when rem = 0 (out of bounds for array size 60).",
    interviewTakeaway: "Use `(K - (val % K)) % K` to map modulo remainder complements into fixed-size arrays."
  },
  {
    id: "hash-medium-11",
    title: "Max Number of K-Sum Pairs",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Frequency Decrement Complement Lookup",
    difficulty: "Medium",
    learningOrder: 20,
    importanceTier: "strongly-recommended",
    pattern: "Frequency Decrement Complement Lookup",
    patterns: ["Frequency Decrement Complement Lookup", "Greedy Hashing"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/max-number-of-k-sum-pairs/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/count-pairs-with-given-sum/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 22, crossSourceEvidence: 17, patternValue: 19, conceptImportance: 8, learningValue: 8, uniqueness: 8, difficultyValue: 7, totalScore: 89 },
    importance: 4,
    interviewFrequency: 3,
    companies: ["Amazon", "Meta", "Google"],
    problemSummary: "You are given an integer array nums and an integer k. In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array. Return the maximum number of operations you can perform.",
    whySolveThis: {
      importanceReason: "Teaches single-pass greedy pair elimination using a Hash Map frequency inventory.",
      keySkills: ["Frequency Map decrementing", "Greedy pair consumption", "Complement matching"]
    },
    hints: [
      "Use a Map to track frequencies of elements seen so far.",
      "For each num in nums, compute `target = k - num`.",
      "If target is in Map with count > 0, decrement target's count and increment operation count.",
      "Otherwise, store num in Map."
    ],
    approach: {
      bruteForceSummary: "Sort array and use two pointers, or scan array repeatedly deleting pairs. O(N log N) time.",
      optimalStrategy: "Single pass Hash Map. Check if complement `k - num` is available in Map. Decrement frequency if found, else increment current number frequency.",
      patternUsed: "Frequency Inventory Match"
    },
    solutionJS: `function maxOperations(nums, k) {
  const map = new Map();
  let operations = 0;

  for (const num of nums) {
    const target = k - num;
    const count = map.get(target) || 0;

    if (count > 0) {
      operations++;
      map.set(target, count - 1);
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }

  return operations;
}`,
    complexity: {
      time: "O(N) average time complexity for single pass over nums.",
      space: "O(N) auxiliary space to store frequency counts in Map.",
      explanation: "Map lookups and updates take O(1) average time per number."
    },
    edgeCases: ["No pairs sum to k", "Multiple identical pairs [3,3,3,3] k=6", "Large array with no matches"],
    commonMistakes: "Counting duplicate elements multiple times without decrementing frequency.",
    interviewTakeaway: "Use single-pass Map frequency consumption to execute greedy pair removal in O(N) time."
  },
  {
    id: "hash-medium-12",
    title: "Brick Wall",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Edge Alignment Frequency Map",
    difficulty: "Medium",
    learningOrder: 21,
    importanceTier: "strongly-recommended",
    pattern: "Edge Alignment Frequency Map",
    patterns: ["Edge Alignment Frequency Map", "Cumulative State Hashing"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/brick-wall/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/minimum-cut-in-a-wall-of-bricks/" }
    ],
    crossSource: {
      sourceCount: 3,
      sources: ["LeetCode Top 150", "NeetCode 150", "GeeksforGeeks"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 23, crossSourceEvidence: 17, patternValue: 20, conceptImportance: 8, learningValue: 9, uniqueness: 9, difficultyValue: 7, totalScore: 93 },
    importance: 4,
    interviewFrequency: 3,
    companies: ["Google", "Amazon", "Meta"],
    problemSummary: "There is a rectangular brick wall consisting of rows of bricks. Find the vertical line that cuts through the fewest bricks and return the number of crossed bricks. You cannot cut through the outer edges of the wall.",
    whySolveThis: {
      importanceReason: "Creative inversion problem: minimizing cut bricks is equivalent to maximizing brick edge alignments. Uses cumulative width frequency hashing.",
      keySkills: ["Problem inversion (min cuts = total rows - max edge alignments)", "Cumulative position prefix sum", "Position frequency Map"]
    },
    hints: [
      "Instead of counting cut bricks, count brick EDGES at each vertical position.",
      "For each row, calculate cumulative brick positions (excluding the rightmost total width edge).",
      "Store frequency of each edge position in a Hash Map.",
      "The optimal line passes through the position with maximum edge frequency. Result = `wall.length - maxEdges`."
    ],
    approach: {
      bruteForceSummary: "Check every integer position from 1 to totalWidth - 1, counting cut bricks. O(Wall_Height * Wall_Width) time.",
      optimalStrategy: "Cumulative prefix sum of brick edges per row. Store edge frequencies in Map. Result = `wall.length - max(edgeFrequencies)`.",
      patternUsed: "Edge Frequency Accumulation"
    },
    solutionJS: `function leastBricks(wall) {
  const edgeCounts = new Map();
  let maxEdges = 0;

  for (const row of wall) {
    let position = 0;
    // Iterate up to row.length - 1 to ignore rightmost outer wall edge
    for (let i = 0; i < row.length - 1; i++) {
      position += row[i];
      const count = (edgeCounts.get(position) || 0) + 1;
      edgeCounts.set(position, count);
      maxEdges = Math.max(maxEdges, count);
    }
  }

  return wall.length - maxEdges;
}`,
    complexity: {
      time: "O(N) average time complexity where N is total number of bricks in wall.",
      space: "O(U) auxiliary space where U is number of unique internal edge positions.",
      explanation: "Single pass over all bricks in the wall populating edge Map."
    },
    edgeCases: ["Rows with single brick (no internal edges, returns wall.length)", "All rows have identical brick structures"],
    commonMistakes: "Including the final outer edge position in the Map (which results in cutting 0 bricks incorrectly).",
    interviewTakeaway: "Invert minimization problems into edge alignment maximization using Hash Map position frequencies."
  },
  {
    id: "hash-medium-13",
    title: "Count Nice Pairs in an Array",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Algebraic Transformation Key Hashing",
    difficulty: "Medium",
    learningOrder: 22,
    importanceTier: "strongly-recommended",
    pattern: "Algebraic Transformation Key Hashing",
    patterns: ["Algebraic Transformation Key Hashing", "Equation Rearrangement"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/count-nice-pairs-in-an-array/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/count-pairs-in-an-array-such-that-nums-i-rev-nums-i-equals-nums-j-rev-nums-j/" }
    ],
    crossSource: {
      sourceCount: 3,
      sources: ["LeetCode Top 150", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 22, crossSourceEvidence: 16, patternValue: 20, conceptImportance: 8, learningValue: 9, uniqueness: 8, difficultyValue: 7, totalScore: 89 },
    importance: 4,
    interviewFrequency: 3,
    companies: ["Google", "Amazon", "Microsoft"],
    problemSummary: "Given an array nums consisting of non-negative integers. Define rev(x) as the reverse of the non-negative integer x. A pair of indices (i, j) is nice if 0 <= i < j < nums.length and nums[i] + rev(nums[j]) == nums[j] + rev(nums[i]). Return the number of nice pairs modulo 10^9 + 7.",
    whySolveThis: {
      importanceReason: "Teaches algebraic equation rearrangement: `nums[i] + rev(nums[j]) = nums[j] + rev(nums[i])` simplifies to `nums[i] - rev(nums[i]) = nums[j] - rev(nums[j])`.",
      keySkills: ["Algebraic formula simplification", "Number digit reversal helper", "Frequency Map pair combinations"]
    },
    hints: [
      "Rearrange the equation: `nums[i] - rev(nums[i]) === nums[j] - rev(nums[j])`.",
      "Transform each number into `diff = num - rev(num)`.",
      "Count frequencies of each `diff` using a Hash Map.",
      "Add stored frequency of current `diff` to total count, then increment `diff` frequency."
    ],
    approach: {
      bruteForceSummary: "Check all O(N²) pairs (i, j) with digit reversal. O(N² * log10(MAX)) time.",
      optimalStrategy: "Transform each element to `num - rev(num)`. Single pass Hash Map to count matches modulo 10^9 + 7.",
      patternUsed: "Algebraic Key Transformation"
    },
    solutionJS: `function countNicePairs(nums) {
  const MOD = 1e9 + 7;
  const diffMap = new Map();
  let nicePairs = 0;

  for (const num of nums) {
    const diff = num - reverseNum(num);
    const count = diffMap.get(diff) || 0;

    nicePairs = (nicePairs + count) % MOD;
    diffMap.set(diff, count + 1);
  }

  return nicePairs;
}

function reverseNum(n) {
  let rev = 0;
  while (n > 0) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return rev;
}`,
    complexity: {
      time: "O(N * log10(MAX)) average time complexity where N is nums.length.",
      space: "O(N) auxiliary space for diffMap.",
      explanation: "Reversing digits takes O(log10(Num)), Map lookups take O(1) average time."
    },
    edgeCases: ["Single digit numbers (diff = 0)", "Palindromic numbers", "Large results requiring modulo 10^9 + 7"],
    commonMistakes: "Executing two-pass formula or not applying modulo at each addition step.",
    interviewTakeaway: "Group variables in equations to isolate f(i) = f(j) and hash f(i) values."
  },
  {
    id: "hash-medium-14",
    title: "Copy List with Random Pointer",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "HashMap Object Reference Mapping",
    difficulty: "Medium",
    learningOrder: 23,
    importanceTier: "must-do",
    pattern: "HashMap Object Reference Mapping",
    patterns: ["HashMap Object Reference Mapping", "Deep Copy Graph Mapping"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/copy-list-with-random-pointer/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/clone-linked-list-next-random-pointer/" }
    ],
    crossSource: {
      sourceCount: 6,
      sources: ["LeetCode Top 150", "Blind 75", "NeetCode 150", "Striver SDE Sheet", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 20, patternValue: 24, conceptImportance: 10, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 98 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Meta", "Amazon", "Google", "Microsoft", "Bloomberg"],
    problemSummary: "A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null. Construct a deep copy of the list.",
    whySolveThis: {
      importanceReason: "The definitive object-reference hashing problem. Demonstrates mapping JS object memory references (`oldNode -> newNode`) to clone complex pointer graph structures.",
      keySkills: ["Object reference Map keys", "Two-pass graph cloning", "Node reference mapping (`oldNode -> newNode`)"]
    },
    hints: [
      "Use a `Map` storing `oldNode -> newNode`.",
      "First pass: traverse the original list and instantiate a new clone node for each original node.",
      "Second pass: set `newNode.next = map.get(oldNode.next)` and `newNode.random = map.get(oldNode.random)`."
    ],
    approach: {
      bruteForceSummary: "Search entire list for random node index on every node. O(N²) time.",
      optimalStrategy: "Map original node references to new node instances in Pass 1. Connect next and random pointers via Map lookup in Pass 2.",
      patternUsed: "Object Pointer Hash Mapping"
    },
    solutionJS: `function copyRandomList(head) {
  if (!head) return null;

  const nodeMap = new Map();

  // Pass 1: Create all new clone nodes and store oldNode -> newNode in Map
  let curr = head;
  while (curr) {
    nodeMap.set(curr, { val: curr.val, next: null, random: null });
    curr = curr.next;
  }

  // Pass 2: Connect next and random pointers using Map lookups
  curr = head;
  while (curr) {
    const clone = nodeMap.get(curr);
    clone.next = curr.next ? nodeMap.get(curr.next) : null;
    clone.random = curr.random ? nodeMap.get(curr.random) : null;
    curr = curr.next;
  }

  return nodeMap.get(head);
}`,
    complexity: {
      time: "O(N) average time complexity for two linear passes.",
      space: "O(N) auxiliary space to store N node mapping entries in Map.",
      explanation: "HashMap yields O(1) average lookup for object references."
    },
    edgeCases: ["Empty list (head === null)", "Nodes with random pointing to self", "Nodes with random pointing to null"],
    commonMistakes: "Using plain JS object {} instead of Map (plain objects stringify keys to '[object Object]', breaking pointer identity).",
    interviewTakeaway: "Use Map (not plain {}) to hash object memory references when cloning graph or list structures."
  },
  {
    id: "hash-medium-15",
    title: "Design Underground System",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Dual HashMap System State Tracking",
    difficulty: "Medium",
    learningOrder: 24,
    importanceTier: "strongly-recommended",
    pattern: "Dual HashMap System State Tracking",
    patterns: ["Dual HashMap System State Tracking", "Low-Level System Design"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/design-underground-system/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/design-underground-system/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "Bloomberg", "Amazon", "Uber"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 24, crossSourceEvidence: 18, patternValue: 22, conceptImportance: 9, learningValue: 9, uniqueness: 9, difficultyValue: 7, totalScore: 94 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Bloomberg", "Amazon", "Uber", "Lyft", "Google"],
    problemSummary: "An underground railway system is keeping track of customer travel times between different stations. Implement the UndergroundSystem class with checkIn(id, stationName, t), checkOut(id, stationName, t), and getAverageTime(startStation, endStation).",
    whySolveThis: {
      importanceReason: "Outstanding LLD problem using dual Hash Maps: one for active passenger check-in states (`id -> {station, time}`) and one for route aggregate statistics (`'start-end' -> {totalTime, count}`).",
      keySkills: ["Dual Hash Map design", "Composite route string keys", "Real-time average updates"]
    },
    hints: [
      "Use `checkInMap` storing `id -> { stationName, t }` for active trips.",
      "Use `routeMap` storing `\`\${startStation}-\${endStation}\` -> { totalTime, count }`.",
      "In checkOut(), retrieve passenger's check-in data, compute travel duration, update routeMap, and delete passenger from checkInMap.",
      "In getAverageTime(), return `totalTime / count` from routeMap."
    ],
    approach: {
      bruteForceSummary: "Array of all travel records scanned linearly on every getAverageTime(). O(N) get time.",
      optimalStrategy: "Dual Hash Map. checkInMap tracks active passenger state; routeMap aggregates total trip time and count in O(1) time.",
      patternUsed: "Dual System State Hashing"
    },
    solutionJS: `class UndergroundSystem {
  constructor() {
    this.checkInMap = new Map(); // id -> { stationName, time }
    this.routeMap = new Map();   // "startStation-endStation" -> { totalTime, count }
  }

  checkIn(id, stationName, t) {
    this.checkInMap.set(id, { stationName, time: t });
  }

  checkOut(id, stationName, t) {
    const checkInInfo = this.checkInMap.get(id);
    this.checkInMap.delete(id); // Clean active passenger

    const routeKey = \`\${checkInInfo.stationName}-\${stationName}\`;
    const tripDuration = t - checkInInfo.time;

    if (!this.routeMap.has(routeKey)) {
      this.routeMap.set(routeKey, { totalTime: 0, count: 0 });
    }

    const routeData = this.routeMap.get(routeKey);
    routeData.totalTime += tripDuration;
    routeData.count += 1;
  }

  getAverageTime(startStation, endStation) {
    const routeKey = \`\${startStation}-\${endStation}\`;
    const routeData = this.routeMap.get(routeKey);
    return routeData.totalTime / routeData.count;
  }
}`,
    complexity: {
      time: "O(1) average time complexity for checkIn(), checkOut(), and getAverageTime().",
      space: "O(P + R) auxiliary space where P is active passengers and R is unique station routes.",
      explanation: "All operations use constant-time Hash Map lookups, insertions, and deletions."
    },
    edgeCases: ["Passenger checks out immediately", "Multiple passengers traveling same route simultaneously", "Station names with special characters"],
    commonMistakes: "Forgetting to delete passenger from checkInMap after checkOut(), causing memory bloat.",
    interviewTakeaway: "Combine temporary state maps with permanent aggregate statistics maps for O(1) system metrics."
  },
  {
    id: "hash-medium-16",
    title: "LRU Cache",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "HashMap + Doubly Linked List",
    difficulty: "Medium",
    learningOrder: 25,
    importanceTier: "must-do",
    pattern: "HashMap + Doubly Linked List",
    patterns: ["HashMap + Doubly Linked List", "Composite Data Structure"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/lru-cache/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/lru-cache-implementation/" }
    ],
    crossSource: {
      sourceCount: 6,
      sources: ["LeetCode Top 150", "Blind 75", "NeetCode 150", "Striver SDE Sheet", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 20, patternValue: 25, conceptImportance: 10, learningValue: 10, uniqueness: 10, difficultyValue: 7, totalScore: 100 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Amazon", "Meta", "Google", "Microsoft", "Apple", "Uber"],
    problemSummary: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement get(key) and put(key, value) in O(1) average time complexity.",
    whySolveThis: {
      importanceReason: "The single most famous data structure design question in software engineering history. Combines a Hash Map (O(1) key lookup) with a Doubly Linked List (O(1) node removal & tail insertion).",
      keySkills: ["Doubly linked list node manipulation", "HashMap node pointer storage", "Sentinel dummy head/tail nodes", "O(1) eviction logic"]
    },
    hints: [
      "Use a Map storing `key -> LinkedListNode`.",
      "Use a Doubly Linked List with dummy head and dummy tail nodes to maintain access order.",
      "Most recently used nodes are moved to the head (after dummy head).",
      "When capacity is exceeded, evict the node right before dummy tail (least recently used)."
    ],
    approach: {
      bruteForceSummary: "Array of items with timestamps. O(N) search and update on every access.",
      optimalStrategy: "Map + Doubly Linked List with dummy head and tail. Map yields O(1) node access; DLL yields O(1) pointer updates.",
      patternUsed: "HashMap + Doubly Linked List"
    },
    solutionJS: `class Node {
  constructor(key = 0, val = 0) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    // Dummy sentinel nodes
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  _remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _insertAtHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this._remove(node);
    this._insertAtHead(node); // Mark as most recently used
    return node.val;
  }

  put(key, value) {
    if (this.map.has(key)) {
      this._remove(this.map.get(key));
    }
    const newNode = new Node(key, value);
    this._insertAtHead(newNode);
    this.map.set(key, newNode);

    if (this.map.size > this.capacity) {
      // Evict least recently used (node before dummy tail)
      const lru = this.tail.prev;
      this._remove(lru);
      this.map.delete(lru.key);
    }
  }
}`,
    complexity: {
      time: "O(1) average time complexity for both get() and put() operations.",
      space: "O(capacity) auxiliary space for storing nodes in Map and DLL.",
      explanation: "HashMap yields O(1) node reference retrieval; DLL yields O(1) node insertion and removal."
    },
    edgeCases: ["Capacity = 1", "Updating value of existing key", "Accessing non-existent key"],
    commonMistakes: "Forgetting to delete evicted key from Map, causing memory leak and size mismatch.",
    interviewTakeaway: "Combine Hash Maps for O(1) search with Doubly Linked Lists for O(1) ordering mutations."
  },
  {
    id: "hash-medium-17",
    title: "Time Based Key-Value Store",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "HashMap + Binary Search Array",
    difficulty: "Medium",
    learningOrder: 26,
    importanceTier: "strongly-recommended",
    pattern: "HashMap + Binary Search Array",
    patterns: ["HashMap + Binary Search Array", "Timestamp Indexing"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/time-based-key-value-store/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/design-a-time-based-key-value-store/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Blind 75", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 25, crossSourceEvidence: 19, patternValue: 22, conceptImportance: 10, learningValue: 10, uniqueness: 9, difficultyValue: 7, totalScore: 97 },
    importance: 5,
    interviewFrequency: 5,
    companies: ["Google", "Amazon", "Apple", "Netflix", "Meta"],
    problemSummary: "Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp. Implement set(key, value, timestamp) and get(key, timestamp).",
    whySolveThis: {
      importanceReason: "High-frequency systems design interview question. Pairs a Hash Map (mapping `key -> array of {timestamp, value}`) with Binary Search (finding largest timestamp <= target).",
      keySkills: ["HashMap of sorted arrays", "Binary search upper-bound/floor lookup", "Monotonic timestamp structure"]
    },
    hints: [
      "Use a Map where key maps to an array of `[timestamp, value]` pairs.",
      "Since timestamps in `set()` are strictly increasing, each key's array is automatically sorted by timestamp.",
      "In `get(key, timestamp)`, use Binary Search on the key's array to find the largest timestamp <= requested timestamp."
    ],
    approach: {
      bruteForceSummary: "Linear scan through key's timestamp list. O(N) get time.",
      optimalStrategy: "Map key to sorted array of [timestamp, value]. Binary Search for highest timestamp <= requested in O(log N) time.",
      patternUsed: "Map + Binary Search"
    },
    solutionJS: `class TimeMap {
  constructor() {
    this.map = new Map();
  }

  set(key, value, timestamp) {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }
    this.map.get(key).push([timestamp, value]);
  }

  get(key, timestamp) {
    if (!this.map.has(key)) return "";

    const list = this.map.get(key);
    let left = 0;
    let right = list.length - 1;
    let result = "";

    // Binary search for largest timestamp <= target timestamp
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (list[mid][0] <= timestamp) {
        result = list[mid][1];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  }
}`,
    complexity: {
      time: "set(): O(1) average time. get(): O(log N) time where N is number of timestamps stored for key.",
      space: "O(Total Set Operations) auxiliary space to store all key-timestamp pairs.",
      explanation: "Binary search locates the floor timestamp in log time within the pre-sorted list."
    },
    edgeCases: ["Requested timestamp is smaller than earliest stored timestamp (returns '')", "Exact timestamp match", "Key does not exist"],
    commonMistakes: "Executing linear scan in get() resulting in O(N) time instead of O(log N) binary search.",
    interviewTakeaway: "Combine Hash Maps with sorted arrays to execute O(log N) temporal range queries."
  },

  // ==========================================
  // HARD QUESTIONS (4)
  // ==========================================
  {
    id: "hash-hard-01",
    title: "Avoid Flood in The City",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Last-Seen Index Map + Greedy Search",
    difficulty: "Hard",
    learningOrder: 27,
    importanceTier: "advanced-extension",
    pattern: "Last-Seen Index Map + Greedy Search",
    patterns: ["Last-Seen Index Map + Greedy Search", "State Assignment"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/avoid-flood-in-the-city/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/avoid-flood-in-the-city/" }
    ],
    crossSource: {
      sourceCount: 4,
      sources: ["LeetCode Top 150", "Google", "Meta", "Uber"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 24, crossSourceEvidence: 18, patternValue: 22, conceptImportance: 9, learningValue: 9, uniqueness: 9, difficultyValue: 9, totalScore: 91 },
    importance: 4,
    interviewFrequency: 4,
    companies: ["Google", "Meta", "Uber", "Amazon"],
    problemSummary: "Your country has an infinite number of lakes. Given an array rains where rains[i] > 0 means it rains over lake rains[i], and rains[i] == 0 means you can dry one lake. Return an array answer where answer[i] is the lake you dry on day i (or 1 if none needed), or return empty array if flooding is unavoidable.",
    whySolveThis: {
      importanceReason: "Combines a Hash Map (`lake -> lastFloodedDay`) with ordered dry-day array binary search to solve complex simulation constraints.",
      keySkills: ["Last-flooded day Hash Map", "Dry-day binary search (upper bound of lastFloodedDay)", "Greedy lake drying"]
    },
    hints: [
      "Use `lastFlooded` Map storing `lake -> day`.",
      "Collect zero-rain day indices in an array `zeroDays`.",
      "When it rains on lake `x` that is ALREADY full, search `zeroDays` for the earliest dry day AFTER `lastFlooded.get(x)`.",
      "If such a dry day exists, assign it to dry lake `x` and remove that zero day. If no dry day exists, return `[]`."
    ],
    approach: {
      bruteForceSummary: "Linear search dry days for every flooded lake. O(N²) time.",
      optimalStrategy: "Map stores last flooded day per lake. Array `zeroDays` tracks dry opportunities. Binary search finds smallest zeroDay > lastFloodedDay.",
      patternUsed: "Last-Seen Map + Binary Search"
    },
    solutionJS: `function avoidFlood(rains) {
  const n = rains.length;
  const ans = new Array(n).fill(-1);
  const lastFlooded = new Map(); // lake -> last flooded day
  const zeroDays = []; // sorted list of available dry day indices

  for (let i = 0; i < n; i++) {
    const lake = rains[i];

    if (lake === 0) {
      zeroDays.push(i);
      ans[i] = 1; // Default dummy dry value
    } else {
      if (lastFlooded.has(lake)) {
        const prevDay = lastFlooded.get(lake);
        // Find earliest zero day > prevDay using binary search
        const idx = binarySearchGreater(zeroDays, prevDay);
        if (idx === -1) {
          return []; // Flooding is unavoidable
        }
        const dryDay = zeroDays[idx];
        ans[dryDay] = lake;
        zeroDays.splice(idx, 1); // Remove used dry day
      }
      lastFlooded.set(lake, i);
    }
  }

  return ans;
}

function binarySearchGreater(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}`,
    complexity: {
      time: "O(N * log N) time complexity due to binary search and array splice operations.",
      space: "O(N) auxiliary space for lastFlooded Map and zeroDays array.",
      explanation: "Iterating rains array takes O(N). Binary search locates valid dry day in O(log N) time."
    },
    edgeCases: ["No zeros available when lake floods second time", "Multiple lakes flooding", "Unused zero days (default to 1)"],
    commonMistakes: "Choosing the earliest available zero day overall instead of the earliest zero day AFTER the lake was flooded.",
    interviewTakeaway: "Pair Last-Seen Index Maps with ordered state arrays for greedy constraint satisfaction."
  },
  {
    id: "hash-hard-02",
    title: "Max Points on a Line",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Geometry + Reduced Slope Hashing",
    difficulty: "Hard",
    learningOrder: 28,
    importanceTier: "advanced-extension",
    pattern: "Geometry + Reduced Slope Hashing",
    patterns: ["Geometry + Reduced Slope Hashing", "GCD Normalization"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/max-points-on-a-line/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/count-maximum-points-on-same-line/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Blind 75", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 22, crossSourceEvidence: 18, patternValue: 20, conceptImportance: 8, learningValue: 9, uniqueness: 9, difficultyValue: 9, totalScore: 95 },
    importance: 4,
    interviewFrequency: 3,
    companies: ["Google", "Amazon", "Apple", "Microsoft"],
    problemSummary: "Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.",
    whySolveThis: {
      importanceReason: "Advanced geometry problem demonstrating reduced slope representation (`dy/gcd + '/' + dx/gcd`) to avoid floating point precision issues in Hash Maps.",
      keySkills: ["GCD slope fraction reduction", "Floating-point precision avoidance", "Anchor point iteration"]
    },
    hints: [
      "For each anchor point `i`, compute slopes to all other points `j`.",
      "Slope between (x1, y1) and (x2, y2) is `(y2 - y1) / (x2 - x1)`.",
      "Floating point division causes precision bugs. Instead, compute `GCD(dy, dx)` and store slope key as `(dy/gcd) + '/' + (dx/gcd)`.",
      "Find maximum slope frequency for each anchor point."
    ],
    approach: {
      bruteForceSummary: "Check all O(N³) triplets of points for collinearity. O(N³) time.",
      optimalStrategy: "For each anchor point i, compute reduced slope string keys `dy/gcd + '/' + dx/gcd` to all j > i. Track max frequency in Map.",
      patternUsed: "GCD Slope String Key Hashing"
    },
    solutionJS: `function maxPoints(points) {
  const n = points.length;
  if (n <= 2) return n;

  let maxPointsOnLine = 1;

  for (let i = 0; i < n; i++) {
    const slopeMap = new Map();
    const [x1, y1] = points[i];

    for (let j = i + 1; j < n; j++) {
      const [x2, y2] = points[j];
      let dy = y2 - y1;
      let dx = x2 - x1;

      const g = gcd(dy, dx);
      dy = Math.floor(dy / g);
      dx = Math.floor(dx / g);

      // Handle sign consistency for slope fractions
      if (dx < 0 || (dx === 0 && dy < 0)) {
        dx = -dx;
        dy = -dy;
      }

      const slopeKey = \`\${dy}/\${dx}\`;
      const count = (slopeMap.get(slopeKey) || 0) + 1;
      slopeMap.set(slopeKey, count);

      maxPointsOnLine = Math.max(maxPointsOnLine, count + 1);
    }
  }

  return maxPointsOnLine;
}

function gcd(a, b) {
  return b === 0 ? Math.abs(a) : gcd(b, a % b);
}`,
    complexity: {
      time: "O(N² * log(MAX_DIFF)) average time complexity.",
      space: "O(N) auxiliary space for slopeMap per anchor point.",
      explanation: "Outer loop runs N times, inner loop runs N times computing GCD slope fraction."
    },
    edgeCases: ["n <= 2 (always returns n)", "Vertical lines (dx = 0)", "Horizontal lines (dy = 0)"],
    commonMistakes: "Using floating point numbers `dy / dx` as map keys, leading to precision mismatch errors.",
    interviewTakeaway: "Use GCD integer fraction strings `dy/gcd + '/' + dx/gcd` to hash slope keys safely without floating-point errors."
  },
  {
    id: "hash-hard-03",
    title: "LFU Cache",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "HashMap + Frequency Buckets Linked List",
    difficulty: "Hard",
    learningOrder: 29,
    importanceTier: "advanced-extension",
    pattern: "HashMap + Frequency Buckets Linked List",
    patterns: ["HashMap + Frequency Buckets Linked List", "Advanced Data Structure"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/lfu-cache/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/lfu-least-frequently-used-cache-implementation/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Striver SDE Sheet", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 24, crossSourceEvidence: 19, patternValue: 25, conceptImportance: 10, learningValue: 10, uniqueness: 10, difficultyValue: 9, totalScore: 97 },
    importance: 5,
    interviewFrequency: 4,
    companies: ["Amazon", "Google", "Meta", "Microsoft"],
    problemSummary: "Design and implement a data structure for a Least Frequently Used (LFU) cache. Implement get(key) and put(key, value) in O(1) average time complexity.",
    whySolveThis: {
      importanceReason: "The pinnacle of composite data structure design. Maintains O(1) access by combining a key-to-node Map, a frequency-to-DLL Map, and a minimum frequency tracker.",
      keySkills: ["Multi-tier Map storage", "Frequency bucket Doubly Linked Lists", "Min frequency state tracking", "O(1) LFU eviction"]
    },
    hints: [
      "Maintain 2 Maps: `keyToNode` (key -> Node) and `freqToList` (freq -> DoublyLinkedList).",
      "Track `minFreq` variable (minimum frequency currently present in cache).",
      "When a node is accessed (get/put update), increment its frequency, move it to the new frequency list, and update `minFreq` if necessary.",
      "When evicting at max capacity, remove the tail node from `freqToList.get(minFreq)`."
    ],
    approach: {
      bruteForceSummary: "Scan elements to find lowest frequency and oldest timestamp. O(N) put time.",
      optimalStrategy: "Two Maps + Doubly Linked List buckets per frequency. Track minFreq for O(1) eviction.",
      patternUsed: "Frequency Bucket Doubly Linked Lists"
    },
    solutionJS: `class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.freq = 1;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  insertAtHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
    this.size++;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
  }

  removeTail() {
    if (this.size === 0) return null;
    const lfuNode = this.tail.prev;
    this.remove(lfuNode);
    return lfuNode;
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.minFreq = 0;
    this.keyToNode = new Map();
    this.freqToList = new Map();
  }

  _updateFreq(node) {
    const oldFreq = node.freq;
    const oldList = this.freqToList.get(oldFreq);
    oldList.remove(node);

    if (oldFreq === this.minFreq && oldList.size === 0) {
      this.minFreq++;
    }

    node.freq++;
    if (!this.freqToList.has(node.freq)) {
      this.freqToList.set(node.freq, new DoublyLinkedList());
    }
    this.freqToList.get(node.freq).insertAtHead(node);
  }

  get(key) {
    if (!this.keyToNode.has(key)) return -1;
    const node = this.keyToNode.get(key);
    this._updateFreq(node);
    return node.val;
  }

  put(key, value) {
    if (this.capacity === 0) return;

    if (this.keyToNode.has(key)) {
      const node = this.keyToNode.get(key);
      node.val = value;
      this._updateFreq(node);
      return;
    }

    if (this.keyToNode.size >= this.capacity) {
      const minList = this.freqToList.get(this.minFreq);
      const evicted = minList.removeTail();
      this.keyToNode.delete(evicted.key);
    }

    const newNode = new Node(key, value);
    this.keyToNode.set(key, newNode);
    this.minFreq = 1;

    if (!this.freqToList.has(1)) {
      this.freqToList.set(1, new DoublyLinkedList());
    }
    this.freqToList.get(1).insertAtHead(newNode);
  }
}`,
    complexity: {
      time: "O(1) average time complexity for both get() and put() operations.",
      space: "O(capacity) auxiliary space for storing nodes across Maps and DLL buckets.",
      explanation: "Multi-tier Maps and DLL buckets achieve constant-time frequency updates and eviction."
    },
    edgeCases: ["Capacity = 0", "Overwriting existing key value", "Multiple nodes sharing minimum frequency"],
    commonMistakes: "Not updating minFreq when the last node at minFreq moves to minFreq + 1.",
    interviewTakeaway: "Use frequency-indexed Doubly Linked List buckets to support O(1) LFU cache evictions."
  },
  {
    id: "hash-hard-04",
    title: "Maximum Frequency Stack",
    primaryTopic: "Hashing & Hash Tables",
    topic: "Hashing & Hash Tables",
    topicId: "hashing",
    subtopic: "Frequency-to-Stack HashMap Mapping",
    difficulty: "Hard",
    learningOrder: 30,
    importanceTier: "advanced-extension",
    pattern: "Frequency-to-Stack HashMap Mapping",
    patterns: ["Frequency-to-Stack HashMap Mapping", "Multi-Stack Hashing"],
    source: "LeetCode",
    url: "https://leetcode.com/problems/maximum-frequency-stack/",
    alternateSources: [
      { source: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/design-a-stack-which-can-give-maximum-frequency-element/" }
    ],
    crossSource: {
      sourceCount: 5,
      sources: ["LeetCode Top 150", "NeetCode 150", "Striver SDE Sheet", "GeeksforGeeks", "InterviewBit"],
      foundInMajorRoadmaps: true
    },
    scores: { interviewRelevance: 24, crossSourceEvidence: 19, patternValue: 24, conceptImportance: 9, learningValue: 10, uniqueness: 9, difficultyValue: 9, totalScore: 95 },
    importance: 5,
    interviewFrequency: 4,
    companies: ["Amazon", "Google", "Meta", "Microsoft"],
    problemSummary: "Design a stack-like data structure to push elements and pop the most frequent element. If there is a tie for the most frequent element, the element closest to the top of the stack is popped. Implement push(val) and pop() in O(1) time.",
    whySolveThis: {
      importanceReason: "Brilliant design pattern: pairs an element-frequency Map with a frequency-to-stack Map to achieve O(1) push and pop.",
      keySkills: ["Element frequency tracking", "Frequency-indexed Stack Map", "Maximum frequency variable management"]
    },
    hints: [
      "Maintain `freqMap` (val -> count).",
      "Maintain `groupMap` (freq -> Stack Array of elements with that frequency).",
      "Track `maxFreq` integer variable.",
      "When popping, peek top element from `groupMap.get(maxFreq)`. Decrement its frequency in `freqMap` and update `maxFreq` if stack becomes empty."
    ],
    approach: {
      bruteForceSummary: "Scan array of elements to compute frequencies and timestamps. O(N) pop time.",
      optimalStrategy: "Frequency Map + Stack Map indexed by frequency. Push appends to groupMap[freq]. Pop removes from groupMap[maxFreq].",
      patternUsed: "Frequency Bucket Stacks"
    },
    solutionJS: `class FreqStack {
  constructor() {
    this.freqMap = new Map();   // val -> frequency
    this.groupMap = new Map();  // frequency -> stack array
    this.maxFreq = 0;
  }

  push(val) {
    const freq = (this.freqMap.get(val) || 0) + 1;
    this.freqMap.set(val, freq);

    this.maxFreq = Math.max(this.maxFreq, freq);

    if (!this.groupMap.has(freq)) {
      this.groupMap.set(freq, []);
    }
    this.groupMap.get(freq).push(val);
  }

  pop() {
    const stack = this.groupMap.get(this.maxFreq);
    const val = stack.pop();

    this.freqMap.set(val, this.freqMap.get(val) - 1);

    if (stack.length === 0) {
      this.maxFreq--;
    }

    return val;
  }
}`,
    complexity: {
      time: "O(1) average time complexity for both push() and pop().",
      space: "O(N) auxiliary space where N is number of pushed elements.",
      explanation: "Group map stack array operations pop() and push() take constant O(1) time."
    },
    edgeCases: ["Ties in highest frequency (pops most recent)", "Pushing duplicate values", "Emptying max frequency stack"],
    commonMistakes: "Over-complicating with heaps/priority queues resulting in O(log N) operations instead of O(1) stack map.",
    interviewTakeaway: "Index stack instances by frequency in a Hash Map to resolve frequency ties in O(1) time."
  }
];
