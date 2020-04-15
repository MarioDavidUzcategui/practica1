import { createStore } from 'redux';

// modificarSaves from './reducers';

/*Create a function called configureStore */
const initialState = {
  modelo: []
}

function modificarSaves(state = initialState, action) {
  console.log('reduce', action)
  switch (action.type) {

    case "MODIFICAR_SAVES": {

      return Object.assign({}, state, {
        modelo: [...state.modelo, action.objeto]
      });
    }

    default: return state;
  }
}

const store = createStore(modificarSaves);
export default store;
