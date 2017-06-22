
import { put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import axios from 'axios';
// import { Map } from 'immutable';

import { requestInitialIndicatorState,
         initialIndicatorStateSucceeded, 
         initialIndicatorStateFailed } from './indicator_ar';

/* 
                    OVERVIEW
                                                */

// initial state Schedule Actions 
// Add Schedule Actions
// Remove Schedule Actions
// Schedule change Actions



/*
            INITIAL_SCHEDULES_ACTION_CREATORS 
                                                */


export const REQUEST_INITIAL_SCHEDULES_STATE = 'REQUEST_INITIAL_SCHEDULES_STATE';
export const INITIAL_SCHEDULES_STATE_SUCCEEDED = 'INITIAL_SCHEDULES_STATE_SUCCEEDED';
export const INITIAL_SCHEDULES_STATE_FAILED = 'INITIAL_SCHEDULES_STATE_FAILED';

export const requestInitialSchedulesState = () => ({type: REQUEST_INITIAL_SCHEDULES_STATE});
export const initialSchedulesStateSucceeded = schedules => ({type: INITIAL_SCHEDULES_STATE_SUCCEEDED, schedules});
export const initialSchedulesStateFailed = err => ({type: INITIAL_SCHEDULES_STATE_FAILED, err});



/*
            INITIAL_SCHEDULES_ASYNC_ACTIONS
                                                */


export function apiInitialSchedulesState() {
    return axios.get('api/v1/schedules');
}

export function* initialSchedulesStateSaga(): SagaIterator {

  try {
       
    yield put(requestInitialIndicatorState()) 
    
    let schedules = yield call(apiInitialSchedulesState);     

    if (schedules !== undefined) {
      yield put(initialSchedulesStateSucceeded(schedules.data));
      // from server
      yield put(initialIndicatorStateSucceeded())
    };

  }
  catch (err) {
    yield put (initialSchedulesStateFailed(err));
    yield put (initialIndicatorStateFailed(err));
  }
}




/*
            ADD_SCHEDULE_ACTION_CREATORS 
                                                */


export const REQUEST_ADD_SCHEDULE = 'REQUEST_ADD_SCHEDULE';
export const ADD_SCHEDULE_SUCCEEDED = 'ADD_SCHEDULE_SUCCEEDED';
export const ADD_SCHEDULE_FAILED = 'ADD_SCHEDULE_FAILED';

export const requestAddSchedule = (data) => ({type: REQUEST_ADD_SCHEDULE, data});
export const addScheduleSucceeded = (data) => ({type: ADD_SCHEDULE_SUCCEEDED, data});
export const addScheduleFailed = err => ({type: ADD_SCHEDULE_FAILED, err});


/*
            ADD_SCHEDULE_ASYNC_ACTIONS
                                                */


export function apiAddSchedule(data) {
    
    return axios({
            method: 'post',
            url: 'api/v1/schedules',
            data: { 
                data
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        });
}


function redirectAddSchedule(username, schedule_url) {
    	return window.location.href = "/" + username + "/schedule/" + schedule_url;
}


export function* addScheduleSaga(action): SagaIterator {
  try {

    // let token = localStorage.getItem('id_token') || null
    //    if (token) { }

    yield put(requestInitialIndicatorState()) 

    console.log("working")
    let username = action.data.get('username');
    let schedule_url = action.data.get('schedule_url');
    console.log(username, schedule_url)
    yield call(apiAddSchedule, action.data);

   
    yield put(addScheduleSucceeded(action.data));
    yield put(initialIndicatorStateSucceeded())

     // from action

    yield call(redirectAddSchedule, username, schedule_url);


  }
  catch (err) {
    yield put(addScheduleFailed(err));
    yield put (initialIndicatorStateFailed(err));
  }
}




/*
            REMOVE_SCHEDULE_ACTION_CREATORS 
                                                */

export const REQUEST_REMOVE_SCHEDULE = 'REQUEST_REMOVE_SCHEDULE';
export const REMOVE_SCHEDULE_SUCCEEDED = 'REMOVE_SCHEDULE_SUCCEEDED';
export const REMOVE_SCHEDULE_FAILED = 'REMOVE_SCHEDULE_FAILED';


export const requestRemoveSchedule = data => ({type: REQUEST_REMOVE_SCHEDULE, data});
export const removeScheduleSucceeded = data => ({type: REMOVE_SCHEDULE_SUCCEEDED, data});
export const removeScheduleFailed = err => ({type: REMOVE_SCHEDULE_FAILED, err});


/*
            REMOVE_SCHEDULE_ASYNC_ACTIONS
                                                */


export function apiRemoveSchedule(schedule_id: string) {
    
    return axios.delete('api/v1/schedules/' + schedule_id
    // {
    //     headers: { 'Authorization': 'Bearer ' + token }
    // }
    );
}



export function* removeScheduleSaga(action): SagaIterator {
  try {

    yield put(requestInitialIndicatorState()) 

//    let token = localStorage.getItem('id_token') || null
    // if (token) {    }

    let schedule_id = action.data;

    yield call(apiRemoveSchedule, schedule_id);

    yield put(removeScheduleSucceeded(action.data));
    // from action   
    yield put(initialIndicatorStateSucceeded())

  }
  catch (err) {
    yield put (removeScheduleFailed(err));
    yield put (initialIndicatorStateFailed(err));

  }
}



/*
            CHANGE_SCHEDULE_URL_ACTION_CREATORS 
                                                */

export const REQUEST_CHANGE_SCHEDULE_URL = 'REQUEST_CHANGE_SCHEDULE_URL';
export const CHANGE_SCHEDULE_URL_SUCCEEDED = 'CHANGE_SCHEDULE_URL_SUCCEEDED';
export const CHANGE_SCHEDULE_URL_FAILED = 'CHANGE_SCHEDULE_URL_FAILED';


export const requestChangeScheduleUrl = data => ({type: REQUEST_CHANGE_SCHEDULE_URL, data});
export const changeScheduleUrlSucceeded = data => ({type: CHANGE_SCHEDULE_URL_SUCCEEDED, data});
export const changeScheduleUrlFailed = err => ({type: CHANGE_SCHEDULE_URL_FAILED, err});


/*
            CHANGE_SCHEDULE_URL_ASYNC_ACTIONS
                                                */


export function apiChangeScheduleUrl(schedule_url, schedule_id) {

        axios({
            method: 'put',
            url: 'api/v1/schedules',
            data: {
                schedule_url: schedule_url,
                schedule_id: schedule_id
                // schedule_start_date: data.schedule_start_date,
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        });
}

function redirectChangeScheduleUrl(username, schedule_url) {
    	return window.location.href = "/" + username + "/schedule/" + schedule_url;
}



export function* changeScheduleUrlSaga(action): SagaIterator {
    
  try {

    yield put(requestInitialIndicatorState()) 

//    let token = localStorage.getItem('id_token') || null

   // omg, okay none of this is working because I'm using immutable JS...
   let schedule_url = action.data.get('schedule_url');
   let schedule_id = action.data.get('schedule_id');
   
    console.log(action.data)
//    if (token) {    }

    yield call(apiChangeScheduleUrl, schedule_url, schedule_id);
    
    // okay. new rule. I'm no longer retrieving info from the 
    // server. Just going straight from the reducer :) 
    // since the json won't send. I don't know why. 

    yield put(changeScheduleUrlSucceeded(action.data));
    yield put(initialIndicatorStateSucceeded())

    // from action
 
    // maybe the general rule is to simply update the reducer first, 
    // then the server? 
    // I know this is wrong?, but for the time being, I don't 
    // have a choice. 
    yield call(redirectChangeScheduleUrl, action.data.get('username'), schedule_url);

  }
  catch (err) {
    yield put (changeScheduleFailed(err));
    yield put (initialIndicatorStateFailed(err));
  }
}







/*
            CHANGE_SCHEDULE_ACTION_CREATORS 
                                                */

export const REQUEST_CHANGE_SCHEDULE = 'REQUEST_CHANGE_SCHEDULE';
export const CHANGE_SCHEDULE_SUCCEEDED = 'CHANGE_SCHEDULE_SUCCEEDED';
export const CHANGE_SCHEDULE_FAILED = 'CHANGE_SCHEDULE_FAILED';


export const requestChangeSchedule = data => ({type: REQUEST_CHANGE_SCHEDULE, data});
export const changeScheduleSucceeded = data => ({type: CHANGE_SCHEDULE_SUCCEEDED, data});
export const changeScheduleFailed = err => ({type: CHANGE_SCHEDULE_FAILED, err});


/*
            CHANGE_SCHEDULE_ASYNC_ACTIONS
                                                */


export function apiChangeSchedule(schedule_title, schedule_summary, schedule_id) {

        axios({
            method: 'put',
            url: 'api/v1/schedules',
            data: {
                schedule_title: schedule_title,
                schedule_summary: schedule_summary,
                schedule_id: schedule_id
                // schedule_start_date: data.schedule_start_date,
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        });
}



export function* changeScheduleSaga(action): SagaIterator {
  try {
    yield put(requestInitialIndicatorState()) 

//    let token = localStorage.getItem('id_token') || null

   // omg, okay none of this is working because I'm using immutable JS...
   let schedule_title = action.data.get('schedule_title'); // the only thing from the 
   let schedule_summary = action.data.get('schedule_summary');
   let schedule_id = action.data.get('schedule_id');
   
    console.log(action.data)
//    if (token) {    }

    yield call(apiChangeSchedule, schedule_title, schedule_summary, schedule_id);
    
    // okay. new rule. I'm no longer retrieving info from the 
    // server. Just going straight from the reducer :) 
    // since the json won't send. I don't know why. 

    yield put(changeScheduleSucceeded(action.data));
      yield put(initialIndicatorStateSucceeded())
 
    // from action
 
    // maybe the general rule is to simply update the reducer first, 
    // then the server? 
    // I know this is wrong?, but for the time being, I don't 
    // have a choice. 

  }
  catch (err) {
    yield put (changeScheduleFailed(err));
    yield put (initialIndicatorStateFailed(err));
  }
}




// /*
//             CHANGE_SCHEDULE_ACTION_CREATORS 
//                                                 */

// export const REQUEST_CHANGE_SCHEDULE_URL = 'REQUEST_CHANGE_SCHEDULE_URL';
// export const CHANGE_SCHEDULE_URL_SUCCEEDED = 'CHANGE_SCHEDULE_URL_SUCCEEDED';
// export const CHANGE_SCHEDULE_URL_FAILED = 'CHANGE_SCHEDULE_URL_FAILED';


// export const requestChangeScheduleUrl = data => ({type: REQUEST_CHANGE_SCHEDULE_URL, data});
// export const changeScheduleUrlSucceeded = data => ({type: CHANGE_SCHEDULE_URL_SUCCEEDED, data});
// export const changeScheduleUrlFailed = err => ({type: CHANGE_SCHEDULE_URL_FAILED, err});


// /*
//             CHANGE_SCHEDULE_ASYNC_ACTIONS
//                                                 */


// export function apiChangeScheduleUrl(schedule_url, token) {

//         axios({
//             method: 'put',
//             url: 'api/v1/schedules',
//             data: {
//                 schedule_url: schedule_url
//                 // schedule_start_date: data.schedule_start_date,
//             },
//             headers: { 'Authorization': 'Bearer ' + token }
//         });
// }

// export function* changeScheduleUrlSaga(action): SagaIterator {
//   try {

//    let token = localStorage.getItem('id_token') || null
//    let schedule_url = action.data.get('schedule_url');

//    if (token) {

//         yield call(apiChangeScheduleUrl, schedule_url, token);
        
//     }

//         yield put(changeScheduleUrlSucceeded(action.data));

//   }
//   catch (err) {
//     yield put (changeScheduleUrlFailed(err));
//   }
// }





/*
                    LE REDUCER 
                                                */

import { List, fromJS } from 'immutable';

export function schedules(state = List(), action) {
    switch(action.type) {

        case ADD_SCHEDULE_SUCCEEDED:
            return state = state.push(fromJS(action.data));

        case INITIAL_SCHEDULES_STATE_SUCCEEDED: 
            return state = fromJS(action.schedules);

        case CHANGE_SCHEDULE_SUCCEEDED:             // okay, I don't think this works at all. This is the problem! 
            return state = fromJS(state).map(schedule => {
                if (schedule.get('schedule_id') === action.data.get('schedule_id')) {
                    return schedule = schedule.set('schedule_title', action.data.get('schedule_title'))
                                              .set('schedule_url', action.data.get('schedule_url'))
                                              .set('schedule_summary', action.data.get('schedule_summary'))                                              
                }  
                return schedule;
            });

        case CHANGE_SCHEDULE_URL_SUCCEEDED:             // okay, I don't think this works at all. This is the problem! 
            return state = fromJS(state).map(schedule => {
                if (schedule.get('schedule_id') === action.data.get('schedule_id')) {
                    return schedule = schedule.set('schedule_url', action.data.get('schedule_url'))
                }  
                return schedule;
            });


        case REMOVE_SCHEDULE_SUCCEEDED:
            return state = fromJS(state).filter(schedule => schedule.get('schedule_id') !== action.data);

        default:
            return state;
            
    }; 
}; 

