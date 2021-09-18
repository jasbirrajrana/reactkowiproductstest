import React, { useState } from "react";
import style from "../../Styles/MainCart.module.css"


const productImg = "https://cdn.kowi.in/products/shoppingCart/productImg.png";
const Star = "https://cdn.kowi.in/products/shoppingCart/star.svg";
const reviewStars = "https://cdn.kowi.in/products/shoppingCart/Group 169.png";


const PriceContainer = ({ name, price, discountedPrice, feature1, value1, feature2, value2, feature3, value3, feature4, value4, feature5, value5,}) => {
  const [quantity, setQuantity] = useState(1);

  const inCreaseHandler = () => {
    setQuantity(quantity + 1);
  };
  const deCreaseHandler = () => {
    setQuantity(quantity - 1);
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 p-0 m-0">
        <div className="col order-1 order-md-0 d-flex align-items-center">
          <div className={style.cartContentBox}>
            <div className={style.cartTopContent}>
              <h3 className={style.cartTitle}>{name}</h3>
              <div className={`${style.reviews} d-none d-md-block`}>
                <div className="d-flex bd-highlight mb-3">
                  <div className={style.reviewStars}>                    
                     <img src={reviewStars} alt="str"/>
                  </div>
                  <div className="p-2 bd-highlight lg-4">4.8/5.0</div>
                  <div className="ms-auto p-2 bd-highlight">123 reviews</div>
                </div>
              </div>
              <div className="d-block d-md-none">
                <div className={style.starDesignSmall}>
                  <img src={Star} alt="star"/>
                  <span>4.8/5.0</span>
                </div>
              </div>
              <div className={style.priceBox}>
                <h3 className={style.current}>{price}</h3>
                <h3 className={style.discount}>₹{discountedPrice}</h3>
                <p>(inclusive of GST)</p>
              </div>
              <div className={style.cartBox}>
                <button className={style.valueBtn}>
                  {" "}
                  <span onClick={inCreaseHandler} className={style.inCreaseBtn}>
                    +
                  </span>
                  <input
                    className={style.quantity}
                    type="text"
                    value={quantity}
                    readOnly
                  />{" "}
                  <span onClick={deCreaseHandler} className={style.deCreaseBtn}>
                    -
                  </span>
                </button>
                <button className={style.cartBtn}>Add To Cart</button>
              </div>
            </div>
            <div className={style.featuresSection}>
                <div className={style.featuresRow}>
                    <span>{feature1}</span>
                    <span>{value1}</span>
                     
                </div>
                <div className={style.featuresRow}>
                    <span>{feature2}</span>
                    <span>{value2}</span>
                </div>
                <div className={style.featuresRow}>
                    <span>{feature3}</span>
                    <span>{value3}</span>
                </div>
                <div className={style.featuresRow}>
                    <span>{feature4}</span>
                    <span>{value4}</span>
                </div>
                <div className={style.featuresRow}>
                    <span>{feature5}</span>
                    <span>{value5}</span>
                </div>
            </div>
          </div>
        </div>
        <div className="col p-0 m-0 ps-md-5 d-flex align-items-center">
          <img
            className={`w-100 d-none d-md-block ${style.VdPlayer}`}
            src={productImg}
            alt=""
          />          
        </div>
      </div>
    </>
  );
};

export default PriceContainer;
