import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import reducers from './reducers/index';
import { loadStore, saveStore } from './utils/PersistState';

// const store = createStore(reducers);
const store = createStore(reducers, loadStore(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

setInterval(() => {
  if (store.getState().appState === 'RUNNING') {
    store.dispatch({ type: 'DECREMENT' });
    if (store.getState().timer === 0) store.dispatch({ type: 'END' });
  }
}, 1000);

store.subscribe(() => {
  let st = store.getState();
  if (st.appState === 'RUNNING') saveStore(st);
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
