import * as React from 'react';
import * as ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/app';
import updateState from './reducers/index';

const store = createStore(updateState);

ReactDom.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('app')
);
