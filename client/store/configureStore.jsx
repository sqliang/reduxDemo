/**
 * createStore 创建store,获取当前的state,注册store的事件,dispatch action等store相关操作;
 * 
 * applyMiddleware 可以为redux增加中间件,类似于node express的中间件,比如添加了一个log
 *
 * compose
 *
 *
 * redux 总共暴露出（export）5个方法:createStore,applyMiddleware,compose,  combineReducers（合并reducer使用） 和 bindActionCreator(将store.dispatch和action creater组合一起,简化调用)
 *
 *
 */
import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

let buildStore;
    buildStore = compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument()
    )(createStore);

export default function configureStore (initialState) {
    const store = buildStore(rootReducer, initialState);
    if(module.hot) {
        module.hot.accept('/client/reducers/index.jsx', () => {
            store.replaceReducer(require('/client/reducers/index.jsx'))
        });
    }
    return store;
}