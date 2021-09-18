import React from 'react';
import Cell01 from './cells/cell01/Cell01';
import Cell02 from './cells/cell02/Cell02';
import Cell03 from './cells/cell03/Cell03';
import Cell04 from './cells/cell04/Cell04';
import Cell05 from './cells/cell05/Cell05';
import BodyCompositionScaleCartData from "../../Components/Scales/CartData/BodyCompositionScaleCartData";
import PriceContainer from './PriceContainer';
import CoreFeaturesContainer from './CoreFeaturesContainer';
import Review from "../../Components/ProductsPage/Review"
import axios from "axios"
const baseURL= "https://dev.kowi.in/api/products/"




function BodyCompositionScalePage() {
     
    const [post, setPost] = React.useState(null);
    

    React.useEffect(() => {
      axios.get(baseURL).then((response) => {
        setPost(response.data);
      });
    }, []);

    console.log(post)

  

   
    
    
    return (
        <>
            <Cell01/>
            <Cell02/>
            <Cell03/>            
            <Cell04/>
            <Cell05/>
        
            <CoreFeaturesContainer
              mainImage="https://cdn.kowi.in/products/CoreFeaturesImages/Group 201.svg"
              imageOne="https://cdn.kowi.in/products/CoreFeaturesImages/Group 195.svg"
              imageTwo="https://cdn.kowi.in/products/CoreFeaturesImages/Group 196.svg"
              imageThree="https://cdn.kowi.in/products/CoreFeaturesImages/Group 197.svg"
              imageFour="https://cdn.kowi.in/products/CoreFeaturesImages/Group 198.svg"
              imageFive="https://cdn.kowi.in/products/CoreFeaturesImages/Group 200.svg"
              imageSix="https://cdn.kowi.in/products/CoreFeaturesImages/Group 199.svg"
              
            />
         
            {BodyCompositionScaleCartData.map((item, index)=> {
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

export default BodyCompositionScalePage