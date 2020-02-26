import { combineReducers } from "redux";
import todos from "./todoReducers";
import dataReducers from "./dataReducers";

const rootReducers = combineReducers({
  todos,
  dataReducers
});

export default rootReducers;
