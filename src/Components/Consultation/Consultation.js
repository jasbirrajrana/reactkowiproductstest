import React from "react";
import style from "../../Styles/Consultation.module.css";


const Mobile2 = "https://cdn.kowi.in/products/Consultation/Group (1).svg";
const Mobile1 = "https://cdn.kowi.in/products/Consultation/Group.svg";
const MobileUiSmall = "https://cdn.kowi.in/products/Consultation/MobileUiSmall.png";
const rightImg = "https://cdn.kowi.in/products/Consultation/Rectangle 565.svg";

const Consultation = () => {
  return (
    <section className={`pt-3 pb-2 overflow-hidden ${style.consultationSection}`}>
      <div className={style.rightImg}>
        <img src={rightImg} alt="" />
      </div>
      <div className="container">
        <div className={`row`}>
          <div className="col-md-5">
            <div className={style.consultationContent}>
              <h3>
                Expert <br className="d-none d-md-block" />
                Consultation
              </h3>
              <div className={style.consultationPost}>
                <p>
                  We enable real time , <b>one on one consultation</b> of our
                  customerswith our qualified and expert dieticians,
                  nutritionists and fitness trainers via video and audio chat.
                  Our experts have all the data to keep you on the right track
                  while <b>ensuring utmost privacy</b> to each customer’s data.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7 d-none d-md-block ">
            <div className={style.consultationImgs}>
              <img className={style.img1} src={Mobile1} alt="" />
              <img className={style.img2} src={Mobile2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-md-none w-100 overflow-hidden">
        <img className="w-100" src={MobileUiSmall} alt="mobile ui img" />
      </div>
    </section>
  );
};

export default Consultation;
