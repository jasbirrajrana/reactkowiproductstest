import ProductServices from "../../Utils/services/ProductServices/ProductServices";
import { SET_ALL_ORDERS, SET_ALL_PRODUCT } from "../actionTypes/actionTypes";

export const getAllProductsThunk = () => (dispatch) => {
  ProductServices.getAllProducts().then((data) => {
    dispatch(setAllProducts(data));
  });
};

export const setAllProducts = (payload) => {
  return {
    type: SET_ALL_PRODUCT,
    payload,
  };
};

export const getAllOrderThunk = (token) => (dispatch) => {
  ProductServices.getAllOrders(token).then((data) => {
    dispatch(setAllOrders(data));
  });
};

export const setAllOrders = (payload) => {
  return {
    type: SET_ALL_ORDERS,
    payload,
  };
};
