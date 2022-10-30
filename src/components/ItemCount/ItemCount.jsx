import React, { useState } from 'react'
import Btn from '../Btn/Btn'

function ItemCount( {stock, initial, text, onAddToCart, contando, offer}) {
    
    const [count, setCount] = useState(initial)

    function restar() {
        if (count > 1) setCount (count - 1)
    }
    function sumar() {
        if (count < stock) setCount (count + 1)
    }    
    
    let bntCard = {
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
        backgroundColor: offer === true ? "#ECB1B3" : "#F4DE79",
        borderColor: offer === true ? "#ECB1B3" : "#F4DE79",    
        boxShadow: "1.2px 1.2px 2px rgba(0, 0, 0, 0.2)",
        fontWeight: "800",
        color: offer === true ? "white" : "black",    
    }        

    let content = {
        padding: "20px",
        width: "100%",
        marginTop: "220px",
        marginBottom: "0px",
        textAlign: "center",
        backgroundColor: "#F3F3F3",
        borderRadius: "5px",        
    }

  return (
    <div className="container-fluid" style={content}>
        <h4 style={{fontWeight:"bolder"}}>Realiza tu compra</h4>
        <div>
            <p>{contando}</p>
            <Btn onClick={restar} style={bntCard} disabled={stock === 0}>-</Btn>
            <strong>{count}</strong>
            <Btn style={bntCard} disabled={stock === 0} onClick={sumar}>+</Btn>
        </div>
        <div>
            <Btn style={bntCard} onClick={()=>{onAddToCart(count)}} disabled={stock === 0}>{text}</Btn>
        </div>
    </div>
  )
}
export default ItemCount