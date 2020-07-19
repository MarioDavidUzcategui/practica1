import React from 'react'
import { connect } from "react-redux";


const ListGuitars = (props) => {
  console.log('modelos', props.modelo)
  const lista = props.modelo.map((i) =>
    <li>
      {i}
    </li>)

  return (
    <div className='listaguitars'>
      <div>
        <div >
          {(props.modelo[0]) &&
            ((props.modelo.length <= 1) ? 'Te gusta el modelo' : 'te gustan los modelos')}
        </div>
        <div>
          <ul>
            {lista}
          </ul>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = function (state) {
  return {
    like: state.like,
    modelo: state.modelo
  }
}

export default connect(mapStateToProps)(ListGuitars)
