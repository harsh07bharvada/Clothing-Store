import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';

//Every Time action is called it will pass through these middlewares in the array
const middlewares = [];

if(process.env.NODE_ENV === "development"){
    middlewares.push(logger);
}

//This is the main store instance having root reducers and the middlewares.
export const store = createStore(rootReducer,applyMiddleware(...middlewares));

//Persistor from redux-persistor helps in persisting the part of data(from the specific reducers and & actions )
// to stay in the LocalStorage / SessionStorage in the browser so that even after refresh the state of the cart (or
// particular reducer is persisted)
export const persistor = persistStore(store);

export default { store,persistor};