import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import AccountContainer from './components/Account/AccountContainer';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      data: [],
    }
  }

  render(){
    return (
      <div>
        <Home />
        <AccountContainer />
      </div>
    )
  }
}

export default App;