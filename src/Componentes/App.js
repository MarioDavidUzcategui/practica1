import Main from './Main'
import Header from './Header'
import '../estilos/router.css'
import React, { Component } from 'react'
import usersAPI from '../api'
import Nav from './Nav'
import { connect } from "react-redux";
import ListGuitars from './ListGuitars'
import User from './Acusticas'
import Profile from './Guitarra'

const mapStateToProps = function(store) {
  return {
    like: store.like,
    modelo:store.modelo
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      guitars: usersAPI.all(),
      filteredGuitar: []
    }
  }
  mostrarGuitars = tipo => {
    const filteredGuitar = usersAPI.getFilteredGuitars(tipo)
    this.setState({ filteredGuitar })
  }


  render() {
    console.log('props',this.props)
    return (
      <div>
        <Nav propiedad1={this.recuperarEstado}/>
        <h1>Guitarras</h1>
        <div className="Exterior">
          <div className="listaguitars">
            <ListGuitars/>
          </div>
          <div className="borde">
            <Header/>
            <Main/>
          </div>
        </div>
        <div className="wrapper">
          <button
            className="btn btn-outline-primary"
            onClick={() => this.mostrarGuitars('clasica')}>
            Clasicas
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => this.mostrarGuitars('acustica')}>
            Acusticas
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => this.mostrarGuitars('electrica')}>
            Electricas
          </button>
        </div>
        <ul className="lista2 borde">
          {this.state.filteredGuitar.map(e => (
            <li>{e.modelo}</li>
          ))}
        </ul>
        <div className="respuesta-servidor"> Bienvenido:{this.state.usuario}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(App)
