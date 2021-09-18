import"./cell12.css";
import React from "react";
const image = "https://cdn.kowi.in/products/BodyCompositionScale/MeasuringTape/Group 133.svg"


function Cell12() {
    return (
        <>
             <section className="scale-nav-wrapper">                
                 <div className="sect-18-row-02">
                     <div className="sect-18-row-02-div-01">
                         <div className="title nav smart-tape">
                             <span>
                                 Smart Measuring Tape
                             </span>
                         </div>
                         <div className="buy-now">
                             <span>
                                 Buy Now
                             </span>
                         </div>
                         <div className="content sect-18">
                             <p>
                             KOWI’s very own and easy to use smart measuring tape makes measurements easy and precise. It can be used for a variety of purposes and measure different body parts
                             </p>
                         </div>
                     </div>
                     <div className="sect-18-row-02-div-02">
                        <div className="SmartMeasuringTapeHeroImages">
                            <div className="SmartheroBaseImage">
                                 <img src={image} alt="" />
                             </div>
                        </div>
                     </div>
                 </div>
             </section>

        </>
    )
}

export default Cell12
