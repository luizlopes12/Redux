import React from 'react'
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { Nav } from './style'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Nav>
        <Link to='/'><FaHome size={24}/></Link>
        <Link to='/login'><FaUserAlt size={24}/></Link>
        <Link to='/seila'><FaSignInAlt size={24}/></Link>
    </Nav>
  )
}

export default Header