import {createStore} from 'redux';

// modificarSaves from './reducers';

/*Create a function called configureStore */
const initialState = {
  like: [],
  modelo:[]
}

function modificarSaves(state=initialState, action) {
  switch(action.type) {


      case "MODIFICAR_SAVES": {

          return Object.assign({}, state, {
              like: [...state.like,true],
              modelo:[...state.modelo,action.payload]
            });



     }






      default: return state;
  }
}



const store = createStore(modificarSaves);
export default store;
