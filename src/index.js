import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'
import {BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { reducerBucket } from './reducers/index';


const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENTION_COMPOSE_ || compose();

const store = createStore(reducerBucket, composeEnhancers(applyMiddleware(sagaMiddleware)));





ReactDOM.render(
  <Router>
    <Provider store = {store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
