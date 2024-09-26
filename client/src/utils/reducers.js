import {
  LOGIN_USER,
  LOGOUT_USER,
  ADD_EVENT,
  ADD_COURSE,
  ADD_TO_JOB_BOARD,
  REMOVE_FROM_JOB_BOARD,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loggedIn: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        loggedIn: false,
      };
    case ADD_COURSE:
      return {
        ...state,
        courses: [...state.courses, action.course],
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [...state.events, action.event],
      };
    case ADD_TO_JOB_BOARD:
      return {
        ...state,
        jobBoard: [...state.jobBoard, action.job],
      };
    case REMOVE_FROM_JOB_BOARD:
      return {
        ...state,
        jobBoard: state.jobBoard.filter((job) => job._id !== action._id),
      };
    default:
      return state;
  }
};
