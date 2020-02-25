import { combineReducers } from "redux";
import todos from "./todoReducers";

const rootReducers = combineReducers({
  todos
});

export default rootReducers;
