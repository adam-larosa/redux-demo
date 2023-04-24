import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import App from './App';

import { createStore } from 'redux'
import { userReducer } from './reducers/userSlice'
import { Provider } from 'react-redux'

const theStore = createStore( userReducer )

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );

root.render( 
    <Provider store={ theStore } >
       
        <App /> 
    
    </Provider>
);

