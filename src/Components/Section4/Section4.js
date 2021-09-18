//KOWI social account

import React from 'react';
import { BsCircleFill } from "react-icons/bs";
import "./Section4.css";


function Section4() {

    return (
        <>
             <div className="social-account-section">
               <BsCircleFill className="circle-05"/>  
               <div className="poster-title">                    
                    <div className="second">
                        <span>Social Account</span>
                    </div>
                </div>
               <div className="social-account-poster">
                                 <div className="tile a">
                                     <img src="https://cdn.kowi.in/products/tiles/social/a.png" alt="" />
                                 </div>
                                 <div className="tile b">
                                     <img src="https://cdn.kowi.in/products/tiles/social/b.png" alt="" />
                                 </div>
                                 <div className="tile c">
                                     <img src="https://cdn.kowi.in/products/tiles/social/c.png" alt="" />
                                 </div>                                 
               </div>
             </div>
        </>
    )
}

export default Section4
