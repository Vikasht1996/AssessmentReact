import *as ActionTypes from '../Actions/type'

const initialstate = {
    message: ''


};
export default (state = initialstate, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_REGISTER_SUCCESS: {

            return { ...state, }
        }

        default:
            return state;
    }
}