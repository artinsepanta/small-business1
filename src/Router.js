import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import Login from './components/Login'
import UrgentCare from './containers/UrgentCare'
import Listing from './containers/Listing'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false;
}

const ProtectedRoute = ({component: Component,...rest}) => {
  return (
      <Route
      {...rest}
      render={(props) => checkAuth()
      ? <Component {...props} />
      : <Redirect to="/login" />}
      />
  )
}


const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/UrgentCare/:id" component={UrgentCare} />
      <ProtectedRoute exact path="/Listing" component={Listing} />
    </Switch>
  );
};

export default Router;