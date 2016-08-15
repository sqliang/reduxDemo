import React, { Component,PropTypes } from 'react';

export default class Picker extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        const { value,onChange,options } = this.props;
        return (
            <div className="container">
                <h3>{value}</h3>
                <select onChange={onChange} value={value}>
                    {options.map(option =>
                        <option value={option} key={option}>
                            {option}
                        </option>
                    )}
                </select>
            </div>
        )
    }
}