import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Clasicas from './Clasicas'
import Acusticas from './Acusticas'
import Electricas from './Electricas'

const Main = () => {
  console.log('estoy en Main')
  return (
    <Switch>
      <Route path="/clasicas" component={Clasicas} />
      <Route path="/acusticas" component={Acusticas} />
      <Route path="/electricas" component={Electricas} />
    </Switch>
  )
}

export default Main
