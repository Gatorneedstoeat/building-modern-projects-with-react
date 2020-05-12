import { createStore, combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { todos } from './todos/reducers';

// reducer
const reducers = {
    todos,
};
// object that tells redux-persit how to save and where to store app data
// storage property defaults to local storage from import
// stateReconciler: autoMergeLevel2 tell redux persist how to reconcile the initial and stored states of the app how deep should it go
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}
//put reducers into form that can pass into createStore function
const rootReducer = combineReducers(reducers);

// this wraps the rootReducer in a persitant container
const persistedReducer = persistReducer(persistConfig,rootReducer);

export const configureStore = () => createStore(
    persistedReducer,
    // connects app to react dev tools in chrome
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );