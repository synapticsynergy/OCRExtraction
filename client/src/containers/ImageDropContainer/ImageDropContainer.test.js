/* eslint-env node, jest */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ImageDropContainer from '.';

describe('ImageDropContainer', () => {
  const component = shallow(<ImageDropContainer />);
  it('should render without crashing', () => {
    expect(component).to.have.lengthOf(1);
  });
  it('should have a div with a classname of dropContainer', () => {
    expect(component.find('.dropContainer').children()).to.have.lengthOf(2);
  });
  it('should have a div with a className of dropZone', () => {
    expect(component.find('.dropZone')).to.have.lengthOf(1);
  });
});
