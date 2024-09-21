import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/mentorship">Mentorship</Link></li>
        <li><Link to="/job-board">Job Board</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/coding-challenge">Coding Challenge</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
