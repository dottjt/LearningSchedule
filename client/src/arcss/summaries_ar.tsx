import { put, call, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import axios from 'axios';

/* 
                    OVERVIEW
                                                */

// Initial Summary Actions
// Change Summary Actions


/*
            INITIAL_SUMMARIES_ACTION_CREATORS 
                                                */


export const REQUEST_INITIAL_SUMMARIES_STATE = 'REQUEST_INITIAL_SUMMARIES_STATE';
export const INITIAL_SUMMARIES_STATE_SUCCEEDED = 'INITIAL_SUMMARIES_STATE_SUCCEEDED';
export const INITIAL_SUMMARIES_STATE_FAILED = 'INITIAL_SUMMARIES_STATE_FAILED';

export const requestInitialSummariesState = username => ({type: REQUEST_INITIAL_SUMMARIES_STATE, username});
export const initialSummariesStateSucceeded = summaries => ({type: INITIAL_SUMMARIES_STATE_SUCCEEDED, summaries});
export const initialSummariesStateFailed = err => ({type: INITIAL_SUMMARIES_STATE_FAILED, err});


/*
            INITIAL_SUMMARIES_ASYNC_ACTIONS
                                                */


export function apiInitialSummariesState() {
    // check to see if this is okay.
    // okay, we need to retrieve this from a cookie, or something. 
    return axios.get('api/v1/summaries');
};

export function* initialSummariesStateSaga(): SagaIterator {
  try {

    let summaries = yield call(apiInitialSummariesState);
    
    if (summaries !== undefined) {
      yield put(initialSummariesStateSucceeded(summaries.data));
    };

  }
  catch (err) {
    yield put (initialSummariesStateFailed(err))
  }
};

export function* initialSummariesStateSagaWatch(): SagaIterator {
    takeLatest(REQUEST_INITIAL_SUMMARIES_STATE, initialSummariesStateSaga);
};



/*
            CHANGE_SUMMARY_ACTION_CREATORS 
                                                */

export const REQUEST_CHANGE_SUMMARY = 'REQUEST_CHANGE_SUMMARY';
export const CHANGE_SUMMARY_SUCCEEDED = 'CHANGE_SUMMARY_SUCCEEDED';
export const CHANGE_SUMMARY_FAILED = 'CHANGE_SUMMARY_FAILED';


export const requestChangeSummary = data => ({type: REQUEST_CHANGE_SUMMARY, data});
export const changeSummarySucceeded = data => ({type: CHANGE_SUMMARY_SUCCEEDED, data});
export const changeSummaryFailed = err => ({type: CHANGE_SUMMARY_FAILED, err});




/*
            CHANGE_SUMMARY_ASYNC_ACTIONS
                                                */


export function apiChangeSummary(id, summary_text) {
    // check to see if this is okay.
        axios({
            method: 'put',
            url: 'api/v1/summaries/' + id,
            data: {
               summary_text
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        });
};


export function* changeSummarySaga(action) {
  try {
    // let token = localStorage.getItem('id_token') || null

    let summary_text = action.data.get('summary_text');
    let id = action.data.get('id');

//   if (token) {  }

    yield call(apiChangeSummary, id, summary_text);
  
    yield put(changeSummarySucceeded(action.data));

  }
  catch (err) {
    yield put (changeSummaryFailed(err));
  }
};



/*
                    LE REDUCER 
                                                */

import { List, fromJS } from 'immutable';

export function summaries(state = List(), action) {
    switch(action.type) {

        case INITIAL_SUMMARIES_STATE_SUCCEEDED: 
            return state = fromJS(action.summaries);

        case CHANGE_SUMMARY_SUCCEEDED: 
            return state = fromJS(state).map(summary => {
                if (summary.get('id') === action.data.get('id')) {
                    return summary.set('summary_text', action.data.get('summary_text'));
                              
                }
                return summary;
            });

        default:
            return state;
            
    }; 
}; 

/*
[
    {
      summary_id: "1234091283570938409128341234",
      summary_title: "We have everything!",
      summary_username: "juliusreade"
    },
    {
      summary_id: "3000000033333339392922939239",
      summary_title: "I know you like it",
      summary_username: "juliusreade"
    }
]

*/