import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { hashHistory } from 'react-router';


import Layout from './layout';
import Home from './routes/home/index';
import CounterPage from './routes/counterPage/index';

const routes = (
        <Router history={hashHistory}>
            <Route path="/"
                   component={Layout}>
                <IndexRoute component={Home}/>
                <Route path="counter" component={CounterPage}/>
            </Route>
        </Router>
);

export default routes;