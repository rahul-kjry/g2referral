// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage';
import GetReferral from './Components/GetReferral';
import GiveReferral from './Components/GiveReferral';
import SuccessPage from './Components/SuccessPage'; // Import SuccessPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/get-referral" element={<GetReferral />} />
        <Route path="/give-referral" element={<GiveReferral />} />
        <Route path="/success" element={<SuccessPage />} /> {/* Add route for SuccessPage */}
      </Routes>
    </Router>
  );
}

export default App;
