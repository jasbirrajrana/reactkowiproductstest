import React from 'react'
import"./Cell10.css";
const Kitchen5Image = "https://cdn.kowi.in/products/BodyCompositionScale/KitchenScale/5.svg"



function Cell10() {
    return (
        <>
            <section className="food-logs-wrapper">
                   <div className="sect-13-col-01">
                        <div className="sect-13-image">
                            <img src={Kitchen5Image} alt="" />
                        </div>
                    </div>
                    <div className="sect-13-col-02">
                        <div className="content section-13-content">
                            
                            <p className="bold-text"> 
                  
                                    The users just need to fill out their meal log by the name of the food item
                                    that they are about to consume and place it on our calorie scale.
                            </p>
                            
                                
                            <span>
                                    <p className="bold-text second-p">And that is mostly it!</p>
                            </span>
                                
                            <p>
                                Our product will then calculate the weight and volume of the food with
                                 great accuracy and precision and depict the calorie content in the food item.
                            </p>
                                
                            
                        </div>
                    </div>
                    
            </section>
        </>
    )
}

export default Cell10