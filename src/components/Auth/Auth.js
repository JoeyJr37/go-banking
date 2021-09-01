import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

class Auth extends Component{
    constructor(props){
        super(props)

        this.state = {
            showLoginForm: false,
            showRegistrationForm: false
        }
    }

    revealLoginForm = () => {
        const { showLoginForm } = this.state;
        this.setState({ showLoginForm: !showLoginForm })
    }

    revealRegistrationForm = () => {
        const { showRegistrationForm } = this.state;
        this.setState({ showRegistrationForm: !showRegistrationForm });
    }

    render(){
        const { showLoginForm, showRegistrationForm } = this.state;

        return (
            <div className='home-page'>
                <h1>GLOBAL OFFICE BANK</h1>
                {!showLoginForm && <button className='btn' onClick={this.revealLoginForm}>LOGIN</button>}
                {showLoginForm && <LoginForm />}

                {/* {!showRegistrationForm && <button className='btn' onClick={this.revealRegistrationForm}>Register</button>}
                {showRegistrationForm && <RegistrationForm />} */}
            </div>
        )
    }
}

export default Auth;