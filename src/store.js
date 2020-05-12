import { createStore, combineReducers } from 'redux';
import { todos } from './todos/reducers';

// reducer
const reducers = {
    todos,
};

//put reducers into form that can pass into createStore function
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);