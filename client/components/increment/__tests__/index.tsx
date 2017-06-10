import * as React from 'react';

import { mount, render } from 'enzyme';

import Increment from '../index';

function mockIncrement(): void { };

describe('The <Increment /> Component', () => {
  it('renders p and button tags', () => {
    const wrapper = mount(<Increment count={0} increment={mockIncrement} />);
    expect(wrapper.childAt(0).type()).toEqual('p');
    expect(wrapper.childAt(1).type()).toEqual('button');
  });

  it('renders the provided count correctly', () => {
    const wrapper = render(<Increment count={11} increment={mockIncrement} />);
    expect(wrapper.find('#increment-value').text()).toEqual('11');
  });
});
