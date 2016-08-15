import * as types from '../../constants/userListActionType';

export function fetchUserRequest(){
    return {
        type: types.FETCH_USER_REQUEST
    }
}