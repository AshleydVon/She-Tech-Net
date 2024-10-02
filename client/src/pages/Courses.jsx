import React, { useState, useEffect } from 'react'; // Ensure you import useState and useEffect
import axios from 'axios'; // Make sure axios is installed
import '../styles/mainpages.css';

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses'); // Your Express endpoint
        setCourses(response.data); // Assuming response.data contains the course data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="courses-page">
      <h1>Courses</h1>
      <div className="course-listings">
        {courses.length === 0 ? (
          <p>No courses available at this time.</p>
        ) : (
          courses.map((course) => (
            <div key={course._id} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p><strong>Category:</strong> {course.category}</p>
              <p><strong>Level:</strong> {course.level}</p>
              <p><strong>Enrollments:</strong> {course.enrollments}</p>
              <p><strong>Author:</strong> {course.author.name} ({course.author.email})</p>
              <a href={course.registrationLink} target="_blank" rel="noopener noreferrer">
                Enroll Now
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CoursesPage;
