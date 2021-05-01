import { GET_USERS, ADD_USER, UPDATE_USER, SET_LOADING, USERS_ERROR, SET_CURRENT, CLEAR_CURRENT } from '../actions/Types'

const initialState = {
    users: null,
    loading: false,
    current: null,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
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
        case UPDATE_USER:
            return {
                ...state,
                user: state.users.map(user => user.id === action.payload.id ? action.payload : user)
            }
        case USERS_ERROR:
            console.error(action.payload);
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}