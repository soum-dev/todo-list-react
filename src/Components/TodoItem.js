import React from 'react'

const TodoItem = (props) => {
  return (
    <li>
      {props.todo}
      <button onClick={() => props.removeTodo(props.index)}>Remove</button>
    </li>
  )
}

export default TodoItem 