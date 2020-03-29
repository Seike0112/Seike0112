import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import App from './components/App';
import Home from './components/Home'

import './index.css';


render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/tasks/new' component={App}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

