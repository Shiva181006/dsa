import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProgressProvider } from './context/UserProgressContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { TopicPage } from './pages/TopicPage';
import { QuestionBankPage } from './pages/QuestionBankPage';
import { RevisionPage } from './pages/RevisionPage';

export default function App() {
  return (
    <ThemeProvider>
      <UserProgressProvider>
        <Router>
          <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0E14] text-[#0F172A] dark:text-[#F1F5F9] font-sans flex flex-col selection:bg-[#2563EB] selection:text-white transition-colors duration-200">
            <Navbar />
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/topic/:topicSlug" element={<TopicPage />} />
                <Route path="/questions" element={<QuestionBankPage />} />
                <Route path="/revision" element={<RevisionPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </UserProgressProvider>
    </ThemeProvider>
  );
}

