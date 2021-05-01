import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addUser } from '../../actions/userActions'

const AddUserModal = ({ addUser }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')

    const onSubmit = () => {
        if (name === '' || email === '' || password === '' || age === '') {
            M.toast({html: 'Please check all fields'});
        } 
        else {
            addUser({
                name,
                email,
                password,
                age
            })

            M.toast({html: `${name} was added successfully!!`})

            setName('');
            setEmail('');
            setPassword('');
            setAge('');
        }
    }

    return (
        <div id='add-user-modal' className="modal">
            <div className="modal-content">
            <h4>New User</h4>
            <div className="row">
            <div className="input-field">
                <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
                <label htmlFor="name" className="active">
                    Name
                </label>
            </div>
            </div>

            <div className="row">
                <div className="input-field">
                <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} />
                <label htmlFor="email" className="active">
                        Email
                </label>
                
                </div>
            </div>

            <div className="row">
                <div className="input-field">
                <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />
                <label htmlFor="password" className="active">
                        Password
                </label>

                </div>
            </div>

                <div className="row">
                <div className="input-field">
                <input type="text" name='age' value={age} onChange={e => setAge(e.target.value)} />
                <label htmlFor="age" className="active">
                        Age
                </label>

                </div>
                </div>    

            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>

            </div>
        </div>
    )
}

AddUserModal.propTypes = {
    addUser: PropTypes.func.isRequired,
}

export default connect(null, { addUser })(AddUserModal);