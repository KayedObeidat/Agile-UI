import React, { Fragment } from 'react'

const AddBtn = () => {
    return (
        <Fragment>
            <div className="fixed-action-btn ">
            <a href="#add-task-modal" className="btn-floating btn-large blue-grey darken-1 modal-trigger"> 
                <i className="large material-icons">add</i>
            </a>  
            <ul>
                <li>
                    <a href="#user-list-modal" className="btn-floating green modal-trigger">
                        <i className="material-icons">person</i>
                    </a>
                </li>
                <li>
                    <a href="#add-user-modal" className="btn-floating red modal-trigger">
                        <i className="material-icons">person_add</i>
                    </a>
                </li>
            </ul>        
        </div>
        </Fragment>
    )
}

export default AddBtn;