import React from 'react'
import UsersAPI from '../api'
import { Link } from 'react-router-dom'
import '../estilos/router.css'

const GuitarFiltered = ({url}) => {
  console.log('URL',url)
  return UsersAPI.all()
    .filter(e => e.tipo === url.replace('/', '').substring(0, url.length - 2))
    .map(u => (
      <li key={u.id}>
        {console.log(`${url}/${u.modelo}`)}
        <Link to={`${url}/${u.modelo}`}>{u.modelo}</Link>
      </li>
    ))
}

const ListaDeGuitar = ({ match }) => (
  <div>
    <ul className="lista">
      <GuitarFiltered url={match.url}/>
    </ul>
  </div>
)

export default ListaDeGuitar
