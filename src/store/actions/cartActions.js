import CartServices from "../../Utils/services/CartServices/CartServices";
import { SET_CART_PRODUCT } from "../actionTypes/actionTypes";

export const getCartProductsThunk = (token) => (dispatch) => {
  CartServices.getCartProducts(token).then((data) => {
    dispatch(setCartProducts(data));
  });
};

export const setCartProducts = (payload) => {
  return {
    type: SET_CART_PRODUCT,
    payload,
  };
};

export const addToCartThunk = (productInfo, token) => (dispatch) => {
  CartServices.addToCart(productInfo, token).then((data) => {
    dispatch(getCartProductsThunk());
  });
};

export const updateCartQuantityThunk = (productInfo, token) => (dispatch) => {
  CartServices.updateCartQuantity(productInfo, token).then((data) => {
    dispatch(getCartProductsThunk());
  });
};

export const deleteCartProductThunk = (productInfo, token) => (dispatch) => {
  CartServices.deleteCartProduct(productInfo, token).then((data) => {
    dispatch(getCartProductsThunk());
  });
};
