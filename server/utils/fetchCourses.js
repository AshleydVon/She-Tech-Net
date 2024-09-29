const axios = require('axios');

// Replace 'your_access_token' with the token you fetch from Coursera
const accessToken = 'your_access_token';

// Function to fetch courses from Coursera
async function fetchCourses() {
  try {
    const response = await axios.get('https://api.coursera.org/api/courses.v1', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    console.log('Courses:', response.data);
  } catch (error) {
    console.error('Error fetching courses:', error.response ? error.response.data : error);
  }
}

// Call the function to fetch courses
fetchCourses();
