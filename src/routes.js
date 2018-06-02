import React, { Fragment } from 'react'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Switch, Redirect } from 'react-router-dom'

// Scenes
import Global from 'scenes/Global'
import Main from 'scenes/Main'
import SignOut from 'scenes/SignOut'
import NotFound from 'scenes/NotFound'
import Claim from 'scenes/Claim'

export default ({ history }) => (
  <Router history={history}>
    <Fragment>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/claims/:id" component={Claim} />
        <PrivateRoute path="/sign_out" component={SignOut} />
        <Route component={NotFound} />
      </Switch>

      <Global />
    </Fragment>
  </Router>
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('user')
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/sign_in', state: { from: props.location } }} />
  )} />
)
