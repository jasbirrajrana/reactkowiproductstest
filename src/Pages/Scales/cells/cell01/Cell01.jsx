

import React from 'react'
import"./Cell01.css";
const image ="https://cdn.kowi.in/products/BodyCompositionScale/BodyComposition/Group 205.svg"





function Cell01() {
 
    return (
        <>
             <section className="scale-nav-wrapper">
                
                 <div className="sect-01-row-02">
                     <div className="sect-01-row-02-div-01">
                    
                         <div className="title nav">
                             <span>
                                 Body Composition Scale
                             </span>
                         </div>
                         <div className="buy-now">
                             <span>
                                 Buy Now
                             </span>
                         </div>
                         <div className="content">
                             <p>
                                     Our body composition scale provides the user with an accurate calculation of their body health Information including body fat, muscle mass, protein mass metabolic rate, and much more with the help of a small electrical current flow with the help of nodes at the bottom of scales.
                             </p>
                         </div>
                     </div>
                     <div className="sect-01-row-02-div-02">
                        
                        <div className="CompositionScaleHeroImages">
                           
                            <div className="heroBaseImage">
                                 <img src={image} alt="" />
                            </div>


                            
                        </div>
                             
                       
                     </div>
                 </div>
             </section>

        </>
    )
}

export default Cell01
