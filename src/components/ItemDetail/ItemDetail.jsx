import React, { useState }  from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext' 
import Loader from '../Loader/Loader'


function ItemDetail({producto}) {  

  const [count, setCount] = useState(0)
  const {addToCart, isInCart} = useContext(cartContext)
  
  

  function handleAddToCart(count) {  
    addToCart(count, producto)
    setCount(count)    
}

let inCart = isInCart(producto.id)
console.log(inCart)


if (producto.title) 

  return (


    <div className="card m-5" >
      <div className="row">
        <div className="col-md-4">
          <img src={producto.img} alt={producto.title} className="img-fluid rounded-start" style={{height:"100%", width:"100%", objectFit: "cover"}} />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title mt-5 mb-5" style={{fontSize:"30px", fontWeight: "800"}}>{producto.title}</h5>
            <p className="card-text">Stock: {producto.stock}</p>
            <p className="card-text">{producto.description}</p>
            <p className="card-text"><small className="text-muted">$ {producto.price}</small></p>
            

            

            {inCart === false && count === 0  ? 
            <ItemCount contando={producto.contando} onAddToCart={handleAddToCart} stock={producto.stock} initial={1} title={producto.title} text={"Agregar al carrito"} />
            :            
            <h2>Ya está agregado al carrito
              <Link to="/cart">Terminar mi compra</Link>
              <Link to="/">Continuar viendo productos</Link></h2>}

                                            
              
          </div>
        </div>
      </div>
    </div> 
      
  
  )

  return (
    <h3><Loader /></h3>
  )

}

export default ItemDetail