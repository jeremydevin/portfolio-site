
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <HashRouter>
      <main className="min-h-screen font-sans antialiased relative">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </div>
      </main>
    </HashRouter>
  );
}

export default App;
