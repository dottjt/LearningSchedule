import { put, call, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { Map } from 'immutable';
import axios from 'axios';



/* 
                    OVERVIEW
                                                */

// Add Tag Actions
// Remove Tag Actions
// Tag change Actions


/*
            INITIAL_TAGS_ACTION_CREATORS 
                                                */


export const REQUEST_INITIAL_TAGS_STATE = 'REQUEST_INITIAL_TAGS_STATE';
export const INITIAL_TAGS_STATE_SUCCEEDED = 'INITIAL_TAGS_STATE_SUCCEEDED';
export const INITIAL_TAGS_STATE_FAILED = 'INITIAL_TAGS_STATE_FAILED';

export const requestInitialTagsState = (schedule_id) => ({type: REQUEST_INITIAL_TAGS_STATE, schedule_id});
export const initialTagsStateSucceeded = tags => ({type: INITIAL_TAGS_STATE_SUCCEEDED, tags});
export const initialTagsStateFailed = err => ({type: INITIAL_TAGS_STATE_FAILED, err});


/*
            INITIAL_TAGS_ASYNC_ACTIONS
                                                */


export const apiInitialTagsState = () => axios.get('api/v1/tags');


export function* initialTagsStateSaga(): SagaIterator {
  try {

    let tags = yield call(apiInitialTagsState);

    if (tags !== undefined) { 
        yield put(initialTagsStateSucceeded(tags.data)); };
  }

  catch (err) { yield put (initialTagsStateFailed(err)) }
};








/*

            ADD_TAG_ACTION_CREATORS 
                                                */

export const REQUEST_ADD_TAG = 'REQUEST_ADD_TAG';
export const ADD_TAG_SUCCEEDED = 'ADD_TAG_SUCCEEDED';
export const ADD_TAG_FAILED = 'ADD_TAG_FAILED';

export const requestAddTag = data => ({type: REQUEST_ADD_TAG, data});
export const addTagSucceeded = data => ({type: ADD_TAG_SUCCEEDED, data});
export const addTagFailed = err => ({type: ADD_TAG_FAILED, err});


/*
            ADD_TAG_ASYNC_ACTIONS
                                                */

                                                // okay, so it sends an { tags: [array]}
                                                // need a helper funciton that sorts through the array and gets the right data. 
export function apiAddTag(schedule_id: string, tags_id: string, username: string, tag_text: string) {
    // check to see if this is okay.
    
    return axios({
            method: 'post',
            url: 'api/v1/tags',
            data: {
                schedule_id,
                tags_id,
                username,
                tag_text
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        });
};

export function* addTagSaga(action): SagaIterator {
  
  try {

    // let token = localStorage.getItem('id_token') || null

    let tag_text = action.data.get('tag_text_value'); 
    let schedule_id = action.data.get('schedule_id');
    let tags_id = action.data.get('form');
    let username = action.data.get('username');

    if (tag_text.indexOf('#') !== 0) {
        tag_text = "#" + tag_text;
    }

//    if (token) {   }

    yield call(apiAddTag, schedule_id, tags_id, username, tag_text);


    let newAction = Object.assign({}, action, {
        data: Map({
        tag_text: tag_text,
        schedule_id: schedule_id,
        tags_id: tags_id,
        username: username
    })
    })

    yield put(addTagSucceeded(newAction.data));


}
  catch (err) {
    yield put (addTagFailed(err));
  }
};










/*
            REMOVE_TAG_ACTION_CREATORS 
                                                */




export const REQUEST_REMOVE_TAG = 'REQUEST_REMOVE_TAG';
export const REMOVE_TAG_SUCCEEDED = 'REMOVE_TAG_SUCCEEDED';
export const REMOVE_TAG_FAILED = 'REMOVE_TAG_FAILED';


export const requestRemoveTag = data => ({type: REQUEST_REMOVE_TAG, data});
export const removeTagSucceeded = data => ({type: REMOVE_TAG_SUCCEEDED, data});
export const removeTagFailed = err => ({type: REMOVE_TAG_FAILED, err});







/*
            REMOVE_TAG_ASYNC_ACTIONS
                                                */

                                                // okay, so it sends an { tags: [array]}



export function apiRemoveTag(tag_id: string) {
    
    return axios.delete('api/v1/tags/' + tag_id
    // {
    //     headers: { 'Authorization': 'Bearer ' + token }

    // }
    );
};




export function* removeTagSaga(action) {

  try {

    // let token = localStorage.getItem('id_token') || null
    let tag_id = action.data;

//    if (token) {   }

    yield call(apiRemoveTag, tag_id);

    yield put(removeTagSucceeded(action.tag_id));

  }
  catch (err) {
    yield put (removeTagFailed(err));
  }
};




/*
            CHANGE_TAG_ACTION_CREATORS 
                                                */

export const REQUEST_CHANGE_TAG = 'REQUEST_CHANGE_TAG';
export const CHANGE_TAG_SUCCEEDED = 'CHANGE_TAG_SUCCEEDED';
export const CHANGE_TAG_FAILED = 'CHANGE_TAG_FAILED';


export const requestChangeTag = data => ({type: REQUEST_CHANGE_TAG, data});
export const changeTagSucceeded = data => ({type: CHANGE_TAG_SUCCEEDED, data});
export const changeTagFailed = err => ({type: CHANGE_TAG_FAILED, err});


/*
            CHANGE_TAG_ASYNC_ACTIONS
                                                */


export function apiChangeTag(tag_id, tag_text, tag_index) {
    // check to see if this is okay.
        axios({
            method: 'put',
            url: 'api/v1/tags/' + tag_id,
            data: {
               tag_text,
               tag_index
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        });
};


export function* changeTagSaga(action) {

  try {

    // let token = localStorage.getItem('id_token') || null
    let tag_id = action.data.get('tag_id');
    let tag_text = action.data.get('tag_text');
    let tag_index = action.data.get('tag_index');
    
    // if (token) {    }

    yield call(apiChangeTag, tag_id, tag_text, tag_index);

    yield put(changeTagSucceeded(action.data));

}
  catch (err) {
    yield put (changeTagFailed(err));
  }
};

export function* changeTagSagaWatch() {
    takeLatest(REQUEST_CHANGE_TAG, changeTagSaga);
};



/*
                    LE REDUCER 
                                                */

import { List, fromJS } from 'immutable';

export function tags(state = List(), action) {
    switch(action.type) {

        case ADD_TAG_SUCCEEDED:
            return state = state.push(fromJS(action.data));

        case INITIAL_TAGS_STATE_SUCCEEDED: 
            return state = fromJS(action.tags);

        case CHANGE_TAG_SUCCEEDED: 
            return fromJS(state).map(tag => {
                if (tag.get('tag_id') === action.data.tag_id) {
                    return tag.set('tag_text', action.data.tag_text)
                              .set('tag_index', action.data.tag_index);
                              
                };
                return tag;
            });

        case REMOVE_TAG_SUCCEEDED:
            return fromJS(state).filter(tag => tag.get('tag_id') !== action.tag_id);

        default:
            return state;
            
    }; 
}; 

/*
[
    {
      tag_id: "1234091283570938409128341234",
      tag_title: "We have everything!",
      tag_username: "juliusreade"
    },
    {
      tag_id: "3000000033333339392922939239",
      tag_title: "I know you like it",
      tag_username: "juliusreade"
    }
]

*/