import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import AccountContainer from './components/Account/AccountContainer';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      data: [],
      recurringDonors: [],
    }
  }

  componentDidMount(){
    // axios.get('/api/my-account/248301')
    //   .then(res => {
    //     // console.log(res.data.recordset);
    //     this.setState({ data: res.data.recordset})
    //   })
    //   .catch(err => console.log(err));

    // axios.get('/api/my-account/recurring/248301')
    //   .then(res => this.setState({ recurringDonors: res.data.recordset }))
    //   .catch(err => console.log(err));
  }

  render(){

    const { data, recurringDonors } = this.state;

    return (
      <div>
        <Home />
        {/* <AccountContainer data={data} recurringDonors={recurringDonors}/> */}
      </div>
    )
  }
}

export default App;