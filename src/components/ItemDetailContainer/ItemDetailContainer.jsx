import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { verUnProducto } from '../../services/firebase.js'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'

function ItemDetailContainer() { 

  const [producto, setProducto] = useState([])
  const {id} = useParams()  

  useEffect(
    () => {
      verUnProducto(id)
      .then ((data) => {               
            setProducto(data)
        })
    },[id]
  )

  return (    
    <div>
      <ItemDetail 
      producto={producto}/>     
    </div>
  )
}

export default ItemDetailContainer