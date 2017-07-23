import { SagaIterator } from 'redux-saga';
import { fork, takeLatest } from 'redux-saga/effects';

/*
              Indicator
                                */

// import { initialIndicatorStateSaga } from './indicator_ar';

// import { REQUEST_INITIAL_INDICATOR_STATE } from './indicator_ar';


/*
              Schedules 
                                */

import { initialSchedulesStateSaga,
         addScheduleSaga,
         removeScheduleSaga,
         changeScheduleSaga,
         changeScheduleUrlSaga } from './schedules_ar';

import { REQUEST_ADD_SCHEDULE,
         REQUEST_REMOVE_SCHEDULE,
         REQUEST_CHANGE_SCHEDULE,
         REQUEST_CHANGE_SCHEDULE_URL } from './schedules_ar';


/*
              Summaries 
                                */

import { initialSummariesStateSaga,
         changeSummarySaga } from './summaries_ar';

import { REQUEST_CHANGE_SUMMARY } from './summaries_ar';




/*
              Updates 
                                */

import { initialUpdatesStateSaga,
         addUpdateSaga,
         removeUpdateSaga,
         removeAllUpdatesSaga,
         changeUpdateSaga,
         changeLengthUpdateSaga } from './updates_ar';

import { REQUEST_ADD_UPDATE,
         REQUEST_REMOVE_UPDATE,
         REQUEST_CHANGE_UPDATE,
         REQUEST_REMOVE_ALL_UPDATES,
         REQUEST_CHANGE_LENGTH_UPDATE } from './updates_ar';



/*
              Tags 
                                */


import { initialTagsStateSaga,
         addTagSaga,
         removeTagSaga,
         changeTagSaga } from './tags_ar';

import { REQUEST_ADD_TAG,
         REQUEST_REMOVE_TAG,
         REQUEST_CHANGE_TAG } from './tags_ar';



/*

              User 

                                */

import { initialUserStateSaga,
         changeWebsiteSaga,
         changeDisplaySaga,
         addAvatarSaga,
         changeEditActiveSaga,
         requestRemoveUserSaga,
         requestChangeEmailDetailsSaga,
         requestChangeUserDetailsSaga,
         requestChangePasswordSaga,
         requestChangeSocialSaga
        } from './users_ar';

import { REQUEST_CHANGE_WEBSITE,
         REQUEST_CHANGE_DISPLAY,
         REQUEST_ADD_AVATAR,
         REQUEST_CHANGE_EDIT_ACTIVE,
         REQUEST_REMOVE_USER,
         REQUEST_CHANGE_USER_USERNAME_DETAILS,
         REQUEST_CHANGE_USER_EMAIL_DETAILS,
         REQUEST_CHANGE_PASSWORD,
         REQUEST_CHANGE_SOCIAL
         } from './users_ar';



/*

              Auth 

                                */

// import { userLoginSaga,
//          userLogoutSaga } from './auth_ar';

// import { LOGIN_REQUEST,
//          LOGOUT_REQUEST } from './auth_ar';




export default function* rootSaga(): SagaIterator {
  yield [

   fork(initialSchedulesStateSaga),
   fork(initialUpdatesStateSaga),
   fork(initialTagsStateSaga),
   fork(initialSummariesStateSaga),
   fork(initialUserStateSaga),

  //  takeLatest(REQUEST_INITIAL_INDICATOR_STATE, initialIndicatorStateSaga),
   
   takeLatest(REQUEST_REMOVE_USER, requestRemoveUserSaga),
   takeLatest(REQUEST_CHANGE_SOCIAL, requestChangeSocialSaga),
   takeLatest(REQUEST_CHANGE_USER_USERNAME_DETAILS, requestChangeUserDetailsSaga),
   takeLatest(REQUEST_CHANGE_USER_EMAIL_DETAILS, requestChangeEmailDetailsSaga),
   takeLatest(REQUEST_CHANGE_WEBSITE, changeWebsiteSaga),
   takeLatest(REQUEST_CHANGE_DISPLAY, changeDisplaySaga),
   takeLatest(REQUEST_CHANGE_SUMMARY, changeSummarySaga),
   takeLatest(REQUEST_CHANGE_EDIT_ACTIVE, changeEditActiveSaga),
   takeLatest(REQUEST_CHANGE_PASSWORD, requestChangePasswordSaga),
   takeLatest(REQUEST_ADD_AVATAR, addAvatarSaga),

   takeLatest(REQUEST_ADD_SCHEDULE, addScheduleSaga),
   takeLatest(REQUEST_REMOVE_SCHEDULE, removeScheduleSaga),
   takeLatest(REQUEST_CHANGE_SCHEDULE, changeScheduleSaga),
   takeLatest(REQUEST_CHANGE_SCHEDULE_URL, changeScheduleUrlSaga),

   takeLatest(REQUEST_ADD_UPDATE, addUpdateSaga),
   takeLatest(REQUEST_REMOVE_UPDATE, removeUpdateSaga),
   takeLatest(REQUEST_REMOVE_ALL_UPDATES, removeAllUpdatesSaga),
   takeLatest(REQUEST_CHANGE_UPDATE, changeUpdateSaga),
   takeLatest(REQUEST_CHANGE_LENGTH_UPDATE, changeLengthUpdateSaga),

   takeLatest(REQUEST_ADD_TAG, addTagSaga),
   takeLatest(REQUEST_REMOVE_TAG, removeTagSaga),
   takeLatest(REQUEST_CHANGE_TAG, changeTagSaga)

  //  takeLatest(LOGIN_REQUEST, userLoginSaga),
  //  takeLatest(LOGOUT_REQUEST, userLogoutSaga),
  // // not working? but it is? . ,

  ]

}






// export default function* rootSaga(): SagaIterator {
//   yield [
    
//   ]
//   yield fork(initialSchedulesStateSaga)
//   yield fork(initialUpdatesStateSaga)
//   yield fork(initialTagsStateSaga)
//   yield fork(initialSummariesStateSaga)
//   yield fork(initialUserStateSaga)

//   yield fork(takeLatest, REQUEST_CHANGE_WEBSITE, changeWebsiteSaga)
//   yield fork(takeLatest, REQUEST_CHANGE_DISPLAY, changeDisplaySaga)
//   yield fork(takeLatest, REQUEST_CHANGE_SUMMARY, changeSummarySaga)
//   yield fork(takeLatest, REQUEST_CHANGE_EDIT_ACTIVE, changeEditActiveSaga)
//   yield fork(takeLatest, REQUEST_ADD_AVATAR, addAvatarSaga)

//   yield fork(takeLatest, LOGIN_REQUEST, userLoginSaga)
//   yield fork(takeLatest, LOGOUT_REQUEST, userLogoutSaga)
//   // not working? but it is? . 

//   yield fork(takeLatest, REQUEST_ADD_SCHEDULE, addScheduleSaga)
//   yield fork(takeLatest, REQUEST_REMOVE_SCHEDULE, removeScheduleSaga)
//   yield fork(takeLatest, REQUEST_CHANGE_SCHEDULE, changeScheduleSaga)

//   yield fork(takeLatest, REQUEST_ADD_UPDATE, addUpdateSaga)
//   yield fork(takeLatest, REQUEST_REMOVE_UPDATE, removeUpdateSaga)
//   yield fork(takeLatest, REQUEST_CHANGE_UPDATE, changeUpdateSaga)

//   yield fork(takeLatest, REQUEST_ADD_TAG, addTagSaga)
//   yield fork(takeLatest, REQUEST_REMOVE_TAG, removeTagSaga)
//   yield fork(takeLatest, REQUEST_CHANGE_TAG, changeTagSaga)

// }

