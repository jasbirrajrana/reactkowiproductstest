import React from 'react';
import { useHistory } from 'react-router-dom';
import style from '../../Styles/ReusableBlogCard.module.css';
const ReusableBlogCard = ({ post: { blogImage, category, blogTitle, author, date, id } }) => {
  const history = useHistory();

  const blogDetails = (id) => {
    history.push(`/blogDetail/${id}`)
  };

  return (
    <div className="col-sm-6 col-md-0 col-lg-4 mt-0">
      <div onClick={() => blogDetails(id)} className={`${style.postBox} mx-auto`}>
        <div className={style.imgBox}>
          <img src={blogImage} alt="" />
        </div>
        <div className={style.contentBox}>
          <p>{category}</p>
          <h3>{blogTitle}</h3>
          <small>{author}</small> <br />
          <small>{date}</small>
        </div>
      </div>
    </div>
  );
};

export default ReusableBlogCard;