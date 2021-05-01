import { GET_USERS, ADD_USER, USERS_ERROR, SET_LOADING, UPDATE_USER } from './Types';
import axios from 'axios'

//Get users from the server
export const getUsers = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:3001/users')
        const data = await res.json();

        dispatch({
            type: GET_USERS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: USERS_ERROR,
            payload: err.response.payload
        })
    }
}

//Add users to the server
export const addUser = (user) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:3001/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_USER,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: USERS_ERROR,
            payload: err.response.statusText
        })
    }
}

//Update user on server
export const updateUser = (user) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`http://localhost:3001/users/update/${user.id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_USER,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: USERS_ERROR,
            payload: err.response.statusText
        })
    }
}

//Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}