// import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { updateUser } from '../../actions/userActions'
// import M from 'materialize-css/dist/js/materialize.min.js'

// const UserItem = ({ user: { id, name }, updateUser }) => {
//     const onDelete = () => {
//     updateUser(id);            
//     M.toast({ html: 'User updated' })
//     }

//     return (
//         <li className="collection-item">
//             <div>
//                 {name} 
//                 <a href="#!" className="secondary-content" onClick={onDelete} >
//                     <i className="material-icons grey-tect">update</i>
//                 </a>
//             </div>
//         </li>
//     )
// }

// TechItem.propTypes = {
//     user: PropTypes.object.isRequired,
//     deleteTech: PropTypes.func.isRequired,
// }

// export default connect(null, { updateUser })(UserItem)

import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateUser } from '../../actions/userActions'
import UserSelectOption from './UserSelectOptions'

const EditUserModal = ({ current, updateUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    useEffect(() => {
        if(current) {
            setName(current.name);
            setEmail(current.email);
            setPassword(current.password)
        }
    }, [current])

    const onSubmit = () => {
        if(name === '' || email === '' || password === '') {
            M.toast({ html: 'Please check your fields' })
        } else {
            const upUser = {
                id: current.id,
                name,
                email,
                password,
                date: new Date()
            }
            
            updateUser(upUser);
            M.toast({ html: `User was updated by ${name}` })

            //Clear Fields
            setName('');
            setPassword('');
            setEmail('');
        }

    }
     
        return <div id='edit-user-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Edit User</h4>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name='name' value={name} onChange={e => setName(e.target.value)} /> 
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} /> 
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} /> 
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>
        </div>
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

EditUserModal.propTypes = {
    current: PropTypes.object,
    updateUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    current: state.user.current
})

export default connect(mapStateToProps, { updateUser })(EditUserModal);