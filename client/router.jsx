import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { reduxReactRouter,routerStateReducer, ReduxRouter } from 'redux-react-router';
import { hashHistory } from 'react-router'
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import Layout from './layout';
import Home from './routes/home/index';
import CounterPage from './routes/counterPage/index';
import TodosPage from './routes/todosPage/index';


const store = configureStore();

const routes = (
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/"
                       component={Layout}>
                    <IndexRoute component={Home}/>
                    <Route path="counter" component={CounterPage}/>
                    <Route path="todos" component={TodosPage}/>
                </Route>
            </Router>
        </Provider>

);

export default routes;