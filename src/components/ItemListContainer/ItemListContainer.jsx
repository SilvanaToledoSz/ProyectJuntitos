import React, { useState, useEffect } from 'react'
import { getProductos } from '../MockApi/MockApi.js'
import { getProdCategory } from '../MockApi/MockApi.js'
import ItemList from '../itemList/ItemList.jsx'
import {useParams} from "react-router-dom"

function ItemListContainer() {
  const [productsList, setproductsList] = useState([])
  const {id}  = useParams()
 

  useEffect(
    () => {
      if (id === undefined){
        getProductos().then (
        (data) => {               
          setproductsList(data)
        }
      )}
      else {
        getProdCategory(id).then (
          (data) => {               
            setproductsList(data)
          }
        )
      }
    },[id]
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