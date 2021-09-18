import React from 'react'
import "./Cell07.css"
const Kitchen2Image = "https://cdn.kowi.in/products/BodyCompositionScale/KitchenScale/2.svg"

function Cell07() {
    return (
        <>
            <section className="how-to-use-wrapper">
                <div className="sect-10-col-01">
                    <div className="sect-10-image">
                        <img src={Kitchen2Image} alt="" />
                    </div>
                </div>
                <div className="sect-10-col-02">
                    <div className="sect-10-description">
                        <div className="title sect-10-title">                          
                              <span>
                                  How to use this?
                              </span>
                        </div>
                        <div className="content sect-10-content">
                            <p className="bold-text">                  
                               Fill out your meal log by the name of the dish that you are about to consume and place it on our calorie scale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cell07