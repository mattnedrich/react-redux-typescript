import * as React from 'react';

import { mount, render } from 'enzyme';

import Greeting from '../index';

function mockUpdateGreeting(greeting: string): void { };

describe('The <Greeting /> Component', () => {
  it('renders and h1, input, and button tags', () => {
    const wrapper = mount(<Greeting greeting='foo' updateGreeting={mockUpdateGreeting} />);
    expect(wrapper.childAt(0).type()).toEqual('h1');
    expect(wrapper.childAt(1).type()).toEqual('input');
    expect(wrapper.childAt(2).type()).toEqual('button');
  });

  it('renders the provided greeting correctly', () => {
    const wrapper = render(<Greeting greeting='foo' updateGreeting={mockUpdateGreeting} />);
    expect(wrapper.find('#greeting-text').text()).toEqual('foo');
  });
});
