import React from 'react'
import {Link} from "react-router-dom"

function Item(props) {

  let bntCard = {
    padding: "5px",
    marginBottom: "5px",
    borderRadius: "10px",
    backgroundColor: "#F4DE79",
    borderColor: "#F4DE79",
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
    fontWeight: 800,

  }
   
  return (

    <div className="col animate__animated animate__slideInUp">
      <div className="card h-100">
        <img src={props.img} alt={props.title} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-text">$ {props.price}</p>
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