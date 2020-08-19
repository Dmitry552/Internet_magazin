import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import './index.css';
import App from './conteiners/App';
import 'semantic-ui-css/semantic.min.css';
import './app.css';

var store = createStore();


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));
