import { GET_TASKS, ADD_TASK, UPDATE_TASK, TASKS_ERROR, SET_LOADING, SET_CURRENT, CLEAR_CURRENT, SEARCH_TASKS } from './Types';
import axios from 'axios'

//Get tasks from the server
export const getTasks = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:3001/tasks')
        const data = await res.json();

        dispatch({
            type: GET_TASKS,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.response.statusText
        })
    }
}

//Add task to the server
export const addTask = (task) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:3001/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_TASK,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.response.statusText
        })
    }
}

//Update task on server
export const updateTask = (task) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`http://localhost:3001/tasks/update/${task._id}`, {
            method: 'PATCH',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // const res = await axios.patch(`http://localhost:3001/tasks/update/${this.state.id}`, {
        //     title: task.title,
        //     description: task.description,
        //     status: task.status,
        //     isCreator: task.isCreator,
        //     assignee: task.assignee
        // })

        const data = await res.json();

        dispatch({
            type: UPDATE_TASK,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.response.statusText
        })
    }
}

//Search Tasks
export const searchTasks = (text) => async dispatch => {
    try {
        setLoading();
        
        const res = await fetch(`http://localhost:3001/tasks?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_TASKS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: TASKS_ERROR,
            payload: err.response.statusText
        })
    }
}

// Set current log
export const setCurrent = task => {
    return {
        type: SET_CURRENT,
        payload: task
    }
}

// Clear current log
export const clearCurrent = task => {
    return {
        type: CLEAR_CURRENT,
    }
}

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}