import React, { Component } from 'react';
import AccountContainer from '../Account/AccountContainer';
import axios from 'axios';

class Home extends Component{
    constructor(props){
        super(props)

        this.state = {
            data: [],
            recurringDonors: [],
        }
    }

    componentDidMount(){
        axios.post(`/api/account`)
            .then(res => {
                // this.setState({ data: res.data});
                console.log(res);
            }).catch(err => {
                console.log(`Error retrieving data: ${err}`);
            })
        
        axios.post('/api/account/recurring')
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(`Error retrieving recurring donors: ${err}`);
            })
    }

    render(){
        const { data, recurringDonors } = this.state;

        return (
            <>
                {/* <AccountContainer data={data} recurringDonors={recurringDonors} /> */}
                <h1> Welcome to your Account </h1>
            </>
        )
    }
}

export default Home;