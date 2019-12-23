import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import { Store } from './store';
import App from './components/app/App';
import './App.css'

ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>
    ,document.getElementById('root')
);
