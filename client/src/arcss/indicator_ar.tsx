import { put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
// import { Map } from 'immutable';


/*
            INDICATOR_ACTION_CREATORS 
                                                */


export const REQUEST_INITIAL_INDICATOR_STATE = 'REQUEST_INITIAL_INDICATOR_STATE';
export const INITIAL_INDICATOR_STATE_SUCCEEDED = 'INITIAL_INDICATOR_STATE_SUCCEEDED';
export const INITIAL_INDICATOR_STATE_FAILED = 'INITIAL_INDICATOR_STATE_FAILED';

export const requestInitialIndicatorState = () => ({type: REQUEST_INITIAL_INDICATOR_STATE});
export const initialIndicatorStateSucceeded = () => ({type: INITIAL_INDICATOR_STATE_SUCCEEDED});
export const initialIndicatorStateFailed = err => ({type: INITIAL_INDICATOR_STATE_FAILED, err});



/*
            INITIAL_SCHEDULES_ASYNC_ACTIONS
                                                */



export function* initialIndicatorStateSaga(): SagaIterator {

  try {

    yield put(requestInitialIndicatorState())

    // yield put(initialIndicatorStateSucceeded());
    // not too sure about how this is supposed to work. 
  }
  catch (err) {
    yield put (initialIndicatorStateFailed(err))
  }

}




/*
                    LE REDUCER 
                                                */


export function indicator(state = "green", action) {
    
    switch(action.type) {

        case REQUEST_INITIAL_INDICATOR_STATE: 
            return state = "orange";

        case INITIAL_INDICATOR_STATE_SUCCEEDED: 
            return state = "green";

        case INITIAL_INDICATOR_STATE_FAILED: 
            return state = "orange";

        default:
            return state;
            
    }; 
}; 

