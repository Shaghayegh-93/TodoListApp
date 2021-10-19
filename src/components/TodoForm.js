import React, { useState, useRef, useEffect } from "react";

import { toast } from "react-toastify";

const TodoForm = ({ edit, submitTodo }) => {
  const [inputValue, setInputValue] = useState(edit ? edit.text : "");
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
    submitTodo(inputValue);
    setInputValue("");
  };
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
        <input
          type="text"
          onChange={changeHandler}
          value={inputValue}
          placeholder={edit ? "Update todo ..." : "Add todo..."}
          ref={inputRef}
        ></input>
        <button
          className={`btn ${edit ? "updateTodo" : "addTodo"}`}
          type="submit"
        >
          {edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
