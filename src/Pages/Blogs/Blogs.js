import React from 'react';
import BlogHero from '../../Components/BlogHero/BlogHero';
import FeaturedArticle from '../../Components/FeaturedArticle/FeaturedArticle';
import Food from '../../Components/Food/Food';
import HealthFitness from '../../Components/HealthFitness/HealthFitness';
import LifeStyle from '../../Components/LifeStyle/LifeStyle';

const Blogs = () => {
  return (
    <>
      <BlogHero />
      <FeaturedArticle />
      <LifeStyle />
      <HealthFitness />
      <Food />
    </>
  );
};

export default Blogs;