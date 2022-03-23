import React from 'react';
import ReactDOM from 'react-dom';
// Provider - Component made by react-redux library.
import { Provider } from 'react-redux';
import { createStore} from 'redux';

import App from './components/App';
import reducers from './reducers';


ReactDOM.render(
  // Wrap the App in the Provider.
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
)




