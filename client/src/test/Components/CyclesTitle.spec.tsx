/*
import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import { fromJS } from 'immutable';

import SchedulesTitle from '../../src/Components/Schedules/SchedulesTitle';

describe('SchedulesTitle', () => {
  it('props successfully passing through', () => {

    const props = fromJS({
            schedule_id: 123456789,
            schedule_title: "hello there",
    });

    const wrapper = mount(<SchedulesTitle initialValues={props} />);
    const schedule_title = wrapper.find('.ci-schedule-title-input');
        // change this for my one. look at source file. 

    expect(schedule_title).to.have.text(props.schedule_title);
  });

  it('should dispatch action when clicking like', () => {
    const props = {
      body: 'Nice post!',
      author: 'Tiffany Wu',
      numberOfLikes: 10,
      likeComment: sinon.spy()
    };

  it('should have props for schedule_id and schedule_title', function () {
    const wrapper = shallow(<SchedulesTitle/>);
    expect(wrapper.props().schedule_id).to.be.defined;
    expect(wrapper.props().schedule_title).to.be.defined;
  });

    const wrapper = mount(<BlogComment {...props} />);

    wrapper.find('button').simulate('click');

    expect(props.likeComment.calledOnce).to.equal(true);
  });
});
*/