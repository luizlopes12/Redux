import React from 'react'
import { connect } from 'react-redux'
import addToCart from '../../store/actions/action'
const Home = ({items, cart, dispatch}) => {
  const handleAdd = (item) =>{
    dispatch(addToCart(cart, item))
  }
  return (
    <div style={{height: '94vh', width: '100%', background: 'red'}}>
      <ul>
        {items.map((item)=>(
          <li key={item.id}>{item.name} <br/>{item.desc} 
          <button onClick={()=>handleAdd(item)}>Adicionar</button>
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default connect(state =>({items: state.homeReducer.Items, cart: state.cartReducer}))(Home)