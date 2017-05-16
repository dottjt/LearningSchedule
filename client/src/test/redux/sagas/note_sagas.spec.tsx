// const { assert } = require('chai') // assertion library

// var chai = require('chai');
// var chaiImmutable = require('chai-immutable');
// chai.use(chaiImmutable);
// // var expect = chai.expect;

// // const { takeLatest } = require('redux-saga') // concurrency helper functions
// const { call, put } = require('redux-saga/effects') // side effects helper functions
// // const { createMockTask } = require('redux-saga/utils') // utility to create Task objectimport { assert } from 'chai';



// import { apiInitialUpdatesState, apiAddUpdate, apiRemoveUpdate, apiChangeUpdate } from '../../../arcss/updates_ar.tsx';

// import { initialUpdatesStateSaga,
  
//          addUpdateSaga,

//          removeUpdateSaga,

//          changeUpdateSaga,
        
//          initialUpdatesStateSucceeded,
//          addUpdateSucceeded,
//          removeUpdateSucceeded,
//          changeUpdateSucceeded,
        
//          initialUpdatesStateFailed,
//          addUpdateFailed,
//          removeUpdateFailed,
//          changeUpdateFailed } from '../../../arcss/updates_ar.tsx';


// /* 
//                     OVERVIEW
//                                                 */

// // initial state Saga Tests 
// // Add Saga Tests
// // Remove Saga Tests
// // Update Saga Tests


// describe('redux-saga update actions', () => {

//   // initial state saga tests
//   it('should retrieve updates from the server', () => {
    
//     const generator = initialUpdatesStateSaga();

//       assert.deepEqual(
//         generator.next().value,
//         call(apiInitialUpdatesState),
//         'fetch the updates from the server'
//     )

//     let fetch_updates = apiInitialUpdatesState();
    
//     assert.deepEqual(
//       generator.next(fetch_updates).value,
//       put(initialUpdatesStateSucceeded(fetch_updates.data)),
//       'updates successfully populate the reducer'
//     )
//   });


//   it('should fail to fetch updates: error', () => {

//     const generator = initialUpdatesStateSaga();

//     assert.deepEqual(
//       generator.next().value,
//       call(apiInitialUpdatesState),
//         'fetch the updates from the server'
//     )

//     const error = new Error('unexpected network error')
    
//     assert.deepEqual(
//       generator.throw(error).value,
//       put(initialUpdatesStateFailed(error)),
//       'putting failure action'
//     )
//   });


//   // add update tests 
//   it('should post a update to the server', () => {

//     const generator = addUpdateSaga();

//     assert.deepEqual(
//       generator.next().value,
//       call(apiAddUpdate),
//         'post update to the server'
//     );

//     const update = { "update_id": "11122223333", "update_title": "Learning Smith", "update_username": "juliusreade" };
    
//     assert.deepEqual(
//       generator.next(update).value,
//       put(addUpdateSucceeded(update.data)),
//       'update added to reducer'
//     )
//   });


//   it('should NOT post a update to the server: error', () => {

//     const generator = addUpdateSaga();

//     assert.deepEqual(
//       generator.next().value,
//       call(apiAddUpdate),
//         'post update to the server'
//     );

//     const error = new Error('unexpected network error')
    
//     assert.deepEqual(
//       generator.throw(error).value,
//       put(addUpdateFailed(error)),
//       'update added to reducer'
//     )
//   });

// // remove update tests 
//   it('should remove a update on the server', () => {

//       const action = { update_id: "123456789"};

//       const generator = removeUpdateSaga(action);

//       assert.deepEqual(
//         generator.next().value,
//         call(apiRemoveUpdate, action.update_id),
//           'remove update from the server'
//       );

//       const update = {update_id: "123456789" };
      
//       assert.deepEqual(
//         generator.next(update).value,
//         put(removeUpdateSucceeded(update.update_id)),
//         'update added to reducer'
//       )
//   });


//   it('should NOT remove a update on the server: error', () => {

//       const action = { update_id: "123456789"};

//       const generator = removeUpdateSaga(action);

//       assert.deepEqual(
//         generator.next().value,
//         call(apiRemoveUpdate, action.update_id),
//           'remove update from the server'
//       );

//     const error = new Error('unexpected network error');
      
//       assert.deepEqual(
//         generator.throw(error).value,
//         put(removeUpdateFailed(error)),
//         'update added to reducer'
//       )
//   });


//  // update update tests 
//   it('should update a update on the server', () => {

//       const action = {data: { update_id: "123456789", update_title: "Learning YOLO EVERYTHING" } };

//       const generator = changeUpdateSaga(action);

//       assert.deepEqual(
//         generator.next().value,
//         call(apiChangeUpdate, action.data),
//           'update update on the server'
//       );

//       let update = apiChangeUpdate(action.data);
      
//       assert.deepEqual(
//         generator.next(update).value,
//         put(changeUpdateSucceeded(action.data)),
//         'dispatch update update to the reducer'
//       )
//   });


//   it('should NOT change a update on the server: error', () => {

//       const action = {data: { update_id: "123456789", update_title: "Learning YOLO EVERYTHING" } };

//       const generator = changeUpdateSaga(action);

//       assert.deepEqual(
//         generator.next().value,
//         call(apiChangeUpdate, action.data),
//           'update update on the server'
//       );

//       const error = new Error('unexpected network error');
      
//       assert.deepEqual(
//         generator.throw(error).value,
//         put(changeUpdateFailed(error)),
//         'failed to dispatch update update to the reducer'
//       )
//   });

// });

