import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/Home'
import Login from './components/Login'
import UrgentCare from './containers/UrgentCare'

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
      <ProtectedRoute exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/UrgentCare/:id" component={UrgentCare} />
    </Switch>
  );
};

export default Router;