import React, { useState, useEffect } from 'react'
import ItemList from '../itemList/ItemList.jsx'
import {useParams} from "react-router-dom"
import Loader from '../Loader/Loader.jsx'
import { getProductos, getProdCategory } from '../../services/firebase'

function ItemListContainer(props) {

  const [productsList, setproductsList] = useState([])
  const [isLoaading, setisLoaading] = useState(true)
  const {id}  = useParams()
 

  useEffect(
    () => {
      setproductsList([])
      if (id === undefined){
        getProductos().then (
        (data) => {               
          setproductsList(data)
          setisLoaading(false)
        }
      )}
      else {
        getProdCategory(id).then (
          (data) => {               
            setproductsList(data)
            setisLoaading(false)
          }
        )
      }
    },[id]
  )

  if (isLoaading === true)

  return (
    <h3><Loader/></h3>
  )

  return (
    <div className="container-fluid animate__animated animate__slideInUp">
        <h1 className='text-center mt-5' style={{padding: "30px"}}>Catálogo de productos</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          
            <ItemList productsList={productsList} />
          
        </div>
    </div>
  )

  
}

export default ItemListContainer