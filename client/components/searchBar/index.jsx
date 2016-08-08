import React from 'react';
import ImmutableRenderMixin from 'react-immutable-render-mixin';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
                <input type="text"
                       onKeyUp={this.props.filterItem}
                       placeholder="请输入查找的item"/>
            </div>
        )
    }
}
SearchBar.mixins = [ImmutableRenderMixin];
export default SearchBar;