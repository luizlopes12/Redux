import React from 'react'
import { connect, useDispatch } from 'react-redux'
const Home = ({items}) => {
  const handleAdd = (item) =>{
    useDispatch(addToCart(item))
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

export default connect(state =>({items: state.homeReducer.Items}))(Home)