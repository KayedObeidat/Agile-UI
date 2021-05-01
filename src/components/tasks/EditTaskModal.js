import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateTask } from '../../actions/taskActions'
import UserSelectOptions from '../users/UserSelectOptions'

const EditTaskModal = ({ current, updateTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [isCreator, setIsCreator] = useState(false);
    const [assignee, setAssignee] = useState('');

    useEffect(() => {
        if(current) {
            setTitle(current.title);
            setDescription(current.description);
            setStatus(current.status)
            setIsCreator(current.isCreator)
            setAssignee(current.assignee)
        }
    }, [current])

    const onSubmit = () => {
        if(title === '' || description === '' || status === '' || isCreator === '') {
            M.toast({ html: 'Please check all fields' })
        } else {
            const upTask = {
                id: current.id,
                title,
                description,
                status,
                isCreator,
                assignee,
                date: new Date()
            }
            
            updateTask(upTask);
            M.toast({ html: `Task has been updated successfully}` })

            setTitle('');
            setDescription('');
            setStatus('');
            setIsCreator(false);
            setAssignee('');
        }

    }
     
        return <div id='edit-task-modal' className="modal" style={modalStyle}>
        <div className="modal-content">
            <h4>Enter System Task</h4>

            <div className="row">
                <div className="input-field">
                    <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} />
                    <label htmlFor="title" className="active">
                        Task Title
                    </label>
                </div>
            </div>
    
            <div className="row">
    
                <div className="input-field">
                    <input type="text" name='description' value={description} onChange={e => setDescription(e.target.value)} />
                    <label htmlFor="description" className="active">
                        Task Description
                    </label>
                </div>
            </div>        
    
            <div className="row">
    
                <div className="input-field">
                    <input type="text" name='status' value={status} onChange={e => setStatus(e.target.value)} />
                    <label htmlFor="status" className="active">
                        Task Status
                    </label>
                </div>
            </div>  
    
            <div className="row">
    
                <div className="input-field">
                <label>
                        <input type="checkbox" className="filled-in" checked={isCreator} value={isCreator} onChange={e => setIsCreator(!isCreator)} />
                        Creator
                    </label>
                </div>
            </div>  
    
            <div className="row">
    
                <div className="input-field">
                    <input type="text" name='assignee' value={assignee} onChange={e => setAssignee(e.target.value)} />
                    <label htmlFor="assignee" className="active">
                        Task Assignee
                    </label>
                </div>
            </div>  
    
        </div>
        <div className="modal-footer">
            <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
        </div>
    </div>
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

EditTaskModal.propTypes = {
    current: PropTypes.object,
    updateTask: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    current: state.task.current
})

export default connect(mapStateToProps, { updateTask })(EditTaskModal);