import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task,toggleComplete,editTodo,deleteTodo}) => {
  return (
    <div className="Todo">
        <p onClick={() => toggleComplete(task.id)} className= {`${task.isCompleted ? 'completed' : 'incompleted'}`}>
          {task.task}
        </p>
        <div className='todo-icon'>
          <FontAwesomeIcon onClick={() => editTodo(task.id)} className="edit-icon" icon={faPenToSquare} />
          <FontAwesomeIcon onClick={() =>deleteTodo(task.id)} className="delete-icon" icon={faTrash } />
        </div>
    </div>
  )
}
