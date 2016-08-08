import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { hashHistory } from 'react-router';


import Layout from './layout'
import Home from './routes/home/index'

const routes = (
        <Router history={hashHistory}>
            <Route path="/"
                   component={Layout}>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
);

export default routes;