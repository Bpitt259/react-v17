import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('has a button', () => {
    expect(wrapper.find('button[id="load-modules"]').exists()).toBe(true);
  });
});
