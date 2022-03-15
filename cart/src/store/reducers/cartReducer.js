const INITIAL_STATE = {
    items: [

    ]

    
}
const cartReducer = (state = INITIAL_STATE, action) =>{
    if(action.type === 'ADD_CART'){
        return {items: [{id: action.item.id, name: action.item.name, desc: action.item.desc}, ...state.items]}
    }
    return state
}

export default cartReducer;