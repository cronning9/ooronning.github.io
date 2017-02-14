'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import Home from './components/Home/Home';
import About from './components/About/About';
import NoMatch from './components/Errors/NoMatch';

import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
    </Route>
    <Route path="*" component={NoMatch} />
  </Router>
  ), document.getElementById('root')
);
