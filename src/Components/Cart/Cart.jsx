import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartProductsThunk } from "../../store/actions/cartActions";

const cancelBtn = "https://cdn.kowi.in/products/Checkout/cancel.svg";
const product1 = "https://cdn.kowi.in/products/Checkout/product1.png";

const Cart = () => {
  const dispatch = useDispatch();

  const { cartProduct } = useSelector((state) => state.product);
 // const { token } = useSelector((state) => state.auth.loggedInUser);

  useEffect(() => {
    dispatch(getCartProductsThunk());
  }, [dispatch,]);

  console.log(cartProduct);

  return (
    <div className="cart ">
      <div className="container shoppingCart d-block d-md-none">
        Shopping Cart(02)
      </div>
      <div className="line bg-light my-4 d-none d-md-block"></div>
      <div className="d-flex cart-item container">
        <div className="products-image me-3 me-md-5">
          <img src={product1} alt="" />
        </div>
        <div className="cart-info w-100 position-relative">
          <div className="product-description d-md-flex justify-content-between ">
            <div>
              <p className="product-title m-0">Body Composition Scale</p>
              <p className="text-mute">Product Size: 300x275x23.5 mm</p>
              <p className="text-mute">Capacity: 180kg/400lb</p>
            </div>
            <div className="cart-option d-flex">
              <span>QTY</span>
              <select name="quantity" id="quantity">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <span className="d-none d-md-block">
                {" "}
                <i className="fa fa-trash"></i>
              </span>
            </div>
          </div>
          <div className="d-none d-md-block">
            <div className="product-description d-flex justify-content-between mt-3 ">
              <p className="fs-18  mb-0">
                {" "}
                <span>
                  <i className="fas fa-gift"></i>
                </span>{" "}
                Add a gift message
              </p>{" "}
              <span style={{ cursor: "pointer" }}>Add</span>
            </div>
            <div className="line bg-light mt-2"></div>
            <div className="product-price">
              <div className="product-description d-flex justify-content-between ">
                <p className="fs-18 mt-3">
                  Amount: <span className="text-mute">(Inclusiv Of GST)</span>
                </p>{" "}
                <p className="fw-bold mt-3">&#8377; 2399</p>
              </div>
            </div>
          </div>
          <div className="d-block d-md-none amountSmall">
            <span>&#8377; 2399</span>
            <span className="text-decoration-line-through ms-2 discount">
              3999
            </span>
          </div>
          <div className="d-block d-md-none position-absolute top-0 end-0">
            <img src={cancelBtn} alt="cancel icon" />
          </div>
        </div>
      </div>

      <div className="line bg-light my-4"></div>

      <div className="d-flex cart-item container">
        <div className="products-image me-3 me-md-5">
          <img src={product1} alt="" />
        </div>
        <div className="cart-info w-100 position-relative">
          <div className="product-description d-md-flex justify-content-between ">
            <div>
              <p className="product-title m-0">Body Composition Scale</p>
              <p className="text-mute">Product Size: 300x275x23.5 mm</p>
              <p className="text-mute">Capacity: 180kg/400lb</p>
            </div>
            <div className="cart-option d-flex">
              <span>QTY</span>
              <select name="quantity" id="quantity">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <span className="d-none d-md-block">
                {" "}
                <i className="fa fa-trash"></i>
              </span>
            </div>
          </div>
          <div className="d-none d-md-block">
            <div className="product-description d-flex justify-content-between mt-3 ">
              <p className="fs-18  mb-0">
                {" "}
                <span>
                  <i className="fas fa-gift"></i>
                </span>{" "}
                Add a gift message
              </p>{" "}
              <span style={{ cursor: "pointer" }}>Add</span>
            </div>
            <div className="line bg-light mt-2"></div>
            <div className="product-price">
              <div className="product-description d-flex justify-content-between ">
                <p className="fs-18 mt-3">
                  Amount: <span className="text-mute">(Inclusiv Of GST)</span>
                </p>{" "}
                <p className="fw-bold mt-3">&#8377; 2399</p>
              </div>
            </div>
          </div>
          <div className="d-block d-md-none amountSmall">
            <span>&#8377; 4798</span>
            <span className="text-decoration-line-through ms-2 discount">
              7398
            </span>
          </div>
          <div className="d-block d-md-none position-absolute top-0 end-0">
            <img src={cancelBtn} alt="cancel icon" />
          </div>
        </div>
      </div>
      <div className="d-block d-md-none">
        <div className="line bg-light my-4"></div>
        <div className="product-description fw-bold container d-flex justify-content-between mt-3 ">
          <p className="fs-18  mb-0">
            {" "}
            <span>
              <i className="fas fa-gift"></i>
            </span>{" "}
            Add a gift message
          </p>{" "}
          <span style={{ cursor: "pointer" }}>Add</span>
        </div>
      </div>
      <div className="line bg-light my-4"></div>
      <div className="promo-code container promoWithTotal">
        <p className="fs-18 fw-bold">
          Add a promotional code{" "}
          <span>
            {" "}
            <i className="fa fa-plus "></i>
          </span>{" "}
        </p>
      </div>
      <div className="line bg-light my-3 my-md-4"></div>
      <div className="paymentDetail d-block d-md-none">
        <h4 className="text-center">Payment Details</h4>
        <div className="line bg-light my-3"></div>
      </div>
      <div className="container promoWithTotal">
        <div className="d-flex justify-content-between mt-2">
          <p className="fs-18 mb-0 fw-md-bold">Subtotal Amount :</p>{" "}
          <span className="fw-bold">&#8377; 7,197</span>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <p className="fs-18 mb-0 fw-md-bold">Shipping Amount :</p>{" "}
          <span className="fw-bold">&#8377; 60</span>
        </div>
        <div className="d-flex justify-content-between mt-2 totalAmount">
          <p className="fs-md-24 mb-0 fw-md-bold">Total Amount :</p>{" "}
          <span className="fs-md-24 fw-bold">&#8377; 7,257</span>
        </div>
      </div>
      <div className="line bg-light my-4"></div>
      <div className="d-flex justify-content-between mt-3 mb-5 container">
        <button className="btn custom-btn">Continue shopping</button>
        <button className="btn custom-btn">Secure Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
