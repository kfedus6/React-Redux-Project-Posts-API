import { createStore, combineReducers } from 'redux';

import rootReducers from './modules'

const configureStore = (reducers = {}, preLoadedState = {}) => {
   return createStore(
      combineReducers({ ...reducers, ...rootReducers }),
      preLoadedState
   )
}

//createStore - функция которая создает стор
//combineReducers - функция которая объеденяет все reducers

export default configureStore;