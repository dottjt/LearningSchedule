import { put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import axios from 'axios';

/* 
                    OVERVIEW
                                                */

// Initial User Actions
// Change DisplayName Actions

// login success etc. 




/*
            INITIAL_USER_ACTION_CREATORS 
                                                */



export const REQUEST_INITIAL_USER_STATE = 'REQUEST_INITIAL_USER_STATE';
export const INITIAL_USER_STATE_SUCCEEDED = 'INITIAL_USER_STATE_SUCCEEDED';
export const INITIAL_USER_STATE_FAILED = 'INITIAL_USER_STATE_FAILED';

export const requestInitialUserState = () => ({type: REQUEST_INITIAL_USER_STATE});
export const initialUserStateSucceeded = user => ({type: INITIAL_USER_STATE_SUCCEEDED, user});
export const initialUserStateFailed = err => ({type: INITIAL_USER_STATE_FAILED, err});


/*
            INITIAL_USER_ASYNC_ACTIONS
                                                */


export const apiInitialUserState = () => axios.get('api/v1/users'); 


export function* initialUserStateSaga(): SagaIterator {
  try {
    var user = yield call(apiInitialUserState);
    if (user !== undefined) { yield put(initialUserStateSucceeded(user.data)); };
  }
  catch (err) { yield put(initialUserStateFailed(err)); }
};


/*
            REQUEST_ADD_AVATAR_ACTION_CREATORS 
                                                */


export const REQUEST_ADD_AVATAR = 'REQUEST_ADD_AVATAR';
export const ADD_AVATAR_SUCCEEDED = 'ADD_AVATAR_SUCCEEDED';
export const ADD_AVATAR_FAILED = 'ADD_AVATAR_FAILED';

export const requestAddAvatar = data => ({type: REQUEST_ADD_AVATAR, data});
export const addAvatarSucceeded = data => ({type: ADD_AVATAR_SUCCEEDED, data});
export const addAvatarFailed = err => ({type: ADD_AVATAR_FAILED, err});


/*
            ADD_AVATAR_ASYNC_ACTIONS
                                        */

export function apiAddAvatar(avatar) {
    
    return axios({
            method: 'post',
            url: 'image/profile',
            data: {
                avatar: avatar
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        });
}

export function* addAvatarSaga(action): SagaIterator {

  try {
    
    // let token = localStorage.getItem('id_token') || null
    console.log(action)
    let fileName = action.data[0].name;
    console.log(fileName);

    // if (token) {    }


        yield call(apiAddAvatar, action.data);

    yield put(addAvatarSucceeded(action.data));
  }
  catch (err) {
    yield put(addAvatarFailed(err));
  }
}





/*
            CHANGE_WEBSITE_ACTION_CREATORS 
                                                */

export const REQUEST_CHANGE_WEBSITE = 'REQUEST_CHANGE_WEBSITE';
export const CHANGE_WEBSITE_SUCCEEDED = 'CHANGE_WEBSITE_SUCCEEDED';
export const CHANGE_WEBSITE_FAILED = 'CHANGE_WEBSITE_FAILED';


export const requestChangeWebsite = data => ({type: REQUEST_CHANGE_WEBSITE, data});
export const changeWebsiteSucceeded = data => ({type: CHANGE_WEBSITE_SUCCEEDED, data});
export const changeWebsiteFailed = err => ({type: CHANGE_WEBSITE_FAILED, err});

/*
            CHANGE_WEBSITE_ASYNC_ACTIONS
                                                */


export function apiChangeWebsite(website) {
    // check to see if this is okay.
        axios({
            method: 'put',
            url: 'api/v1/users',
            data: {
               website
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        
        });
};


export function* changeWebsiteSaga(action) {
  try {

    // let token = localStorage.getItem('id_token') || null;

    console.log(action.data.toJS())
    let website = action.data.get('website');

    // if (token) {    }

    yield call(apiChangeWebsite, website);

    yield put(changeWebsiteSucceeded(action.data));

}
  catch (err) {
    yield put (changeWebsiteFailed(err));
  }
};






/*
            CHANGE_DISPLAY_ACTION_CREATORS 
                                                */

export const REQUEST_CHANGE_DISPLAY = 'REQUEST_CHANGE_DISPLAY';
export const CHANGE_DISPLAY_SUCCEEDED = 'CHANGE_DISPLAY_SUCCEEDED';
export const CHANGE_DISPLAY_FAILED = 'CHANGE_DISPLAY_FAILED';


export const requestChangeDisplay = data => ({type: REQUEST_CHANGE_DISPLAY, data});
export const changeDisplaySucceeded = data => ({type: CHANGE_DISPLAY_SUCCEEDED, data});
export const changeDisplayFailed = err => ({type: CHANGE_DISPLAY_FAILED, err});

/*
            CHANGE_DISPLAY_ASYNC_ACTIONS
                                                */


export function apiChangeDisplay(display_name) {
    // check to see if this is okay.
        axios({
            method: 'put',
            url: 'api/v1/users',
            data: {
               display_name
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        });
};


export function* changeDisplaySaga(action) {
  try {

    // let token = localStorage.getItem('id_token') || null;
    let display_name = action.data.get('display_name');

    console.log(action);
    // if (token) {    };

    yield call(apiChangeDisplay, display_name);

    yield put(changeDisplaySucceeded(action.data));

}
  catch (err) {
    yield put (changeDisplayFailed(err));
  }
};







/*
            EDIT_ACTIVE_ACTION_CREATORS 
                                                */


export const REQUEST_CHANGE_EDIT_ACTIVE = 'REQUEST_CHANGE_EDIT_ACTIVE';
export const CHANGE_EDIT_ACTIVE_SUCCEEDED = 'CHANGE_EDIT_ACTIVE_SUCCEEDED';
export const CHANGE_EDIT_ACTIVE_FAILED = 'CHANGE_EDIT_ACTIVE_FAILED';


export const requestChangeEditActive = data => ({type: REQUEST_CHANGE_EDIT_ACTIVE, data});
export const changeEditActiveSucceeded = data => ({type: CHANGE_EDIT_ACTIVE_SUCCEEDED, data});
export const changeEditActiveFailed = err => ({type: CHANGE_EDIT_ACTIVE_FAILED, err});



/*
            CHANGE_EDIT_ACTIVE_ASYNC_ACTIONS
                                                */


export function apiChangeEditActive(edit_active_switch) {
    // check to see if this is okay.
        axios({
            method: 'put',
            url: 'api/v1/users',
            data: {
               edit_active_switch
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        
        });
};


export function* changeEditActiveSaga(action) {
  try {

    // let token = localStorage.getItem('id_token') || null;
    let edit_active = action.data.get('edit_active');
    let edit_active_switch = !edit_active;

    // if (token) {    }

    yield call(apiChangeEditActive, edit_active_switch);

    yield put(changeEditActiveSucceeded(edit_active_switch));

}
  catch (err) {
    yield put (changeEditActiveFailed(err));
  }
};




/*
                    LE REDUCER 
                                                */

import { Map, fromJS } from 'immutable';

export function user(state = Map(), action) {
    switch(action.type) {
        
        case INITIAL_USER_STATE_SUCCEEDED:
            return state = fromJS(action.user);

        case CHANGE_WEBSITE_SUCCEEDED: 
            return state = state.set('website', action.data.get('website'));

        case CHANGE_DISPLAY_SUCCEEDED: 
            return state = state.set('display_name', action.data.get('display_name'));

        case CHANGE_EDIT_ACTIVE_SUCCEEDED:
            return state = state.set('edit_active', action.data.get('edit_active'));

        case ADD_AVATAR_SUCCEEDED: 
            return state = state.set('avatar', action.data[0].name)

        default:
            return state;
            
    }; 
}; 
