import React from 'react'
import { Container } from './styled'
import { connect } from 'react-redux'
import Button from '@mui/material/Button';
import addToCart from '../../store/actions/action'
const Home = ({items, cart, dispatch}) => {
  const handleAdd = (item) =>{
    dispatch(addToCart(cart, item))
  }
  return (
    <Container>
      <ul>
        {items.map((item)=>(
          <li key={item.id}>
            <p>{item.name}</p>
            <span>{item.desc.length > 20 ? item.desc.substring(0,20)+'...' : item.desc}</span>
          <Button variant="contained" size='small' color='success' onClick={()=>handleAdd(item)}>Adicionar</Button>
          </li>
        ))
        }
      </ul>
    </Container>
  )
}

export default connect(state =>({items: state.homeReducer.Items, cart: state.cartReducer}))(Home)