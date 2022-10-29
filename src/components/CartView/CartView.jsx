
import React, {useContext } from 'react'
import {cartContext} from '../../context/cartContext'
import 'sweetalert2/src/sweetalert2.scss'
import { Link } from "react-router-dom"
import Formulario from '../Formulario/Formulario'

function CartView() {
  const { cart, getTotalPrecio, clearCart, removeItem } = useContext(cartContext)
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
      {cart.map((item) => (
        <div key={item.id}>

          <h2>{item.title}</h2>
          <img src={item.img} style={{width:"50%"}} alt={item.title} />
          <p>{item.price}</p>
          
          <p>{item.count}</p>
          <p>Precio total prod: $ {item.price * item.count}</p>
          <button onClick={ () => removeItem(item.id)}>Eliminar</button>
          
        </div>
      ))}
      <p>TOTAL DE LA COMPRA: $
      {
        getTotalPrecio() > 0 && <span>${getTotalPrecio()}</span>
      }
      </p>
      {getTotalPrecio() > 0 && <button onClick={clearCart}>Vaciar carrito</button>
              }

             
              <Formulario cart={cart} getTotalPrecio={getTotalPrecio}></Formulario>
              

              
    </>
  )
}

export default CartView