import React,{PropTypes,Component} from 'react';
import SearchBar from '../../components/searchBar/index';
import Content from '../../components/content/index';
import Footer from '../../components/footer/index';

import { connect } from 'react-redux';
import ImmutableRenderMixin from 'react-immutable-render-mixin';
import * as ItemsActions from '../../actions';
import { bindActionCreators } from 'redux';

class Home extends Component {
    render() {
        let styles = {
            width: '200px',
            margin: '30px auto 0'
        };
        const actions = this.props.actions;
        return (
            <div className="_namespace">
                <div style={styles}>
                    <h2>Manage Items</h2>
                    <SearchBar filterItem={actions.filterItem}/>
                    <Content items={this.props.items} filter={this.props.filter} deleteItem={actions.deleteItem}/>
                    <Footer addItem={actions.addItem} deleteAll={actions.deleteAll}/>
                </div>
            </div>
        )
    }
}

Home.mixins = [ImmutableRenderMixin];
Home.propTypes = {
    items: React.PropTypes.object,
    filter : React.PropTypes.string
};

export default connect(state => ({
    items: state.items,
    filter: state.filter
}),dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(Home);