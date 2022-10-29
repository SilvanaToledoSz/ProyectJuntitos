import React, {useContext } from 'react'
import {cartContext} from '../../context/cartContext'
import 'sweetalert2/src/sweetalert2.scss'
import { Link } from "react-router-dom"
import Formulario from '../Formulario/Formulario'
import CartItem from '../CartItem/CartItem'

function CartView() {
  const { cart, getTotalPrecio } = useContext(cartContext)
  console.log(cart)

  

  if (cart.length === 0) 

  return (
    <>
    <h2>Aún no has agregado contenido al carrito</h2>
    <Link to="/">Volver al home</Link>
    </>
  )

  return (
    <>
      {cart.map((item) => {
        return <CartItem
        id={item.id}
        key={item.id}
        title={item.title}
        img={item.img}
        price={item.price}
        count={item.count}/>
      })}
      
      <Formulario cart={cart} getTotalPrecio={getTotalPrecio}></Formulario>
              

              
    </>
  )
}

export default CartView