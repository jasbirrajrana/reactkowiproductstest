import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Cell06 from './cells/cell06/Cell06';
import Cell07 from './cells/cell07/Cell07';
import Cell08 from './cells/cell08/Cell08';
import Cell09 from './cells/cell09/Cell09';
import Cell10 from './cells/cell10/Cell10';
import Cell11 from './cells/cell11/Cell11';
import PriceContainer from './PriceContainer';
import CoreFeaturesContainer from './CoreFeaturesContainer';
import KitchenScaleCartData from '../../Components/Scales/CartData/KitchenScaleCartData';
import Review from "../../Components/ProductsPage/Review"

function KitchenScalePage() {
    return (
        <>           
            
            <Cell06/>
            <Cell07/>
            <Cell08/>
            <Cell09/>
            <Cell10/>
            <Cell11/> 
            <CoreFeaturesContainer
              mainImage="https://cdn.kowi.in/products/CoreFeaturesImages/Group 203.svg"
              imageOne="https://cdn.kowi.in/products/CoreFeaturesImages/Group195.svg"
              imageTwo="https://cdn.kowi.in/products/CoreFeaturesImages/Group 196.svg"
              imageThree="https://cdn.kowi.in/products/CoreFeaturesImages/Group 197.svg"
              imageFour="https://cdn.kowi.in/products/CoreFeaturesImages/Group 198.svg"
              imageFive="https://cdn.kowi.in/products/CoreFeaturesImages/Group 200.svg"
              imageSix="https://cdn.kowi.in/products/CoreFeaturesImages/Group 199.svg"
              
            />
            {KitchenScaleCartData.map((item, index)=> {
                return (
                    <PriceContainer
                      name={item.name}
                      price={item.price}
                      discountedPrice={item.discountedPrice}
                      feature1={item.feature1}
                      value1={item.value1}
                      feature2={item.feature2}
                      value2={item.value2}
                      feature3={item.feature3}
                      value3={item.value3}
                      feature4={item.feature4}
                      value4={item.value4}
                    />
                );
            })}  
            <Review/>       
            
        </>
    )
}

export default KitchenScalePage