import * as types from '../../constants/counterActionType';

let initState = 0;

export default function counter(state = initState, action) {
    switch (action.type) {
        case types.INCREMENT_COUNTER:
            return state + 1;
        case types.DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}