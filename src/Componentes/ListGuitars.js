import React from 'react'
import { connect } from "react-redux";


const ListGuitars = (props) => {
  console.log('modelos', props.modelo)
  const lista = props.like.map((i,index)=>
  <li>
    {i &&(
    <div>
      <div>
      </div>
      <div>
     { props.modelo[index]}
     </div>
    </div> )}
  </li>)

  return(
    <div >
      <div className='listaguitars'>
      {(props.like[0])&&
      ((props.like.length<=1)?'Te gusta el modelo':'te gustan los modelos') }
      </div>
      <ul>
        {lista}
      </ul>
    </div>
  )
}

const mapStateToProps = function(state) {
  return {
    like: state.like,
    modelo: state.modelo
  }
}

export default connect(mapStateToProps)(ListGuitars)
