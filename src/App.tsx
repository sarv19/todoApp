import React, { useEffect } from "react";
import TodoList from "./TodoList";
import { bindActionCreators } from "redux";
import * as TodoActions from "./actions/TodoActions";
import { connect } from "react-redux";
import "./App.css";

interface IProps {
  todos: any;
  action: any;
}

const App = ({ todos, action }: IProps) => {
  // const [todos] = useState(todo);
  // const [actions] = useState(action);
  // const todos = todo;
  // console.log(todos, "where");
  useEffect(() => {
    fetch("http://localhost:3000/todo", {
      method: "GET"
    })
      .then(res => res.json())
      .then(respose => {
        todos = respose;
        console.log(respose, "here");
      });
  }, []);

  return (
    <div>
      <TodoList todo={todos} action={action} />
    </div>
  );
};

function mapStateToProps(state: any) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    action: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
