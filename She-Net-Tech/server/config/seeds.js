const axios = require('axios');
const db = require('./connection');
const { User, Course } = require('../models');
const cleanDB = require('./cleanDB');

// API key and secret for authentication
const API_KEY = '7R99IvcW04F32iBmWGGW2YLQBansXD6ZWynqx9uXnrmLZZMG';
const API_SECRET = 'RCGbpYtW9s5QCStN27GuVtFqn9P3XyVrmvb2TcBaokThbERlmP7AwGlL8hpxlEyu';

db.once('open', async () => {
  await cleanDB('courses', 'courses');
  await cleanDB('users', 'users');

  const users = await User.insertMany([
    {
      name: 'Pamela Washington',
      email: 'pamela@testmail.com',
      password: 'password12345',
      role: 'Instructor',
      skills: ['JavaScript', 'React'],
      bio: 'An experienced software developer.',
    },
    {
      name: 'Elijah Holt',
      email: 'eholt@testmail.com',
      password: 'password12345',
      role: 'Student',
      skills: ['HTML', 'CSS'],
      bio: 'Aspiring web developer.',
    },
  ]);

  console.log('Users seeded');

  try {
    // Make API request to Courseca
    const { data } = await axios.get('https://api.courseca.com/courses', {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'x-api-secret': API_SECRET,
      },
    });

    // Map API data to your Course model
    const courses = data.map((course) => ({
      title: course.title,
      description: course.description,
      category: course.category,
      level: course.level,
      content: course.content,
      author: users[0]._id,
      enrollments: course.enrollments || 0,
    }));

    // Insert courses into your database
    await Course.insertMany(courses);
    console.log('Courses seeded from Courseca API');
  } catch (error) {
    console.error('Error fetching courses from Courseca API:', error);
  }

  process.exit();
});
