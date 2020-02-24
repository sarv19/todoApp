import React from "react";
import "./App.css"

function InputHead(){
    return(
        <div className="todoInput">
            {/* <input type="checkbox"/> */}
            <input type="text" placeholder="Enter your todos..."/>
        </div>
    )
}

export default InputHead