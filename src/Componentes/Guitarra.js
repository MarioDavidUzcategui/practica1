import React, { Component } from 'react'
import usersAPI from '../api'
import { Link } from 'react-router-dom'
import '../estilos/router.css'
import { connect } from "react-redux";
import modificarsaves from '../actions'


class Guitarra extends Component {
  constructor() {
    super()
    this.state = {
      saves: 0,

    }
  }

  handleOnclick = () => {
    const guitar = usersAPI.findModelGuitars(this.props.match.params.modelo)
    if (this.props.modelo.includes(this.props.match.params.modelo)) {
      return null
    } else
      this.props.modificarsaves(guitar.modelo, this.props.match.params.modelo)
    this.setState({
      saves: this.state.saves + 1,
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
    console.log('guitarras', guitars)

    if (!guitars) {
      return <div>La guitarra no fuè encontrada</div>
    }

    return (
      <div>
        <h1 className='title2'>
          {`Modelo id: ${guitars.id}`}
        </h1>
        <h1 className='title2'>
          {guitars.modelo}
        </h1>
        <img href='guitarra' className="imagen" src={guitars.imagen} alt="guitarra" />
        <div>Guarda una lista con las guitarras que te gustan dando click a LIKE!</div>
        <div className={this.props.modelo.includes(this.props.match.params.modelo) ? 'imagen-like' : 'unclicked'}>
          <img
            className='imagen2'
            onClick={this.handleOnclick}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png'
            alt="guitarra"
          />
          <span>Like</span>
        </div>
        <div>{this.props.children}</div>
        <div>{this.props.ejemplo3}</div>
        <div className="ParaLink">
          <Link to="/users">Back</Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    like: state.like,
    modelo: state.modelo
  }
}

export default connect(mapStateToProps, { modificarsaves })(Guitarra)

