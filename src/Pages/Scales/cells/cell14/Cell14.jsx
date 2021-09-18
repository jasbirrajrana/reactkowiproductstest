import React from 'react'
import"./cell14.css";

const Measuring3Image = "https://cdn.kowi.in/products/BodyCompositionScale/MeasuringTape/3.svg"

function Cell14() {
    return (
        <>
             <section className="sect-20-wrapper">
                 <div className="sect-20-col-01">
                     <div className="sect-20-image">
                         <img src={Measuring3Image} alt="" />
                     </div>
                 </div>
                 <div className="sect-20-col-02"> 
                      <div className="sect-20-description">
                          
                          <div className="content sect-20-content">
                              <p>
                              It has a rather simple answer – No. The use of our smart measuring tape is as easy as it can get!
                               This quite extraordinary digital device uses ultrasonic distance detection to measur
                                the area or distance of/between body part(s) using ultrasonic waves.
                              </p>
                              <p className="second-p">
                                   Just use this smart measuring tape on the required body part 
                                   and it would produce results with maximum accuracy.
                                    Equipped with a digital display, you won’t have to struggle reading fractions compared to an ordinary inch tape. 
                                
                              </p>
                              <p className="bold-text">
                                     Works on the latest cutting edge IOT technology used by our company.

                              </p>
                          </div>
                      </div>
                 </div>
             </section>
        </>
    )
}

export default Cell14   