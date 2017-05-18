import { put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import axios from 'axios';

/* 
                    OVERVIEW
                                                */
// Initial Update
// Add Update Actions
// Remove Update Actions
// Update change Actions


/*
            INITIAL_UPDATES_ACTION_CREATORS 
                                                    */


export const REQUEST_INITIAL_UPDATES_STATE = 'REQUEST_INITIAL_UPDATES_STATE';
export const INITIAL_UPDATES_STATE_SUCCEEDED = 'INITIAL_UPDATES_STATE_SUCCEEDED';
export const INITIAL_UPDATES_STATE_FAILED = 'INITIAL_UPDATES_STATE_FAILED';

export const requestInitialUpdatesState = () => ({type: REQUEST_INITIAL_UPDATES_STATE});
export const initialUpdatesStateSucceeded = updates => ({type: INITIAL_UPDATES_STATE_SUCCEEDED, updates});
export const initialUpdatesStateFailed = err => ({type: INITIAL_UPDATES_STATE_FAILED, err});


/*
            INITIAL_UPDATES_ASYNC_ACTIONS
                                                */


export function apiInitialUpdatesState() {
    // check to see if this is okay.
    // okay, we need to retrieve this from a cookie, or something. 
    return axios.get('api/v1/updates');
};

export function* initialUpdatesStateSaga(): SagaIterator {

  try {

    let updates = yield call(apiInitialUpdatesState);
    
    if (updates !== undefined) {
      yield put(initialUpdatesStateSucceeded(updates.data));
      // from server
    };

  }
  catch (err) {
    yield put (initialUpdatesStateFailed(err))
  }
};











/*

            ADD_UPDATE_ACTION_CREATORS 
                                                */





export const REQUEST_ADD_UPDATE = 'REQUEST_ADD_UPDATE';
export const ADD_UPDATE_SUCCEEDED = 'ADD_UPDATE_SUCCEEDED';
export const ADD_UPDATE_FAILED = 'ADD_UPDATE_FAILED';

export const requestAddUpdate = data => ({type: REQUEST_ADD_UPDATE, data});
export const addUpdateSucceeded = data => ({type: ADD_UPDATE_SUCCEEDED, data});
export const addUpdateFailed = err => ({type: ADD_UPDATE_FAILED, err});





/*
            ADD_UPDATE_ASYNC_ACTIONS
                                                */



            // okay, so it sends an { updates: [array]}
            // need a helper funciton that sorts through the array and gets the right data. 
export function apiAddUpdate(schedule_id, schedule_url, updates_id, update_id, update_title, update_text, update_summary, update_type, update_tags_id, username) {
    
    return axios({
            method: 'post',
            url: 'api/v1/updates',
            data: {
                schedule_id,
                schedule_url,
                updates_id,
                update_id,
                update_title,
                update_text,
                update_summary,
                update_type,
                update_tags_id,
                username
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        });
};

export function* addUpdateSaga(action): SagaIterator {
  try {



    console.log(action.data.toJS())

    // let token = localStorage.getItem('id_token') || null
    // if (token) {    }

    let schedule_id = action.data.get('schedule_id');
    let schedule_url = action.data.get('schedule_url');
    let updates_id = action.data.get('updates_id');
    let update_id = action.data.get('update_id');
    let update_tags_id = action.data.get('update_id');
    
    let update_title = action.data.get('update_text');
    let update_text = action.data.get('update_text');
    let update_type = action.data.get('update_type');
    let update_summary = action.data.get('update_summary');
    let username = action.data.get('username');

    yield call(apiAddUpdate, schedule_id, schedule_url, updates_id, update_id, update_title, update_text, update_summary, update_type, update_tags_id, username);

    yield put(addUpdateSucceeded(action.data));

  }
  catch (err) {
    yield put (addUpdateFailed(err));
  }
};














/*
            REMOVE_UPDATE_ACTION_CREATORS 
                                                */





export const REQUEST_REMOVE_UPDATE = 'REQUEST_REMOVE_UPDATE';
export const REMOVE_UPDATE_SUCCEEDED = 'REMOVE_UPDATE_SUCCEEDED';
export const REMOVE_UPDATE_FAILED = 'REMOVE_UPDATE_FAILED';


export const requestRemoveUpdate = data => ({type: REQUEST_REMOVE_UPDATE, data});
export const removeUpdateSucceeded = data => ({type: REMOVE_UPDATE_SUCCEEDED, data});
export const removeUpdateFailed = err => ({type: REMOVE_UPDATE_FAILED, err});






/*
            REMOVE_UPDATE_ASYNC_ACTIONS
                                                */

                                                // okay, so it sends an { updates: [array]}



export function apiRemoveUpdate(update_id: string) {
    
    return axios.delete('api/v1/updates/' + update_id
    // {
    //     headers: { 'Authorization': 'Bearer ' + token }
    // }
    );
};


export function* removeUpdateSaga(action) {

  try {

  // let token = localStorage.getItem('id_token') || null
  let update_id = action.data;

    // if (token) {    }

    yield call(apiRemoveUpdate, update_id);

    yield put(removeUpdateSucceeded(action.data));
    // from action

  }  
  catch (err) {
    yield put (removeUpdateFailed(err));
  }
};



/*
            CHANGE_UPDATE_ACTION_CREATORS 
                                                */

export const REQUEST_CHANGE_UPDATE = 'REQUEST_CHANGE_UPDATE';
export const CHANGE_UPDATE_SUCCEEDED = 'CHANGE_UPDATE_SUCCEEDED';
export const CHANGE_UPDATE_FAILED = 'CHANGE_UPDATE_FAILED';


export const requestChangeUpdate = data => ({type: REQUEST_CHANGE_UPDATE, data});
export const changeUpdateSucceeded = data => ({type: CHANGE_UPDATE_SUCCEEDED, data});
export const changeUpdateFailed = err => ({type: CHANGE_UPDATE_FAILED, err});


/*
            CHANGE_UPDATE_ASYNC_ACTIONS
                                                */


export function apiChangeUpdate(update_id: string, update_title: string, update_text: string, update_summary: string) {
    // check to see if this is okay.
        axios({
            method: 'put',
            url: 'api/v1/updates/' + update_id,
            data: {
               update_title,
               update_text,
               update_summary
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        
        });
};

export function* changeUpdateSaga(action) {
  try {

  // let token = localStorage.getItem('id_token') || null
  // if (token) {  }
  let update_id = action.data.get('update_id');
  let update_title = action.data.get('update_title');
  let update_text = action.data.get('update_text');
  let update_summary = action.data.get('update_summary');

  console.log('this far? ')
  yield call(apiChangeUpdate, update_id, update_title, update_text, update_summary);  

  yield put(changeUpdateSucceeded(action.data));
  // from action 
    
}
  catch (err) {
    yield put (changeUpdateFailed(err));
  }
};


/*
                    LE REDUCER 
                                                */


import { List, fromJS } from 'immutable';

export function updates(state = List(), action) {
    switch(action.type) {

        case ADD_UPDATE_SUCCEEDED:
            return state = state.push(fromJS(action.data));

        case INITIAL_UPDATES_STATE_SUCCEEDED: 
            return state = fromJS(action.updates);

        case CHANGE_UPDATE_SUCCEEDED: 
            return state = fromJS(state).map(update => {
                if (update.get('update_id') === action.data.get('update_id')) {
                    return update.set('update_title', action.data.get('update_title'))
                                  .set('update_text', action.data.get('update_text'))
                                  .set('update_summary', action.data.get('update_summary'))
                               
                };
                return update;
            });

        case REMOVE_UPDATE_SUCCEEDED:
            return fromJS(state).filter(update => update.get('update_id') !== action.data);

        default:
            return state;
            
    }; 
}; 

/*
[
    {
      update_id: "1234091283570938409128341234",
      update_title: "We have everything!",
      update_username: "juliusreade"
    },
    {
      update_id: "3000000033333339392922939239",
      update_title: "I know you like it",
      update_username: "juliusreade"
    }
]

*/