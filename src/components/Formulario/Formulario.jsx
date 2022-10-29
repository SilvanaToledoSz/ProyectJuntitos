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
    console.log(`Tu nombre es ${userData.name} ${userData.surname}, tu email es${userData.email} y tu teléfono es ${userData.phone}`)
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
        text: `Id de compra: ${respuesta}`,
        icon: 'success',
        confirmButtonText: '¡Genial, finalizar!'
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
            
           
            <button type="submit" className="btn btn-primary" disabled={!(userData.name !== "" && userData.surname !== "" && userData.email !== "" && userData.phone !== "")} >Submit</button>
       
    </form>
  )
}

export default Formulario