import React, { useState, useEffect } from "react";
import "./App.css";

interface IProps {
  action: any;
  addTodo: any;
  changeCheckAll: any;
}

function InputHead({ action, addTodo, changeCheckAll }: IProps) {
  const [text, changeText] = useState("");
  const [key, keyDown] = useState(false);
  const handleSubmit = () => {
    if (text.length !== 0) {
      action.addTodo(text);
      addTodo(text);
      changeText("");
      console.log(action.addTodo, text);
    }
  };

  useEffect(handleSubmit, [key]);

  const [checkBox, changeCheck] = useState(false);

  const handleChangeCheck = () => {
    if (checkBox) {
      //   console.log("mark all");
      action.markAll();
    } else {
      //   console.log("clear mark");
      action.clearMarked();
    }
  };

  useEffect(handleChangeCheck, [checkBox]);

  return (
    <div className="todoInput">
      <input
        type="checkbox"
        checked={checkBox}
        // onChange={() => changeCheck(!checkBox)}
        onChange={() => {
          changeCheck(!checkBox);
          changeCheckAll(!checkBox);
        }}
      />
      <input
        type="text"
        placeholder="Enter your todos..."
        value={text}
        onChange={e => changeText(e.target.value)}
        onKeyDown={e => (e.keyCode === 13 ? keyDown(!key) : null)}
      />
    </div>
  );
}

export default InputHead;
