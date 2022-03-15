import React from 'react'
import { connect } from 'react-redux'
const Cart = ({cartItems, dispatch}) => {
  return (
    <div style={{height: '94vh', width: '100%', background: 'blue'}}>
      <ul>
        {cartItems!== undefined && cartItems.map((item)=>(
          <li key={item.id}>{item.name} <br/> {item.desc}</li>
        ))}
      </ul>

    </div>
  )
}
const mapStateToProps = (state) =>{
  return {cartItems: state.cartReducer.items}
}

export default connect(mapStateToProps)(Cart)