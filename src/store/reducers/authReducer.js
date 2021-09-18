import { RESET_AUTH_USER, SET_AUTH_USER } from "../actionTypes/actionTypes";

const initialState = {
  isLoggedIn: false,
  loggedInUser: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH_USER: {
      return {
        ...state,
        isLoggedIn: true,
        loggedInUser: payload,
      };
    }

    case RESET_AUTH_USER: {
      return {
        ...state,
        isLoggedIn: false,
        loggedInUser: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
