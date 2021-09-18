import React from "react";
import style from "../../Styles/Predictions.module.css";

const PredictionsBanner = "https://cdn.kowi.in/products/Predictions/Group 86.svg";
const MobileUiSmall = "https://cdn.kowi.in/products/Predictions/mobileUiSmall.svg";
const LeftImg = "https://cdn.kowi.in/products/Reminders/Rectangle 871.svg";
const RightSmImg = "https://cdn.kowi.in/products/Reminders/Rectangle 872.svg";


const Predictions = () => {
  return (
    <section className={style.PredictionsWrapper}>
      <div className={`d-flex justify-content-between ${style.designImgs}`}>
        <img
          className={`${style.LeftImg} d-none d-md-block`}
          src={LeftImg}
          alt="LeftImg"
        />
        <img className={style.smImg} src={RightSmImg} alt="RightSmImg" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-7">
            <div className={style.redictionsContent}>
              <h3> Automation Predictions</h3>
              <p>
                The best news by far is , that we are in the process of
                perfectioning our methods and approach to predict KOWI’s
                progress in the future with help of our{" "}
                <b>advanced machine learning algorithms</b> by considering
                various features such as past activity and current body
                measurments.{" "}
              </p>
            </div>
          </div>
        </div>
        <img
          className={`${style.PredictionsBanner} d-none d-md-block`}
          src={PredictionsBanner}
          alt=""
        />
      </div>
      <img
        className="w-100 d-block d-md-none"
        src={MobileUiSmall}
        alt="mobile ui small"
      />
      <div className={`${style.RightImgBottom} d-none d-md-block`}>
        <img src={LeftImg} alt="LeftImg" />
      </div>
    </section>
  );
};

export default Predictions;
