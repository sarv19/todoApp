import React from "react";
import "./App.css"
import InputHead from "./InputHead";

const ls = [
    {
        id: 1,
        name: "Buy tomatos",
        check: false
    },
    {
        id: 2,
        name: "Pick up laundry",
        check: false
    },
    {
        id: 3,
        name: "Drop off Lisa",
        check: true
    }
]

function TodoList(){
    const todoList = ls.map((item:any, i)=>{
        return(
            <div className="todoItem" style={{textDecoration:item.check?'line-through':'none',fontStyle:item.check?"italic":'none',color:item.check?"lightgrey":'black'}}>
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