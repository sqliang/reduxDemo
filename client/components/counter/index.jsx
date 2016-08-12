import React, { Component,PropTypes } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
        return (
            <div>
                <p>点击: {counter} 次</p>
                <p>
                    <button className="btn btn-primary" onClick={increment}>+</button>
                    {' '}
                    <button className="btn btn-default" onClick={decrement}>-</button>
                    {' '}
                    <button className="btn btn-info" onClick={incrementIfOdd}>Increment if odd</button>
                    {' '}
                    <button className="btn btn-danger" onClick={incrementAsync}>Increment async</button>
                </p>
            </div>
        )
    }
}

Counter.proTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
};
export default Counter;