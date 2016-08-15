import React, {Component,PropTypes} from 'react';

import { connect } from 'react-redux';
import AsyncAction from '../../actions/asyncPage/index';

import Picker from '../../components/picker/index';
import Posts from '../../components/posts/index';

class AsyncPage extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRefershClick = this.handleRefershClick.bind(this);
    }

    componentDidMount(){
        const { dispatch, selectReddit } =  this.props;
        dispatch(AsyncAction.fetchPostsIfNeed(selectReddit));
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.selectReddit !== this.props.selectReddit){
            const {dispatch, selectReddit} = nextProps;
            dispatch(AsyncAction.fetchPostsIfNeed(selectReddit));
        }
    }
    handleChange(nextReddit){
        this.props.dispatch(AsyncAction.selectReddit(nextReddit));
    }
    handleRefershClick(event){
        event.preventDefault();
        const {dispatch,selectReddit} = this.props;
        dispatch(AsyncAction.invalidateReddit(selectReddit));
        dispatch(AsyncAction.fetchPostsIfNeed(selectReddit));
    }

    render(){
        const {selectReddit, posts,isFetching,lastUpdated} = this.props;
        return (
            <div>
                <Picker value={selectReddit}
                        onChange={this.handleChange}
                        options={['reactjs','frontend']}/>
                <p>
                    {lastUpdated &&
                        <span>
                            laste update at { new Date(lastUpdated).toLocaleDateString() }.
                            {' '}
                        </span>
                    }
                    {!isFetching &&
                        <button className="btn btn-default"
                                onClick={this.handleRefershClick}>刷新</button>
                    }
                    {isFetching && posts.length === 0 &&
                        <h2>Loading......</h2>
                    }
                    {posts.length > 0 &&
                        <div style={{opacity: isFetching ? 0.5: 1}}>
                            <Posts posts={posts}/>
                        </div>
                    }
                </p>
            </div>
        )
    }
}
export default connect(function(state){
    const { selectReddit, postsByReddit } = state;
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsByReddit[selectReddit] || {
        isFetching: true,
        items: []
    };
    return {
        selectReddit,
        posts,
        isFetching,
        lastUpdated
    };
})(AsyncPage);