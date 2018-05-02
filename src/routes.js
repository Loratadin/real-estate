import React from 'react';
import { Router, Route } from 'react-router';
import Home from './container/Home';
import App from './App';

export default (
<Router >
<Route exact path="/" component={App} ></Route>
<Route exact path="/" component={Home} ></Route>
</Router>
);