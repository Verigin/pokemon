import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store =  createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;