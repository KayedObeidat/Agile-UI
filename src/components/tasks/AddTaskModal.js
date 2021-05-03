import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'
import { addTask } from '../../actions/taskActions'

const AddTaskModal = ({ addTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [isCreator, setIsCreator] = useState('');
    const [assignee, setAssignee] = useState('');

    const onSubmit = () => {
        if(title === '' || description === '' || status === '' || isCreator === '') {
            M.toast({html: 'Please check all your fields'})
        }
        else {
            const newTask = {
                title,
                description,
                status,
                isCreator,
                assignee,
            }

            addTask(newTask)

            M.toast({ html: `${title} was added successfully` })

            setTitle('');
            setDescription('');
            setStatus('');
            setIsCreator('');
            setAssignee('');
        }
    }
    
    return <div id='add-task-modal' className="modal" style={modalStyle}>
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
                <input type="text" name='isCreator' value={isCreator} onChange={e => setIsCreator(e.target.value)} />
                    <label htmlFor="isCreator" className="active">
                        Task Creator
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

AddTaskModal.propType = {
addTask: PropTypes.func.isRequired,
}

const modalStyle = {
width: '75%',
height: '75%'
}

export default connect(null, { addTask })(AddTaskModal);