import AxiosRequests from "../AxiosRequests";

class ProductServices {
  // to get all products
  getAllProducts() {
    return AxiosRequests.get("/products");
  }

  // to get all orders (required login)
  getAllOrders(token) {
    return AxiosRequests.get("/orders", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  }

  // to place an order (required login)
  placeOrder(orderInfo, token) {
    return AxiosRequests.post("/orders", orderInfo, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  }

  // to post review (required login)
  giveReview(reviewInfo, token) {
    return AxiosRequests.post("/reviewproduct", reviewInfo, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  }
}

export default new ProductServices();
