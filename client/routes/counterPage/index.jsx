import React,{ Component,PropTypes } from 'react';
import Counter from '../../components/counter/index';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as CounterAction from '../../actions/counterPage/index';

class CounterPage extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { counter, actions } = this.props;
        return (
            <div className="container">
                <h4>这是一个计数器demo:</h4>
                <Counter counter={counter}
                         increment={actions.increment}
                         incrementIfOdd={actions.incrementIfOdd}
                         incrementAsync={actions.incrementAsync}
                         decrement={actions.decrement}/>
            </div>
        );
    }
}

export default connect(state => ({
    counter: state.counter
}),dispatch => ({
    actions: bindActionCreators(CounterAction,dispatch)
}))(CounterPage);