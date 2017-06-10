import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import updateState from './reducers/index';

const store = createStore(
  updateState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__  && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDom.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('app'),
);
