import React, { Component } from 'react'
import usersAPI from '../api'
import { Link } from 'react-router-dom'
import '../estilos/router.css'
import like from '../like.svg'
import unlike from '../unlike.svg'


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      saves: 0,
      like: false
    }
  }

  handleOnclick = ()=>{
    

    this.setState({
      saves:this.state.saves + 1,
      like: !this.state.like 
    })
  }

  render() {
    const {
      location,
      match: {
        params: { modelo }
      }
    } = this.props
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
        <img className="imagen-like" onClick={this.handleOnclick} src={this.state.like ? like: unlike } />
        <span>{this.state.like ? "like" : "unlike"}</span>
        
        
        <div className="ParaLink">
          <Link to="/users">Back</Link>
        </div>
      </div>
    )
  }
}

export default Profile
