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

// export const login = async (username, password) => {
//         try {
//             const response = await axios.post('/api/login', {username, password});
//             console.log(response);
            
//             return {
//                 type: LOGIN,
//                 payload: response
//             };
//         } catch(err) {
//                 console.log(`Error logging in user: ${err}`);
//         }
// }

export const login = (username, password) => {
    const data = axios.post('/api/login', { username, password }).then(res => res.data);
    console.log(data);

    return {
        type: LOGIN,
        payload: data
    }
}

const reducer = (state = initialState, action) => {

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
                errorMessages: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;