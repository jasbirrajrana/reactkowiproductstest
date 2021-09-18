
import React, { useState } from "react";
import "../Scales/cells/cell01/Cell01.css"


const CoreFeaturesContainer = ({heroimageOne, heroimageTwo, heroimageThree, heroimageFour, heroimageFive, heroimageSix}) => {
  

  return (
    <>
      <div className="heroImagesWrapper">           
           <div className="heroleftContainer">
              <div className="herofarLeft">
                  <img src={heroimageOne}alt="" />
              </div>
              <div className="heromidLeft">
                  <div className="herotopLeft">
                       <img src={heroimageTwo}alt="" />
                  </div>
                  <div className="herobottomLeft">
                      <img src={heroimageThree}alt="" />
                  </div>
              </div>
           </div>          
           <div className="herorightContainer">
              <div className="herofarRight">
                   <img src={heroimageSix}alt="" />
              </div>
              <div className=".heromidRight">
                  <div className="herotopRight">
                        <img src={heroimageFour}alt="" />
                  </div>
                  <div className="herobottomRight">
                        <img src={heroimageFive}alt="" />
                  </div>
              </div>
           </div>
      </div>
    </>
  );
};

export default CoreFeaturesContainer;
