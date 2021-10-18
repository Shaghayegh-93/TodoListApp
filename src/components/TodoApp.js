import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: todo,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  const completeTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodo = [...todos];
    updatedTodo[index] = selectedTodo;
    setTodos(updatedTodo);
  };
  const onDelete = (id) => {
    const filterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodos);
  };
  const updateTodo = (id,newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text=newValue;
    const updatedTodo = [...todos];
    updatedTodo[index] = selectedTodo;
    setTodos(updatedTodo);
  };

  return (
    <div className="container">
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={todos}
        onCompleted={completeTodo}
        onDelete={onDelete}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
