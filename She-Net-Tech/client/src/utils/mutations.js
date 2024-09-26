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
  mutation addEvent($title: String!, $description: String!) {
    addEvent(title: $title, description: $description) {
      _id
      title
      description
    }
  }
`;

export const ADD_JOB = gql`
  mutation addJob($title: String!, $company: String!) {
    addJob(title: $title, company: $company) {
      _id
      title
      company
    }
  }
`;
