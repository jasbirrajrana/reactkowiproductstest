import AuthServices from "../../Utils/services/AuthServices/AuthServices";
import { RESET_AUTH_USER, SET_AUTH_USER } from "../actionTypes/actionTypes";

export const submitSignup = (payload) => (dispatch) => {
  AuthServices.signUp(payload)
    .then((data) => {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("loggedInUser", JSON.stringify(data));
      alert("Successfully logged in!");
      dispatch(setAuthUser(data));
    })
    .catch((err) => {
      localStorage.clear();
      console.error(err.response);
    });
};

export const submitLogin = (payload) => (dispatch) => {
  AuthServices.signIn(payload)
    .then((data) => {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("loggedInUser", JSON.stringify(data));
      alert("Successfully logged in!");
      dispatch(setAuthUser(data));
    })
    .catch((err) => {
      localStorage.clear();
    });
};

export const setAuthUser = (payload) => {
  return {
    type: SET_AUTH_USER,
    payload,
  };
};

export const resetAuthUser = () => {
  return {
    type: RESET_AUTH_USER,
    payload: null,
  };
};
