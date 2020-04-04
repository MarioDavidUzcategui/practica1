import React, { Component } from 'react'
import usersAPI from '../api'
import { Link } from 'react-router-dom'
import '../estilos/router.css'
import like from '../like.svg'
import unlike from '../unlike.svg'
import { connect } from "react-redux";
import modificarsaves from '../actions'

const mapStateToProps = function(state) {
  return {
    like: state.like,
    modelo:state.modelo
  }
}



class Guitarra extends Component {
  constructor() {
    super()
    this.state = {
      saves: 0,

    }
  }

  handleOnclick = ()=>{
    const guitar = usersAPI.findModelGuitars(this.props.match.params.modelo)
    console.log('guitarra',guitar)
    this.props.modificarsaves(guitar.modelo)
    this.setState({
      saves:this.state.saves + 1,
      like: !this.state.like
    })

  }

  render() {
    const {
      match: {
        params: { modelo }
      }
    } = this.props
    const guitars = usersAPI.findModelGuitars(modelo)
    console.log('guitarras',guitars)

    if (!guitars) {
      return <div>La guitarra no fuè encontrada</div>
    }
    return (
      <div>
        <h1>
          {guitars.modelo} {`id: ${guitars.id}`}
        </h1>


        <img href='guitarra' className="imagen" src={guitars.imagen} />
        <img className="imagen-like" onClick={this.handleOnclick} src={this.state.like ? like: unlike } />
        <span>{this.state.like ? "like" : "unlike"}</span>

        <div>{this.props.children}</div>
        <div>{this.props.ejemplo3}</div>
        <div className="ParaLink">
          <Link to="/users">Back</Link>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps,{modificarsaves})(Guitarra)

