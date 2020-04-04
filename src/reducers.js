//import initialState from './inicialState';
const initialState = {
    like: [10]

}


export default function modificarSaves(state = initialState, action) {
    switch (action.type) {

        /* Add contacts to the state array */

        case "MODIFICAR_SAVES": {

            return Object.assign({}, state, {
                like: state.like.concat(action.payload)
            });



        }






        default: return state;
    }
}
