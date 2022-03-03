import React from 'react'
import { Routes } from 'react-router-dom'
import MyRoute from './MyRoute'
import Login from '../pages/Login'
import Page404 from '../pages/Page404'
const Rotas = () => {
  return (
    <>
        <Routes>
            <MyRoute path='/' exact element={<Login/>}/>
            <MyRoute path='*'  element={<Page404/>}/>
        </Routes>
    </>
  )
}

export default Rotas