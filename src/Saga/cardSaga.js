import { takeEvery, call, put } from "redux-saga/effects";
import { SAVE_CARD } from "../actions";
import { saveCardSucces } from "../actions";
import { serverSaveCard } from "../api";

export function* saveCardSaga(action){
  const { pan, expire, cardholder, cvc } = action.payload;
  const success = yield call(serverSaveCard, pan, expire, cardholder, cvc);
  
//   if(success.success){
//     yield put(saveCardSucces(cardNumber, expiryDate, cardName, cvc, token));
//   }
}

export function* cardSaga() {
  yield takeEvery(SAVE_CARD, saveCardSaga);
}