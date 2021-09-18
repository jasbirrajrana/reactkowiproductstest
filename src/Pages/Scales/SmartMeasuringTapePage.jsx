import React from 'react';
import Cell12 from './cells/cell12/Cell12';
import Cell13 from './cells/cell13/Cell13';
import Cell14 from './cells/cell14/Cell14';
import Cell15 from './cells/cell15/Cell15';
import Cell16 from './cells/cell16/Cell16';
import PriceContainer from './PriceContainer';
import CoreFeaturesContainer from './CoreFeaturesContainer';
import SmartMeasuringTapeCartData from '../../Components/Scales/CartData/SmartMeasuringTapeCartData';
import Review from "../../Components/ProductsPage/Review"

const mainImage = "https://cdn.kowi.in/products/CoreFeaturesImages/Group 202.png"
const imageOne = "https://cdn.kowi.in/products/CoreFeaturesImages/Group 138.svg"
const imageTwo = "https://cdn.kowi.in/products/CoreFeaturesImages/Group 139.svg"
const imageThree = "https://cdn.kowi.in/products/CoreFeaturesImages/Group 140.svg"
const imageFour = "https://cdn.kowi.in/products/CoreFeaturesImages/Group 141.svg"
const imageFive = "https://cdn.kowi.in/products/CoreFeaturesImages/Group 143.svg"
const imageSix = "https://cdn.kowi.in/products/CoreFeaturesImages/Group 142.svg"




function SmartMeasuringTapePage() {
    return (
        <>  
            <Cell12/> 
            <Cell13/> 
            <Cell14/>
            <Cell15/> 
            <Cell16/> 
            <CoreFeaturesContainer
              mainImage={mainImage}
              imageOne={imageOne}
              imageTwo={imageTwo}
              imageThree={imageThree}
              imageFour={imageFour}
              imageFive={imageFive}
              imageSix={imageSix}
              
            />
            {SmartMeasuringTapeCartData.map((item, index)=> {
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
                      feature5={item.feature5}
                      value5={item.value5}
                    />
                );
            })}
            <Review/>
        </>
    )
}

export default SmartMeasuringTapePage