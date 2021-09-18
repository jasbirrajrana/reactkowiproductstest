import {
  SET_ALL_ORDERS,
  SET_ALL_PRODUCT,
  SET_CART_PRODUCT,
} from "../actionTypes/actionTypes";

const initialState = {
  allProducts: [{price:""}],
  allOrders: [],
  cartProduct: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_PRODUCT: {
      return {
        ...state,
        allProducts: payload,
      };
    }

    case SET_CART_PRODUCT: {
      return {
        ...state,
        cartProduct: payload,
      };
    }

    case SET_ALL_ORDERS: {
      return {
        ...state,
        allOrders: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default productReducer;
