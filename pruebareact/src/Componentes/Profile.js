import React from 'react'
import usersAPI from '../api'
import { Link } from 'react-router-dom'
import  '../estilos/router.css'

const Profile = ({
  location,
  match: {
    params: { modelo }
  }
}) => {
  const guitars = usersAPI.getFilteredGuitars(modelo)
  console.log(guitars)

  if (!guitars) {
    return <div>La guitarra no fuè encontrada</div>
  }
  return (
    <div>
      <h1>
        {guitars.modelo} (id: {guitars.id})
      </h1>
      
      <img className="imagen" src={guitars.imagen} />

      <Link to="/users">Back</Link>
    </div>
  )
}

export default Profile
