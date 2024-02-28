import { useState } from "react";
import "./App.css";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (index) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((_, i) => i !== index);
    });
  };

  return (
    <div className="container">
      <div className="form">
        <span className="title">
          <h1>Todo List</h1>
        </span>
        <AddTodoForm addTodo={addTodo} />
      </div>
      <div className="todoList" >
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
