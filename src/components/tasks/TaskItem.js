import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setCurrent } from '../../actions/taskActions'
import ListGroup from 'react-bootstrap/ListGroup'
import { Fragment } from 'react'


const TaskItem = ({ task, setCurrent }) => {
   
    return (


        <li className="collection-item lighten-5" style={{ backgroundColor: "#006064 " }} >
            <div className="row" style={{ position: "relative", display: "flex" }}>
              <div className="col s13 m6" style={{display:"flex", flexWrap:"wrap;"}}>
                <div className="card blue-grey darken-1 " style={{ width: "300px", display: "flex" }}>
                  <div className="card-content white-text accent-2" style={{ backgroundColor: "#051a26", width: "300px" }}>
                    <a href="#show-task-content" className=" modal-trigger" style={{fontWeight: "bold", color: "white", fontSize: "20px" }} onClick={() => setCurrent(task)}> {task.title} </a>
                    <p style={{fontWeight: 'bold', color: 'white'}}>Status: {task.status === '' || task.status === ' '? 'No status' : task.status}</p>
                    <div className="fixed-action-btn-left" id="add-project" style={{ position: "relative", right: "-210px", top: "-50px"}}>
                      <a href="#edit-task-modal" className="btn-floating btn-large darken-4 modal-trigger" onClick={() => setCurrent(task)}> 
                          <i className="large material-icons" style={{ backgroundColor: '#006064' }}>border_color</i>
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
