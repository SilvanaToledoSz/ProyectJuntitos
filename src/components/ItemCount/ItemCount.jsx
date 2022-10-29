import React, { useState } from 'react'
import Btn from '../Btn/Btn'


function ItemCount( {stock, initial, text, onAddToCart, contando}) {
    
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
        backgroundColor: "#FCF5DA",
        borderColor: "#FCF5DA",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
        fontWeight: "800",
    
      } 
       

    let content = {
        padding: "20px",
        marginTop: "50px",
        textAlign: "center",
        backgroundColor: "#F3F3F3",
        borderRadius: "2px",
    }

  return (
    <div className="container-fluid" style={content}>
        <h4>Realiza tu compra</h4>
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