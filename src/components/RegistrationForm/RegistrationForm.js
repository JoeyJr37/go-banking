import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/reducer';

class RegistrationForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: '',
            designationId: ''
        }
    }

    handleChange = (e) => {
        const newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    submitRegistrationInfo = (e) => {
        e.preventDefault();
        const { username, password, designationId } = this.state;
        this.props.register(username, password, designationId);
    }

    render(){

        const { username, password, designationId } = this.state;

        return (
            <form className='registration-form'>
                <label>
                    Username: 
                    <input value={username} name='username' onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <input value={password} name='password' onChange={this.handleChange} />
                </label>
                <label>
                    Designation ID:
                    <input value={designationId} name='designationId' onChange={this.handleChange} />
                </label>
                <button onClick={this.submitRegistrationInfo} className='submit-btn'> SUBMIT </button>
            </form>
        )
    }
}

export default connect(null, { register } )(RegistrationForm);