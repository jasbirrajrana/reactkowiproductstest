import React from "react";
import style from "../../Styles/Reminders.module.css";


const Mobile = "https://cdn.kowi.in/products/Reminders/Component 96 1.svg";
const LeftRectangleSmall = "https://cdn.kowi.in/products/Reminders/leftRectangleSmall.svg";
const MobileSmallUi = "https://cdn.kowi.in/products/Reminders/mobileSmallUi.svg";
const LeftImg = "https://cdn.kowi.in/products/Reminders/Rectangle 871.svg";
const RightSmImg = "https://cdn.kowi.in/products/Reminders/Rectangle 872.svg";
const RightImg = "https://cdn.kowi.in/products/Reminders/Rectangle 873.svg";

const Reminders = () => {
  return (
    <section>
      <div className="d-block d-md-none  pt-4 position-absolute">
        <img src={LeftRectangleSmall} alt="LeftImg" />
      </div>
      <div className="d-none d-md-block">
        <div className={`d-flex justify-content-between ${style.designImgs}`}>
          <img src={LeftImg} alt="LeftImg" />
          <img src={RightImg} alt="RightImg" />
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 justify-content-center">
          <div className="col order-1 order-md-0">
            <div className={style.reminderReport}>
              <img src={Mobile} alt="" />
            </div>
          </div>
          <div className="col">
            <div className={style.reminderContent}>
              <h3>
                Timely and <br /> Effective Reminders
              </h3>
              <p>
                Stressing over completing your daily tasks and increasing your
                productivity? Don’t worry! Our user friendly application got you
                covered. It will <b>notify and remind</b> you to complete your
                daily fitness schedules with such a great effectivity that it
                will certainly improve your everyday fitness habits of
                exercising and logging in your meals.{" "}
                <b>
                  Premium users will enjoy even more attention and personalised
                  reminders.
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.rightImg}>
        <img src={RightSmImg} alt="RightSmImg" />
      </div>
      <div className="d-block d-md-none">
        <img className="w-100" src={MobileSmallUi} alt="mobileUiSmall" />
      </div>
    </section>
  );
};

export default Reminders;
