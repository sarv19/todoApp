import React from "react";
import "./App.css";
import InputHead from "./InputHead";

interface IProps {
  todo: any;
  action: any;
}

const TodoList = ({ todo, action }: IProps) => {
  const ls = todo ? todo : [];
  const todoList = ls.map((item: any, i: any) => {
    return (
      <div
        key={i}
        className="todoItem"
        style={{
          textDecoration: item.check ? "line-through" : "none",
          fontStyle: item.check ? "italic" : "normal",
          color: item.check ? "lightgrey" : "black"
        }}
      >
        <div>
          <input
            type="checkbox"
            checked={item.check}
            onChange={() => action.markTodo(item.id)}
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
