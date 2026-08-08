import { ARRAYS_TOPIC_DATA } from './arrays.js';
import { ARRAYS_QUESTIONS } from './arraysQuestions.js';

import { STRINGS_TOPIC_DATA } from './strings.js';
import { STRINGS_QUESTIONS } from './stringsQuestions.js';

export const TOPICS_DATA = {
  arrays: {
    ...ARRAYS_TOPIC_DATA,
    questions: ARRAYS_QUESTIONS
  },
  strings: {
    ...STRINGS_TOPIC_DATA,
    questions: STRINGS_QUESTIONS
  }
};

export function getTopicData(slug) {
  return TOPICS_DATA[slug] || null;
}

export function getAllQuestions() {
  return Object.values(TOPICS_DATA).flatMap(topic => topic.questions || []);
}
