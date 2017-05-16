// const { assert } = require('chai') // assertion library

// var chai = require('chai');
// var chaiImmutable = require('chai-immutable');
// chai.use(chaiImmutable);
// var expect = chai.expect;

// const { takeEvery, takeLatest } = require('redux-saga') // concurrency helper functions
// const { call, take, fork, cancel, put } = require('redux-saga/effects') // side effects helper functions
// const { createMockTask } = require('redux-saga/utils') // utility to create Task objectimport { assert } from 'chai';

// import rootSaga from '../../../arcss/sagas.tsx';

// import {
//     addScheduleSaga,
//     removeScheduleSaga,
//     changeScheduleSaga,
//     initialSchedulesStateSaga } from '../../../arcss/schedules_ar.tsx';

// import {
//     addTagSaga,
//     removeTagSaga,
//     changeTagSaga,
//     initialTagsStateSaga } from '../../../arcss/tags_ar.tsx';

// import {
//     addUpdateSaga,
//     removeUpdateSaga,
//     changeUpdateSaga,
//     initialUpdatesStateSaga } from '../../../arcss/updates_ar.tsx';

// import {
//     addSubjectSaga,
//     removeSubjectSaga,
//     changeSubjectSaga,
//     initialSubjectsStateSaga } from '../../../arcss/subjects_ar.tsx';

// import {
//     addTopicSaga,
//     removeTopicSaga,
//     changeTopicSaga,
//     initialTopicsStateSaga } from '../../../arcss/topics_ar.tsx';


//   // root sagas
//   //  schedules

// describe('redux-saga schedule actions', () => {

//   it('sould create root saga', () => {
//     const generator = rootSaga();

//     assert.deepEqual(
//       generator.next().value,
//       fork(takeLatest, 'REQUEST_ADD_SCHEDULE', addScheduleSaga),
//       'fetch the latest requested schedule'
//     )

//     assert.deepEqual(
//       generator.next().value,
//       fork(takeLatest, 'REQUEST_REMOVE_SCHEDULE', removeScheduleSaga),
//       'create comment for every request'
//     )

//     assert.deepEqual(
//       generator.next().value,
//       fork(takeLatest, 'REQUEST_CHANGE_SCHEDULE', changeScheduleSaga),
//       'preload requested schedules'
//     )

//     assert.deepEqual(
//       generator.next().value,
//       fork(initialSchedulesStateSaga),
//       'preload requested schedules'
//     )

//     // tags
//     assert.deepEqual(
//         generator.next().value,
//         fork(takeLatest, 'REQUEST_ADD_TAG', addTagSaga),
//         'fetch the latest requested tag'
//       )

//       assert.deepEqual(
//         generator.next().value,
//         fork(takeLatest, 'REQUEST_REMOVE_TAG', removeTagSaga),
//         'create comment for every request'
//       )

//       assert.deepEqual(
//         generator.next().value,
//         fork(takeLatest, 'REQUEST_CHANGE_TAG', changeTagSaga),
//         'preload requested tags'
//       )

//       assert.deepEqual(
//         generator.next().value,
//         fork(initialTagsStateSaga),
//         'preload requested tags'
//       )
      
//     // updates
//     assert.deepEqual(
//       generator.next().value,
//       fork(takeLatest, 'REQUEST_ADD_UPDATE', addUpdateSaga),
//       'fetch the latest requested update'
//     )

//     assert.deepEqual(
//       generator.next().value,
//       fork(takeLatest, 'REQUEST_REMOVE_UPDATE', removeUpdateSaga),
//       'create comment for every request'
//     )

//     assert.deepEqual(
//       generator.next().value,
//       fork(takeLatest, 'REQUEST_CHANGE_UPDATE', changeUpdateSaga),
//       'preload requested updates'
//     )

//     assert.deepEqual(
//       generator.next().value,
//       fork(initialUpdatesStateSaga),
//       'preload requested updates'
//     )


//     // subjects
//    assert.deepEqual(
//       generator.next().value,
//       fork(takeLatest, 'REQUEST_ADD_SUBJECT', addSubjectSaga),
//       'fetch the latest requested subject'
//     )

//     assert.deepEqual(
//       generator.next().value,
//       fork(takeLatest, 'REQUEST_REMOVE_SUBJECT', removeSubjectSaga),
//       'create comment for every request'
//     )

//     assert.deepEqual(
//       generator.next().value,
//       fork(takeLatest, 'REQUEST_CHANGE_SUBJECT', changeSubjectSaga),
//       'preload requested subjects'
//     )

//     assert.deepEqual(
//       generator.next().value,
//       fork(initialSubjectsStateSaga),
//       'preload requested subjects'
//     )



//     // topics
//     assert.deepEqual(
//         generator.next().value,
//         fork(takeLatest, 'REQUEST_ADD_TOPIC', addTopicSaga),
//         'fetch the latest requested topic'
//       )

//       assert.deepEqual(
//         generator.next().value,
//         fork(takeLatest, 'REQUEST_REMOVE_TOPIC', removeTopicSaga),
//         'create comment for every request'
//       )

//       assert.deepEqual(
//         generator.next().value,
//         fork(takeLatest, 'REQUEST_CHANGE_TOPIC', changeTopicSaga),
//         'preload requested topics'
//       )

//       assert.deepEqual(
//         generator.next().value,
//         fork(initialTopicsStateSaga),
//         'preload requested topics'
//       )

//     });

// });
