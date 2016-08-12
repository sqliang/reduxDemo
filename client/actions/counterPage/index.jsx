import * as types from '../../constants/counterActionType';


export function increment(){
    return {
        type: types.INCREMENT_COUNTER
    }
}

export function decrement() {
    return {
        type: types.DECREMENT_COUNTER
    }
}

//返回一个函数,包含dispatch 和getState两个参数,dispatch用于执行action的方法,getState返回state
export function incrementIfOdd() {
    return (dispatch, getState) => {
        const { counter } = getState();
        if (counter % 2 === 0) {
            return;
        }else{
            dispatch(increment());
        }
    }
}

//返回一个函数,包含dispatch一个参数,用于执行action的方法,延迟800ms
export function incrementAsync(delay = 800) {
    return dispatch => {
        setTimeout(()=>{
            dispatch(increment());
        },delay);
    }
}



