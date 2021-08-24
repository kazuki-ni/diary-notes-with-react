import Axios from "axios";
import Cookie from 'js-cookie';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL } from "../constants/userConstants";

const HOST = "http://localhost:9000";

const signUp = ( id, name, email, password, isAdmin) => async (dispatch) => {

  dispatch({ type: USER_SIGNUP_REQUEST });

  try {
    const { data } = await Axios.post(
      HOST + "/api/user/signup",
      { id, name, email, password, isAdmin }
    );
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (err) {
    dispatch({ type: USER_SIGNUP_FAIL, payload: err.message });
  }
}

const update = ({ id, name, email, password }) => async (dispatch, getState) => {

  const { userSignin: { userInfo } } = getState();
  dispatch({ type: USER_UPDATE_REQUEST, payload: { id, name, email, password } });

  try {
    const { data } = await Axios.put(
      HOST + "/api/user/" + id,
      { name, email, password },
      { headers: { Authorization: 'Bearer ' + userInfo.token } }
    );
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (err) {
    dispatch({ type: USER_UPDATE_FAIL, payload: err.message });
  }
}

const logIn = (id, email, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    const { data } = await Axios.post(
      HOST + "/api/user/login",
      { id, email, password }
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (err) {
    dispatch({ type: USER_LOGIN_FAIL, payload: err.message });
  }
}

const logout = () => (dispatch) => {
  console.log(USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAIL)
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT_SUCCESS })
}

// const find = (id, email) => async (dispatch) => {
//   try {
//     const { data } = await Axios.post(
//       HOST + "/api/user/find",
//       { id, email }
//     );
//     return
    // Cookie.set('userInfo', JSON.stringify(data));
//   } catch (err) {
//     console.error(err);
//   }
// }

export { signUp, update, logIn, logout };