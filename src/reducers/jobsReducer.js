import {
  START_FETCH,
  ERROR_FETCH,
  SUCCESS_FETCH,
  END_FETCH,
} from "../actions/types";

// import { combineReducers } from "redux";
// import { firebaseReducer } from 'react-redux-firebase'

const initialState = {
  loading: false,
  error: null,
  jobs: [],
};

export const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case SUCCESS_FETCH:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
        error: false,
      };
    case ERROR_FETCH:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case END_FETCH:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

// export default combineReducers({
//     jobs: jobsReducer,
//     firebase: firebaseReducer
// });
