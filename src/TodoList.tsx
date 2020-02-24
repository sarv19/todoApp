import React from "react";
import "./App.css"
import InputHead from "./InputHead";

const ls = [
    {
        name: "Buy tomatos",
        check: false
    },
    {
        name: "Pick up laundry",
        check: false
    },
    {
        name: "Drop off Lisa",
        check: true
    }
]

function TodoList(){
    const todoList = ls.map((item:any, i)=>{
        return(
            <div className="todoItem">
                <input type="checkbox" checked={item.check}/>
                {item.name}
            </div>
        )
    })
    return(
        <div className="bigContent">
            <div className="todoList">
                <InputHead/>
                {todoList}
            </div>

        </div>
    )
}

export default TodoList;