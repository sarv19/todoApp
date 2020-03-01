import React, { useState, useEffect } from "react";
import Axios from "axios";

const AddItem = () => {
  const [text, changeText] = useState("");
  const [key, keyDown] = useState(false);

  const handleSubmit = () => {
    if (text.length !== 0) {
      const newData = {
        name: text,
        check: "false"
      };

      Axios.post("http://localhost:3000/data", newData).then(() => {
        // console.log(newTodos, "new list hewe", newTodos[newTodos.length - 1].id);
        window.close();
      });
    }
  };

  useEffect(handleSubmit, [key]);

  return (
    <div>
      <input
        placeholder="Enter new item"
        type="text"
        value={text}
        onChange={e => changeText(e.target.value)}
        onKeyDown={e => (e.keyCode === 13 ? keyDown(!key) : null)}
      />
    </div>
  );
};

export default AddItem;
