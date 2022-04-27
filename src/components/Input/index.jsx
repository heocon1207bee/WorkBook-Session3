import React from 'react'

const Input = (props) => {
  return (
    <div className='input'>
        <label htmlFor="">{props.text}: </label>
        <input type="text"/>
    </div>
  )
}

export default Input