import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/reducer';
import { withRouter } from 'react-router-dom';
import './loginForm.css';

class LoginForm extends Component{
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    submitLoginInfo = (e) => {
        e.preventDefault();
        const { username, password } = this.state;
        this.props.login(username, password);
        this.props.history.push('/home');
    }

    render(){

        const { username, password } = this.state;

        return (
            <form className='login-form'>
                <label>
                    Username: 
                    <input value={username} name='username' onChange={this.handleChange} />
                </label>
                <label>
                    Password:
                    <input value={password} name='password' onChange={this.handleChange} />
                </label>
                <button onClick={this.submitLoginInfo} className='submit-btn'> SUBMIT </button>
            </form>
        )
    }
}

export default withRouter(connect(null, { login} )(LoginForm));