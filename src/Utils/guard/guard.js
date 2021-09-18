import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { setAuthUser } from "../../store/actions/authActions";

export const AuthRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export const GuestRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export const CheckLogin = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loggedInUserString = localStorage.getItem("loggedInUser");
  const dispatch = useDispatch();

  if (isLoggedIn && loggedInUserString) {
    const loggedInUser = JSON.parse(loggedInUserString);
    dispatch(setAuthUser(loggedInUser));
  } else {
    localStorage.clear();
  }

  return children;
};
