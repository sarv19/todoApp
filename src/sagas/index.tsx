import { takeEvery } from "redux-saga/effects";

const handleNewMessage = function* handleNewMessage(params: any) {
  const socket = new WebSocket("http://localhost:3000/data");
  yield takeEvery("ADD_TODO", action => {
    socket.send(JSON.stringify(action));
  });
};

export default handleNewMessage;
