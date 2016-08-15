import React, {PropTyeps,Component} from 'react';

export default class Posts extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ul>
                {
                    this.props.posts.map((post,index) =>
                        <li key={index}>
                            {post.title}
                        </li>
                    )
                }
            </ul>
        )
    }
}