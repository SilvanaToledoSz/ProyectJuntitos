import React from 'react'

function Btn(props) {

  return (
    <button onClick={props.onClick} style={props.style} disabled={props.disabled} >
        {props.children}
    </button>
  )
}
export default Btn