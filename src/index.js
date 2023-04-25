import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'

import thunkMiddleware from 'redux-thunk'

import { Provider } from 'react-redux'



const theStore = createStore( rootReducer, applyMiddleware( thunkMiddleware ) )

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );

root.render( 
    <Provider store={ theStore } >
       
        <App /> 
    
    </Provider>
);

