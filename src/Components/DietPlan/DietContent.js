import React from "react";
import style from "../../Styles/DietContent.module.css";


const rightImg = "https://cdn.kowi.in/products/diet-plan/Rectangle 502.svg";
const leftImg = "https://cdn.kowi.in/products/diet-plan/Rectangle 556.svg";


const DietContent = () => {
  return (
    <div className={style.dietContentWarapper}>
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className={style.dietContent}>
              <h3>Customised Diet Plan</h3>
              <p>
                Customised diet plans will be charted, keeping in mind your
                dietary preferences, in{" "}
                <strong>consultation with our experts,</strong> i.e., you and
                guided by our advanced AI automation technology.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.dietLeftImg}>
        <img src={leftImg} alt="" />
      </div>
    </div>
  );
};

export default DietContent;
