import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();

        if (value.trim() !== '') {
          addTodo(value);
          setValue('');
        }
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input value={value} type='text' className='todo-input' placeholder='Enter task' onChange={(event) =>{setValue(event.target.value)}} />
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}


