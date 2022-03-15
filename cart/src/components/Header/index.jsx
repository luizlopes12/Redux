import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Link to='/'>Pagina inicial</Link>
        <Link to='/cart'>Cart{}</Link>
    </div>
  )
}

export default Header