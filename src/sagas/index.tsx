// import { takeEvery } from "redux-saga/effects";
// import Axios from "axios";

// const handleNewMessage = function* handleNewMessage() {
//   //   const socket = new WebSocket("http://localhost:3000/data");
//   yield takeEvery("ADD_TODO", (action: any) => {
//     // socket.send(JSON.stringify(action));
//     Axios.post("http://localhost:3000/data", {
//       name: action.text,
//       check: "false"
//     });
//     // console.log(action, "here here here");
//   });
// };

// export default handleNewMessage;

import { all, fork } from "redux-saga/effects";
import { handleNewData, handleEditData } from "./data-collection";

export const rootSaga = function* root() {
  yield all([fork(handleNewData), fork(handleEditData)]);
};
