import React from "react";
import "./App.css";
import InputHead from "./InputHead";
import Axios from "axios";

interface IProps {
  todo: any;
  action: any;
}

const TodoList = ({ todo, action }: IProps) => {
  const ls = todo ? todo : [];
  const todoList = ls.map((item: any, i: any) => {
    const checked = item.check === "true" ? true : false;
    return (
      <div
        key={i}
        className="todoItem"
        style={{
          textDecoration: checked ? "line-through" : "none",
          fontStyle: checked ? "italic" : "normal",
          color: checked ? "lightgrey" : "black"
        }}
      >
        <div>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => {
              action.markTodo(item.id);
              Axios.patch(`http://localhost:3000/data/${item.id}`, {
                check: item.check === "true" ? "false" : "true"
              });
            }}
          />
          {item.name}
        </div>
        <div className="editBtn">
          {/* <button type="button">Edit</button> */}
          <button type="button" onClick={() => action.deleteTodo(item.id)}>
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="bigContent">
      <div className="todoList">
        <InputHead action={action} />
        {todoList}
      </div>
    </div>
  );
};

export default TodoList;
