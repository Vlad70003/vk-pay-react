import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/auth';
import createSagaMiddleware from 'redux-saga';
import { cardSaga } from './authSaga';
import { updateSaga } from './authSaga';


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware ));

sagaMiddleware.run( cardSaga );
sagaMiddleware.run( updateSaga );
