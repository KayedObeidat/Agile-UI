import { GET_PROJECTS, ADD_PROJECT, PROJECT_ERROR, SET_LOADING } from '../actions/Types'

const initialState = {
    projects: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload,
                loading: false
            }
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case PROJECT_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}