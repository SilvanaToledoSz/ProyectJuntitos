import React, { useState } from 'react'

function ItemCount( {stock, initial, text, title}) {
    
    const [count, setCount] = useState(initial)

    function restar() {
        if (count > 1) setCount (count - 1)
    }
    function sumar() {
        if (count < stock) setCount (count + 1)
    }    
    function agregarCarrito() {
        console.log("Agregado al carrito", count, title)
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
            <button style={bntCard} disabled={stock === 0} onClick={restar}>-</button>
            <strong>{count}</strong>
            <button style={bntCard} disabled={stock === 0} onClick={sumar}>+</button>
        </div>
        <div>
            <button style={bntCard} onClick={agregarCarrito} disabled={stock === 0}>{text}</button>
        </div>
    </div>
  )
}

export default ItemCount