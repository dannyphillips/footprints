import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import App from './App';
import Park from './Park';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="parks/:name" component={Park} />
  </Router>,
  document.getElementById('root')
);
