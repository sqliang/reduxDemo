import React from 'react';
import ImmutableRenderMixin from 'react-immutable-render-mixin';

class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <button onClick={this.props.addItem}>
                    添加
                </button>
                <button onClick={this.props.deleteAll}>删除所有</button>
            </div>
        )
    }
}

Footer.mixins = [ImmutableRenderMixin];

export default Footer;