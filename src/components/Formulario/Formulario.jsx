import React, {useState, useContext} from 'react'
import {cartContext} from '../../context/cartContext'
import { createBuyOrder } from '../../services/firebase'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import InputForm from './InputForm/InputForm'
import {useNavigate} from 'react-router-dom'

function Formulario() {

  const { cart, getTotalPrecio, clearCart } = useContext(cartContext)
  const navigate = useNavigate()

  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    age: "",
    email: "",
    phone: ""
  })

  function onInputChange(evt) {
    const name = evt.target.name
    const value = evt.target.value
    let newUserData = {...userData} 
    newUserData[name] = value
    setUserData(newUserData)
  }

  function onSubmit(evt) {
    evt.preventDefault()    
    setUserData({
      name: "",
      surname: "",
      email: "",
      phone: ""
    })

    const buyerData = {
      name: userData.name,
      surname: userData.surname,
      email: userData.email,
      phone: userData.phone
    }

    const orderData = {
      buyerData: buyerData,
      cart: cart,
      total: getTotalPrecio(),
      date: new Date()
    }

    createBuyOrder(orderData).then(respuesta => {      
      Swal.fire({
        title: `¡Gracias ${userData.name}!`,
        text: `Compra finalizada. Id de compra: ${respuesta}`,
        icon: 'success',
        confirmButtonText: 'Finalizar'
      }).then (result => {
        navigate("/")
        clearCart()
      })
    })
  }
    
  return (
    <form onSubmit={onSubmit}>        
      <InputForm value={userData.name} title="Nombre" name="name" required={true} onChange={onInputChange}></InputForm>
      <InputForm value={userData.surname} title="Apellido" name="surname" required={true} onChange={onInputChange}></InputForm>
      <InputForm value={userData.email} title="Email" name="email" required={true} onChange={onInputChange}></InputForm>
      <InputForm value={userData.phone} title="Teléfono" name="phone" required={true} onChange={onInputChange}></InputForm>
      <button type="submit" style={{backgroundColor:"#B5CC72", borderColor: "#B5CC72", boxShadow: "1.2px 1.2px 2px rgba(0, 0, 0, 0.2)", fontWeight: "800"}} className="btn btn-primary" disabled={!(userData.name !== "" && userData.surname !== "" && userData.email !== "" && userData.phone !== "")} >Enviar datos y finalizar compra</button>
    </form>
  )
}
export default Formulario