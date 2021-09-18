import React from "react";
import style from "../../Styles/WhatWeDo.module.css";
const WhatWeDo = () => {
  return (
    <section className={style.WhatWeDoParent}>
      <div>
        <div className="d-block d-md-none">
        <img
          className={style.mobileUi}
          src="https://cdn.kowi.in/products/whatWeDo-items/smallimg.svg"
          alt="mobile img"
        />
        </div>
        <div className="row row-cols-1 row-cols-md-2 m-0 p-0">
          <div className="col p-0 m-0 d-flex align-items-center">
            <div className={style.left__content}>
              <h2 className={style.title}>
                <span>What We Do?</span>
              </h2>
              <p className={style.description}>
                We take care of your{" "}
                  <span className="fw-bold"> health, diet and fitness </span>{" "}through our
                platform, providing everything you need to be at your best
                without sacrificing your eating habits.
              </p>
            </div>
          </div>
          <div className="col p-0 m-0">
            <img className={style.WhatWeDoImg} src="https://cdn.kowi.in/products/whatWeDo-items/undraw_personal_trainer_ote3 (1) 1.svg" alt="" />
          </div>
        </div>
        <div className={style.circle_1}>
          <img src="https://cdn.kowi.in/products/whatWeDo-items/Rectangle 514.png" alt="circle-1" />
        </div>
        <div className={style.circle_2}>
          <img src="https://cdn.kowi.in/products/whatWeDo-items/Rectangle 513.png" alt="circel-2" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
