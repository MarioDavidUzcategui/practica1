import Main from './Main'
import Header from './Header'
import '../estilos/router.css'
import React, { Component } from 'react'
import usersAPI from '../api'
import Nav from './Nav'
import { connect } from "react-redux";
import ListGuitars from './ListGuitars'


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
    console.log('props', this.props.modelo)
    return (
      <div className='background-color'>
        <Nav propiedad1={this.recuperarEstado} />
        <div className='hero'>
          <h1 className='title'>Guitarras</h1>
        </div>
        <div className="Exterior">
          {this.props.modelo.length > 0 ?
            <ListGuitars /> : null
          }
          <div className="borde">
            <Header />
            <Main />
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
        {/* <ul className="lista2 borde">
          {this.state.filteredGuitar.map(e => (
            <li>{e.modelo}</li>
          ))}
        </ul> */}
        {/* <div className="respuesta-servidor"> Bienvenido:{this.state.usuario}
        </div> */}
    </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    like: store.like,
    modelo: store.modelo
  }
}

export default connect(mapStateToProps)(App)
