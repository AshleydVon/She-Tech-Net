const axios = require('axios');
const db = require('./connection');
const { User, Course, Event, Job, Mentorship } = require('../models');
const cleanDB = require('./cleanDB');

// Public API for random user data
const RANDOM_USER_API = 'https://randomuser.me/api/?results=10';
const COURSE_API = 'https://api.courseca.com/courses'; // Hypothetical external API for course data

// API keys for authentication if needed
const API_KEY = 'YOUR_API_KEY';
const API_SECRET = 'YOUR_API_SECRET';

// Helper function to fetch random users from randomuser.me API
const fetchRandomUsers = async (count = 10) => {
  try {
    const { data } = await axios.get(RANDOM_USER_API, { params: { results: count } });
    return data.results.map((user) => ({
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      password: 'password12345',
      role: Math.random() > 0.5 ? 'Instructor' : 'Student', 
      skills: ['JavaScript', 'HTML', 'CSS', 'React'][Math.floor(Math.random() * 4)], 
      bio: `${user.name.first} is an aspiring developer interested in web development.`,
    }));
  } catch (error) {
    console.error('Error fetching random users:', error);
    return [];
  }
};

// Helper function to fetch courses from a public API
const fetchCourses = async (instructors) => {
  try {
    const { data } = await axios.get(COURSE_API, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'x-api-secret': API_SECRET,
      },
    });

    // Map API data to match the Course schema
    return data.map((course) => ({
      title: course.title,
      description: course.description,
      category: course.category || 'General', 
      level: course.level || 'Beginner', 
      content: course.content || 'Course content unavailable',
      author: instructors[Math.floor(Math.random() * instructors.length)]._id, 
      enrollments: Math.floor(Math.random() * 500), 
    }));
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
};

// Seed Jobs
const seedJobs = async () => {
  const jobs = [
    {
      company: 'TechCorp',
      position: 'Frontend Developer',
      description: 'Work on exciting frontend projects using React and JavaScript.',
      applicationLink: 'https://job.example.com/apply/frontend',
      isWomenFriendly: true,
    },
    {
      company: 'InnoSoft',
      position: 'Backend Developer',
      description: 'Join a team of backend developers to build scalable services.',
      applicationLink: 'https://job.example.com/apply/backend',
      isWomenFriendly: false,
    },
    {
      company: 'CreativeLabs',
      position: 'Fullstack Developer',
      description: 'Work on web projects using MERN stack.',
      applicationLink: 'https://job.example.com/apply/fullstack',
      isWomenFriendly: true,
    },
    {
      company: 'AI Revolution',
      position: 'AI Engineer',
      description: 'Build next-gen AI systems using machine learning.',
      applicationLink: 'https://job.example.com/apply/ai-engineer',
      isWomenFriendly: false,
    },
  ];

  await Job.insertMany(jobs);
  console.log('Jobs seeded');
};

// Seed Events
const seedEvents = async () => {
  const events = [
    {
      title: 'JavaScript Bootcamp',
      description: 'A comprehensive bootcamp on JavaScript.',
      registrationLink: 'https://event.example.com/register/js-bootcamp',
      tags: 'JavaScript, Bootcamp',
    },
    {
      title: 'React Conference',
      description: 'A conference for React developers.',
      registrationLink: 'https://event.example.com/register/react-conf',
      tags: 'React, Conference',
    },
    {
      title: 'Fullstack Development Workshop',
      description: 'Learn fullstack development with hands-on projects.',
      registrationLink: 'https://event.example.com/register/fullstack-workshop',
      tags: 'Fullstack, Workshop',
    },
    {
      title: 'Women in Tech Meetup',
      description: 'Networking and mentorship for women in tech.',
      registrationLink: 'https://event.example.com/register/women-in-tech',
      tags: 'Women, Tech, Meetup',
    },
  ];

  await Event.insertMany(events);
  console.log('Events seeded');
};

// Seed Mentorships
const seedMentorships = async (users) => {
  const mentorships = [
    {
      mentor: {
        userId: users[0]._id, 
        expertise: 'Fullstack Development',
        availableTimeSlots: ['Monday 10:00 AM', 'Wednesday 2:00 PM'],
      },
    },
    {
      mentor: {
        userId: users[1]._id, 
        expertise: 'Web Design',
        availableTimeSlots: ['Tuesday 3:00 PM', 'Thursday 4:00 PM'],
      },
    },
    {
      mentor: {
        userId: users[2]._id, 
        expertise: 'Machine Learning',
        availableTimeSlots: ['Friday 11:00 AM', 'Sunday 1:00 PM'],
      },
    },
    {
      mentor: {
        userId: users[3]._id,
        expertise: 'Cloud Computing',
        availableTimeSlots: ['Wednesday 4:00 PM', 'Thursday 5:00 PM'],
      },
    },
  ];

  await Mentorship.insertMany(mentorships);
  console.log('Mentorships seeded');
};

// Main Seeding Function
const seedDatabase = async () => {
  try {
    await cleanDB('Courses', 'courses');
    await cleanDB('Users', 'users');
    await cleanDB('Events', 'events');
    await cleanDB('Jobs', 'jobs');
    await cleanDB('Mentorships', 'mentorships');

    console.log('Database cleaned successfully');

    // Fetch random users and seed them
    const randomUsers = await fetchRandomUsers(10);
    const users = await User.insertMany(randomUsers);
    console.log('Users seeded');

    // Fetch courses and seed them
    const courses = await fetchCourses(users.filter((u) => u.role === 'Instructor')); 
    await Course.insertMany(courses);
    console.log('Courses seeded from API');

    // Seed static data for jobs, events, and mentorships
    await seedJobs();
    await seedEvents();
    await seedMentorships(users);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding the database:', error);
    process.exit(1);
  }
};

// Connect to database and seed
db.once('open', seedDatabase);
