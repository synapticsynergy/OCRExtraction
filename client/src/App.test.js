/* eslint-env node, mocha */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('App', () => {
  const component = shallow(<App />);
  it('renders without crashing', () => {
    expect(component).to.exist;
  });
  it('should have one child component', () => {
    // expect(component.find('.App'))
  });
});
