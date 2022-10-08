import React, { useState, useEffect } from 'react'
import { getUnProd } from '../MockApi/MockApi.js'
import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail.jsx'


function ItemDetailContainer(props) {
  const [producto, setProducto] = useState([])

  const {id} = useParams()

  console.log(useParams())

  useEffect(
    () => {
      getUnProd(id).then (
        (data) => {               
            setProducto(data)
        }
      )
    },[id]
  )

  return (
    <div>
        <ItemDetail 
          key={producto.id}
          title={producto.title} 
          img={producto.img}
          stock={producto.stock}
          price={producto.price}
          description={producto.description}/>
        
    </div>
  )
}

export default ItemDetailContainer