import React, { Component } from 'react'

import '../estilos/router.css'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      usuario: []
    }
  }
      
   

handleOnCLick =()=>{
  const {email} = this.state
  
  fetch('http://localhost:3001/prueba', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
     email 
      
    })
    
  }).then(resp=>resp.json()).then(response => {
    console.log("respuesta del servidos¡r", response)
    this.setState({
      usuario: response.usuario
    })
    console.log(this.state.usuario)
     this.props.propiedad1(this.state.usuario)   
  })
  
}

setEmail =(e)=>{
const email = e.target.value
this.setState({
  email
})
}

  render(){
    return (
      (
        <nav className="Nav-prin">
          <ul>
            <li>
              <a href="">Inicio</a>{' '}
            </li>
      
            <li className="dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Guitarras
              </a>
              <div
                className="dropdown-menu prueba"
                aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">
                  Clasicas
                </a>
                <a className="dropdown-item" href="#">
                  Acusticas
                </a>
                <a className="dropdown-item" href="#">
                  Electrica
                </a>
              </div>
            </li>
      
            <li className="dropdown">
              <a
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false">
                Partituras
              </a>
              <div
                className="dropdown-menu prueba"
                aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li>
              {this.props.algo}
            </li>
            
          </ul>
          
          <div className="espacio"></div>
          <form action="localhost:3001" name="miformulario" id="formulario">
            <input type="text" placeholder="Ingrese Email" name="form1" onChange={this.setEmail}/>
            <input type="button" value="Iniciar Sesion" onClick={this.handleOnCLick}/>
          </form>
        </nav>
      )
    )
  }
}
export default Nav
