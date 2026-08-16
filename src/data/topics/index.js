import { ARRAYS_TOPIC_DATA } from './arrays.js';
import { ARRAYS_QUESTIONS } from './arraysQuestions.js';

import { STRINGS_TOPIC_DATA } from './strings.js';
import { STRINGS_QUESTIONS } from './stringsQuestions.js';

import { HASHING_TOPIC_DATA } from './hashing.js';
import { HASHING_QUESTIONS } from './hashingQuestions.js';

import { TWO_POINTERS_TOPIC_DATA } from './twoPointers.js';
import { TWO_POINTERS_QUESTIONS } from './twoPointersQuestions.js';

export const TOPICS_DATA = {
  arrays: {
    ...ARRAYS_TOPIC_DATA,
    questions: ARRAYS_QUESTIONS
  },
  strings: {
    ...STRINGS_TOPIC_DATA,
    questions: STRINGS_QUESTIONS
  },
  hashing: {
    ...HASHING_TOPIC_DATA,
    questions: HASHING_QUESTIONS
  },
  'two-pointers': {
    ...TWO_POINTERS_TOPIC_DATA,
    questions: TWO_POINTERS_QUESTIONS
  },
  twoPointers: {
    ...TWO_POINTERS_TOPIC_DATA,
    questions: TWO_POINTERS_QUESTIONS
  }
};

export function getTopicData(slug) {
  return TOPICS_DATA[slug] || null;
}

export function getAllQuestions() {
  return Object.values(TOPICS_DATA).flatMap(topic => topic.questions || []);
}


