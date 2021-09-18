import React from 'react'
import"./Cell03.css";
const ElectrodesImage = "https://cdn.kowi.in/products/BodyCompositionScale/BodyComposition/Group 170.png"

function Cell03() {
    return (
        <>
            <section className="electrodes-wrapper">
                <div className="sect-03-col-01">
                    <div className="electrode-image">
                        <img src={ElectrodesImage} alt="" />
                    </div>
                </div>
                <div className="sect-03-col-02">
                    <div className="elctrodes-description">
                           <div className="sect-03-title">
                               <span>
                                   Electrodes
                               </span>
                           </div>
                           <div className="content sect-03-content">
                               <p className="first-p">We use the latest cutting edge technique of <a className="bold-text">advanced Bioelectrical Impedance Analysis(BIA),</a> by the way of which <a className="bold-text">small low tension</a> and <a className="bold-text">highly non-invasive electric currents</a>highly non-invasive electric currents are passed through the body which remain undetected by the senses.
       
                               </p>
                               <p className="second-p">As these currents pass by your body, the impedance or your body’s reaction to them is measured and the difference of electrical conductivity of body fat from other tissues is analysed and processed by the CPU to make rapid <a className="bold-text">scientific calculations to arrive at the mentioned data.</a></p>
                               <p><a className="bold-text">The current is so slight and for so small a duration that the human body is not even able to sense it.</a>
                              </p>
                           </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cell03
