

import React from 'react'
import"./Cell06.css";

import HeroImagesContainer from "../../HeroImagesContainer"
const KitchenHeroImage = "https://cdn.kowi.in/products/BodyCompositionScale/KitchenScale/Group 206.svg"


function Cell06() {
    
    return (
        <>
             <section className="scale-nav-wrapper">
                 <div className="sect-09-row-02">
                     <div className="sect-09-row-02-div-01">
                         <div className="title nav kitchen">
                             <span>
                                 Kitchen Scale
                             </span>
                         </div>
                         <div className="buy-now">
                             <span>
                                 Buy Now
                             </span>
                         </div>
                         <div className="content">
                            <p>
                               Kitchen scale, as the name suggests, measures the calories in your meal and updates the meal log in our application-KOWI, so that you, our trainers and AI trackers are able to keep a track of the calories consumed by you in every meal.
                            </p>
                         </div>
                     </div>
                     <div className="sect-09-row-02-div-03">
                       
                         <div className="KitchenScaleHeroImages">
                           
                           <div className="heroBaseImage">
                                 <img src={KitchenHeroImage} alt="" />
                            </div>
                         </div>
                             
                        
                     </div>
                 </div>
             </section>

        </>
    )
}

export default Cell06
