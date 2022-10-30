import React, { useState, useEffect } from 'react'
import ItemList from '../itemList/ItemList.jsx'
import {useParams} from "react-router-dom"
import Loader from '../Loader/Loader.jsx'
import { getProductos, getProdCategory } from '../../services/firebase'

function ItemListContainer() {

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
    <><Loader/></>
  )

  return (
    <div className="animate__animated animate__slideInUp">
        <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}><img src="https://visionary-buttercream-a05d6d.netlify.app/static/media/logo.4be06ad06e3c321446bc.png" style={{width: "180px", marginTop:"20px"}} alt="Logo Juntitos" /></div>
        <h1 className='text-center mt-5' style={{marginTop:"50px", marginBottom:"50px", textAlign:"center", fontWeight:"bolder", fontSize:"40px"}}>Catálogo de productos</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">          
            <ItemList productsList={productsList} />          
        </div>
    </div>
  )
  
}
export default ItemListContainer