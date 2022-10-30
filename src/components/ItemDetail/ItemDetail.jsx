import React, { useState }  from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext' 
import Loader from '../Loader/Loader'
import ItemAgregado from '../ItemAgregado/ItemAgregado'

function ItemDetail({producto}) {  

  const [count, setCount] = useState(0)
  const {addToCart, isInCart} = useContext(cartContext)

  function handleAddToCart(count) {  
    addToCart(count, producto)
    setCount(count)    
  }

const precioOferta = {
  color: producto.offer === true ? "#CD83A4" : "black",
  fontWeight: "bolder",
  fontSize: "16px"
}

let inCart = isInCart(producto.id)

if (producto.title) 
  return (
    <div className="container-fluid" style={{width:"80%", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:"50px" }}>
      <div className="row">
        <div className="col">
          <img src={producto.img} alt={producto.title} className="img-fluid rounded" style={{height:"100%", width:"100%", objectFit: "cover"}} />
        </div>
        <div className="col">
          <div>
            <div style={{height:"80%"}}>
              <h5 className="card-title mt-2 mb-5" style={{fontSize:"30px", fontWeight: "800"}}>{producto.title}</h5>
              <p className="card-text" style={{fontWeight:"bolder", lineHeight:"25px", marginBottom:"15px"}}>{producto.description}</p>
              <p className="card-text"><small className="text-muted">Stock: {producto.stock}</small></p>
              {producto.offer && 
              <p className="card-text" style={precioOferta}>¡Oferta!</p>
              }
              <p className="card-text" style={{fontWeight:"bolder"}}>Precio: $ {producto.price}</p>
            </div>

            <div style={{height:"20%"}}>
              {inCart === false && count === 0  ? 
              <ItemCount contando={producto.contando} offer={producto.offer} onAddToCart={handleAddToCart} stock={producto.stock} initial={1} title={producto.title} text={"Agregar al carrito"} />
              :            
              <ItemAgregado offer={producto.offer}/>
              }              
            </div>
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