import React, { useState }  from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext' 
import Loader from '../Loader/Loader'
import Btn from '../Btn/Btn'

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

let content = {
  padding: "20px",
  width: "100%",
  marginTop: "100px",
  marginBottom: "0px",
  textAlign: "center",
  backgroundColor: "#F3F3F3",
  borderRadius: "2px",
  height:"200px",
  display:"flex",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center"
}

let bntCard = {
  padding: "10px",
  margin: "10px",
  borderRadius: "5px",
  backgroundColor: producto.offer === true ? "#ECB1B3" : "#F4DE79",
  borderColor: producto.offer === true ? "#ECB1B3" : "#F4DE79",    
  boxShadow: "1.2px 1.2px 2px rgba(0, 0, 0, 0.2)",
  fontWeight: "800",
  color: producto.offer === true ? "white" : "black",    
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
              <div className="container-fluid" style={content}>
                <h4 style={{fontWeight:"bolder"}}>¡Agregado al carrito!</h4>
                <div>
                  <Link to="/"><Btn style={bntCard}>Ver más productos</Btn></Link>
                  <Link to="/cart"><Btn style={bntCard}>Terminar mi compra</Btn></Link>
                </div>
              </div>
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