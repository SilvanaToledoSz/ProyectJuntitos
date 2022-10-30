import React from 'react'
import Btn from '../Btn/Btn'
import { Link } from "react-router-dom"

function ItemAgregado(props) {
    let content = {
        padding: "20px",
        width: "100%",
        marginTop: "220px",
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
        backgroundColor: props.offer === true ? "#ECB1B3" : "#F4DE79",
        borderColor: props.offer === true ? "#ECB1B3" : "#F4DE79",    
        boxShadow: "1.2px 1.2px 2px rgba(0, 0, 0, 0.2)",
        fontWeight: "800",
        color: props.offer === true ? "white" : "black",    
      } 

  return (
    <div className="container-fluid" style={content}>
        <h4 style={{fontWeight:"bolder"}}>¡Agregado al carrito!</h4>
        <div>
            <Link to="/"><Btn style={bntCard}>Ver más productos</Btn></Link>
            <Link to="/cart"><Btn style={bntCard}>Terminar mi compra</Btn></Link>
        </div>
        
    </div>
  )
}

export default ItemAgregado