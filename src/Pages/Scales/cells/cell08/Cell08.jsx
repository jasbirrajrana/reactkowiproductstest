import React from 'react'
import"./Cell08.css";

const Kitchen3Image = "https://cdn.kowi.in/products/BodyCompositionScale/KitchenScale/3.svg"

function Cell08() {
    
    return (
        <>
             <section className="sect-11-wrapper">
                 <div className="sect-11-col-01">
                     <div className="sect-11-image">
                         <img src={Kitchen3Image} alt="" />
                     </div>
                 </div>
                 <div className="sect-11-col-02"> 
                      <div className="sect-11-description">
                          
                          <div className="content sect-11-content">
                              <p>
                                           It will then <b className="bold-text">calculate with great
                                           precision the weight and volume of your food, apart from the dish that it 
                                           is contained in</b> and hence, work out the amount of calories contained in
                                           your meal.
                              </p>
                              <p className="second-p">
                                          The calories are then update in real-time on our application, 
                                           with the help of the <b className="bold-text">sockets embedded and our IOT technology.</b> This will 
                                           help our specially curated AI trackers to keep a watch on your calories and also benefit our trainers in charting your customised diet and exercise plans.
 
                              </p>
                          </div>
                      </div>
                 </div>
             </section>
        </>
    )
}

export default Cell08  