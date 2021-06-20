import React, { useEffect } from 'react'
import ProjectItem from './ProjectItem'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProjects } from '../../actions/projectAction'

const ProjectListModal = ({getProjects, project: {projects, loading}}) => {

    useEffect(() => {
        getProjects();
        // eslint-disable-next-line
    }, [])

    return (
        <div id="project-list-modal" className="modal">
            <div className="modal-content">
                <h4>Projects List</h4>
                <ul className="collection">
                    {!loading && projects !== null && projects.map(project => (
                        <ProjectItem project={project} key={project.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

ProjectListModal.propTypes = {
    project: PropTypes.object.isRequired,
    getProjects: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    project: state.project
})

export default connect(mapStateToProps, {getProjects}) (ProjectListModal);