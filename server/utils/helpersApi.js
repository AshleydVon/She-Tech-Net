const axios = require('axios');
// Function to fetch course data from Coursera using the access token
async function fetchCourseraCourses() {
  const courseraToken = 'VkDKUy19CGP4uiLj9TXZRlLiFzIt'; // Your Coursera access token
  try {
    // Make the API request to Coursera using the token
    const response = await axios.get('https://api.coursera.org/api/courses.v1', {
      headers: {
        'Authorization': `Bearer ${courseraToken}` // Pass the Coursera token
      }
    });
    // Log the data to see the response
    console.log('Courses from Coursera:', response.data);
  } catch (error) {
    console.error('Error fetching Coursera courses:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}
// Function to fetch app info from Indeed using the access token
async function fetchIndeedAppInfo() {
  const indeedToken = 'eyJraWQiOiJiOWVhOWFjMy0zOTM1LTRlNDEtYmQyMy01OTBjNmY5YzA2MzciLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJzdWIiOiJhcHA6NmM3NmYxOWU3MzlhYWE5ZTkxZDFjZDkwZThkYzEyMDE0MjJhOTNiMTgyNDJhNTQ2ODFjYTc2MGVmZDY5YjA4MSIsImFwcF9hY2NvdW50IjoiNGJlYmVkMzg1YmVkNTRkOSIsImF6cCI6IjZjNzZmMTllNzM5YWFhOWU5MWQxY2Q5MGU4ZGMxMjAxNDIyYTkzYjE4MjQyYTU0NjgxY2E3NjBlZmQ2OWIwODEiLCJzY29wZSI6ImVtcGxveWVyX2FjY2VzcyIsImlzcyI6Imh0dHBzOi8vc2VjdXJlLmluZGVlZC5jb20iLCJleHAiOjE3Mjc4NDU2NjksImlhdCI6MTcyNzg0MjA2OX0.qIck2RuVx-_pbzyWkTgY4hyLjni571SJPJsq7LOVAlir6bmKnFzudg-jnTPxklEv95yCiQhKw-9-1kzBL0Czlw'; // Your Indeed access token
  try {
    // Make the API request to Indeed to fetch app info
    const response = await axios.get('https://secure.indeed.com/v2/api/appinfo', {
      headers: {
        'Authorization': `Bearer ${indeedToken}` // Pass the Indeed token here
      }
    });
    // Log the data to see the response
    console.log('App Info from Indeed:', response.data);
  } catch (error) {
    console.error('Error fetching Indeed app info:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}
// Main function to handle API calls for both Coursera and Indeed=
async function main() {
  // Coursera API call
  console.log('Fetching Coursera Courses...');
  await fetchCourseraCourses();
  // Indeed API call
  console.log('Fetching Indeed App Info...');
  await fetchIndeedAppInfo();
}
// Run the main function
main();