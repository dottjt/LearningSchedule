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
            CHANGE_USER_DETAIS_ACTION_CREATORS 
                                                */


export const REQUEST_CHANGE_USER_DETAILS = 'REQUEST_CHANGE_USER_DETAILS';
export const CHANGE_USER_DETAILS_SUCCEEDED = 'CHANGE_USER_DETAILS_SUCCEEDED';
export const CHANGE_USER_DETAILS_FAILED = 'CHANGE_USER_DETAILS_FAILED';


export const requestChangeUserDetails = data => ({type: REQUEST_CHANGE_USER_DETAILS, data});
export const ChangeUserDetailsSucceeded = data => ({type: CHANGE_USER_DETAILS_SUCCEEDED, data});
export const ChangeUserDetailsFailed = err => ({type: CHANGE_USER_DETAILS_FAILED, err});



/*
            CHANGE_USER_DETAIS_ASYNC_ACTIONS
                                                */


export function apiChangeUserDetails(data) {
    // check to see if this is okay.
        axios({
            method: 'put',
            url: 'api/v1/users',
            data: {
                data
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        
        });
};


export function* requestChangeUserDetailsSaga(action) {
  try {

    // let token = localStorage.getItem('id_token') || null;
    // if (token) {    }

    yield call(apiChangeEditActive, action.data);

    yield put(changeEditActiveSucceeded(action.data));

}
  catch (err) {
      
    yield put (changeEditActiveFailed(err));
  
    }
};






/*
            CHANGE_USER_DETAIS_ACTION_CREATORS 
                                                */


export const REQUEST_CHANGE_SOCIAL = 'REQUEST_CHANGE_SOCIAL';
export const CHANGE_SOCIAL_SUCCEEDED = 'CHANGE_SOCIAL_SUCCEEDED';
export const CHANGE_SOCIAL_FAILED = 'CHANGE_SOCIAL_FAILED';


export const requestChangeSocial = data => ({type: REQUEST_CHANGE_SOCIAL, data});
export const ChangeSocialSucceeded = data => ({type: CHANGE_SOCIAL_SUCCEEDED, data});
export const ChangeSocialFailed = err => ({type: CHANGE_SOCIAL_FAILED, err});



/*
            CHANGE_USER_DETAIS_ASYNC_ACTIONS
                                                */


export function apiChangeSocial(data) {
    // check to see if this is okay.
        axios({
            method: 'put',
            url: 'api/v1/users',
            data: {
                data
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        
        });
};


export function* requestChangeSocialSaga(action) {
  try {

    // let token = localStorage.getItem('id_token') || null;
    // if (token) {    }

    yield call(apiChangeEditActive, action.data);

    yield put(changeEditActiveSucceeded(action.data));

}
  catch (err) {
      
    yield put (changeEditActiveFailed(err));
  
    }
};





/*
            CHANGE_USER_DETAIS_ACTION_CREATORS 
                                                */


export const REQUEST_CHANGE_PASSWORD = 'REQUEST_CHANGE_PASSWORD';
export const CHANGE_PASSWORD_SUCCEEDED = 'CHANGE_PASSWORD_SUCCEEDED';
export const CHANGE_PASSWORD_FAILED = 'CHANGE_PASSWORD_FAILED';


export const requestChangePassword = data => ({type: REQUEST_CHANGE_PASSWORD, data});
export const ChangePasswordSucceeded = data => ({type: CHANGE_PASSWORD_SUCCEEDED, data});
export const ChangePasswordFailed = err => ({type: CHANGE_PASSWORD_FAILED, err});



/*
            CHANGE_USER_DETAIS_ASYNC_ACTIONS
                                                */


export function apiChangePassword(data) {
    // check to see if this is okay.
        axios({
            method: 'put',
            url: 'api/v1/users',
            data: {
                data
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        
        });
};


export function* requestChangePasswordSaga(action) {
  try {

    // let token = localStorage.getItem('id_token') || null;
    // if (token) {    }

    yield call(apiChangeEditActive, action.data);

    yield put(changeEditActiveSucceeded(action.data));

}
  catch (err) {
      
    yield put (changeEditActiveFailed(err));
  
    }
};







/*
            REMOVE_USER_ACTION_CREATORS 
                                                */


export const REQUEST_REMOVE_USER = 'REQUEST_REMOVE_USER';
export const REMOVE_USER_SUCCEEDED = 'REMOVE_USER_SUCCEEDED';
export const REMOVE_USER_FAILED = 'REMOVE_USER_FAILED';


export const requestRemoveUser = () => ({type: REQUEST_REMOVE_USER});
export const RemoveUserSucceeded = () => ({type: REMOVE_USER_SUCCEEDED});
export const RemoveUserFailed = err => ({type: REMOVE_USER_FAILED, err});



/*
            CHANGE_USER_DETAIS_ASYNC_ACTIONS
                                                */


export function apiRemoveUser(data) {
    // check to see if this is okay.
        axios({
            method: 'delete',
            url: 'api/v1/users',
            data: {
                data
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        
        });
};


export function* requestRemoveUserSaga(action) {
  try {

    // let token = localStorage.getItem('id_token') || null;
    // if (token) {    }



    yield call(apiChangeEditActive, action.data);

    yield put(changeEditActiveSucceeded(action.data));

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

        case CHANGE_USER_DETAILS_SUCCEEDED:
            return state = state.set('username', action.data.get('username'))
                                
        case CHANGE_SOCIAL_SUCCEEDED:
            return state = state.set('facebook', action.data.get('facebook'))
                                .set('twitter', action.data.get('twitter'))
                                .set('github', action.data.get('github'))


        // case CHANGE_PASSWORD_SUCCEEDED: I'm not sure if this is only relevant in the server? 
        
        
        default:
            return state;
            
    }; 
}; 
