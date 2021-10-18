import React, { useState, useRef, useEffect } from "react";

import { toast } from "react-toastify";

const TodoForm = (props) => {
  const [inputValue, setInputValue] = useState(
    props.edit ? props.edit.text : ""
  );
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
    inputRef.current.focus();
  }, []);
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        onChange={changeHandler}
        value={inputValue}
        placeholder={props.edit ? "Update todo ..." : "Add todo..."}
        ref={inputRef}
      ></input>
      <button type="submit">{props.edit ? "Update" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
