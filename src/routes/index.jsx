import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Page404 from '../pages/Page404'
const Rotas = () => {
  return (
    <>
        <Routes>
            <Route path='/' exact element={<Login/>}/>
            <Route path='*'  element={<Page404/>}/>
        </Routes>
    </>
  )
}

export default Rotas