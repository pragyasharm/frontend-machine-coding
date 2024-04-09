import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../utils/todoSlice'

const Todolist = () => {
  const todoList = useSelector(store => store.todo.todos)
  const dispatch = useDispatch();
  const [indexEdit, setIndexEdit] = useState(null)
  const [updatedText, setUpdatedText] = useState('')

  const handleDelete = (index) => {
    dispatch(removeTodo(index))
  }

  const handleEdit = (index, todo) => {
    setIndexEdit(index);
    setUpdatedText(todo);
  }
  const handleUpdate = (index) => {
     dispatch(updateTodo([index, updatedText]))
     setIndexEdit(null);
     setUpdatedText('');

  }

  const handleCancelUpdate = () => {
    setIndexEdit(null);
    setUpdatedText('');
  }
  return (
    <div>
      <ol>
        {
          todoList.map((todo, index) => (
            <>
              <li key={index}>
                {index !== indexEdit && <><span> {todo} </span>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  <button onClick={() => handleEdit(index, todo)}>Edit</button> </>
                }
                {index === indexEdit && <>
                  <input type='text' value={updatedText} onChange={(e) => setUpdatedText(e.target.value)} />
                  <button onClick={() => handleUpdate(index)}>update</button>
                  <button onClick={() => handleCancelUpdate(index, todo)}>Cancel</button> </>
                }
              </li>
            </>
          ))
        }
      </ol>
    </div>
  )
}

export default Todolist