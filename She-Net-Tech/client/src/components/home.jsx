import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to SHE-TECH-IN</h1>
      <p>A platform for women to learn, network, and find mentorship in tech.</p>
      <div className="cta-buttons">
        <button onClick={() => window.location.href='/courses'}>Explore Courses</button>
        <button onClick={() => window.location.href='/events'}>Upcoming Events</button>
      </div>
    </div>
  );
};

export default Home;
