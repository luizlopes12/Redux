import React from 'react'
import { useSelector } from 'react-redux'
const Message = () => {
    const isShow = useSelector(state => state.layout.showMessage)
  return (
      <>
        {isShow && (
            <div className='container mt-3'>
            <div className="alert alert-success" role="alert">
                Cadastrado com sucesso!
            </div>
        </div>
        )}
      </>

  )
}

export default Message