import { reducer } from '../utils/reducers';
import {
  LOGIN_USER,
  LOGOUT_USER,
  ADD_EVENT,
  ADD_COURSE,
  ADD_TO_JOB_BOARD,
  REMOVE_FROM_JOB_BOARD,
} from '../utils/actions';

const initialState = {
  courses: [],
  events: [],
  jobBoard: [],
  loggedIn: false,
};

describe('reducer', () => {
  it('should log in the user', () => {
    const newState = reducer(initialState, { type: LOGIN_USER });
    expect(newState.loggedIn).toBe(true);
  });

  it('should log out the user', () => {
    const newState = reducer({ ...initialState, loggedIn: true }, { type: LOGOUT_USER });
    expect(newState.loggedIn).toBe(false);
  });

  it('should add a new course', () => {
    const course = {
      _id: '1',
      title: 'Intro to JavaScript',
      description: 'A beginner course on JavaScript',
    };
    const newState = reducer(initialState, { type: ADD_COURSE, course });
    expect(newState.courses.length).toBe(1);
    expect(newState.courses[0]).toEqual(course);
  });

  it('should add a new event', () => {
    const event = {
      _id: '1',
      title: 'Tech Conference 2024',
      description: 'A conference about the latest in tech',
    };
    const newState = reducer(initialState, { type: ADD_EVENT, event });
    expect(newState.events.length).toBe(1);
    expect(newState.events[0]).toEqual(event);
  });

  it('should add a job to the job board', () => {
    const job = {
      _id: '1',
      title: 'Frontend Developer',
      company: 'Tech Corp',
    };
    const newState = reducer(initialState, { type: ADD_TO_JOB_BOARD, job });
    expect(newState.jobBoard.length).toBe(1);
    expect(newState.jobBoard[0]).toEqual(job);
  });

  it('should remove a job from the job board', () => {
    const stateWithJob = {
      ...initialState,
      jobBoard: [
        { _id: '1', title: 'Frontend Developer', company: 'Tech Corp' },
        { _id: '2', title: 'Backend Developer', company: 'Tech Solutions' },
      ],
    };
    const newState = reducer(stateWithJob, { type: REMOVE_FROM_JOB_BOARD, _id: '1' });
    expect(newState.jobBoard.length).toBe(1);
    expect(newState.jobBoard[0]._id).toBe('2');
  });
});
