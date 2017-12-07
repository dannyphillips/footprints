import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
// import { Router, IndexRoute, Route, browserHistory } from 'react-router'

import { App } from './components/App';
import { Home } from './components/Home';
import { Park } from './components/Park';
import { Profile }  from './components/Profile';
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { PrivateRoute } from './components/PrivateRoute';
import { AuthButton } from './components/AuthButton';
import { fakeAuth } from './components/fakeAuth';
import { Login } from './components/Login';
import './index.css';

// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <IndexRoute component={Home} />
//       <Route path="me" component={Profile} />
//       <Route path="signup" component={Signup} />
//       <Route path="signin" component={Signin} />
//       <Route path="parks/:name" component={Park} />
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );


const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;




ReactDOM.render(
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  </Router>,
  document.getElementById('root')
);