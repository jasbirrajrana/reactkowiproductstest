import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import productReducer from "./reducers/productReducer";

const combinedReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

export const store = createStore(
  combinedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
