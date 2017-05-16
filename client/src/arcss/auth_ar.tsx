// import { put, call } from 'redux-saga/effects';
// import { SagaIterator } from 'redux-saga';
// import axios from 'axios';


// /* 
//                     OVERVIEW
//                                                 */

// // Initial User Actions
// // Change DisplayName Actions

// // login success etc. 




// /*
//             LOGIN_USER_ACTION_CREATORS 
//                                                 */


// export const LOGIN_REQUEST = 'LOGIN_REQUEST';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

// export const requestLogin = (creds) => ({
//     type: LOGIN_REQUEST,
//     isFetching: true,
//     isAuthenticated: false,
//     creds
// });

// export const receiveLogin = (user) => ({
//     type: LOGIN_SUCCESS,
//     isFetching: false,
//     isAuthenticated: true,
//     id_token: user.id_token  
// });

// export const loginError = (message) => ({
//     type: LOGIN_FAILURE,
//     isFetching: false,
//     isAuthenticated: false,
//     message
// });



// /*
//             LOGIN_USER_ASYNC_ACTIONS 
//                                                 */




// export function apiLogin(creds) {
//     return axios({
//         method: 'post',
//         url: 'auth/login',
//         data: {
//             email: creds.email,
//             password: creds.password
//         }
//     });
// };


// export function* userLoginSaga(action): SagaIterator {

//   try {
      
//     console.log(action);
//     // call to server
//     var user = yield call(apiLogin, action.creds);

//     console.log(user);


//     localStorage.setItem('id_token', user.data.token);
//     // works

//     yield put(receiveLogin(user.data.token));
    
//   }
//   catch (err) { yield put(loginError(err)); };
// };





// /*
//             LOGOUT_USER_ACTION_CREATORS 
//                                                 */


// export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
// export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';


// export function requestLogout() {
//   return {
//     type: LOGOUT_REQUEST,
//     isFetching: true,
//     isAuthenticated: true
//   };
// };

// export function receiveLogout() {
//   return {
//     type: LOGOUT_SUCCESS,
//     isFetching: false,
//     isAuthenticated: false
//   };
// };

// export function logoutError(err) {
//   return {
//     type: LOGOUT_FAILURE,
//     err
//   };
// };




// /*
//             LOGOUT_USER_ASYNC_ACTIONS 
//                                                 */



// export function* userLogoutSaga(): SagaIterator {
//   try {

//       yield put(requestLogout())

//       localStorage.removeItem('id_token');

//       yield put(receiveLogout());
// }
//   catch (err) { yield put(logoutError(err)); }
//                         // not too sure about this. 
// };




// export function auth(state = {
//     isFetching: false,
//     isAuthenticated: localStorage.getItem('id_token') ? true : false
//   }, action) {
//   switch (action.type) {

//     case LOGIN_REQUEST:
//       return Object.assign({}, state, {
//         isFetching: true,
//         isAuthenticated: false,
//         user: action.creds // I think maybe this is not necessary, or if I understand the purpose of this?  
//       });

//     case LOGIN_SUCCESS:
//       return Object.assign({}, state, {
//         isFetching: false,
//         isAuthenticated: true,
//         errorMessage: ''
//       });

//     case LOGIN_FAILURE:
//       return Object.assign({}, state, {
//         isFetching: false,
//         isAuthenticated: false,
//         errorMessage: action.message
//       });

//     case LOGIN_REQUEST:
//       return Object.assign({}, state, {
//         isFetching: true,
//         isAuthenticated: true
//       });

//     case LOGOUT_SUCCESS:
//       return Object.assign({}, state, {
//         isFetching: true,
//         isAuthenticated: false
//       });
      
//     default:
//       return state
//   };
// };


// We combine the reducers here so that they
// can be left split apart above
