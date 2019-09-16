import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import User from './User'
import About from './About'

const Main = () => (
  <Switch>
    <Route exact path="/clasicas" component={User} />
    <Route path="/acusticas" component={User} />
    <Route path="/electricas" component={About} />
  </Switch>
)

export default Main
