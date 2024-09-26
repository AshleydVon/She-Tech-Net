import { gql } from '@apollo/client';

export const QUERY_COURSES = gql`
  query getCourses {
    courses {
      _id
      title
      description
    }
  }
`;

export const QUERY_EVENTS = gql`
  query getEvents {
    events {
      _id
      title
      date
    }
  }
`;

export const QUERY_JOBS = gql`
  query getJobs {
    jobs {
      _id
      title
      company
      location
    }
  }
`;
