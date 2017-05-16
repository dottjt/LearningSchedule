/*
import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import SchedulesTopbar from '../../src/Components/Schedules/SchedulesTopbar';
import { requestAddSchedule } from '../../src/Components/Schedules/arcss/schedules_ar';

describe('SchedulesTopbar', () => {


  it('should have props for requestAddSchedule', () => {
    const wrapper = shallow(<SchedulesTopbar/>);
    expect(wrapper.props().schedule_title).to.be.defined;
  });


  it('should dispatch addScheduleRequest when button is clicked', () => {

    const props = {
      requestAddSchedule: sinon.spy()
    };
  });

    const wrapper = mount(<SchedulesTopbar {...props} />);

    wrapper.find('button').simulate('click');

    expect(props.likeComment.calledOnce).to.equal(true);


});


  it('should have an input for the email', function () {
    const wrapper = shallow(<Email/>);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should have a button', function () {
    const wrapper = shallow(<Email/>);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should have props for handleEmailChange and fetchGravatar', function () {
    const wrapper = shallow(<Email/>);
    expect(wrapper.props().handleEmailChange).to.be.defined;
    expect(wrapper.props().fetchGravatar).to.be.defined;
  });

  it('adds items to the list', () => {
    const wrapper = shallow(<BeerListContainer/>);
    wrapper.addItem('Sam Adams');
    expect(wrapper.state('beers')).to.eql(['Sam Adams']);
  });



  // needs better things 
*/