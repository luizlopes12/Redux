const INITIAL_STATE = {}
const cartReducer = (state = INITIAL_STATE, action) =>{
    if(action.type === 'ADD_CART'){
        console.log('opa')
    }

    return state
}

export default cartReducer;