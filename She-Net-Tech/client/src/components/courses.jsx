import React, { useState } from 'react';

const Courses = () => {
  const [filter, setFilter] = useState('All');

  const courses = [
    { title: 'Intro to Coding', category: 'Coding' },
    { title: 'Data Science for Beginners', category: 'Data Science' },
    { title: 'UX/UI Design Fundamentals', category: 'Design' },
    { title: 'AI & Machine Learning', category: 'AI' },
  ];

  const filteredCourses = filter === 'All' 
    ? courses 
    : courses.filter(course => course.category === filter);

  return (
    <div className="courses">
      <h2>Courses</h2>
      <div className="filters">
        <label htmlFor="category">Filter by Category: </label>
        <select id="category" value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Coding">Coding</option>
          <option value="Data Science">Data Science</option>
          <option value="Design">Design</option>
          <option value="AI">AI</option>
        </select>
      </div>
      <ul>
        {filteredCourses.map(course => (
          <li key={course.title}>{course.title} - {course.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
