import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
  },
  signout(cb) {
    this.isAuthenticated = false;
  }
};
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return fakeAuth ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;