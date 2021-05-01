import { ADD_TASK, GET_TASKS, UPDATE_TASK, TASKS_ERROR, SEARCH_TASKS, SET_LOADING, SET_CURRENT, CLEAR_CURRENT } from '../actions/Types';

const initialState = {
    tasks: null,
    error: null,
    loading: false,
    current: null
}

export default (state = initialState, action) => {
    switch(action.payload) {
        case ADD_TASK:
            return {
                ...state,
                tasks: action.payload,
                loading: false
            }
        case GET_TASKS:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                loading: false
            }
        case UPDATE_TASK:
            return {
                ...state,
                task: state.tasks.map(task => task.id === action.payload ? action.payload : task )
            }
        case SEARCH_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case SET_CURRENT: 
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT: 
            return {
                ...state,
                current: null
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case TASKS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}