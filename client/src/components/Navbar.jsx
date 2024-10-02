import { Link } from 'react-router-dom';
import Auth from '../utils/auth'; 
import '../styles/Navbar.css';
import logo from "../assets/logo.png"

function Navbar() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="navbar-links flex-row">
          <li className="mx-1">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="mx-1">
            <Link to="/events">Events</Link>
          </li>
          <li className="mx-1">
            <Link to="/mentorship">Mentorship</Link>
          </li>
          <li className="mx-1">
            <Link to="/jobs">Jobs</Link>
          </li>
          <li className="mx-1">
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      );
    }
    return null;
  }

  return (
    <header className="navbar">
      <div className="navbar-container flex-row">
        {/* Left side: Logo or Name */}
        <img src= {logo}  alt="My Photo" className="avatar" width = '50px' height='350px'/> 
          <h1>
            <Link to="/">SHE-TECH-NET</Link>
          </h1>
        </div>

        {/* Right side: Links */}
        <nav className="navbar-links-container">
          {showNavigation()}
        </nav>
     
    </header>
  );
}

export default Navbar;
