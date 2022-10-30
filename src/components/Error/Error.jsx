import React from 'react'
import { Link } from "react-router-dom"

function Error() {

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
    <div className="container-fluid">
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}><img src="https://visionary-buttercream-a05d6d.netlify.app/static/media/logo.4be06ad06e3c321446bc.png" style={{width: "120px", marginTop:"20px"}} alt="Logo Juntitos" /></div>
        <h1 className='text-center mt-5' style={{paddingBottom: "30px"}}>Error de ruta</h1>
        <div  style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", marginTop:"20px", marginBottom:"200px" }}>  
            <Link to="/"><button style={bntCard}>Volver al catálogo</button></Link>          
        </div>
    </div>
  )
}

export default Error