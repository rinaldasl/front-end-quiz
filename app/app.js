import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import { persistStore } from 'redux-persist';
import { asyncLocalStorage } from 'redux-persist/storages';
import thunk from 'redux-thunk';
import reducer from 'reducers';
import Layout from './layout';

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(...middleware)
));

persistStore(store, {
    storage: asyncLocalStorage,
    whitelist: [
        'favorites'
    ],
});

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById('root')
);
