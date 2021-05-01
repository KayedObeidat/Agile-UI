import { combineReducers } from 'redux';
import userReducer from './userReducer';
import taskReducer from './taskReducer';

export default combineReducers({
    task: taskReducer,
    user: userReducer
})