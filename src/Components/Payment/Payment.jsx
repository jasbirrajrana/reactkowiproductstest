import React, { useState } from "react";

const Payment = () => {
  const [activePayment, setActivePayment] = useState(1);
  return (
    <div className="payment">
      <div className="container">
        <div className="d-flex justify-content-between mt-3">
          <p className="fs-24 fw-bold headingDesignSmall">Check Out</p>{" "}
          <p className="fs-16 textDesignSmall">Show Order Summery: 7,257</p>
        </div>
      </div>
      <div className="line bg-light my-4"></div>
      <div className="container">
        <p className="fs-24 fw-bold headingDesignSmall">Enter Your Name And Address:</p>{" "}
        <div className="row">
          <div className="col-md-6 mt-4">
            <input
              type="text"
              name=""
              id=""
              className="custom-input"
              placeholder="First Name"
            />
          </div>
          <div className="col-md-6 mt-4">
            <input
              type="text"
              name=""
              id=""
              className="custom-input"
              placeholder="Last Name"
            />
          </div>

          <div className="col-md-12 mt-4">
            <input
              type="text"
              name=""
              id=""
              className="custom-input"
              placeholder="Address 1"
            />
          </div>

          <div className="col-md-12 mt-4">
            <input
              type="text"
              name=""
              id=""
              className="custom-input"
              placeholder="Address 2 (Optional)"
            />
          </div>

          <div className="col-md-12 mt-4">
            <input
              type="text"
              name=""
              id=""
              className="custom-input"
              placeholder="Landmark"
            />
          </div>

          <div className="col-md-12 mt-4">
            <input
              type="text"
              name=""
              id=""
              className="custom-input"
              placeholder="Pincode"
            />
          </div>
          <div className="col-md-6 mt-4">
            <select name="" id="" className="custom-input">
              <option value="">City</option>
            </select>
          </div>
          <div className="col-md-6 mt-4">
            <select name="" id="" className="custom-input">
              <option value="">State</option>
            </select>
          </div>
          <div className="col-md-12 mt-4">
            <select name="" id="" className="custom-input">
              <option value="">Country</option>
            </select>
          </div>
        </div>
        <p className="fs-24 fw-bold mt-5 headingDesignSmall">Enter Your Contact Info:</p>{" "}
        <div className="row">
          <div className="col-md-12 mt-4">
            <input
              type="text"
              name=""
              id=""
              className="custom-input"
              placeholder="Email Address"
            />
          </div>
          <div className="col-md-12 mt-4">
            <input
              type="text"
              name=""
              id=""
              className="custom-input"
              placeholder="Contact Number"
            />
          </div>
        </div>
        <div className="product-description d-flex justify-content-between  mt-5 ">
          <p className="fs-24 fw-bold headingDesignSmall">Choose Payment Mode:</p>
          <p className="fs-24 fw-bold headingDesignSmall">
            <span>
              <i className="fas fa-shield-alt"></i>
            </span>{" "}
            100% Secure
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <div
              className={`payment-method col-md-12 d-flex justify-content-start align-items-center fw-bold mt-4 ${activePayment === 1 && "pay-active"
                } `}
              onClick={() => setActivePayment(1)}
            >
              <i className="fas fa-id-card pe-4"></i>
              <p>CREDIT / DEBIT CARD</p>
            </div>
            <div
              className={`payment-method col-md-12 d-flex justify-content-start align-items-center fw-bold mt-4 ${activePayment === 2 && "pay-active"
                } `}
              onClick={() => setActivePayment(2)}
            >
              <i className="fas fa-id-card pe-4"></i>
              <p>
                Phone Pay / Google Pay / UPI / <br /> BHIM UPI
              </p>
            </div>
            <div
              className={`payment-method col-md-12 d-flex justify-content-start align-items-center fw-bold mt-4 ${activePayment === 3 && "pay-active"
                } `}
              onClick={() => setActivePayment(3)}
            >
              <i className="fas fa-id-card pe-4"></i>
              <p>Paytm / Wallets / Payapps</p>
            </div>
            <div
              className={`payment-method col-md-12 d-flex justify-content-start align-items-center fw-bold mt-4 ${activePayment === 4 && "pay-active"
                } `}
              onClick={() => setActivePayment(4)}
            >
              <i className="fas fa-id-card pe-4"></i>
              <p>Net Banking</p>
            </div>
            <div
              className={`payment-method col-md-12 d-flex justify-content-start align-items-center fw-bold mt-4 ${activePayment === 5 && "pay-active"
                } `}
              onClick={() => setActivePayment(5)}
            >
              <i className="fas fa-id-card pe-4"></i>
              <p>EMI / PAYLATER</p>
            </div>
          </div>
          {activePayment === 1 ? (
            <div className="col-md-6 payment-card mt-4">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="payment-card-title">CREDIT / DEBIT CARD</h3>
                </div>
                <div className="col-md-12 mt-5">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="custom-input fs-21"
                    placeholder="Card Number"
                  />
                </div>
                <div className="col-md-12 mt-5">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="custom-input fs-21"
                    placeholder="Name on Card"
                  />
                </div>
                <div className="col-md-8 mt-5">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="custom-input fs-21"
                    placeholder="Valid Thru (MM/YY)"
                  />
                </div>
                <div className="col-md-4 mt-5">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="custom-input fs-21"
                    placeholder="CVV"
                  />
                </div>

                <div className="col-md-12 mt-5">
                  <button className="btn btn-danger w-100 py-2">
                    {" "}
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-md-6 payment-card mt-4">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="payment-card-title">UPCOMING</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
