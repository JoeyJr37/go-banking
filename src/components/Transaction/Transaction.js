import React from 'react';
import './transaction.css';

const Transaction = ({donor}) => {
    return (
        <section className='transaction-row' key={donor.IndividualProfileId}>
            <h4>{donor.IndividualProfileId}</h4>
            <h4>{donor.DepositDate}</h4>
            <h4>{donor.FullName}</h4>
            <h4>${donor.Amount}</h4>
        </section>
    )
}

export default Transaction;