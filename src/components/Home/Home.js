import React, { Component } from 'react';
import AccountContainer from '../Account/AccountContainer';
import { connect } from 'react-redux';
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
        const { id } = this.props.id;
        console.log(id);
        
    }

    request = () => {
        const { id } = this.props;

        if (id === 1234) {
            axios.get(`/api/account/${id}`)
                .then(res => {
                    this.setState({ data: res.data })
                }).catch(err => {
                    console.log(`Error retrieving account data: ${err}`);
                })
        
            axios.get(`/api/account/recurring/${id}`)
                .then(res => {
                    this.setState({ data: res.data })
                }).catch(err => {
                    console.log(`Error retrieving recurring donors: ${err}`);
                })

        } else {
            axios.get(`/api/account/${id}`)
                .then(res => {
                    this.setState({ data: res.data.recordset});
                }).catch(err => {
                    console.log(`Error retrieving account data: ${err}`);
                })
        
            axios.get(`/api/account/recurring/${id}`)
                .then(res => {
                    this.setState({ recurringDonors: res.data.recordset })
                }).catch(err => {
                    console.log(`Error retrieving recurring donors: ${err}`);
                })
        }
    }

    logout = () => {
        axios.post('/api/logout')
          .then(() => {
            this.props.history.push('/');
          }).catch(err => console.log(err));
      }

    render(){
        const { data, recurringDonors } = this.state;

        return (
            <>
                <button onClick={this.logout}>LOGOUT</button>
                <button onClick={this.request}>REQUEST INFO</button>
                <h1> Account # </h1>

                {(data !== []) && <AccountContainer data={data} recurringDonors={recurringDonors} /> }

            </>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    
    return {
        id: state.designationId,
    }
}
export default connect(mapStateToProps)(Home);