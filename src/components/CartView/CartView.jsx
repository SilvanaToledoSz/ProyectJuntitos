import React, {useContext } from 'react'
import {cartContext} from '../../context/cartContext'
import 'sweetalert2/src/sweetalert2.scss'
import { Link } from "react-router-dom"
import Formulario from '../Formulario/Formulario'
import CartItem from '../CartItem/CartItem'

function CartView() {
  const { cart, clearCart, getTotalPrecio } = useContext(cartContext)

  let bntCard = {
    padding: "5px",
    margin: "5px",
    borderRadius: "5px",
    backgroundColor: "#B5CC72",
    borderColor: "#B5CC72",    
    boxShadow: "1.2px 1.2px 2px rgba(0, 0, 0, 0.2)",
    fontWeight: 800,
    color: "white",
  }

  if (cart.length === 0) 

  return (
    <>
    <div className="container-fluid">
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}><img src="https://visionary-buttercream-a05d6d.netlify.app/static/media/logo.4be06ad06e3c321446bc.png" style={{width: "120px", marginTop:"20px"}} alt="Logo Juntitos" /></div>
        <h1 className='text-center mt-5' style={{paddingBottom: "30px"}}>Carrito vacío</h1>
        <div  style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:"20px", marginBottom:"200px" }}>  
            <Link to="/"><button style={bntCard}>Volver al catálogo</button></Link>          
        </div>
    </div>
    </>
  )

  return (
    <>
    <h2 style={{marginTop:"50px", marginBottom:"50px", textAlign:"center", fontWeight:"bolder", fontSize:"40px"}}>TUS PRODUCTOS</h2>

      {cart.map((item) => {
        return <CartItem
        id={item.id}
        key={item.id}
        title={item.title}
        img={item.img}
        price={item.price}
        count={item.count}/>
      })}      
      
      <div className="container-fluid" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:"50px" }}>
        <h3 style={{fontWeight:"bolder", fontSize:"30px", marginTop:"20px"}}>Total de la compra: $
        {getTotalPrecio() > 0 && <span style={{fontWeight:"bolder", fontSize:"30px", marginTop:"20px"}}>{getTotalPrecio()}</span>}
        </h3>
      </div>
      <div className="container-fluid" style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:"10px" }}>
        <Link to="/"><button style={bntCard}>Agregar más productos</button></Link>
        {getTotalPrecio() > 0 && <Link to="/"><button style={bntCard} onClick={clearCart}>Reiniciar compra</button></Link>}
      </div>
      
      <div className='container-fluid' style={{width:"50%", marginTop:"60px"}}>
        <h3 style={{fontWeight:"bolder", fontSize:"30px", marginTop:"50px", marginBottom:"40px", textAlign:"center"}}>Completá tus datos para finalizar</h3>
        <Formulario cart={cart} getTotalPrecio={getTotalPrecio}></Formulario>
      </div>
      
    </>
  )
}
export default CartView