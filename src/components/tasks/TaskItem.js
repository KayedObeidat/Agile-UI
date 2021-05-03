import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrent } from '../../actions/taskActions'

const TaskItem = ({ task, setCurrent }) => {

    
    return (
        <li className="collection-item ">
            <div className="row ">
              <div className="col s13 m12 ">
                <div className="card blue-grey darken-1 ">
                  <div className="card-content white-text ">
                    <span className="card-title ">{task.title}</span>
                    <p>Description: {task.description === '' ? 'No description' : task.description}</p>
                    <p>Creator: {task.isCreator}</p>
                    <p>Status: {task.status === '' || task.status === ' '? 'No status' : task.status}</p>
                    <p>Assignee: {task.assignee === '' || task.status === ' ' ? 'No assignee': task.assignee}</p>
                  </div>
                  <div className="card-action">
                    <div className="fixed-action-btn-right" id="add-project">
                      <a href="#edit-task-modal" className="btn-floating btn-large indigo darken-3 darken-1 modal-trigger" onClick={() => setCurrent(task)}> 
                          <i className="large material-icons">system_update</i>
                      </a>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </li>
    )
}

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { setCurrent })(TaskItem)
