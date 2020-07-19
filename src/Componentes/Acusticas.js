import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AllUsers from './ListaDeGuitar'
import Profile from './Guitarra.js'

const Acusticas = ({ match }) => (
  <Switch>
    <Route exact path={`${match.url}`} component={AllUsers} />
    <Route path={`${match.url}/:modelo`} component={Profile} />
  </Switch>
)

export default Acusticas
