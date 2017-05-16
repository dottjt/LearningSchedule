
/*
var chai = require('chai');
var chaiImmutable = require('chai-immutable');
chai.use(chaiImmutable);
var expect = chai.expect;

import { updates,
         initialUpdatesStateSucceeded,
         removeUpdateSucceeded, 
         addUpdateSucceeded,
         changeUpdateSucceeded } from '../../../Components/Schedules/arcss/updates_ar.tsx';

import { List, Map, fromJS } from 'immutable';

describe('updates reducer', () => {

  it('initial state works with undefined', () => {
    expect(updates(undefined, {})).to.be.equal(List())
  })
 

  it('add update: addUpdateSucceeded', () => {

    let update = {
        update_username: "juliusreade",
        update_id: "111",
        update_title: ""
      };

    let updates_state = fromJS([{
        update_username: "juliusreade",
        update_id: "111",
        update_title: ""
      }]);


    expect(updates(undefined, addUpdateSucceeded(update))).to.be.equal(updates_state);
  
})


  it('remove update: removeUpdateSucceeded', () => {
    let initialState = fromJS([{ 
            update_id: 111, 
            update_title: "hello there",
            update_username: "juliusreade"
          }]);
    
    expect(updates(initialState, removeUpdateSucceeded(111)
      )).to.be.equal(
        fromJS([])
      )
  })


  it('initial update state: initialUpdatesStateSucceeded', () => {
    var example_update_api_request = [{"id":1,"username":"juliusreade","update_id":"111","schedule_id":"123456789","update_title":"A long, hard day","update_text":"Learning a hell of a lot of clojure and functional programming and learning so much! Really motived and finding it incredibly interesting and fascinating!","update_date":"2017-02-13T13:00:00.000Z"},{"id":2,"username":"juliusreade","update_id":"222","schedule_id":"123456789","update_title":"You have a great face","update_text":"I feel like I’m getting a little bit burnt out with all this FRP learning. I’ve gotten a lot of the basics of clojurescript, reagent and re-frame blah blah blah. Regardless, I feel like I’m ready to build something.","update_date":"2017-02-22T13:00:00.000Z"},{"id":3,"username":"juliusreade","update_id":"333","schedule_id":"987654321","update_title":"To infinity, and bye bye!","update_text":"I feel like web development works a lot better if you treat it as one big hack, rather than try and structure it too much, simply because everyones needs are different.","update_date":"2016-08-10T14:00:00.000Z"}];


    expect(updates(undefined, 
      initialUpdatesStateSucceeded(example_update_api_request))
    ).to.be.equal(
      fromJS(example_update_api_request)
    )
  })


})



*/
