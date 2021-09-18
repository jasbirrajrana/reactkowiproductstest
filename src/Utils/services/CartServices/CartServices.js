import AxiosRequests from "../AxiosRequests";

class CartServices {
  // to get all product in cart (required login)
  getCartProducts(token) {
    return AxiosRequests.get("/managecart", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  }

  // to add a product to cart (required login)
  addToCart(productInfo, token) {
    return AxiosRequests.post("/managecart", productInfo, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  }

  // to update quantity of cart item (required login)
  updateCartQuantity(productInfo, token) {
    return AxiosRequests.put("/managecart", productInfo, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  }

  // to delete cart item (required login)
  deleteCartProduct(productInfo, token) {
    return AxiosRequests.delete("/managecart", productInfo, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  }
}

export default new CartServices();
