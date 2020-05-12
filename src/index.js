import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App.js';

// define const to reuse configureStore() method
const store = configureStore();

const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store} >
        {/* This delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux. 
        Loading attribute is to show view while page data is loading */}
        <PersistGate
            loading={<div>loading...</div>}
            persistor={persistor} >
        <App />
        </PersistGate>
    </Provider >,
    document.getElementById('root'),
);