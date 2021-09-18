import React from 'react'
import"./cell16.css";
const Measuring5Image = "https://cdn.kowi.in/products/BodyCompositionScale/MeasuringTape/5.svg"


function Cell16() {
    return (
        <>
             <section className="sect-11-wrapper">
                 <div className="sect-11-col-01">
                     <div className="sect-11-image">
                         <img src={Measuring5Image}alt="" />
                     </div>
                 </div>
                 <div className="sect-11-col-02"> 
                      <div className="sect-11-description">
                          
                          <div className="content sect-11-content">
                              <p className="bold-text">
                                Smart Inch Tape can be easily synced with our application via Bluetooth technology and would give you current and past recorded measurements with quite ease.
                              </p>
                              <p className="second-p">This tape will automatically synchronize your body circumference data, once connected. 
                                  You will be able to view these details and maintain a record of your progress using our measuring tape
                                 on the KOWI application.
                                 We ensure the highest product standards of topmost quality for all our customers. 

                              </p>

                          </div>
                      </div>
                 </div>
             </section>
        </>
    )
}

export default Cell16