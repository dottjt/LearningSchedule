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
            url: 'api/v1/profile_image_upload',
            data: {
                avatar
            }
            // headers: { 'content-type': 'multipart/form-data' }
        });

}

export function* addAvatarSaga(action): SagaIterator {

  try {
      
    // let token = localStorage.getItem('id_token') || null
    // if (token) {    }

        // let formData = new FormData();
        // formData.append('name', data.name)
        // formData.append('profile_pic', data.profile_pic[0])
        // const config = {
        //     headers: { 'content-type': 'multipart/form-data' }
        // }
        // const url = 'http://example.com/fileupload/';
        // post(url, formData, config)
        //     .then(function(response) {
        //         console.log(response);
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     });


    let avatar = action.data;
    console.log(avatar);

    yield call(apiAddAvatar, avatar);

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

    // maybe don't make the change on client side? I mean, it doesn't affect anything...
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


export const requestChangeUserDetails = (username, email) => ({type: REQUEST_CHANGE_USER_DETAILS, username, email});
export const changeUserDetailsSucceeded = (username, email) => ({type: CHANGE_USER_DETAILS_SUCCEEDED, username, email});
export const changeUserDetailsFailed = err => ({type: CHANGE_USER_DETAILS_FAILED, err});



/*
            CHANGE_USER_DETAIS_ASYNC_ACTIONS
                                                */


export function apiChangeUserDetails(username, email) {
    // check to see if this is okay.
        axios({
            method: 'put',
            url: 'api/v1/users_username',
            data: {
                username,
                email
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        
        });
};

function changeUsernameEmail(username) {
    return window.location.href = "/" + username + "/profile";
}


export function* requestChangeUserDetailsSaga(action) {
  try {

    // let token = localStorage.getItem('id_token') || null;
    // if (token) {    }

    let username = action.username;
    let email = action.email;

    yield call(apiChangeUserDetails, username, email);

    yield put(changeUserDetailsSucceeded(action.username, action.email));

    yield call(changeUsernameEmail, username);

}
  catch (err) {
      
    yield put (changeUserDetailsFailed(err));
  
    }
};






/*
            CHANGE_USER_DETAIS_ACTION_CREATORS 
                                                */


export const REQUEST_CHANGE_SOCIAL = 'REQUEST_CHANGE_SOCIAL';
export const CHANGE_SOCIAL_SUCCEEDED = 'CHANGE_SOCIAL_SUCCEEDED';
export const CHANGE_SOCIAL_FAILED = 'CHANGE_SOCIAL_FAILED';


export const requestChangeSocial = data => ({type: REQUEST_CHANGE_SOCIAL, data});
export const changeSocialSucceeded = data => ({type: CHANGE_SOCIAL_SUCCEEDED, data});
export const changeSocialFailed = err => ({type: CHANGE_SOCIAL_FAILED, err});



/*
            CHANGE_USER_DETAIS_ASYNC_ACTIONS
                                                */


export function apiChangeSocial(facebook, twitter, github) {
    // check to see if this is okay.
        axios({
            method: 'put',
            url: 'api/v1/users',
            data: {
                facebook, 
                twitter, 
                github
            }
            // headers: { 'Authorization': 'Bearer ' + token }
        
        });
};


export function* requestChangeSocialSaga(action) {
  try {

    // let token = localStorage.getItem('id_token') || null;
    // if (token) {    }

    let facebook = action.data.get('facebook');
    let twitter = action.data.get('twitter');
    let github = action.data.get('github');


    yield call(apiChangeSocial, facebook, twitter, github);

    yield put(changeSocialSucceeded(action.data));

}
  catch (err) {
      
    yield put (changeSocialFailed(err));
  
    }
};





/*
            CHANGE_USER_DETAIS_ACTION_CREATORS 
                                                */


export const REQUEST_CHANGE_PASSWORD = 'REQUEST_CHANGE_PASSWORD';
export const CHANGE_PASSWORD_SUCCEEDED = 'CHANGE_PASSWORD_SUCCEEDED';
export const CHANGE_PASSWORD_FAILED = 'CHANGE_PASSWORD_FAILED';


export const requestChangePassword = data => ({type: REQUEST_CHANGE_PASSWORD, data});
export const changePasswordSucceeded = data => ({type: CHANGE_PASSWORD_SUCCEEDED, data});
export const changePasswordFailed = err => ({type: CHANGE_PASSWORD_FAILED, err});



/*
            CHANGE_USER_DETAIS_ASYNC_ACTIONS
                                                */


export function apiChangePassword(data) {
    // check to see if this is okay.
        axios({
            method: 'put',
            url: 'api/v1/users_password',
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

    yield call(apiChangePassword, action.data);

    // yield put(changePasswordSucceeded(action.data));

}
  catch (err) {
      
    yield put (changePasswordFailed(err));
  
    }
};







/*
            REMOVE_USER_ACTION_CREATORS 
                                                */


export const REQUEST_REMOVE_USER = 'REQUEST_REMOVE_USER';
export const REMOVE_USER_SUCCEEDED = 'REMOVE_USER_SUCCEEDED';
export const REMOVE_USER_FAILED = 'REMOVE_USER_FAILED';


export const requestRemoveUser = () => ({type: REQUEST_REMOVE_USER});
export const removeUserSucceeded = () => ({type: REMOVE_USER_SUCCEEDED});
export const removeUserFailed = err => ({type: REMOVE_USER_FAILED, err});



/*
            CHANGE_USER_DETAIS_ASYNC_ACTIONS
                                                */



export function apiRemoveUser() { axios.delete('api/v1/users') }  // this logs out the user. 
export function apiRemoveUserSchedules() { axios.delete('api/v1/users_schedules') }
export function apiRemoveUserSummaries() { axios.delete('api/v1/users_summaries') }
export function apiRemoveUserUpdates() { axios.delete('api/v1/users_updates') }
export function apiRemoveUserTags() { axios.delete('api/v1/users_tags') }
export function apiRemoveUserUser() { axios.delete('api/v1/users_user') }
export function redirect() { axios.get('api/v1/users_redirect') }


function removeUser() {
    return window.location.href = "/";
}

export function* requestRemoveUserSaga(action) {
  try {

    // let token = localStorage.getItem('id_token') || null;
    // if (token) {  }

    console.log('beginning')
    yield call(apiRemoveUserSchedules);
    yield call(apiRemoveUserSummaries);
    console.log('middle')
    yield call(apiRemoveUserUpdates);
    yield call(apiRemoveUserTags);
    yield call(apiRemoveUserUser);
    console.log('middle2')

    yield call(apiRemoveUser);

    console.log('end')

    yield put(removeUserSucceeded());

    yield call(removeUser)
    // redirect to the homepage :)

}
  catch (err) {
    yield put (removeUserFailed(err));
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
            return state = state.set('username', action.username)
                                .set('email', action.email)

        case CHANGE_PASSWORD_SUCCEEDED: 
            return state = state.set('password', action.data.get('password'));

        case CHANGE_SOCIAL_SUCCEEDED:
            return state = state.set('facebook', action.data.get('facebook'))
                                .set('twitter', action.data.get('twitter'))
                                .set('github', action.data.get('github'))

        case REMOVE_USER_SUCCEEDED:
            return state = Map();

        // case CHANGE_PASSWORD_SUCCEEDED: I'm not sure if this is only relevant in the server? 
        
        
        default:
            return state;
            
    }; 
}; 
