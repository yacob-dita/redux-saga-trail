import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import RootReducer from './redux/reducers/RootReducer';
import RootSaga from './redux/sagas/RootSagas';


const SagaMiddleWare = createSagaMiddleWare();

const store = createStore(RootReducer, applyMiddleware(SagaMiddleWare))

SagaMiddleWare.run(RootSaga)

export default store;
