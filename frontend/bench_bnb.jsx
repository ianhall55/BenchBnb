import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {requestBenches, receiveBenches} from './actions/bench_actions';
import {fetchBenches} from './util/bench_api_util';
import { Provider } from 'react-redux';
import Root from './components/root.jsx';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();
  window.Store = store;
  window.requestBenches = requestBenches;
  ReactDOM.render(<Root store={store}/> , root);
});


window.receiveBenches = receiveBenches;
window.fetchBenches = fetchBenches;
