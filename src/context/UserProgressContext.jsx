import React, { createContext, useContext, useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'dsa_js_prep_user_progress_v1';

const UserProgressContext = createContext(null);

export function UserProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      console.error('Failed to load user progress from localStorage:', e);
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save user progress to localStorage:', e);
    }
  }, [progress]);

  const updateQuestionStatus = (questionId, status) => {
    setProgress(prev => {
      const existing = prev[questionId] || {};
      return {
        ...prev,
        [questionId]: {
          ...existing,
          status,
          solvedAt: status === 'solved' ? (existing.solvedAt || new Date().toISOString()) : existing.solvedAt,
          updatedAt: new Date().toISOString()
        }
      };
    });
  };

  const saveQuestionNotes = (questionId, notes) => {
    setProgress(prev => {
      const existing = prev[questionId] || { status: 'unsolved' };
      return {
        ...prev,
        [questionId]: {
          ...existing,
          notes,
          updatedAt: new Date().toISOString()
        }
      };
    });
  };

  const toggleRevision = (questionId) => {
    setProgress(prev => {
      const existing = prev[questionId] || { status: 'unsolved' };
      const newStatus = existing.status === 'revision' ? 'solved' : 'revision';
      return {
        ...prev,
        [questionId]: {
          ...existing,
          status: newStatus,
          updatedAt: new Date().toISOString()
        }
      };
    });
  };

  const getQuestionState = (questionId) => {
    return progress[questionId] || { status: 'unsolved', notes: '' };
  };

  const resetAllProgress = () => {
    if (window.confirm('Are you sure you want to reset all your progress data?')) {
      setProgress({});
    }
  };

  return (
    <UserProgressContext.Provider value={{
      progress,
      updateQuestionStatus,
      saveQuestionNotes,
      toggleRevision,
      getQuestionState,
      resetAllProgress
    }}>
      {children}
    </UserProgressContext.Provider>
  );
}

export function useUserProgress() {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error('useUserProgress must be used within a UserProgressProvider');
  }
  return context;
}
