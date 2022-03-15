import INITIAL_STATE from "../../data/items";
const cartReducer = (state = INITIAL_STATE, action) =>{
    if(action.type === 'ADD_CART'){
        return[...state, action.item]
    }
    return false
}

export default cartReducer;