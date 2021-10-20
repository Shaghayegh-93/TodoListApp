import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilterdTodos] = useState([]);
  const [status, setStatus] = useState("All");
  useEffect(() => {
    filterTodos(status.value);
  }, [todos, status]);

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
  const updateTodo = (id, newValue) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodo = [...todos];
    updatedTodo[index] = selectedTodo;
    setTodos(updatedTodo);
  };

  const filterTodos = (status) => {
    switch (status) {
      case "All":
        setFilterdTodos(todos);
        break;
      case "Completed":
        setFilterdTodos(todos.filter((todo) => todo.isCompleted));
        break;
      case "Uncompleted":
        setFilterdTodos(todos.filter((todo) => !todo.isCompleted));
        break;
      default:
        setFilterdTodos(todos);
    }
  };
  const changeHandler = (e) => {
    setStatus(e);
    filterTodos(e.value);
  };

  return (
    <div className="container">
      <NavBar
        unCompletedTodo={todos.filter((todo) => !todo.isCompleted).length}
        filterdTodos={filterTodos}
        onChange={changeHandler}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        onCompleted={completeTodo}
        onDelete={onDelete}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
