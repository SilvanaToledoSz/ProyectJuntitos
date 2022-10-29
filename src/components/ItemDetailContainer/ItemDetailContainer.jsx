import React, { useState, useEffect } from 'react'

import { useParams } from "react-router-dom"
import { getUnProd } from '../../services/firebase.js'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'


function ItemDetailContainer() {

  

  const [producto, setProducto] = useState([])
  const [feedbackMsj, setFeedbackMsj] = useState(null)

  const {id} = useParams()
  console.log(id)  

  useEffect(
    () => {
      getUnProd(id)
      .then ((data) => {               
            setProducto(data)
        })
      .catch((error) => {
        setFeedbackMsj(error.message)
      })
    },[id]
  )

  return (
    
    <div>
      {feedbackMsj !== null 
      ? 
      <h4>Error: {feedbackMsj}</h4>
      : 
      <ItemDetail 
      producto={producto}/>
      }     
    </div>
  )
}

export default ItemDetailContainer