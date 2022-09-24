import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

function CartWidget() {
    return (
        <>
          <div className="p-2 me-4"><FaShoppingCart style={{color:'#F7F7F7', fontSize: '30px'}}/></div>
        </>
      )
}

export default CartWidget