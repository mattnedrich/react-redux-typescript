import * as React from 'react';

import { render } from 'enzyme';

import App from '../index';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import updateState from '../../../reducers/index';

describe('The <App /> Component', () => {

  it('renders correctly', () => {
    const store = createStore(updateState);

    const wrapper = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(wrapper.find('#app').children().length).toEqual(2);
    expect(wrapper.find('#greeting-text').text()).toEqual('React-TypeScript-Redux Example');
    expect(wrapper.find('#increment-value').text()).toEqual('0');
  });
});
