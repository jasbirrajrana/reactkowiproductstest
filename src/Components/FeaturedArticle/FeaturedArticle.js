import React from 'react';
import ReusableBlogCard from '../ReusableBlogCard/ReusableBlogCard';
import { FeaturedArticleData } from './FeaturedArticleData';
import style from '../../Styles/ReusableBlogCard.module.css'
const FeaturedArticle = () => {
  return (
    <div className="container pt-5 mt-0">
      <h3 className={style.BlogHeading}>Featured Article</h3>
      
      <div className="row justify-content-center">
        {
          FeaturedArticleData.map(post => <ReusableBlogCard key={post.id} post={post} />)
        }
      </div>
      <div className={style.ChevronRight}>
         <img src="https://cdn.kowi.in/products/blog-items/ChevronRight.png" alt="" />
      </div>
    </div>
  );
};

export default FeaturedArticle;