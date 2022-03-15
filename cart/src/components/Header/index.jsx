import React from 'react'
import { Container } from './styled'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Badge  from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = ({cartItems}) => {
  return (
    <Container style={{display: 'flex', justifyContent: 'space-between'}}>
        <Link to='/'>Pagina inicial</Link>
        <Link to='/cart'><Badge color='warning' badgeContent={cartItems.length}><ShoppingCartIcon color='success' /></Badge></Link>
    </Container>
  )
}

export default connect(state => ({cartItems: state.cartReducer.items}))(Header)