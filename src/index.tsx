import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducers from "./reducers/rootReducers";
import thunk from "redux-thunk";
import Routes from "./Routes";
import createSagaMiddleware from "redux-saga";
import handleNewMessage from "./sagas";
import "./index.css";

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducers,
  initialState,
  compose(applyMiddleware(logger, thunk, sagaMiddleware))
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

sagaMiddleware.run(handleNewMessage);
serviceWorker.unregister();
