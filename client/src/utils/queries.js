import { gql } from '@apollo/client';

export const QUERY_COURSES = gql`
  query getCourses {
    courses {
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

export const QUERY_MENTORSHIPS = gql`
  query getMentorships($industry: String, $yearsOfExperience: Int) {
    mentorships(industry: $industry, yearsOfExperience: $yearsOfExperience) {
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

export const QUERY_JOBS = gql`
  query getJobs {
    jobs {
      _id
      company
      position
      description
      applicationLink
      postedDate
      isWomenFriendly
    }
  }
`;

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

export const QUERY_USERS = gql`
  query getUsers {
    users {
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
