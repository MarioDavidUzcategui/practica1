import React from 'react'
import { connect } from "react-redux";

const mapStateToProps = function(state) {
  return {
    like: state.like,
    modelo:state.modelo
  }
}

const ListGuitars = (props)=> {
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
    <>
  <div>
  {(props.like[0])&&
    ((props.like.length<=1)?'Te gusta el modelo':'te gustan los modelos') }
  </div>
    <ul>
      {lista}
      
    </ul>
    </>
  )
}
export default connect(mapStateToProps)(ListGuitars)