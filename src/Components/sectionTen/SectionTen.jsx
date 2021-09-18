//Kowi Social account

import React, {useState, useEffect} from 'react'
import "./SectionTen.css";
const a = "https://cdn.kowi.in/products/tiles/social/a.png"
const b = "https://cdn.kowi.in/products/tiles/social/b.png"
const c = "https://cdn.kowi.in/products/tiles/social/c.png"
const d = "https://cdn.kowi.in/products/tiles/social/d.png"

function SectionTen() {
    return (
        <>
             <div className="social-account-section-2">
                <div className="poster-title-2">                    
                    <div className="second">
                        <span>Social Account</span>
                    </div>
                </div>
               <div className="social-account-poster-2">
                                 <div className="tile a_2">
                                     <img src={c} alt="" />
                                 </div>
                                 <div className="tile b_2">
                                     <img src={a} alt="" />
                                 </div>
                                 <div className="tile c_2">
                                     <img src={b} alt="" />
                                 </div>
                                 <div className="tile d_2">
                                     <img src={d} alt="" />
                                 </div>
               </div>
             </div>
        </>
    )
}

export default SectionTen