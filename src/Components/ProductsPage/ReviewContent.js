import React from 'react';
import style from '../../Styles/ReviewContent.module.css';
const ReviewContent = (props) => {
  const { name, customar, review, rating1, rating2, rating3, rating4, rating5 } = props.review;
  return (
    <>
      <div className={style.reviewCad}>
        <div className={style.imgbox}>
          <img className="w-200" src={customar} alt="customar Img" />
        </div>
        <div className={style.contents}>
          <div className={style.name_star}>
            <h3>{name}</h3>
            <div className={style.star}>
              <img src={rating1} className="m-1" alt="rating" />
              <img src={rating2} className="m-1" alt="rating" />
              <img src={rating3} className="m-1" alt="rating" />
              <img src={rating4} className="m-1" alt="rating" />
              <img src={rating5} className="m-1" alt="rating" />
            </div>
          </div>
          <div className={style.reviewText}>
            <p>{review}</p>
          </div>
        </div>
      </div>      
    </>
  );
};

export default ReviewContent;