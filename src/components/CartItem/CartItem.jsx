import React, {useContext } from 'react'
import {cartContext} from '../../context/cartContext'

function CartItem(props) {
    const { getTotalPrecio, clearCart, removeItem } = useContext(cartContext)
  return (
    <>
    <div>

    <h2>{props.title}</h2>
    <img src={props.img} style={{width:"50%"}} alt={props.title} />
    <p>{props.price}</p>

    <p>{props.count}</p>
    <p>Precio total prod: $ {props.price * props.count}</p>
    <button onClick={ () => removeItem(props.id)}>Eliminar</button>

</div>

<p>TOTAL DE LA COMPRA: $
      {
        getTotalPrecio() > 0 && <span>${getTotalPrecio()}</span>
      }
      </p>
      {getTotalPrecio() > 0 && <button onClick={clearCart}>Vaciar carrito</button>
              }
    
    
    
    </>
  )
}

export default CartItem