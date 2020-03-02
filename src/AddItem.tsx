import React, { useState, useEffect } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "./actions/TodoActions";
import * as DataActions from "./actions/dataActions";

const AddItem = (props: any) => {
  const [text, changeText] = useState("");
  const [key, keyDown] = useState(false);

  const handleSubmit = () => {
    if (text.length !== 0) {
      const newData = {
        name: text,
        check: "false"
      };
      console.log(props);

      props.action.addTodo(text);

      // Axios.post("http://localhost:3000/data", newData).then(() => {
      //   // console.log(newTodos, "new list hewe", newTodos[newTodos.length - 1].id);
      //   props.action2.fetchDataBegin();
      //   props.action.addTodo(text);
      //   // window.close();
      // });
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

function mapStateToProps(state: any) {
  return {
    data: state.dataReducers
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    action: bindActionCreators(TodoActions, dispatch),
    action2: bindActionCreators(DataActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
