// const { assert } = require('chai') // assertion library

// var chai = require('chai');
// var chaiImmutable = require('chai-immutable');
// chai.use(chaiImmutable);
// var expect = chai.expect;

// const { takeLatest } = require('redux-saga') // concurrency helper functions
// const { call, put } = require('redux-saga/effects') // side effects helper functions
// const { createMockTask } = require('redux-saga/utils') // utility to create Task objectimport { assert } from 'chai';


// import { apiInitialSchedulesState, apiAddSchedule, apiRemoveSchedule, apiChangeSchedule } from '../../../arcss/schedules_ar.tsx';

// import { initialSchedulesStateSaga,
//          initialSchedulesStateSagaWatch,
  
//          addScheduleSaga,
//          addScheduleSagaWatch,

//          removeScheduleSaga,
//          removeScheduleSagaWatch,

//          changeScheduleSaga,
//          changeScheduleSagaWatch,
        
//          initialSchedulesStateSucceeded,
//          addScheduleSucceeded,
//          removeScheduleSucceeded,
//          changeScheduleSucceeded,
        
//          initialSchedulesStateFailed,
//          addScheduleFailed,
//          removeScheduleFailed,
//          changeScheduleFailed } from '../../../arcss/schedules_ar.tsx';


// /* 
//                     OVERVIEW
//                                                 */

// // initial state Saga Tests - work, fail
// // Add Saga Tests - work, fail
// // Remove Saga Tests - work, fail
// // Schedule Saga Tests - work, fail
// // Root Saga Test 



// describe('redux-saga schedule actions', () => {

//   // initial state saga tests
//   it('should retrieve schedules from the server', () => {
    
//     const generator = initialSchedulesStateSaga();

//       assert.deepEqual(
//         generator.next().value,
//         call(apiInitialSchedulesState),
//         'fetch the schedules from the server'
//     )

//     let fetch_schedules = apiInitialSchedulesState();
    
//     assert.deepEqual(
//       generator.next(fetch_schedules).value,
//       put(initialSchedulesStateSucceeded(fetch_schedules.data)),
//       'schedules successfully populate the reducer'
//     )
//   });


//   it('should fail to fetch schedules: error', () => {

//     const generator = initialSchedulesStateSaga();

//     assert.deepEqual(
//       generator.next().value,
//       call(apiInitialSchedulesState),
//         'fetch the schedules from the server'
//     )

//     const error = new Error('unexpected network error')
    
//     assert.deepEqual(
//       generator.throw(error).value,
//       put(initialSchedulesStateFailed(error)),
//       'putting failure action'
//     )
//   });


//   // add schedule tests 
//   it('should post a schedule to the server', () => {

//     const generator = addScheduleSaga();

//     assert.deepEqual(
//       generator.next().value,
//       call(apiAddSchedule),
//         'post schedule to the server'
//     );

//     const schedule = { "username": "juliusreade", "schedule_id": "11122223333", "updates_id": "87654321", "subjects_id": "123456", "topics_id": "12345", "schedule_title": "Learning Smith" };
    
//     assert.deepEqual(
//       generator.next(schedule).value,
//       put(addScheduleSucceeded(schedule.data)), // put the data in, so it works now! 
//       'schedule added to reducer'
//     )
//   });


//   it('should NOT post a schedule to the server: error', () => {

//     const generator = addScheduleSaga();

//     assert.deepEqual(
//       generator.next().value,
//       call(apiAddSchedule),
//         'post schedule to the server'
//     );

//     const error = new Error('unexpected network error')
    
//     assert.deepEqual(
//       generator.throw(error).value,
//       put(addScheduleFailed(error)),
//       'schedule added to reducer'
//     )
//   });

// // remove schedule tests 
//   it('should remove a schedule on the server', () => {

//       const action = { schedule_id: "123456789"};

//       const generator = removeScheduleSaga(action);

//       assert.deepEqual(
//         generator.next().value,
//         call(apiRemoveSchedule, action.schedule_id),
//           'remove schedule from the server'
//       );

//       const schedule = {schedule_id: "123456789" };
      
//       assert.deepEqual(
//         generator.next(schedule).value,
//         put(removeScheduleSucceeded(schedule.schedule_id)),
//         'schedule added to reducer'
//       )
//   });


//   it('should NOT remove a schedule on the server: error', () => {

//       const action = { schedule_id: "123456789"};

//       const generator = removeScheduleSaga(action);

//       assert.deepEqual(
//         generator.next().value,
//         call(apiRemoveSchedule, action.schedule_id),
//           'remove schedule from the server'
//       );

//     const error = new Error('unexpected network error');
      
//       assert.deepEqual(
//         generator.throw(error).value,
//         put(removeScheduleFailed(error)),
//         'schedule added to reducer'
//       )
//   });


//  // update schedule tests 
//   it('should update a schedule on the server', () => {

//       const action = {data: { schedule_id: "123456789", schedule_title: "Learning YOLO EVERYTHING" } };

//       const generator = changeScheduleSaga(action);

//       assert.deepEqual(
//         generator.next().value,
//         call(apiChangeSchedule, action.data),
//           'update schedule on the server'
//       );

//       let schedule = apiChangeSchedule(action.data);
      
//       assert.deepEqual(
//         generator.next(schedule).value,
//         put(changeScheduleSucceeded(action.data)),
//         'dispatch update schedule to the reducer'
//       )
//   });


//   it('should NOT change a schedule on the server: error', () => {

//       const action = {data: { schedule_id: "123456789", schedule_title: "Learning YOLO EVERYTHING" } };

//       const generator = changeScheduleSaga(action);

//       assert.deepEqual(
//         generator.next().value,
//         call(apiChangeSchedule, action.data),
//           'update schedule on the server'
//       );

//       const error = new Error('unexpected network error');
      
//       assert.deepEqual(
//         generator.throw(error).value,
//         put(changeScheduleFailed(error)),
//         'failed to dispatch update schedule to the reducer'
//       )
//   });

// });

