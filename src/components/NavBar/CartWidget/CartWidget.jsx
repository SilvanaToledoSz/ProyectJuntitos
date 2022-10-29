import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useContext } from 'react'
import { cartContext } from '../../../context/cartContext' 
import {Link} from "react-router-dom"

function CartWidget() {

  const { getTotalProdCount } = useContext(cartContext)
  


    return (
        <>
          <Link to="/cart">
            <div className="p-2 me-4">
              <FaShoppingCart style={{color:'#F7F7F7', fontSize: '30px'}}/>
              
              {
                getTotalProdCount() > 0 && <span>{getTotalProdCount()}</span>
              }
              
              
              
              
              
              
            </div>
          </Link>
          
          
        </>
      )
}

export default CartWidget