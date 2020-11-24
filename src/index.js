import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers';
// import {apiMiddleware} from './apiMiddleware';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)))
saga.run(sagaWatcher);

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
