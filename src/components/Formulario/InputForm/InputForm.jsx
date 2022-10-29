import React from 'react'

function InputForm(props) {
  return (
    <div className="mb-3">
        <label className="form-label">{props.title}</label>
        <input value={props.value}className="form-control" required={props.required} name={props.name} type="text" onChange={props.onChange}/>
    </div>
  )
}

export default InputForm