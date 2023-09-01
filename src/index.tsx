import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux/es/exports';
import reducer from '../src/reducers/userReducer'

const rootReducer = combineReducers({
  app: reducer,
});

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
