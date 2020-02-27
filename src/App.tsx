import React, { useEffect } from "react";
import TodoList from "./TodoList";
import { bindActionCreators } from "redux";
import * as TodoActions from "./actions/TodoActions";
import * as DataActions from "./actions/dataActions";
import { connect } from "react-redux";
// import { fetchData } from "./actions/dataActions";
import "./App.css";

interface IProps {
  todos: any;
  action: any;
  dispatch: any;
  error: any;
  loading: any;
  data: any;
  action2: any;
}

const App = ({
  action,
  action2,
  // dispatch,
  // error,
  // loading,
  data
}: IProps) => {
  // const App = (props: any) => {
  //   console.log(props);
  useEffect(() => {
    console.log("check here", action2);
    // action2.fetchDataBegin();
    action2.fetchData();
  }, []);

  if (data.error) {
    return <div>Error! {data.error.message}</div>;
  }

  if (data.loading) {
    return <div>Loading...</div>;
  } else {
    // data.item.map((item: any) => action.addTodo(item.name));
    // todos = data.item;
    return (
      <div>
        <TodoList todo={data.item} action={action} />
      </div>
    );
  }
};

function mapStateToProps(state: any) {
  return {
    dispatch: state.dispatch,
    todos: state.dataReducers,
    data: state.dataReducers,
    loading: state.loading,
    error: state.error
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    action: bindActionCreators(TodoActions, dispatch),
    action2: bindActionCreators(DataActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
