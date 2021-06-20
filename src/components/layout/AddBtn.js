import React, { Fragment } from 'react'

const AddBtn = () => {
    return (
        <Fragment>
            <div className="fixed-action-btn ">
            <a href="#add-task-modal" className="btn-floating btn-large darken-1 modal-trigger" style={{ backgroundColor: "#082837" }}> 
                <i className="large material-icons">add</i>
            </a>  
            <ul>
                <li>
                    <a href="#user-list-modal" className="btn-floating modal-trigger" style={{ backgroundColor: "#006064" }}>
                        <i className="material-icons">person</i>
                    </a>
                </li>
                <li>
                    <a href="#add-user-modal" className="btn-floating modal-trigger" style={{ backgroundColor: "#051a26" }}>
                        <i className="material-icons">person_add</i>
                    </a>
                </li>
            </ul>        
        </div>
        </Fragment>
    )
}

export default AddBtn;