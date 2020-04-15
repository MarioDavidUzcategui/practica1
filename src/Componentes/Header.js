import React from 'react'
import { Link } from 'react-router-dom'
import '../estilos/router.css'

const Header = () => (
  <nav className="nav-router">
    <ul>
      <li>
        <Link to="/clasicas">Clásicas</Link>
      </li>
      <li>
        <Link to="/acusticas">Acusticas</Link>
      </li>
      <li>
        <Link to="/electricas">Eléctricas</Link>
      </li>
    </ul>
  </nav>
)

export default Header
