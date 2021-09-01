import React, { Component } from 'react';
import Account from './Account';

class AccountContainer extends Component{
    constructor(props){
        super(props)

        this.state = {
            totalAccountValue: '',
            monthlyCashFlow: '',
        }
    }

    calculateTotalAccountValue = () => {
        const { data } = this.props;
        const amtArr = data.map(donor => donor.Amount);
        const totalAccountValue = amtArr.reduce((curr, acc) => {
            return curr + acc;
        }, 0);
        this.setState({ totalAccountValue });
    }

    calculateMonthlyCashFlow = () => {
        const { data, recurringDonors } = this.props;

        // console.log(recurringDonors);
        
        const mappedRecurringDonors = recurringDonors.map(donor => {
            return data.find(donorObj => donorObj.IndividualProfileId === donor.IndividualProfileId)
        });
        
        // console.log(mappedRecurringDonors);

        const recurringAmounts = mappedRecurringDonors.map(donor => donor.Amount);

        const monthlyCashFlow = recurringAmounts.reduce((curr, acc) => {
            return curr + acc;
        }, 0);

        // console.log(monthlyCashFlow);

        this.setState({ monthlyCashFlow })
        
    }

    componentDidMount(){
        this.calculateTotalAccountValue();
        this.calculateMonthlyCashFlow();
    }

    render(){
        const { data } = this.props;
        const { totalAccountValue, monthlyCashFlow} = this.state;

        return (
            <Account 
                total={totalAccountValue} 
                monthly={monthlyCashFlow} 
                transactions={data} />
        )
    }
}

export default AccountContainer;