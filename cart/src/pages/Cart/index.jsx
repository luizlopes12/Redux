import React from 'react'
import { connect } from 'react-redux'
import { Container } from './styled'
const Cart = ({cartItems}) => {
  return (
    <Container>
      <ul>
        {cartItems!== undefined && cartItems.map((item)=>(
          <li key={item.id}>
            <p>{item.name}</p>
            <span>{item.desc.length > 20 ? item.desc.substring(0,20)+'...' : item.desc}</span>
            </li>
        ))}
      </ul>

    </Container>
  )
}
const mapStateToProps = (state) =>{
  return {cartItems: state.cartReducer.items}
}

export default connect(mapStateToProps)(Cart)