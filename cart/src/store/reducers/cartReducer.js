const INITIAL_STATE = {
    items: [

    ]
}
const cartReducer = (state = INITIAL_STATE, action) =>{
    if(action.type === 'ADD_CART'){
        console.log(state.items.filter((item)=> item.id === action.item.id))
        
        return {
            items: [
                    ...state.items,
                    {
                    id: action.item.id, 
                    name: action.item.name, 
                    desc: action.item.desc, 
                    quantity: action.item.quantity}, 
                    ]}
    }
    return state
}

export default cartReducer;

// action.item.quantity > 1 ? action.item.quantity++ : action.item.quantity