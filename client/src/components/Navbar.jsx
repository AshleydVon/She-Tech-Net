import { Link } from 'react-router-dom';
import Auth from '../utils/auth'; 
import '../styles/Navbar.css';
import logo from "../assets/logo.png"

function Navbar() {
  function handleLogout() {
    Auth.logout(); // Call the logout function to clear the token and redirect
  }

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
            <button onClick={handleLogout}>Logout</button> {/* Changed from Link to button */}
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
        <img src= {logo}  alt="My Photo" className="avatar" width = '50px' height='50px'/> 
          <h1>
            <Link to="/">SHE-TECH-NET</Link>
          </h1>
        </div>
        <nav className="navbar-links-container">
          {showNavigation()}
        </nav>
     
    </header>
  );
}

export default Navbar;
