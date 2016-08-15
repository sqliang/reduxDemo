import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { hashHistory } from 'react-router';


import Layout from './layout';
import Home from './routes/home/index';
import CounterPage from './routes/counterPage/index';
import AsyncPage from './routes/asyncPage/index';
import UserList from './routes/userList/index';

const routes = (
        <Router history={hashHistory}>
            <Route path="/"
                   component={Layout}>
                <IndexRoute component={Home}/>
                <Route path="counter" component={CounterPage}/>
                <Route path="async" component={AsyncPage}/>
                <Route path="user" component={UserList}/>
            </Route>
        </Router>
);

export default routes;