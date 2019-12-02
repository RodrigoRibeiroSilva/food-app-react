import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import shopppingCartReducer from './ShoppingCartReducer'
import App from './components/app/App';
import './App.css'
import * as serviceWorker from './serviceWorker';

const reducers = combineReducers({
    shopppingCart: shopppingCartReducer       
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
