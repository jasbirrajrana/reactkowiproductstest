import React from "react";
import style from "../../Styles/Delivery.module.css";


const BlueRectangle = "https://cdn.kowi.in/products/Delivery/blueRectangle.svg";
const deliveryImg = "https://cdn.kowi.in/products/Delivery/Group 84.svg";
const MobileSmallUI = "https://cdn.kowi.in/products/Delivery/mobileSmallUi2.svg";
const rightImg = "https://cdn.kowi.in/products/Delivery/Rectangle 560.svg";
const leftBgImg = "https://cdn.kowi.in/products/Delivery/Rectangle 561.svg";
const rightSmImg = "https://cdn.kowi.in/products/Delivery/Rectangle 563.svg";
const leftImg = "https://cdn.kowi.in/products/Delivery/Rectangle 566.svg";

const Delivery = () => {
  return (
    <section className={`${style.DeliveryWrapper} position-relative`}>
      <div className={style.mobileSmallUi}>
        <img className="w-100" src={MobileSmallUI} alt="mobile ui small" />
      </div>
      <div className="d-none d-md-block">
        <div className={`d-flex justify-content-between ${style.designIcon}`}>
          <img src={leftImg} alt="leftImg" />
          <img src={rightImg} alt="rightImg" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 order-1 order-md-0">
            <div className={style.imgbox}>
              <img className="w-100" src={deliveryImg} alt="deliveryImg" />
            </div>
          </div>
          <div className="col-md-6 order-0">
            <div className={style.deliveryContent}>
              <h3>
                Home
                <br className="d-block d-md-none" /> Delivery{" "}
                <br className="d-none d-md-block" />
                Services
              </h3>
              <p>
                Along with diet plans and recipes, we offer{" "}
                <b>home delivery services</b> for all required products and
                groceries in the given diet plan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block">
        <div className={`d-flex justify-content-between ${style.designIcon}`}>
          <img src={leftBgImg} alt="leftBgImg" />
          <img src={rightSmImg} alt="rightSmImg" />
        </div>
      </div>
      <div className="d-block d-md-none position-absolute end-0 bottom-0">
        <img src={BlueRectangle} alt="Blue rectangle" />
      </div>
    </section>
  );
};

export default Delivery;
