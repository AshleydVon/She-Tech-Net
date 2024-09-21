import React, { useState } from 'react';

const Mentorship = () => {
  const [filter, setFilter] = useState('All');

  const mentors = [
    { name: 'Jane Doe', industry: 'Software Engineering', experience: '5 years' },
    { name: 'Maria Garcia', industry: 'Data Science', experience: '10 years' },
    { name: 'Lisa Wong', industry: 'UX/UI Design', experience: '7 years' },
  ];

  const filteredMentors = filter === 'All' 
    ? mentors 
    : mentors.filter(mentor => mentor.industry === filter);

  return (
    <div className="mentorship">
      <h2>Find a Mentor</h2>
      <div className="filters">
        <label htmlFor="industry">Filter by Industry: </label>
        <select id="industry" value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Software Engineering">Software Engineering</option>
          <option value="Data Science">Data Science</option>
          <option value="UX/UI Design">UX/UI Design</option>
        </select>
      </div>
      <ul>
        {filteredMentors.map(mentor => (
          <li key={mentor.name}>
            {mentor.name} - {mentor.industry}, {mentor.experience}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mentorship;
