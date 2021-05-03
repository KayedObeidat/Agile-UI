import React from 'react'
import PropTypes from 'prop-types'
import M from 'materialize-css/dist/js/materialize.min.js'

const ProjectItem = ({ project: { title } }) => {
    const onGrade = () => {
    M.toast({ html: `${title} was clicked!` })
    }

    return (
        <li className="collection-item">
            <div>
                {title} 
                <a href="#!" className="secondary-content" onClick={onGrade} >
                    <i className="material-icons grey-tect">grade</i>
                </a>
            </div>
        </li>
    )
}

ProjectItem.propTypes = {
    project: PropTypes.object.isRequired,
}

export default ProjectItem
