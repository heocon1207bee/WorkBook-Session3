import React from 'react'
import './styles.css'

const TaskList = (props) => {
    return (
        <div className="item">
            <input className='check' type="checkbox" />
            <label>{props.text}</label>
        </div>
    )
}

export default TaskList