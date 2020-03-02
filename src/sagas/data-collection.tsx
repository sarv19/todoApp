import { takeEvery } from "redux-saga/effects";
import Axios from "axios";

export const handleNewData = function* handleNewData() {
  //   const socket = new WebSocket("http://localhost:3000/data");
  yield takeEvery("ADD_TODO", (action: any) => {
    // socket.send(JSON.stringify(action));
    Axios.post("http://localhost:3000/data", {
      name: action.text,
      check: "false"
    }).then(() => {
      window.location.replace("/");
    });
    // console.log(action, "here here here");
  });
};

export const handleEditData = function* handleEditData() {
  yield takeEvery("EDIT_TODO", (action: any) => {
    console.log(action, "edit here");
    Axios.patch(`http://localhost:3000/data/${action.id}`, {
      name: action.text
    }).then(() => {
      window.location.replace("/");
    });
  });
};
