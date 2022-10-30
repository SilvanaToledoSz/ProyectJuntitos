import React, {useContext } from 'react'
import {cartContext} from '../../context/cartContext'

function CartItem(props) {
    const { removeItem } = useContext(cartContext)

    let bntCard = {
      padding: "5px",
      marginBottom: "5px",
      borderRadius: "5px",
      backgroundColor: "#B5CC72",
      borderColor: "#B5CC72",    
      boxShadow: "1.2px 1.2px 2px rgba(0, 0, 0, 0.2)",
      fontWeight: 800,
      color: "white",
    }    
    
  return (
    <>    
      <div className="container-fluid" style={{width:"80%", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:"50px" }}>      
        <div className='row align-items-center'>        
          <div className='col-3'>
            <img src={props.img} className="img-fluid rounded" style={{height:"80%", width:"80%", objectFit: "cover"}} alt={props.title} />          
          </div>
          <div className='col-6'>
            <h4 style={{fontWeight:"bolder", fontSize:"20px", marginBottom:"20px"}}>{props.title}</h4>
            <p>Precio: $ {props.price}</p>
            <p>Cantidad: {props.count}</p>          
            <p style={{fontWeight:"bolder", fontSize:"15px", marginTop:"20px"}}>Precio total del producto: $ {props.price * props.count}</p>
          </div>
          <div className='col-3'>
            <button style={bntCard} onClick={ () => removeItem(props.id)}>Eliminar</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default CartItem