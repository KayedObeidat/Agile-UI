import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateTask } from '../../actions/taskActions'

const EditTaskModal = ({ current, updateTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [isCreator, setIsCreator] = useState('');
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
        if(title === '' || description === '' || status === '' ) {
            M.toast({ html: 'Please check all fields' })
        } else {
            const upTask = {
                id: current.id,
                title,
                description,
                status,
                isCreator,
                assignee
            }
            
            updateTask(upTask);
            M.toast({ html: `${title} has been updated successfully!` })

        }

    }
     
        return <div id='edit-task-modal' className="modal" style={modalStyle}>
        <div className="modal-content">
            <h4>Edit System Task</h4>

            <div className="row">
                <div className="input-field">
                    <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} placeholder="" />
                    <label htmlFor="title" className="active">
                        Task Title
                    </label>
                </div>
            </div>
    
            <div className="row">
    
                <div className="input-field">
                    <input type="text" name='description' value={description} onChange={e => setDescription(e.target.value)} placeholder="" />
                    <label htmlFor="description" className="active">
                        Task Description
                    </label>
                </div>
            </div>        
    
            <div className="row">
    
                <div className="input-field">
                    <input type="text" name='status' value={status} onChange={e => setStatus(e.target.value)} placeholder="" />
                    <label htmlFor="status" className="active">
                        Task Status
                    </label>
                </div>
            </div> 

                    <div className="row">

            <div className="input-field">  
                <input type="text" name='isCreator' value={isCreator} onChange={e => setIsCreator(e.target.value)} placeholder="" />
                    <label htmlFor="isCreator" className="active">
                        Task Creator
                    </label>
            </div>
        </div>  

        <div className="row">

            <div className="input-field">
                <input type="text" name='assignee' value={assignee} onChange={e => setAssignee(e.target.value)} placeholder="" />
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