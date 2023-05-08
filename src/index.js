import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import {store} from './store';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
     <App tab='home'></App>
  </Provider> 
);

