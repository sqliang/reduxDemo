import React,{PropTypes,Component} from 'react';
import SearchBar from '../../components/searchBar/index';
import Content from '../../components/content/index';
import Footer from '../../components/footer/index';

import { connect } from 'react-redux';
import * as ItemsActions from '../../actions';
/**
 * bindActionCreators 将store.dispatch 和action creater 组合在一起,简化调用
 *
 */
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

Home.propTypes = {
    items: React.PropTypes.object,
    filter : React.PropTypes.string
};

/**
 * connect 就是将stroe中的必要数据作为props传递给React组件来render,并包装action creator 用于
 * 响应用户操作时dispatch一个action。
 *
 * 由于store中维护了一个state,因此,dispatch一个action后,接下来reducer根据这个action更新state
 *
 * connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
 *
 * 1.mapStateToProps是一个function,返回值表示的是需要merge进props的state。默认值为 () => {}
 *
 * 2.mapDispatchToProps是可以是一个function,返回值表示的是需要merge进props的actionCreators,这个里的
 * actionCreator应该是已经被包装了dispatch了的,推荐使用redux的bindActionCreators
 *
 * 3.mergeProps 用于自定义merge流程,parentProps指的就是组件自身的props
 * （stateProps, dispatchProps, parentProps） => ({
 *      ...parentProps,
 *      ...stateProps,
 *      ...dispatchProps
 *  })
 *  可以发现如果组件的props上出现同名,会被覆盖
 *
 *  options共有两个开关:pure代表是否打开优化,默认为true; withRef用来代表给包装在里面的组件一个ref,可以通过getWrappedInstance方法来获取这个ref,默认为false;
 *
 *  返回值:
 *  connect 返回一个函数,接收一个React组件的构造函数作为连接对象（如Home组件）,最终返回连接好的组件构造函数
 *
 */
export default connect(state => ({
    items: state.items,
    filter: state.filter
}),dispatch => ({
    actions: bindActionCreators(ItemsActions, dispatch)
}))(Home);