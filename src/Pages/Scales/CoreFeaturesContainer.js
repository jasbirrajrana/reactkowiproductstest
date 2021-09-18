
import React, { useState } from "react";
import style from "../../Styles/CoreFeatures.module.css"


const CoreFeaturesContainer = ({mainImage, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix}) => {
  

  return (
    <>
      <div className={style.coreFeaturesWrapper}>
           <div className={style.coreFeaturesTitle}>
                  <span>Our Core Features</span>
           </div>
           <div className={style.leftContainer}>
              <div className={style.farLeft}>
                  <img src={imageOne}alt="" />
              </div>
              <div className={style.midLeft}>
                  <div className={style.topLeft}>
                       <img src={imageTwo}alt="" />
                  </div>
                  <div className={style.bottomLeft}>
                      <img src={imageThree}alt="" />
                  </div>
              </div>
           </div>
           <div className={style.centreContainer}>
               <div className={style.mainImage}>
                   <img src={mainImage}alt="" />
               </div>
           </div>
           <div className={style.rightContainer}>
              <div className={style.farRight}>
                   <img src={imageSix}alt="" />
              </div>
              <div className={style.midRight}>
                  <div className={style.topRight}>
                        <img src={imageFour}alt="" />
                  </div>
                  <div className={style.bottomRight}>
                        <img src={imageFive}alt="" />
                  </div>
              </div>
           </div>
      </div>
    </>
  );
};

export default CoreFeaturesContainer;
