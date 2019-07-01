import *as ActionTypes from '../Actions/type'
const initialstate = {
    message: ''

};
export default (state = initialstate, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_LOGIN_SUCCESS: {
            return { ...state, message: action.payload }
        }

        default:
            return state;
    }
}