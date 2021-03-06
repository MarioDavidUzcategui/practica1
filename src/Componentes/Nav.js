import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../estilos/router.css'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      usuario: []
    }
  }

  handleOnCLick = () => {
    const { email } = this.state

    fetch('http://localhost:3001/prueba', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email
      })

    }).then(resp => resp.json()).then(response => {
      console.log("respuesta del servidos¡r", response)
      this.setState({
        usuario: response.usuario
      })
      console.log(this.state.usuario)
      this.props.propiedad1(this.state.usuario)
    })
  }

  setEmail = e => {
    const email = e.target.value
    this.setState({
      email
    })
  }

  render() {
    return (
      (
        <nav className="Nav-prin">
          <ul className='Nav-list'>
            <li className="dropdown">
              <Link
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Clásicas
              </Link>
              <div
                className="dropdown-menu prueba"
                aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/clasicas/clasica1">
                  clasica1
                </Link>
                <Link className="dropdown-item" to="/clasicas/clasica2">
                  clasica2
                </Link>
                <Link className="dropdown-item" to="/clasicas/clasica3">
                  clasica3
                </Link>
              </div>
            </li>
            <li className="dropdown">
              <Link
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Acústicas
              </Link>
              <div
                className="dropdown-menu prueba"
                aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/acusticas/acustica1">
                  acustica1
                </Link>
                <Link className="dropdown-item" to="/acusticas/acustica2">
                  acustica2
                </Link>
                <Link className="dropdown-item" to="/acusticas/acustica3">
                  acustica3
                </Link>
              </div>
            </li>
            <li className="dropdown">
              <Link
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Eléctricas
              </Link>
              <div
                className="dropdown-menu prueba"
                aria-labelledby="dropdownMenuButton">
                <Link className="dropdown-item" to="/electricas/electrica1">
                  electrica1
                </Link>
                <Link className="dropdown-item" to="/electricas/electrica2">
                  electrica2
                </Link>
                <Link className="dropdown-item" to="/electricas/electrica3">
                  electrica3
                </Link>
              </div>
            </li>
            <li>
              {this.props.algo}
            </li>
          </ul>
          <div className='registro' >
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Registrarse
            </button>
            <button className='btn btn-success'>Iniciar Sesion</button>
          </div>

          <div className="modal fade titulo" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title " id="exampleModalLabel">Regístrate</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form name="miformulario" id="formulario">
                    <label>
                      Email:{' '}
                    </label>
                    <input type="text" placeholder="Ingrese Email" name="form1" /* onChange={this.setEmail} */ />
                    <label>
                      Contraseña:{' '}
                    </label>
                    <input type="password" placeholder='Ingresa contraseña' /* onClick={this.handleOnCLick} */ />
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      )
    )
  }
}
export default Nav
