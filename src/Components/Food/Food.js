import React from 'react';
import ReusableBlogCard from '../ReusableBlogCard/ReusableBlogCard';
import style from '../../Styles/ReusableBlogCard.module.css';


const BlogImg14 = 'https://cdn.kowi.in/products/blog-items/blog14.png';
const BlogImg13 = 'https://cdn.kowi.in/products/blog-items/blog13.png';
const BlogImg15 = 'https://cdn.kowi.in/products/blog-items/blog15.png';


export const FoodBlogData = [
  {
    id: '7uefoo9o',
    blogImage: BlogImg13,
    category: 'Life Style',
    blogTitle: 'Pandemic has shown why India needs the Right to Health',
    author: 'By Anushka Singh',
    date: '20 August 2021'
  },
  {
    id: 'g46dn38',
    blogImage: BlogImg14,
    category: 'Life Style',
    blogTitle: 'Easy Fluffy Pancakes from Scratch',
    author: 'By Anushka Singh',
    date: '20 August 2021'
  },
  {
    id: 'kk8200',
    blogImage: BlogImg15,
    category: 'Life Style',
    blogTitle: 'Vitamin C: What You Need to Know',
    author: 'By Anushka Singh',
    date: '20 August 2021'
  }
];
const Food = () => {
  return (
    <>
      <div className="container pt-5 mt-5 mb-5 pb-5">
        <h3 className={style.BlogHeading}>Food</h3>
        <div className="row justify-content-center">
          {
            FoodBlogData.map(post => <ReusableBlogCard key={post.id} post={post} />)
          }
        </div>
        <div className={style.ChevronRight}>
         <img src="assets/images/ChevronRight.png" alt="" />
      </div>
      </div>
    </>
  );
};

export default Food;