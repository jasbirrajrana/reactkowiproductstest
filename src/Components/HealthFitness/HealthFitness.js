import React from 'react';
import ReusableBlogCard from '../ReusableBlogCard/ReusableBlogCard';
import style from '../../Styles/ReusableBlogCard.module.css'

const BlogImg10 = 'https://cdn.kowi.in/products/blog-items/blog10.png';
const BlogImg11 = 'https://cdn.kowi.in/products/blog-items/blog11.png';
const BlogImg12 = 'https://cdn.kowi.in/products/blog-items/blog12.png';


export const HealthFitnessData = [
  {
    id: '837beh',
    blogImage: BlogImg10,
    category: 'Life Style',
    blogTitle: 'Pandemic has shown why India needs the Right to Health',
    author: 'By Anushka Singh',
    date: '20 August 2021'
  },
  {
    id: '8kw76b',
    blogImage: BlogImg11,
    category: 'Life Style',
    blogTitle: '10 Best Candles for Aromatherapy at Home in 2021',
    author: 'By Anushka Singh',
    date: '20 August 2021'
  },
  {
    id: 'hen46g',
    blogImage: BlogImg12,
    category: 'Life Style',
    blogTitle: 'India: Divided In the Pursuit Of Happiness',
    author: 'By Anushka Singh',
    date: '20 August 2021'
  }
];

const HealthFitness = () => {
  return (
    <>
      <div className="container pt-5 mt-5">
        <h3 className={style.BlogHeading}>Health & Fitness</h3>
        <div className="row justify-content-center">
          {
            HealthFitnessData.map(post => <ReusableBlogCard key={post.id} post={post} />)
          }
        </div>
        <div className={style.ChevronRight}>
         <img src="assets/images/ChevronRight.png" alt="" />
      </div>
      </div>
    </>
  );
};

export default HealthFitness;