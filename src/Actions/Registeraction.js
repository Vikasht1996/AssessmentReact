import * as ActionTypes from './type';
export function handle()
{
    return function(dispatch)
    {
        dispatch({type:'FETCH_REGISTER_SUCCESS'});
    }
}
