import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from "../constants/userConstants";

function userLogInReducer(state = {
  loggingIn : false,
  loggedIn  : false,
  error     : null,
  userInfo  : {
    id       : "",
    name     : "",
    email    : "",
    password : "",
    isAdmin  : false,
  },
}, action) {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn : false,
        loggedIn  : true,
        userInfo  : {
          ...state.userInfo,
          userInfo: action.payload
        }
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    default: return state;
  }
}

function userUpdateReducer(state = {
  updating : false,
  updated  : false,
  userInfo : {
    id       : "",
    name     : "",
    email    : "",
    password : "",
    isAdmin  : false,
  },
  error     : null
}, action) {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return {
        ...state,
        updating: true
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        updating : false,
        updated  : true,
        userInfo : {
          ...state.userInfo,
          userInfo: action.payload
        }
      };
    case USER_UPDATE_FAIL:
      return {
        ...state,
        updating: false,
        error: action.payload
      };
    default: return state;
  }
}

function userSignUpReducer(state = {
  signingUp : false,
  signedUp  : false,
  error     : null,
  userInfo  : {
    id       : "",
    name     : "",
    email    : "",
    password : "",
    isAdmin  : false,
  },
}, action) {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        signingUp: true
      };
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp : false,
        signedUp  : true,
        userInfo  : {
          ...state.userInfo,
          userInfo: action.payload
        }
      };
    case USER_SIGNUP_FAIL:
      return {
        ...state,
        signingUp: false,
        error: action.payload
      };
    default: return state;
  }
}

function userLogOutReducer(state = {
  loggingOut : false,
  loggedOut  : false,
  error      : null,
  userInfo   : {
    id       : "",
    name     : "",
    email    : "",
    password : "",
    isAdmin  : false,
  },
}, action) {
  switch (action.type) {
    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        loggingOut: true
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut : false,
        loggedOut  : true,
        userInfo  : {
          ...state.userInfo,
          userInfo: action.payload
        }
      };
    case USER_LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        error: action.payload
      };
    default: return state;
  }
}

export {
  userLogInReducer, userSignUpReducer, userUpdateReducer, userLogOutReducer
}