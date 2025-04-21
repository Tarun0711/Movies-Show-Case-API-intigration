import React from 'react'
import mystyle from "./InputForm.module.css"
export default function InputForm(props) {
  return (
    <div  className={mystyle.container}>
        {props.label && <label>{props.label}</label>}
        <input {...props} />
    </div>
  )
}