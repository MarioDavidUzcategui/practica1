import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllUsers from './AllUsers'
import Profile from './Profile.js'

const Users = ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}`} component={AllUsers} />
    <Route path={`${match.url}/:modelo`} render={props=><Profile {...props} ejemplo3={props.ejemplo2}/>}/>
  </Switch>
)

export default Users
