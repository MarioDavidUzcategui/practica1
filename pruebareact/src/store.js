import {createStore} from 'redux';  

// modificarSaves from './reducers';  
 
/*Create a function called configureStore */
const initialState = {
  like: false  
      
}

function modificarSaves(state=initialState, action) {
  switch(action.type) {
       
      /* Add contacts to the state array */
    
      case "MODIFICAR_SAVES": {
          
          return Object.assign({}, state, {
              like: !state.like
            });
              
              
          
     }
       
      
      

      

      default: return state;
  }
}
 
const store = createStore(modificarSaves);
export default store;