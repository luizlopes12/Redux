const addToCart = (cart, item) =>{
    return{
        type: 'ADD_CART',
        item,
        cart
    }
}

export default addToCart;