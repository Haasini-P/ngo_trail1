// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Import Your Page Components ---
// These are the main "screens" of your application.
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';

// --- Import Global Components ---
// These components, like the chatbot, can appear on all pages.
import Chatbot from './components/features/Chatbot';

function App() {
  return (
    // The Router provides the routing functionality to the entire app.
    <Router>
      <div className="App">
        {/* The Chatbot is placed here, outside of <Routes>, so it
            can persist across all pages and maintain its state. */}
        <Chatbot />

        {/* The <Routes> component is where you define each route. */}
        <Routes>
          {/* Path for the main homepage */}
          <Route path="/" element={<LandingPage />} />

          {/* Path for the admin/staff login page */}
          <Route path="/login" element={<LoginPage />} />

          {/* Path for the secure admin dashboard */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* 
            You can add more routes here as your app grows.
            For example, if you create a dedicated "About Us" page:
            <Route path="/about" element={<AboutPage />} /> 
          */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
