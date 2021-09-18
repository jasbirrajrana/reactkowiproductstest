import React from 'react'
import"./Cell11.css";
const Kitchen6Image = "https://cdn.kowi.in/products/BodyCompositionScale/KitchenScale/6.svg"

function Cell11() {
    return (
        <>
            <section className="add-item-wrapper">
                    <div className="sect-14-col-01">
                        <div className="content sect-14-content">
                           <p className="bold-text">
                                
                                     The calories would then get updated in real time on our KOWI application
                                     with the help of the sockets embedded and our latest IOT technology.
                               
                           </p>
                        
                            <p className="second-p">
                                This whole process would significantly help our specially curated AI trackers to keep a check on our user’s calorie intake and then allow our fitness trainers and experts to give every user their customised diet chart and their whole fitness schedules.
                            </p>
                        </div>
                    </div>
                    <div className="sect-14-col-02">
                        <div className="sect-14-image">
                            <img src={Kitchen6Image} alt="" />
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Cell11