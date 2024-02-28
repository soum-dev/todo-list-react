import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  // Check if there are no todos
  if (props.todos.length === 0) {
    return <ul className="errorHandlingTodosLenght">No todos to display.</ul>;
  }

  return (
    <ul>
      {props.todos.map((todo, index) => (
        <TodoItem
          index={index}
          todo={todo}
          removeTodo={props.removeTodo}
          key={index}
        />
      ))}
    </ul>
  );
};

export default TodoList;
