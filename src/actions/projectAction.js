import { PROJECT_ERROR, ADD_PROJECT, GET_PROJECTS, SET_LOADING } from './Types';

//Get users from the server
export const getProjects = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:3001/project')
        const data = await res.json();

        dispatch({
            type: GET_PROJECTS,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: PROJECT_ERROR,
            payload: err.response.statusText
        })
    }
}

//Add users to the server
export const addProject = (project) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:3001/project', {
            method: 'POST',
            body: JSON.stringify(project),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_PROJECT,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: PROJECT_ERROR,
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