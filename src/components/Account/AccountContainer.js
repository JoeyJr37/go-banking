import React, { Component } from 'react';
import data from '../../data/MOCK_DATA';
import Account from './Account';

class AccountContainer extends Component{
    constructor(props){
        super(props)

        this.state = {
            data: data,
            recurringDonors: [],
            totalAccountValue: '',
            monthlyCashFlow: '',
        }
    }

    calculateTotalAccountValue = () => {
        const amtArr = data.map(donor => donor.Amount);
        const totalAccountValue = amtArr.reduce((curr, acc) => {
            return curr + acc;
        }, 0);
        this.setState({ totalAccountValue });
    }

    calculateMonthlyCashFlow = () => {
        const recurringDonors = data.filter(user => user.IsRecurringOrNotRecurring);
        const monthlyCashFlow = recurringDonors.map(donor => donor.Amount).reduce((curr, acc) => {
            return curr + acc
        }, 0);
        this.setState({ recurringDonors, monthlyCashFlow });
    }

    componentDidMount(){
        this.calculateTotalAccountValue();
        this.calculateMonthlyCashFlow();
    }

    render(){
        // console.log(this.state);
        const { data, totalAccountValue, monthlyCashFlow} = this.state;

        return (
            <Account 
                total={totalAccountValue} 
                monthly={monthlyCashFlow}
                transactions={data} />
            // <h2> Account Info </h2>
        )
    }
}

export default AccountContainer;