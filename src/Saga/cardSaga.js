import { takeEvery, call, put } from "redux-saga/effects";
import { SAVE_CARD, UPDATE, saveCardSucces, statusUpdate, update } from "../actions";
import { serverSaveCard, getStatus } from "../api";

let pid;

export function* saveCardSaga(action){
  const { pan, expire, cardholder, cvc } = action.payload;
  pid = yield call(serverSaveCard, pan, expire, cardholder, cvc);
  if(pid.length !== 0){
    yield put(saveCardSucces(pid));
    const status = yield call(getStatus, pid);
    if(status == 'process'){
      yield put(statusUpdate(status));
      yield put(update());
    }

  }
}

export function* cardSaga() {
  yield takeEvery(SAVE_CARD, saveCardSaga);
}

export function* updateFn() {
  const getNewStatus = yield call(getStatus, pid);

 if (getNewStatus == 'process') {
    yield new Promise(resolve => setTimeout(resolve, 1000));
    yield updateFn();
  } else if(getNewStatus == 'ok'){
    yield put(statusUpdate(getNewStatus));
  } else if(getNewStatus == 'fail'){
    yield put(statusUpdate(getNewStatus));
  }
}

export function* updateSaga() {
  yield takeEvery(UPDATE, updateFn);
}
