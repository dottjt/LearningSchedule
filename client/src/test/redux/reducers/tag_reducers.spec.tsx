/*
var chai = require('chai');
var chaiImmutable = require('chai-immutable');
chai.use(chaiImmutable);
var expect = chai.expect;

import { tags,
         initialTagsStateSucceeded,
         removeTagSucceeded, 
         addTagSucceeded,
         changeTagSucceeded } from '../../../Components/Schedules/arcss/tags_ar.tsx';

import { List, Map, fromJS } from 'immutable';

describe('tags reducer', () => {

  it('initial state works with undefined', () => {
    expect(tags(undefined, {})).to.be.equal(List())
  })
 

  it('add tag: addTagSucceeded', () => {

    let tag = {
        tag_username: "juliusreade",
        tag_id: "111",
        tag_title: ""
      };

    let tags_state = fromJS([{
        tag_username: "juliusreade",
        tag_id: "111",
        tag_title: ""
      }]);


    expect(tags(undefined, addTagSucceeded(tag))).to.be.equal(tags_state);
  
})


  it('remove tag: removeTagSucceeded', () => {
    let initialState = fromJS([{ 
            tag_id: 111, 
            tag_title: "hello there",
            tag_username: "juliusreade"
          }]);
    
    expect(tags(initialState, removeTagSucceeded(111)
      )).to.be.equal(
        fromJS([])
      )
  })


  it('initial tag state: initialTagsStateSucceeded', () => {
    var example_tag_api_request = [{"id":1,"username":"juliusreade","tag_id":"111","schedule_id":"123456789","tag_title":"A long, hard day","tag_text":"Learning a hell of a lot of clojure and functional programming and learning so much! Really motived and finding it incredibly interesting and fascinating!","tag_date":"2017-02-13T13:00:00.000Z"},{"id":2,"username":"juliusreade","tag_id":"222","schedule_id":"123456789","tag_title":"You have a great face","tag_text":"I feel like I’m getting a little bit burnt out with all this FRP learning. I’ve gotten a lot of the basics of clojurescript, reagent and re-frame blah blah blah. Regardless, I feel like I’m ready to build something.","tag_date":"2017-02-22T13:00:00.000Z"},{"id":3,"username":"juliusreade","tag_id":"333","schedule_id":"987654321","tag_title":"To infinity, and bye bye!","tag_text":"I feel like web development works a lot better if you treat it as one big hack, rather than try and structure it too much, simply because everyones needs are different.","tag_date":"2016-08-10T14:00:00.000Z"}];


    expect(tags(undefined, 
      initialTagsStateSucceeded(example_tag_api_request))
    ).to.be.equal(
      fromJS(example_tag_api_request)
    )
  })


})

*/