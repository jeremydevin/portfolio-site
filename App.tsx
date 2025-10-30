
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <HashRouter>
      <main className="min-h-screen bg-slate-900 font-sans text-slate-300 antialiased">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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
