import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <button style={{marginRight: '10px'}} className="btn btn-primary" onClick={this.props.addItem}>
                    添加
                </button>
                <button className="btn btn-danger" onClick={this.props.deleteAll}>删除所有</button>
            </div>
        )
    }
}
export default Footer;