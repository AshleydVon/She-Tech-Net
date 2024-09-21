import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Courses from './components/Courses';
import Mentorship from './components/Mentorship';
import JobBoard from './components/JobBoard';
import Community from './components/Networking';
import Events from './components/Events';
import CodingChallenge from './components/CodingChallenge';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/job-board" element={<JobBoard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/events" element={<Events />} />
          <Route path="/coding-challenge" element={<CodingChallenge />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
