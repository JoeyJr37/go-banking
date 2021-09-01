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
        axios.get(`/api/account`)
            .then(res => {
                this.setState({ data: res.data.recordset});
                // console.log(res);
            }).catch(err => {
                console.log(`Error retrieving data: ${err}`);
            })
        
        axios.get('/api/account/recurring')
            .then(res => {
                // console.log(res);
                this.setState({ recurringDonors: res.data.recordset })
            }).catch(err => {
                console.log(`Error retrieving recurring donors: ${err}`);
            })
    }

    render(){
        const { data, recurringDonors } = this.state;

        return (
            <>
                <h1> Account # </h1>
                <AccountContainer data={data} recurringDonors={recurringDonors} />
            </>
        )
    }
}

export default Home;