import {Link} from "react-router-dom"
import React from 'react'

function Item(props) {

  let bntCard = {
    padding: "5px",
    marginBottom: "5px",
    borderRadius: "5px",
    backgroundColor: props.offer === true ? "#ECB1B3" : "#F4DE79",
    borderColor: props.offer === true ? "#ECB1B3" : "#F4DE79",    
    boxShadow: "1.2px 1.2px 2px rgba(0, 0, 0, 0.2)",
    fontWeight: 800,
    color: props.offer === true ? "white" : "black",
  }

  const precioOferta = {
    color: props.offer === true ? "#CD83A4" : "black",
  }
   
  return (
    <div className="col animate__animated animate__slideInUp">
      <div  className="card h-100">
        <img src={props.img} alt={props.title} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">$ {props.price}</p>
          {props.offer && 
          <p className="card-text" style={precioOferta}>¡Oferta!</p>
          }
          <p className="card-text">Stock: {props.stock}</p>
          <Link to={`/item/${props.id}`}>
            <button style={bntCard}>Ver producto</button>
          </Link>                    
        </div>
      </div>
    </div>       
  )
}
export default Item