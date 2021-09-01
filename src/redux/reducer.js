const initialState = {
    designationId: ''
}

const DISPLAY_ACCOUNT = 'DISPLAY_ACCOUNT';

export const displayAccount = (designationId) => {
    return {
        type: DISPLAY_ACCOUNT,
        payload: designationId
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case TYPE: {
            return {
                ...state,
                designationId: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;