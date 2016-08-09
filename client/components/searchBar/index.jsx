import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <input className="form-control"
                       type="text"
                       onKeyUp={this.props.filterItem}
                       placeholder="请输入查找的item"/>
            </div>
        )
    }
}
export default SearchBar;