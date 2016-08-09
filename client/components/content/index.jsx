import React, { Component } from 'react';
import _ from 'lodash';
import classNames from 'classnames';

class Content extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let items = this.props.items.toArray();

        return (
            <ul className="form-group">
                {items.map(v => <LiItem filter={this.props.filter} item={v} key={v} deleteItem={this.props.deleteItem} />)}
            </ul>
        )
    }
}

class LiItem extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let liClass = classNames({hidden:!_.isEmpty(this.props.filter) && this.props.filter != this.props.item});

        return (
            <li className={'form-group' + liClass}>
                <span style={{marginRight: '4px'}}>{this.props.item}</span>
                <button className="btn btn-default" onClick={this.props.deleteItem.bind(this,this.props.item)}>删除</button>
            </li>
        )
    }
}

export default Content;