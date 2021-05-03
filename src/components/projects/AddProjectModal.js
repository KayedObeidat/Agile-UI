import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'
import { addProject } from '../../actions/projectAction'

const AddProjectModal = ({ addProject }) => {
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    const onSubmit = () => {
        if(title === '') {
            M.toast({html: 'Please check all your fields'})
        }
        else {
            const newProject = {
                title,
                completed
            }

            addProject(newProject)

            M.toast({ html: `${title} was added successfully` })

            setTitle('');
            setCompleted(false);
        }
    }
    
    return <div id='add-project-modal' className="modal">
    <div className="modal-content">
        <h4>Enter System Project</h4>
        <div className="row">

            <div className="input-field">
                <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} />
                <label htmlFor="title" className="active">
                    Project Title
                </label>
            </div>
        </div>      

        <div className="row">

            <div className="input-field">
            <p>
                <label>
                    <input type="checkbox" name='completed' value={completed} onChange={e => setCompleted(e.target.value)}/>
                    <span>Completed</span>
                </label>
            </p>
            </div>
        </div>  

    </div>
    <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
    </div>
</div>
}

AddProjectModal.propType = {
addProject: PropTypes.func.isRequired,
}

export default connect(null, { addProject })(AddProjectModal);