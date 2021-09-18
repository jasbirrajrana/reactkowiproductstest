import React, { useState } from "react";
import Cart from "../../Components/Cart/Cart";
import Payment from "../../Components/Payment/Payment";
import "../../Styles/Checkout.css";

const arrow = "https://cdn.kowi.in/products/Checkout/arrow-right.svg";
const orderImage = "https://cdn.kowi.in/products/Checkout/order-image.svg";
const product1 = "https://cdn.kowi.in/products/Checkout/product1.png";
const successImgSmall = "https://cdn.kowi.in/products/Checkout/successCarton.svg";

const Checkout = () => {
  const [activNav, setActiveNav] = useState(1);
  return (
    <>
      {/* progress navbar */}
      <div className="bg-light overflow-hidden progressBar">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div
              className={`d-flex justify-content-between align-items-center progress-nav  ${
                activNav === 1 ? "step-active" : ""
              }`}
              onClick={() => setActiveNav(1)}
            >
              <div className="nav-step pe-2 d-none d-md-block">1</div>
              <div>
                <p className="nav-header m-0">Shopping Cart</p>
                <small className="nav-tag d-none d-md-block">
                  manage your list items
                </small>
              </div>
            </div>
            <img className="rightArrow" src={arrow} alt="arrow-right.svg" />
            <div
              className={`d-flex justify-content-between align-items-center progress-nav  ${
                activNav === 2 ? "step-active" : ""
              }`}
              onClick={() => setActiveNav(2)}
            >
              <div className="nav-step pe-2 d-none d-md-block">2</div>
              <div>
                <p className="nav-header m-0 ">Address &amp; Payment</p>
                <small className="nav-tag d-none d-md-block">
                  enter your address and payment type
                </small>
              </div>
            </div>
            <img className="rightArrow" src={arrow} alt="arrow-right.svg" />
            <div
              className={`d-flex justify-content-between align-items-center progress-nav  ${
                activNav === 3 ? "step-active" : ""
              }`}
              onClick={() => setActiveNav(3)}
            >
              <div className="nav-step pe-2 d-none d-md-block">3</div>
              <div>
                <p className="nav-header m-0">Track Order</p>
                <small className="nav-tag d-none d-md-block">
                  review and track order
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end progress navbar */}

      {activNav === 1 && <Cart />}

      {activNav === 2 && <Payment />}

      {activNav === 3 && (
        <div className="order">
          <div className="container order-banner my-5">
            <img className="d-none d-md-block" src={orderImage} alt="" />
            <img className="d-block d-md-none" src={successImgSmall} alt="" />
          </div>
          <div className="col-md-12 text-center order-message">
            <h3>Congratulations</h3>
            <p>Your order has been placed</p>
          </div>
          <div className="d-block d-md-none text-center orderNum">
            Order Number: 1123456790892021
          </div>
          <div className="order-progress container">
            <h2> Track your order </h2>
            <h4 className="d-block d-md-none">
              Expected Delivery: 24 December 2021
            </h4>
            <div className="orderTrackSmall">
              <div className="d-md-flex justify-content-between my-md-5 orderTrackProgressSmall">
                <div className="step bar w-100 hasBarParent">
                  <div
                    className="d-flex justify-content-md-center
                justify-content-start align-items-md-center flex-md-column  hasBarAfterDone"
                  >
                    <div className="circle progress-done me-2 me-md-0"></div>
                    <small>Order Placed</small>
                  </div>
                  <div className="hasBarAfterSmallDone d-block d-md-none"></div>
                </div>
                <div className="step bar w-100 hasBarParent">
                  <div
                    className="d-flex justify-content-md-center
                justify-content-start align-items-md-center flex-md-column hasBarAfter hasBarBeforeDone"
                  >
                    <div className="circle progress-done me-2 me-md-0"></div>
                    <small>Order Shipped</small>
                  </div>
                  <div className="hasBarAfterSmall d-block d-md-none"></div>
                </div>
                <div className="step bar w-100 hasBarParent">
                  <div
                    className="d-flex justify-content-md-center
                justify-content-start align-items-md-center flex-md-column hasBarAfter hasBarBefore"
                  >
                    <div className="circle me-2 me-md-0"></div>
                    <small>Order Out For Delivery</small>
                  </div>
                  <div className="hasBarAfterSmall d-block d-md-none"></div>
                </div>
                <div className="step bar w-100 hasBarParent lastCircleSmall">
                  <div
                    className="d-flex justify-content-md-center
                justify-content-start align-items-md-center flex-md-column hasBarBefore"
                  >
                    <div className="circle me-2 me-md-0"></div>
                    <small>Order Delivered</small>
                  </div>
                </div>
              </div>
              <div className="deleveryAddressSmall d-block d-md-none">
                <p>Delevery Address:</p>
                <span>
                  Shreya Sinha B-47 Mitra Mandal Road, XYZ Colony Mayur Vhar,
                  Anisabad, Patna, Bihar 8000001
                </span>
              </div>
            </div>
          </div>
          <div className="container order-contact d-block d-md-none">
            <p>Updated Send To:</p>
            <span>
              {" "}
              <i className="fas fa-phone-alt"></i> 6164565454
            </span>{" "}
            <br />
            <span>
              {" "}
              <i className="fas fa-envelope"></i> username@domain.com
            </span>
          </div>
          <div className="line bg-light my-3 my-md-5"></div>
          <div className="container order-place-info">
            <p>
              Placed On: <span>12 May 2021</span>{" "}
            </p>
            <p>
              Order Number: <span>15165151656262652</span>{" "}
            </p>
            <p>
              Total Amount: <span>7,525</span>{" "}
            </p>
          </div>
          <div className="line bg-light my-3 my-md-5"></div>
          <div className="container order-contact d-none d-md-block">
            <p>Updated Send To:</p>
            <span>
              {" "}
              <i className="fas fa-phone-alt"></i> 6164565454
            </span>{" "}
            <br />
            <span>
              {" "}
              <i className="fas fa-envelope"></i> username@domain.com
            </span>
          </div>
          <div className="line bg-light my-3 my-md-5 d-none d-md-block"></div>

          <div className="container delevery-address d-none d-md-block">
            <p>Delevery Address:</p>
            <span>
              Shreya Sinha B-47 Mitra Mandal Road, XYZ Colony Mayur Vhar,
              Anisabad, Patna, Bihar 8000001
            </span>
          </div>
          <div className="line bg-light my-5 d-none d-md-block"></div>
          <div className="container d-block d-md-none orderTitle">
            <p>Your Orders</p>
          </div>
          <div className="d-flex cart-item container">
            <div className="products-image me-2 me-md-5">
              <img src={product1} alt="" />
            </div>
            <div className="cart-info w-100">
              <div className="product-description d-flex justify-content-between ">
                <div>
                  <p className="product-title m-0">Body Composition Scale</p>
                  <p className="text-mute">Product Size: 300x275x23.5 mm</p>
                  <p className="text-mute">Capacity: 180kg/400lb</p>
                </div>
                <div className="cart-option">
                  <span>QTY</span>
                  <select name="quantity" id="quantity">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div className="line bg-light"></div>
              <div className="product-price mt-5 mt-md-4">
                <div className="product-description d-flex justify-content-between ">
                  <p className="fs-18 mt-3 fw-bold">
                    Amount: <span className="fw-bold">PAID</span>
                  </p>{" "}
                  <p className="fw-bold mt-3">&#8377; 2399</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="container">
            <div className="d-flex  mt-3 mb-5">
              <button className="btn custom-btn me-3 me-md-5">Exchange</button>
              <button className="btn custom-btn">Return</button>
            </div>
          </div>

          <div className="line bg-light my-5"></div>

          <div className="d-flex cart-item container">
            <div className="products-image me-2 me-md-5">
              <img src={product1} alt="" />
            </div>
            <div className="cart-info w-100">
              <div className="product-description d-flex justify-content-between ">
                <div>
                  <p className="product-title m-0">Body Composition Scale</p>
                  <p className="text-mute">Product Size: 300x275x23.5 mm</p>
                  <p className="text-mute">Capacity: 180kg/400lb</p>
                </div>
                <div className="cart-option">
                  <span>QTY</span>
                  <select name="quantity" id="quantity">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div className="line bg-light"></div>
              <div className="product-price mt-5 mt-md-4">
                <div className="product-description d-flex justify-content-between ">
                  <p className="fs-18 mt-3 fw-bold">
                    Amount: <span className="fw-bold">PAID</span>
                  </p>{" "}
                  <p className="fw-bold mt-3">&#8377; 2399</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="d-flex  mt-3 mb-5">
              <button className="btn custom-btn me-3 me-md-5">Exchange</button>
              <button className="btn custom-btn">Return</button>
            </div>
          </div>

          <div className="line bg-light"></div>

          <div className="container">
            <div className="d-flex justify-content-center  my-5 ">
              <button className="downloadBtn my-5 py-2 px-5">
                Download Invoice
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
