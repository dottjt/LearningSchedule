import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import super_reducer from './super_reducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(super_reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;


      

/*
const initialState = fromJS({
  schedules: [
    {
      "id":1,
      "schedule_id":"123456789",
      "schedule_title":"Javascript Learning",
      "username":"juliusreade"
    },
    {
      "id":2,
      "schedule_id":"987654321",
      "schedule_title":"Clojure Learning",
      "username":"juliusreade"
    }
  ],
  updates: [
    {
      "id":1,
      "username":"juliusreade",
      "update_id":"111",
      "schedule_id":"123456789",
      "update_title":"A long, hard day",
      "update_text":"Learning a hell of a lot of clojure and functional programming and learning so much! Really motived and finding it incredibly interesting and fascinating!",
      "update_date":"2017-02-13T13:00:00.000Z"
    },
    {
      "id":2,
      "username":"juliusreade",
      "update_id":"222",
      "schedule_id":"123456789",
      "update_title":"You have a great face",
      "update_text":"I feel like I’m getting a little bit burnt out with all this FRP learning. I’ve gotten a lot of the basics of clojurescript, reagent and re-frame blah blah blah. Regardless, I feel like I’m ready to build something.","update_date":"2017-02-22T13:00:00.000Z"
    },
    {
      "id":3,
      "username":"juliusreade",
      "update_id":"333",
      "schedule_id":"987654321",
      "update_title":"To infinity, and bye bye!","update_text":
      "I feel like web development works a lot better if you treat it as one big hack, rather than try and structure it too much, simply because everyones needs are different.",
      "update_date":"2016-08-10T14:00:00.000Z"
    }
  ]

});
*/