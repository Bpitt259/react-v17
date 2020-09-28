import React from 'react';
import { shallow } from 'enzyme';

import Gear from './Gear';

/*
Creates a mock function similar to jest.fn but also tracks calls to object[methodName]. 
Returns a Jest mock function.
*/

describe('<Gear />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Gear />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should load gear', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
