import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({ user: { name } }) => {
    const onGrade = () => {
    M.toast({ html: 'User is clicked' })
    }

    return (
        <li className="collection-item">
            <div>
                {name} 
                <a href="#!" className="secondary-content" onClick={onGrade} >
                    <i className="material-icons grey-tect">grade</i>
                </a>
            </div>
        </li>
    )
}

TechItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default TechItem
