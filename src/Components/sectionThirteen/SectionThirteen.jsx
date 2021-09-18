//Health Trackers

import React, {useState, useEffect} from 'react'
import "./SectionThirteen.css";

function SectionThirteen() {
    return (
        <>      <div className="health-trackers-section-wrapper">
                   <div className="health-trackers-section">
                       <div className="health-trackers-row-01">
                            <span>
                                Health Trackers, Analysis and Calculators
                            </span>
                       </div>
                       <div className="health-trackers-row-2">
                          <div className="analytics-images-container">
                                 <div className="tile exercise">
                                    <img src="https://cdn.kowi.in/products/tiles/analytics/Exercise.png" alt="" />
                                 </div>
                                 <div className="tile analytics-bmi">
                                     <img src="https://cdn.kowi.in/products/tiles/analytics/analytics-bmi.png" alt="" />
                                 </div>
                                 <div className="tile analytics-bmi-1">
                                     <img src="https://cdn.kowi.in/products/tiles/analytics/analytics-bmi-1.png" alt="" />
                                 </div>                                                                  
                                 <div className="tile analytics-bmi-2">
                                     <img src="https://cdn.kowi.in/products/tiles/analytics/analytics-bmi-2.png" alt="" />
                                 </div>
                                 <div className="tile analytics-bmi-3">
                                    <img src="https://cdn.kowi.in/products/tiles/analytics/analytics-bmi-1.png" alt="" />
                                 </div>
                                 <div className="tile analytics-bmi-4">
                                    <img src="https://cdn.kowi.in/products/tiles/analytics/analytics-bmi-3.png" alt="" />
                                 </div>
                                 <div className="tile water">
                                     <img src="https://cdn.kowi.in/products/tiles/analytics/water.png" alt="" />
                                 </div>
                            
                                 
                          </div>
       
                       </div>
                       
                   </div>
                </div>
        </>
    )
}

export default SectionThirteen

