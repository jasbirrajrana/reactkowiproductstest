import React from "react";
import style from "../../Styles/ExercisePlan.module.css";


const rightImg = "https://cdn.kowi.in/products/exercise/Component 89 1.svg";
const imgFramework = "https://cdn.kowi.in/products/exercise/img teamwork 7.svg";
const MobileUiSmall = "https://cdn.kowi.in/productsexercise/mobileUiSmall.svg";
const rightRectangleImg = "https://cdn.kowi.in/products/exercise/Rectangle 556.svg";
const leftRectangleImg = "https://cdn.kowi.in/products/exercise/Rectangle 568.svg";


const ExercisePlan = () => {
  return (
    <section>
      <div className={style.rightRectangle}>
        <img src={rightRectangleImg} alt="" />
      </div>
      <div className={style.mobileUiSmall}>
        <img src={MobileUiSmall} alt="mobile ui" />
      </div>
      <div className="container">
        <div className="row justify-content-center pt-5">
          <div className="col-md-7 col-12">
            <div className={style.exerciseContent}>
              <div className={style.contents}>
                <h3>
                  Customised <br />
                  Exercise Plan
                </h3>
                <p>
                  Similar to our customized diet plans , we provide{" "}
                  <strong>customized exercise plans</strong> under the
                  supervision of highly professional fitness trainers , which
                  are further refined through AI automation. Tutorial videos of
                  exercises and posture correction tips would be regularly
                  posted and updated with on your favorite KOWI application.{" "}
                </p>
              </div>
              <div className={style.imgBox}>
                <img className="w-100" src={imgFramework} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-5 d-none d-md-block position-relative">
            <div className={style.rightImg}>
              <img src={rightImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.leftRectangleImg}>
        <img src={leftRectangleImg} alt="" />
      </div>
      <div className={style.smallLeftRectangle}>
        <img src={leftRectangleImg} alt="" />
      </div>
    </section>
  );
};

export default ExercisePlan;
