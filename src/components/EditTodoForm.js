import React, { useState } from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value,setValue] = useState(task.task);

    const handleSubmit = (event) =>{
        event.preventDefault();

        if (value.trim() !== '') {
          editTodo(value,task.id);
          setValue('');
        }
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input value={value} type='text' className='todo-input' placeholder='Edit task' onChange={(event) =>{setValue(event.target.value)}} />
        <button type='submit' className='todo-btn'>Update</button>
    </form>
  )
}


