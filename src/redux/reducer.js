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
    const response = axios.post('/api/login', {username, password}).then(res => res.data)
        .catch(err => console.log(err));
    
        console.log(response);

        return {
            type: LOGIN,
            payload: response
        }
}

const reducer = (state = initialState, action) => {
    console.log(action.payload);

    switch(action.type){

        case `${LOGIN}_PENDING`: {
            return {
                ...state,
            }
        }
        case `${LOGIN}_FULFILLED`: {
            return {
                designationId: action.payload.id
            }
        }
        case `${LOGIN}_REJECTED`: {
            return {
                ...state,
                errorMessages: action.paylod
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;