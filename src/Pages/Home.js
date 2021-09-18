import React from "react";
import products from '../data';
import About from "../Components/About/About";
import FeaturedProduct from "../Components/FeaturedProduct/FeaturedProduct";
import Hero from "../Components/Hero/Hero";
import Section4 from "../Components/Section4/Section4";
import WhatWeDo from "../Components/WhatWeDo/WhatWeDo";
// import Footer from "../Shared/Footer/Footer";
const Home = () => {  

  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <Section4 />
      {products.map((product) => {
        if (product.id % 2 === 0) {
          return <FeaturedProduct product={product} reverse={true} />;
        } else {
          return <FeaturedProduct product={product} reverse={false} />;
        }
      })}
    </>
  );
};

export default Home;
