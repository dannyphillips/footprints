import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import App from './components/App';
import { Home } from './components/Home';
import Park from './components/Park';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Signin from './components/Signin';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="me" component={Profile} />
      <Route path="signup" component={Signup} />
      <Route path="signin" component={Signin} />
      <Route path="parks/:name" component={Park} />
    </Route>
  </Router>,
  document.getElementById('root')
);
