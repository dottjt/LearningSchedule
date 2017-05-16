// const { assert } = require('chai') // assertion library

// var chai = require('chai');
// var chaiImmutable = require('chai-immutable');
// chai.use(chaiImmutable);
// var expect = chai.expect;

// const { takeLatest } = require('redux-saga') // concurrency helper functions
// const { call, put } = require('redux-saga/effects') // side effects helper functions
// const { createMockTask } = require('redux-saga/utils') // utility to create Task objectimport { assert } from 'chai';



// import { apiInitialTagsState, apiAddTag, apiRemoveTag, apiChangeTag } from '../../../Components/Schedules/arcss/tags_ar.tsx';

// import { initialTagsStateSaga,
//          initialTagsStateSagaWatch,
  
//          addTagSaga,
//          addTagSagaWatch,

//          removeTagSaga,
//          removeTagSagaWatch,

//          changeTagSaga,
//          changeTagSagaWatch,
        
//          initialTagsStateSucceeded,
//          addTagSucceeded,
//          removeTagSucceeded,
//          changeTagSucceeded,
        
//          initialTagsStateFailed,
//          addTagFailed,
//          removeTagFailed,
//          changeTagFailed } from '../../../Components/Schedules/arcss/tags_ar.tsx';


// /* 
//                     OVERVIEW
//                                                 */

// // initial state Saga Tests 
// // Add Saga Tests
// // Remove Saga Tests
// // Tag Saga Tests


// describe('redux-saga tag actions', () => {

//   // initial state saga tests
//   it('should retrieve tags from the server', () => {
    
//     const generator = initialTagsStateSaga();

//       assert.deepEqual(
//         generator.next().value,
//         call(apiInitialTagsState),
//         'fetch the tags from the server'
//     )

//     let fetch_tags = apiInitialTagsState();
    
//     assert.deepEqual(
//       generator.next(fetch_tags).value,
//       put(initialTagsStateSucceeded(fetch_tags.data)),
//       'tags successfully populate the reducer'
//     )
//   });


//   it('should fail to fetch tags: error', () => {

//     const generator = initialTagsStateSaga();

//     assert.deepEqual(
//       generator.next().value,
//       call(apiInitialTagsState),
//         'fetch the tags from the server'
//     )

//     const error = new Error('unexpected network error')
    
//     assert.deepEqual(
//       generator.throw(error).value,
//       put(initialTagsStateFailed(error)),
//       'putting failure action'
//     )
//   });


//   // add tag tests 
//   it('should post a tag to the server', () => {

//     const generator = addTagSaga();

//     assert.deepEqual(
//       generator.next().value,
//       call(apiAddTag),
//         'post tag to the server'
//     );

//     const tag = { "tag_id": "11122223333", "tag_title": "Learning Smith", "tag_username": "juliusreade" };
    
//     assert.deepEqual(
//       generator.next(tag).value,
//       put(addTagSucceeded(tag)),
//       'tag added to reducer'
//     )
//   });


//   it('should NOT post a tag to the server: error', () => {

//     const generator = addTagSaga();

//     assert.deepEqual(
//       generator.next().value,
//       call(apiAddTag),
//         'post tag to the server'
//     );

//     const error = new Error('unexpected network error')
    
//     assert.deepEqual(
//       generator.throw(error).value,
//       put(addTagFailed(error)),
//       'tag added to reducer'
//     )
//   });

// // remove tag tests 
//   it('should remove a tag on the server', () => {

//       const action = { tag_id: "123456789"};

//       const generator = removeTagSaga(action);

//       assert.deepEqual(
//         generator.next().value,
//         call(apiRemoveTag, action.tag_id),
//           'remove tag from the server'
//       );

//       const tag = {tag_id: "123456789" };
      
//       assert.deepEqual(
//         generator.next(tag).value,
//         put(removeTagSucceeded(tag.tag_id)),
//         'tag added to reducer'
//       )
//   });


//   it('should NOT remove a tag on the server: error', () => {

//       const action = { tag_id: "123456789"};

//       const generator = removeTagSaga(action);

//       assert.deepEqual(
//         generator.next().value,
//         call(apiRemoveTag, action.tag_id),
//           'remove tag from the server'
//       );

//     const error = new Error('unexpected network error');
      
//       assert.deepEqual(
//         generator.throw(error).value,
//         put(removeTagFailed(error)),
//         'tag added to reducer'
//       )
//   });


//  // update tag tests 
//   it('should update a tag on the server', () => {

//       const action = {data: { tag_id: "123456789", tag_title: "Learning YOLO EVERYTHING" } };

//       const generator = changeTagSaga(action);

//       assert.deepEqual(
//         generator.next().value,
//         call(apiChangeTag, action.data),
//           'update tag on the server'
//       );

//       let tag = apiChangeTag(action.data);
      
//       assert.deepEqual(
//         generator.next(tag).value,
//         put(changeTagSucceeded(action.data)),
//         'dispatch update tag to the reducer'
//       )
//   });


//   it('should NOT change a tag on the server: error', () => {

//       const action = {data: { tag_id: "123456789", tag_title: "Learning YOLO EVERYTHING" } };

//       const generator = changeTagSaga(action);

//       assert.deepEqual(
//         generator.next().value,
//         call(apiChangeTag, action.data),
//           'update tag on the server'
//       );

//       const error = new Error('unexpected network error');
      
//       assert.deepEqual(
//         generator.throw(error).value,
//         put(changeTagFailed(error)),
//         'failed to dispatch update tag to the reducer'
//       )
//   });

// });

