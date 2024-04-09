import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../utils/todoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    dispatch(addTodo(input));
    setInput('')
  }

  return (
    <div>To do list
      <input type='text' value={input} onChange={(e) => {setInput(e.target.value)}}/>
      <button onClick={addTodoHandler}>Add</button>
    </div>
  )
}

export default AddTodo