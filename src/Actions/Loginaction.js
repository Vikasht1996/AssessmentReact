import * as ActionTypes from './type';
export function success(message) {
    return function (dispatch) {
        dispatch({ type: 'FETCH_LOGIN_SUCCESS', payload: message });
    }
}
