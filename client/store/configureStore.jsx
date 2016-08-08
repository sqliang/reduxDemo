import { createStore,compose,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

let buildStore;
    buildStore = compose(applyMiddleware(thunk))(createStore);

export default function configureStore (initialState) {
    const store = buildStore(rootReducer, initialState);
    if(module.hot) {
        module.hot.accept('/client/reducers/index.jsx', () => {
            store.replaceReducer(require('/client/reducers/index.jsx'))
        });
    }
    return store;
}