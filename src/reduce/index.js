//redux toolkit에서 제공하는 Store를 만들어주는 함수
import { configureStore } from '@reduxjs/toolkit';
//Reducer를 결함하는 redux제공함수
import { combineReducers } from 'redux';
//만든 todos reducer
import todos from './todos';
//Reducer
const rootReducer = combineReducers({
  todos,
});
//사용할 store
export const store = configureStore({
  reducer: rootReducer,
});
