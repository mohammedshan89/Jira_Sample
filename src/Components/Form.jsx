import React, { useContext, useState } from 'react'
import { DataItemsContext } from '../App'
import { v4 as uuid } from 'uuid';


const Form = () => {
  const [value, setValue] = useState('')
  const {state, setState} = useContext(DataItemsContext)
  
  const handleSubmit = () => {
    const unique_id = uuid();
    setState((prev) => {
     return [...prev, {
      id:unique_id,
      category: "pending",
      task: value,
    }]
    })
    setValue('')  
  }

  return (
    <div id="taskForm">
        <h3>Add New Task</h3>
        <div className="formField">
            <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" className="taskInput" />
            <button onClick={handleSubmit} className="taskSubmit">Submit</button>
        </div>
    </div>
  )
}

export default Form
