import React from 'react'

const AddProjectButton = () => {
    return (
        <div className="left-fixed-action-btn" style={buttonStyle}>
            <a href="#add-project-modal" className="btn-floating btn-large yellow darken-1 modal-trigger"> 
                <i className="large material-icons">add_location</i>
            </a>
            
        </div>
    )
}

const buttonStyle = {
    left: '5000px'
}

export default AddProjectButton;