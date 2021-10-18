import React, { useState, useRef, useEffect } from "react";

import { toast } from "react-toastify";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState("");
  const changeHandler = (e) => {
    //   console.log(e.target.value);
    setInputValue(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      toast.warning("please enter your text!");
      return;
    }
    props.submitTodo(inputValue);
    setInputValue("");
  };
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus()
  }, []);
  return (
    <div>
      <form onSubmit={submitHandler}>
        {props.edit ? (
          <>
            <input
              type="text"
              onChange={changeHandler}
              value={inputValue}
              placeholder="update todo.."
              ref={inputRef}
            ></input>
            <button type="submit">Update</button>
          </>
        ) : (
          <>
            <input
              type="text"
              onChange={changeHandler}
              value={inputValue}
              placeholder="add todo..."
              ref={inputRef}
            ></input>
            <button type="submit">Add</button>
          </>
        )}
      </form>
    </div>
  );
};

export default TodoForm;
