import React from 'react'
import"./Cell02.css";
const ButWaitImage = "https://cdn.kowi.in/products/BodyCompositionScale/BodyComposition/2.svg"

function Cell02() {
    return (
        <>
            <section className="but-wait-wrapper">
                <div className="sect-02-col-01">
                    <div className="sect-02-image">
                        <img src={ButWaitImage}alt="" />
                    </div>
                </div>
                <div className="sect-02-col-02">
                    <div className="sect-02-desciption">
                        <div className="title">                          
                              <span>
                                  But Wait,
                              </span>
                        </div>
                        <div className="content bold-text">
                            <p>                  
                                how exactly does our scale measure all this with you just standing on it?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cell02
