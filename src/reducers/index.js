import { combineReducers } from "redux";
import { firebaseReducer } from 'react-redux-firebase';
import { jobsReducer } from "./jobsReducer";
import authReducer from "./authReducer";


export default combineReducers({
    auth: authReducer,
    jobs: jobsReducer,
    firebase: firebaseReducer
})