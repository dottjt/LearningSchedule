var chai = require('chai');
var chaiImmutable = require('chai-immutable');
chai.use(chaiImmutable);
var expect = chai.expect;

import { schedules,
         initialSchedulesStateSucceeded,
         removeScheduleSucceeded, 
         addScheduleSucceeded,
         changeScheduleSucceeded } from '../../../arcss/schedules_ar';

import { List, Map, fromJS } from 'immutable';





describe('schedules reducer', () => {

  it('initial state works with undefined', () => {
    expect(schedules(undefined, {})).to.be.equal(List())
  })
 

  it('add schedule: addScheduleSucceeded', () => {

    let schedule = {
        schedule_id: '223456789',
        updates_id: '22345678',
        tags_id: '22345',
        schedule_title: 'When React/Redux Finally Makes Sense!',
        schedule_url: 'when-react-redux-finally-makes-sense',
        username: 'juliusreade',
        schedule_start_date: '2017-03-17' // year - month - day.
      };

    let schedules_state = fromJS([{
        schedule_id: '223456789',
        updates_id: '22345678',
        tags_id: '22345',
        schedule_title: 'When React/Redux Finally Makes Sense!',
        schedule_url: 'when-react-redux-finally-makes-sense',
        username: 'juliusreade',
        schedule_start_date: '2017-03-17' // year - month - day.
      }]);


    expect(schedules(undefined, addScheduleSucceeded(schedule))).to.be.equal(schedules_state);
  
})




  it('remove schedule: removeScheduleSucceeded', () => {
    let initialState = fromJS([{ 
        schedule_id: '123456789',
        updates_id: '12345678',
        tags_id: '98765',
        schedule_title: 'Learning Schedule V3 begins',
        schedule_url: 'learning-schedule-v3-begins',
        username: 'juliusreade',
        schedule_start_date: '2017-02-16'
      }]);

    
    expect(schedules(initialState, removeScheduleSucceeded('123456789')
      )).to.be.equal(
        List()
      )
  })



  it('change schedule: changeScheduleSucceeded', () => {
    let initialState = fromJS([{ 
        schedule_id: '123456789',
        updates_id: '12345678',
        tags_id: '98765',
        schedule_title: 'Learning Schedule V3 begins',
        schedule_url: 'learning-schedule-v3-begins',
        username: 'juliusreade',
        schedule_start_date: '2017-02-16'
          }]);

    let objectPassed = Map({ 
        schedule_id: '123456789',
        updates_id: '12345678',
        tags_id: '98765',
        schedule_title: 'Yolo',
        schedule_url: 'learning-schedule-v3-begins',
        username: 'juliusreade',
        schedule_start_date: '2017-02-16'
      });

    let postState = fromJS([{ 
        schedule_id: '123456789',
        updates_id: '12345678',
        tags_id: '98765',
        schedule_title: 'Yolo',
        schedule_url: 'learning-schedule-v3-begins',
        username: 'juliusreade',
        schedule_start_date: '2017-02-16'
          }]);

    
    expect(schedules(initialState, changeScheduleSucceeded(objectPassed)
      )).to.be.equal(
        postState
      )
  })



  it('initial schedule state: initialSchedulesStateSucceeded', () => {
    var example_schedule_api_request = {"id":2,"username":"juliusreade","schedule_url":"learning-schedule-v3-begins","updates_id":"12345678","tags_id":"98765","schedule_id":"123456789","schedule_title":"WE kn'oie3p2t2trasow  Schedule V3 begins","schedule_start_date":"2017-02-15T13:00:00.000Z"}

    expect(schedules(undefined, 
      initialSchedulesStateSucceeded(example_schedule_api_request))
    ).to.be.equal(
      fromJS(example_schedule_api_request)
    )
  })

})



