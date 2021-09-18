import  React from "react";
import style from "../../Styles/About.module.css";


const aboutRightImage = "https://cdn.kowi.in/products/About-items/aboutBigImg.svg";
const aboutUsImg = "https://cdn.kowi.in/products/About-items/aboutUs.svg";
const BlueCircelImageLeft = "https://cdn.kowi.in/products/About-items/BlueRectangleLeft.svg";
const BlueCircelImageRight = "https://cdn.kowi.in/products/About-items/BlueRectangleRight.svg";
const timelineImage = "https://cdn.kowi.in/products/About-items/Component 109.svg";
const aboutCircelImage = "https://cdn.kowi.in/products/About-items/Rectangle 600.svg";
const TimeLineSmall = "https://cdn.kowi.in/products/About-items/TimeLineSmall.svg";

const About = () => {
  return (
    <>
      <section className="py-4">
        <div className={style.about__content}>
          <div className={style.circel}>
            <img src={aboutCircelImage} alt="" />
          </div>
          <div className={style.blueCircleLeft}>
            <img src={BlueCircelImageLeft} alt="Blue rectangle" />
          </div>
          <div className={style.left__content}>
            <div className="pb-3">
              <h2 className={style.headline}>
                <span>About Us</span>
              </h2>
              <div className={style.aboutUs}>
                <img src={aboutUsImg} alt="timeline" />
              </div>
              <p className={style.description}>
                <span>
                  We at Kowi envisage to be the{" "}
                  <span className="fw-bold">
                    best health tech application in India.
                  </span>{" "}
                  We will provide features such as{" "}
                  <span className="fw-bold">customised diet and exercise</span>{" "}
                  plans designed with the help of our experts and refined
                  through our{" "}
                  <span className="fw-bold">advanced AI automation</span> along
                  with health trackers and home delivery services of groceries
                  to realise our dream of making this a fitter and healthier
                  society.
                </span>
              </p>
            </div>
            <div className={style.blueCircleRight}>
              <img src={BlueCircelImageRight} alt="Blue rectangle" />
            </div>
            <div className={style.timeLine}>
              <img src={timelineImage} alt="timeline img" />
            </div>
            <div className={style.timeLineSmall}>
              <img src={TimeLineSmall} alt="timeline" />
            </div>
          </div>
          <div className={style.right__content}>
            <div className={style.video__container}>
                <video src="https://drive.google.com/file/d/1iWSXhFpn4a1jhuBb7V3I5eJtiI926nFi/view?usp=sharing" frameBorder="0" allow="acelerometer; autoplay; encyrypted-media; gyroscope; picture-in-picture; allowfullscreen">

                </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
