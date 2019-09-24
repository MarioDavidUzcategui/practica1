import React from 'react'

import '../estilos/router.css'

const Nav = () => (
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
    </ul>
    <div className="espacio"></div>
    <form>
      <input type="text" placeholder="Ingrese Email" />
      <input type="button" value="Iniciar Sesion" />
    </form>
  </nav>
)
export default Nav
