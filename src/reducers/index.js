import { combineReducers } from 'redux';
import userReducer from './userReducer';
import taskReducer from './taskReducer';
import projectReducer from './projectReducer';

export default combineReducers({
    task: taskReducer,
    user: userReducer,
    project: projectReducer
})