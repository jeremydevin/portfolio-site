
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import TimeBankPrivacyPolicy from './components/TimeBankPrivacyPolicy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <main>
                <HomePage />
              </main>
            </>
          }
        />
        <Route path="/privacy/timebank" element={<TimeBankPrivacyPolicy />} />
        <Route path="/timebank-privacy" element={<TimeBankPrivacyPolicy />} />
        <Route path="/privacy-policy/timebank" element={<TimeBankPrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
