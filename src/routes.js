import React from 'react';
import Home from './container/Home';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

export default (
<BrowserRouter>
<div>
<Route path="/" component={App} ></Route>
<Route exact path="/" component={Home} ></Route>
</div>
</BrowserRouter>
);