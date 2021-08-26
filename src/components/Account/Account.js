import React from 'react';
import Transaction from '../Transaction/Transaction';
import './account.css';

const Account = ({ total, monthly, transactions }) => {
    return (
        <main className='main-content-container'>
            <header className='account-header'>
                <h2>ACCOUNT</h2>
            </header>

            <section className='account-totals-container'>
                <section className='total-account-value-container'>
                    <h3 className='total-value-header'>Total Account Value</h3>
                    <h4 className='total-value'>${total}</h4>
                </section>
                <section className='monthly-cash-flow-container'>
                    <h3 className='monthly-cash-flow-header'>Monthly Cash Flow</h3>
                    <h4 className='monthly-cash-flow'>${monthly}</h4>
                </section>
            </section>

            <section className='transactions-container'>
                <section className='transactions-header'>
                    <h4>Deposit Date</h4>
                    <h4>Donor</h4>
                    <h4>Amount</h4>
                </section>
                {transactions.map(donor => {
                    return <Transaction donor={donor} />
                })}
            </section>
        </main>
    )
}

export default Account;