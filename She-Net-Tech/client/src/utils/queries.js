import { gql } from '@apollo/client';

// Fetch all courses
export const QUERY_COURSES = gql`
  query getCourses($category: String) {
    courses(category: $category) {
      _id
      title
      description
      category
      level
      enrollments
      author {
        name
        email
      }
    }
  }
`;

// Fetch all mentors
export const QUERY_MENTORS = gql`
  query getMentors($industry: String, $yearsOfExperience: Int) {
    mentors(industry: $industry, yearsOfExperience: $yearsOfExperience) {
      _id
      user {
        name
        email
      }
      expertise
      industry
      yearsOfExperience
      availableTimeSlots
    }
  }
`;

// Fetch all jobs
export const QUERY_JOBS = gql`
  query getJobs($isWomenFriendly: Boolean, $supportsDiversity: Boolean) {
    jobs(isWomenFriendly: $isWomenFriendly, supportsDiversity: $supportsDiversity) {
      _id
      company
      position
      description
      applicationLink
      postedDate
      isWomenFriendly
      supportsDiversity
    }
  }
`;

// Fetch all events
export const QUERY_EVENTS = gql`
  query getEvents {
    events {
      _id
      title
      description
      date
      registrationLink
      tags
    }
  }
`;

// Fetch current user data
export const QUERY_USER = gql`
  query getUser {
    user {
      _id
      name
      email
      coursesEnrolled {
        _id
        title
        description
      }
      mentorships {
        _id
        expertise
        industry
      }
    }
  }
`;
