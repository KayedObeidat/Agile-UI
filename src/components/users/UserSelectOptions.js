import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/userActions'
const UserSelectOptions = ({getUsers, user: {users, loading}}) => {
    useEffect(() => {
        getUsers();
    }, [])

    return (
        !loading && users !== null && users.map(user => <option key={user._id} value={`${user.name}`}>
            {user.name}
        </option>)
    )
}

UserSelectOptions.propTypes = {
    user: PropTypes.object.isRequired,
    getUsers: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect (mapStateToProps, { getUsers }) (UserSelectOptions);