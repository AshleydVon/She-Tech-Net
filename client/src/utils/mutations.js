import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($title: String!, $description: String!, $date: String!, $registrationLink: String!, $tags: [String]) {
    addEvent(title: $title, description: $description, date: $date, registrationLink: $registrationLink, tags: $tags) {
      _id
      title
      description
      date
      registrationLink
      tags
    }
  }
`;

export const ADD_JOB = gql`
  mutation addJob($title: String!, $company: String!, $description: String!, $applicationLink: String!, $postedDate: String!, $isWomenFriendly: Boolean!) {
    addJob(title: $title, company: $company, description: $description, applicationLink: $applicationLink, postedDate: $postedDate, isWomenFriendly: $isWomenFriendly) {
      _id
      title
      company
      description
      applicationLink
      postedDate
      isWomenFriendly
    }
  }
`;

export const ADD_COURSE = gql`
  mutation addCourse($title: String!, $description: String!, $category: String!, $level: String!, $enrollments: Int!) {
    createCourse(title: $title, description: $description, category: $category, level: $level, enrollments: $enrollments) {
      _id
      title
      description
      category
      level
      enrollments
    }
  }
`;
