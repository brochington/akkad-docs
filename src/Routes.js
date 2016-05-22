import React from 'react';
import {Router, Route, hashHistory} from 'react-router'
import App from './app';

/* Pages */
import SystemsPage from './pages/SystemsPage';

const Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App} >
            <Route path="/systems" component={SystemsPage} >
            </Route>
        </Route>
    </Router>
);

export default Routes;
