import React, { Component } from 'react';
import './home.css';
import LoginForm from '../LoginForm/LoginForm';

class Home extends Component{
    constructor(props){
        super(props)

        this.state = {
            showLoginForm: false
        }
    }

    revealLoginForm = () => {
        const { showLoginForm } = this.state;
        this.setState({ showLoginForm: !showLoginForm })
    }

    render(){
        const { showLoginForm } = this.state;

        return (
            <div className='home-page'>
                <h1>GLOBAL OFFICE BANK</h1>
                {!showLoginForm && <button className='login-btn' onClick={this.revealLoginForm}>LOGIN</button>}
                {showLoginForm && <LoginForm />}
            </div>
        )
    }
}

export default Home;