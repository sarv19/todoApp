import React, { useState, useEffect } from "react";
import InputHead from "./InputHead";
import Axios from "axios";
import "./App.css";

interface IProps {
  todo: any;
  action: any;
}

const TodoList = ({ todo, action }: IProps) => {
  const [ls, setTodo] = useState(todo ? todo : []);
  const [checkAll, changeCheckAll] = useState(false);

  const handleCheck = (check: any) => {
    changeCheckAll(check);
  };

  const addTodo = (data: any) => {
    const newData = {
      id: ls[ls.length - 1].id + 1,
      name: data,
      check: "false"
    };
    const newTodos = [...ls, newData];
    Axios.post("http://localhost:3000/data", newData).then(() => {
      setTodo(newTodos);
      // console.log(newTodos, "new list hewe", newTodos[newTodos.length - 1].id);
    });
  };

  const completeTodo = (index: any) => {
    const newTodo = [...ls];
    // console.log("check index", index, newTodo[index].check);
    newTodo[index].check = ls[index].check === "true" ? "false" : "true";
    setTodo(newTodo);
  };

  useEffect(() => {
    if (checkAll) {
      const areAllMarked = ls.every((todo: any) => todo.check === "true");
      console.log({ areAllMarked });
      if (!areAllMarked) {
        const toChange = ls.filter((item: any) => item.check === "false");
        toChange.forEach((item: any) => {
          Axios.patch(`http://localhost:3000/data/${item.id}`, {
            check: "true"
          }).then(() => {
            const index = ls.findIndex((obj: any) => obj.id === item.id);
            completeTodo(index);
          });
        });
      }
    } else {
      const areNotMarked = ls.every((todo: any) => todo.check !== "false");
      if (areNotMarked) {
        const toChange = ls.filter((item: any) => item.check === "true");
        toChange.forEach((item: any) => {
          Axios.patch(`http://localhost:3000/data/${item.id}`, {
            check: "false"
          }).then(() => {
            const index = ls.findIndex((obj: any) => obj.id === item.id);
            completeTodo(index);
          });
        });
      }
    }
  }, [checkAll, ls]);

  const removeTodo = (index: any) => {
    Axios.delete(`http://localhost:3000/data/${ls[index].id}`).then(() => {
      const newTodo = [...ls];
      newTodo.splice(index, 1);
      setTodo(newTodo);
    });
  };

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
              // action.markTodo(item.id);

              Axios.patch(`http://localhost:3000/data/${item.id}`, {
                check: item.check === "true" ? "false" : "true"
              }).then(() => {
                const index = ls.findIndex((obj: any) => obj.id === item.id);
                completeTodo(index);
              });
            }}
          />
          {item.name}
        </div>
        <div className="editBtn">
          {/* <button type="button">Edit</button> */}
          <button
            type="button"
            onClick={() => {
              const index = ls.findIndex((obj: any) => obj.id === item.id);
              removeTodo(index);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="bigContent">
      <div className="todoList">
        <InputHead
          action={action}
          addTodo={addTodo}
          changeCheckAll={handleCheck}
        />
        {todoList}
      </div>
    </div>
  );
};

export default TodoList;
