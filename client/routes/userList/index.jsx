import React,{Component,PropTypes} from 'react';
import fetch from 'isomorphic-fetch';
class UserList extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        fetch('https://www.reddit.com/r/frontend.json').then(function(res){
           return res.json()
        }).then(function(data){
            console.log(data);
        });
    }
    render(){
        return (
            <div className="container">
                hello
            </div>
        )
    }
}
export default UserList;