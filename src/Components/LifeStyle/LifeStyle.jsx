import React from 'react';
import ReusableBlogCard from '../ReusableBlogCard/ReusableBlogCard';
import { LifeStyleData } from './LifeStyleData';
import style from '../../Styles/ReusableBlogCard.module.css'
const LifeStyle = () => {
  return (
    <div className="container pt-5 mt-5">
      <h3 className={style.BlogHeading}>Life Style</h3>
      <div className="row justify-content-center">
        {
          LifeStyleData.map(post => <ReusableBlogCard key={post.id} post={post} />)
        }
      </div>
      <div className={style.ChevronRight}>
         <img src="https://cdn.kowi.in/products/blog-items/ChevronRight.png" alt="" />
      </div>
    </div>
  );
};

export default LifeStyle;