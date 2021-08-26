import React, { Component } from 'react';
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
        console.log(this.state);
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

export default LoginForm;