import React from 'react';
import { BigPostdata, rightPostData } from '../../Pages/Blogs/BlogsData';
import style from '../../Styles/BlogHero.module.css';
import BlogCard from './BlogCard';

const BlogHero = () => {
  return (
    <div className="container mt-0 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className={style.bigPost}>
            <img className="img-fluid" src={BigPostdata.blogImg} alt="" />
            <div className={style.author_date}>
              <small>{BigPostdata.author}</small>
              <small>{BigPostdata.date}</small>
            </div>
            <div className={style.title_post_left}>
              <h3>{BigPostdata.postTitle}</h3>
              <p className={style.post_text_left}>{BigPostdata.blogPost}</p>sss
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {
            rightPostData.map(post => <BlogCard key={post.id} contents={post} />)
          }
        </div>
      </div>
    </div>
  );
};

export default BlogHero;