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
      filteredGuitar: [],
      src: '',
    }
  }

  mostrarGuitars = tipo => {
    const filteredGuitar = usersAPI.getFilteredGuitars(tipo)
    this.setState({ filteredGuitar })
  }

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.setState({ src: reader.result })
        console.log('src', this.state.src)
      }
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };


  render() {
    console.log('props', this.props.modelo)
    return (
      <div className='fondo'>
        <Nav />
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
