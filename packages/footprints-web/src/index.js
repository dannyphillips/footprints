import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";

import { App } from './components/App';
import { Home } from './components/Home';
import { Park } from './components/Park';
import { Profile }  from './components/Profile';
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { PrivateRoute } from './components/PrivateRoute';
import { AuthButton } from './components/AuthButton';
import { Login } from './components/Login';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <AuthButton />
      <Route path="/" component={App} />
      <PrivateRoute path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <PrivateRoute path="parks/:name" component={Park} />
      <PrivateRoute path="/me" component={Profile} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);