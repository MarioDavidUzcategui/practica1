import React from 'react'
import { connect } from "react-redux";

const mapStateToProps = function(state) {
  return {
    like: state.like,
    modelo:state.modelo
  }
}

const ListGuitars = (props)=> {


  return(
    <div>
      
      {props.like? `A ti te gustó el modelo:${props.modelo}`:""}
    </div>
  )
}
export default connect(mapStateToProps)(ListGuitars)