import axios from "axios";

const initialState = {
    designationId: ''
}

const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';

export const register = (username, password, designationId) => {
    axios.post('/api/register', { username, password, designationId})
        .then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
}

export const login = (username, password) => {
    const data = axios.post('/api/login', { username, password})
        .then(res => {
            console.log(res.data.id);
            return res.data.id;
        }).catch(err => {
            console.log(err);
    })
    return {
        type: LOGIN,
        payload: data
    }
}

const reducer = (state = initialState, action) => {
    console.log(action.payload);
    
    switch(action.type){

        case `${LOGIN}_PENDING`: {
            console.log(`Pending fulfillment...`)
        }
        case `${LOGIN}_FULFILLED`: {
            return {
                designationId: action.payload
            }
        }
        case `${LOGIN}_REJECTED`: {
            console.log(`Error fulfilling promise!`)
        }
        default: {
            return state;
        }
    }
}

export default reducer;