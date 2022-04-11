import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import rootReducers from './modules'

const configureStore = (reducers = {}, preLoadedState = {}, middlewares = []) => {
   return createStore(
      combineReducers({ ...reducers, ...rootReducers }),
      preLoadedState,
      compose(applyMiddleware(...middlewares, thunk, reduxLogger))
   )
}

//createStore - функция которая создает стор
//combineReducers - функция которая объеденяет все reducers

export default configureStore;