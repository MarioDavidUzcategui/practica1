import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListaDeGuitar from './ListaDeGuitar'
import Guitarra from './Guitarra.js'

const Clasicas = ({ match }) => {
  console.log('estoy en clasicas')
  console.log(`${match.url}/:modelo`)
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={ListaDeGuitar} />
      <Route path={`${match.url}/:modelo`} component={Guitarra} />
    </Switch>
  )
}

export default Clasicas
