import React from 'react'
import UsersAPI from '../api'
import { Link } from 'react-router-dom'
import '../estilos/router.css'

const mapUser = url => {
  console.log(url)
  return UsersAPI.all()
    .filter(e => e.tipo === url.replace('/', '').substring(0, url.length - 2))
    .map(u => (
      <li key={u.id}>
        <Link to={`${url}/${u.modelo}`}>{u.modelo}</Link>
      </li>
    ))
}

const AllUsers = ({ match }) => (
  <div>
    <ul className="lista">{mapUser(match.url)}</ul>
  </div>
)

export default AllUsers
