import React from 'react'
import"./Cell09.css";
const Kitchen4Image = "https://cdn.kowi.in/products/BodyCompositionScale/KitchenScale/4.svg"


function Cell09() {
    return (
        <>
             <section className="view-information-wrapper-2">
                 <div className="sect-12-col-01"> 
                      <div className="title sect-12-title">
                          <span>
                              And how exactly will you be able to view this information?
                          </span>
                      </div>
                      <div className="content sect-12-content">
                          <p>
                               You do not have to set any sophisticated electronic equipments up for this.
                                With the help of the <a>sockets embedded</a> in the machine and the use of 
                                <a>cutting edge IOT technology</a> employed by our company, you will be able to
                                 view these metrics in real-time on the KOWI application.

                          </p>
                      </div>
                 </div>
                 <div className="sect-12-col-02">
                     <div className="sect-12-image">
                         <img src={Kitchen4Image} alt="" />
                     </div>
                 </div>
                 
             </section>
        </>
    )
}

export default Cell09