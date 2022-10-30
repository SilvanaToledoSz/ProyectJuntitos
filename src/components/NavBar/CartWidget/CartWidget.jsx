import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react'
import { cartContext } from '../../../context/cartContext' 
import {Link} from "react-router-dom"

function CartWidget() {

  const { getTotalProdCount } = useContext(cartContext)
  
    if (getTotalProdCount() === 0)

    return (
      <>
      </>
    )

    return (
        <>
          
            <div className="p-2 me-4">
            <Link to="/cart"><FaShoppingCart style={{paddingBottom: "10px", color:'#F7F7F7', fontSize: '30px'}}/></Link>               
              {
                getTotalProdCount() > 0 && <span style={{ fontSize: '20px'}}>{getTotalProdCount()}</span>
              }                 
            </div>
          
        </>
    )
}
export default CartWidget