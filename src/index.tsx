import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducers from "./reducers/rootReducers";
import thunk from "redux-thunk";
import "./index.css";
import Routes from "./Routes";

const initialState = {};

const store = createStore(
  rootReducers,
  initialState,
  applyMiddleware(logger, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <div>
      {/* <App /> */}
      <Routes />
    </div>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
