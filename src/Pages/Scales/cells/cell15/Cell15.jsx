import React from 'react'
import "./cell15.css";

const Measuring4Image = "https://cdn.kowi.in/products/BodyCompositionScale/MeasuringTape/4.svg"

function Cell15() {
    return (
        <>
            <section className="calf-measurement-wrapper">
                
                <div className="sect-21-col-01">

                    <div className="sect-21-description">                        
                        <div className="content sect-21-content">
                            <p className="bold-text">                  
                             
                                    How could you retrieve and view this information and actually save or record it?
                           
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sect-21-col-02">
                    <div className="sect-21-image">
                        <img src={Measuring4Image} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cell15