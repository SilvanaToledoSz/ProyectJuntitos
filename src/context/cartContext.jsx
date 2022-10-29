import React from 'react'
import { createContext, useState } from 'react'

const cartContext = createContext()

function CartContextProvider(props) {
    const [cart, setCart] = useState([])

    function addToCart(count, producto) {        
        let newCart = [...cart]
        let newItem = {...producto, count: count}
        newCart.push(newItem)
        setCart(newCart)
    }

    function getTotalProdCount() {
        let total = 0
        cart.forEach( productoInCart => {
            total += productoInCart.count
        })
        return total
        }

    function clearCart() {
        setCart([])
    }

    function isInCart(idProd) {
        let inCart = cart.some( prod => (prod.id === idProd) 
        )
        return inCart    
    }

    function removeItem(idToRemove) {
        let newCart = cart.filter( prodInCart =>  (prodInCart.id !== idToRemove)
        )
        setCart(newCart)
    }

    function getTotalPrecio()  {
        let totalPrecio = 0
        cart.forEach( precioInCart => {
            totalPrecio += precioInCart.price * precioInCart.count
        })
        return totalPrecio

    }

  return (
    <>
        <cartContext.Provider value={{ cart, addToCart, getTotalProdCount, clearCart, removeItem, getTotalPrecio, isInCart}}>
            {props.children}
        </cartContext.Provider>
    </>
  )
}

export { cartContext, CartContextProvider }