import React from 'react';
import { IndexRouter, Router, Route, hashHistoty } from 'react-router';
import Home from './container/Home/';

export default (
<Router history={hashHistory}>
<Route path="/" component={App} ></Route>
<IndexRoute component={Home}/>
</Router>
);