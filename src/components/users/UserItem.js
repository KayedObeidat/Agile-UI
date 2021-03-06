import React from 'react'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'

const UserItem = ({ user: { name } }) => {
    const onGrade = () => {
    M.toast({ html: `${name} was clicked!` })
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

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
