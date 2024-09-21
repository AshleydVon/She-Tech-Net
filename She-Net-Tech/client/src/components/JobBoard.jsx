import React, { useState } from 'react';

const JobBoard = () => {
  const [filter, setFilter] = useState('All');

  const jobs = [
    { title: 'Frontend Developer', company: 'TechCorp', category: 'Diversity Friendly' },
    { title: 'Data Analyst', company: 'DataWorld', category: 'Women-led' },
    { title: 'UX Designer', company: 'DesignPro', category: 'Diversity Friendly' },
  ];

  const filteredJobs = filter === 'All' 
    ? jobs 
    : jobs.filter(job => job.category === filter);

  return (
    <div className="job-board">
      <h2>Job Listings</h2>
      <div className="filters">
        <label htmlFor="category">Filter by Category: </label>
        <select id="category" value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Diversity Friendly">Diversity Friendly</option>
          <option value="Women-led">Women-led</option>
        </select>
      </div>
      <ul>
        {filteredJobs.map(job => (
          <li key={job.title}>{job.title} at {job.company}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobBoard;
