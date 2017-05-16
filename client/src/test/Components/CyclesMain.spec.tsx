/*
import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SMain from '../../src/Components/Schedules/SMain';

describe('<SMain/>', () => {
  
  it('should have props for schedules', function () {
    const wrapper = shallow(<SMain/>);
    expect(wrapper.props().schedules).to.be.defined;
  });

  it('should render SchedulesTitle and ***', () => {
    const wrapper = shallow(<BeerListContainer/>);
    expect(wrapper.containsAllMatchingElements([
      <SchedulesTitle/>,
      </Blah>
    ])).to.equal(true);
  });


  it('contains an <SchedulesTitle/> component', function () {
    const wrapper = mount(<Gravatar/>);
    expect(wrapper.find(SchedulesTitle)).to.have.length(1);
  });


  it('should update the src state on clicking fetch', function () {
    const wrapper = mount(<Gravatar/>);
    wrapper.setState({ email: 'hello@ifelse.io' });
    wrapper.find('button').simulate('click');
    expect(wrapper.state('email')).to.equal('hello@ifelse.io');
    expect(wrapper.state('src')).to.equal(`http://gravatar.com/avatar/${md5('markthethomas@gmail.com')}?s=200`);


});

*/