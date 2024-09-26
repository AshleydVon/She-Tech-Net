import React, { createContext, useContext } from 'react';
import { useReducer } from 'react';
import { reducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    courses: [],
    events: [],
    jobBoard: [],
    loggedIn: false,
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

// Export StoreProvider and useStoreContext
export { StoreProvider, useStoreContext };
