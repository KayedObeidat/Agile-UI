import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { setCurrent } from '../../actions/taskActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const TaskItem = ({ task, setCurrent }) => {
    const onGrade = () => {
        M.toast({ html: 'Task is clicked' })
        }
    
    return (
        <li className="collection-item">
            <div>
            <a href="#edit-task-modal" className={`modal-trigger ${task.isCreator ? 'red-text' : 'blue-text'}`} onClick={() => setCurrent(task)}>{task.title}</a>
            <br />
            <span className="grey-text">
                    <span className="black-text">Description: {task.description}</span> 
            </span>
                <a href="#!" onClick={onGrade} className="secondary-content">
                    <i className="material-icons grey-text">grade</i>
                </a>
            </div>
        </li>
    )
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { setCurrent })(TaskItem)
