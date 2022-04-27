import React from 'react'
import './styles.css'

const Button = (props) => {
  return (
    <div className='button'>
        <button>{props.text}</button>
    </div>
  )
}

export default Button