import React from 'react'
import logo from '../NavBar/logo.png'

function ItemListContainer({greeting}) {
  return (
    <>
        <h1 className='text-center mt-5'>{greeting}</h1>
        <img className='text-center mx-auto d-block' style={{width:'200px'}} src={logo} alt="logo" />
    </>
  )
}

export default ItemListContainer