import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

function ItemDetail(props) {


  return (


    <div className="card m-5" >
      <div className="row">
        <div className="col-md-4">
          <img src={props.img} alt={props.title} className="img-fluid rounded-start" style={{height:"100%", width:"100%", objectFit: "cover"}} />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title mt-5 mb-5" style={{fontSize:"30px", fontWeight: "800"}}>{props.title}</h5>
            <p className="card-text">Stock: {props.stock}</p>
            <p className="card-text">{props.description}</p>
            <p className="card-text"><small className="text-muted">$ {props.price}</small></p>
            <ItemCount stock={props.stock} initial={1} title={props.title} text={"Agregar al carrito"} />
            
              
          </div>
        </div>
      </div>
    </div>



   
      
      
      
  
  )
}

export default ItemDetail