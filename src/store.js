import { createStore, combineReducers } from 'redux';

const reducers = {};

//put reducers into form that can pass into createStore function
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);