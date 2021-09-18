import React from 'react';
import { useHistory } from 'react-router-dom';
import style from '../../Styles/BlogHero.module.css';

const BlogCard = ({ contents }) => {
  const history = useHistory();

  const blogDetails = (id) => {
    history.push(`/blogDetail/${id}`)
  };

  return (
    <div onClick={() => blogDetails(contents.id)} className={style.rightPost}>
      <img className="img-fluid" src={contents.blogImg} alt="" />
      <div className={style.author_date}>
        <small>{contents.author}</small>
        <small>{contents.date}</small>
      </div>
      <div className={style.title_post}>
        <h3>{contents.postTitle}</h3>
        <p>{contents.blogPost}</p>
      </div>
    </div>
  );
};

export default BlogCard;