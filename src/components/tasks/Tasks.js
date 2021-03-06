import React, { useEffect } from 'react'
import TaskItem from './TaskItem'
import Preloader from '../layout/Preloader'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTasks } from '../../actions/taskActions'

const Tasks = ({ task: { tasks, loading }, getTasks }) => {

    useEffect(() => {
        getTasks();
        // eslint-disable-next-line
    }, [])

    if(tasks === null) {
        return <Preloader />
    }

    return (
        <ul className="collection with-header">
             <li className="collection-header lighten-4" style={{ backgroundColor: "#051a26" }}>
                 <h3 className="center" style={{color: 'white '}}>System Tasks</h3>
             </li>
             {!loading && tasks.length === 0 ? (<p className="center">No tasks to show...</p>) : (tasks.map(task => <TaskItem task={task} key={task.id} style={{ display: "flex"}} />  ))}


        </ul>
    )
}


Tasks.propTypes = {
    task: PropTypes.object.isRequired,
    getTasks: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    task: state.task,
}) 

export default connect(mapStateToProps, { getTasks })(Tasks);
