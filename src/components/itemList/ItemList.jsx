import React from 'react'
import Item from '../Item/Item'

function ItemList(props) {
  return (
    <>
        {props.productsList.map((productos) => {
          return <Item 
          key={productos.id}
          id={productos.id}
          title={productos.title} 
          img={productos.img}
          stock={productos.stock}
          price={productos.price}/>

        })}
    </>
  )
}

export default ItemList