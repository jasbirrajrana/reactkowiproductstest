import React from 'react'
import "./cell13.css";

const Measuring2Image = "https://cdn.kowi.in/products/BodyCompositionScale/MeasuringTape/2.svg"

function Cell13() {
    return (
        <>
            <section className="how-to-use-wrapper-2">
                <div className="sect-19-col-01">
                    <div className="sect-19-image">
                        <img src={Measuring2Image} alt="" />
                    </div>
                </div>
                <div className="sect-19-col-02">
                    <div className="sect-19-description">
                        <div className="title sect-19-title">                          
                              <span>
                                  But, wait
                              </span>
                        </div>
                        <div className="content sect-19-content">
                            <p className="bold-text"                  
                                >how do you exactly use our smart measuring tape? 
Is it actually any complex?



                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cell13