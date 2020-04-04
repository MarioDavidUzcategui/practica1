import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllUsers from './AllUsers'
import Profile from './Profile.js'

const Users = ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}`} component={AllUsers} />
    <Route path={`${match.url}/:modelo`} component={Profile} />
  </Switch>
)

export default Users
