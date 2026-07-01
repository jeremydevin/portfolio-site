
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import TimeBankPrivacyPolicy from './components/TimeBankPrivacyPolicy';

function HashRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      const path = window.location.hash.replace(/^#/, '');
      navigate(path, { replace: true });
    }
  }, [navigate]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <HashRedirect />
      <main className="min-h-screen font-sans antialiased relative">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="/privacy/timebank" element={<TimeBankPrivacyPolicy />} />
            <Route path="/timebank-privacy" element={<TimeBankPrivacyPolicy />} />
            <Route path="/privacy-policy/timebank" element={<TimeBankPrivacyPolicy />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
