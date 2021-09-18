import React from 'react'
import"./Cell04.css";

const ViewWeightImage = "https://cdn.kowi.in/products/BodyCompositionScale/BodyComposition/Group 168.svg";

function Cell04() {
    return (
        <>
             <section className="view-information-wrapper">
                 <div className="sect-04-col-01">
                     <div className="sect-04-image">
                         <img src={ViewWeightImage} alt="" />
                     </div>
                 </div>
                 <div className="sect-04-col-02"> 
                      
                          <div className="title sect-04-title">
                              <span>
                                  And how exactly will you be able to view this information?
                              </span>
                          </div>
                     
                 </div>
             </section>
        </>
    )
}

export default Cell04
