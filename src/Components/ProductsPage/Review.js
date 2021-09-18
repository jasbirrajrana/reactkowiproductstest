import React from "react";

import style from "../../Styles/ReviewContent.module.css";
import ReviewContent from "./ReviewContent";


const Star = "https://cdn.kowi.in/products/review/star.svg" 

const reviewData = [
  {
    id: 1,
    customar: "https://cdn.kowi.in/products/review/customar1.svg",
    name: "Ankita Ghosh",
    review: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.`,
    rating1: Star,
    rating2: Star,
    rating3: Star,
    rating4: Star,
    rating5: Star,
  },
  {
    id: 2,
    customar:"https://cdn.kowi.in/products/review/customar2.svg",
    name: "Sakshi Sinha",
    review: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.`,
    rating1: Star,
    rating2: Star,
    rating3: Star,
    rating4: Star,
    rating5: Star,
  },
  {
    id: 3,
    customar: "https://cdn.kowi.in/products/review/customar3.svg",
    name: "Shaurya",
    review: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea.`,
    rating1: Star,
    rating2: Star,
    rating3: Star,
    rating4: Star,
    rating5: Star,
  },
];

const Review = () => {
  return (
    <div className="container pb-5 pt-5">
      <div className="row">
        <div className="col-md-4">
          <div className={style.customerReview}>
            <div className={style.reviewTitle}>Customer Review</div>
            <div className={`d-block d-md-none ${style.ratingSmall}`}>
              <div className="d-flex align-items-center">
              <img src="https://cdn.kowi.in/products/review/star.svg" alt="review star" />
              <span className="ms-0">4.8/5.0</span>
              </div>
            </div>
            <div className="d-none d-md-block">
              <div className={style.reviewContent}>
                <div className={style.starBox}>
                  <img src="https://cdn.kowi.in/products/review/star.svg" className="m-1" alt="review star" />
                  <img src="https://cdn.kowi.in/products/review/star.svg" className="m-1" alt="review star" />
                  <img src="https://cdn.kowi.in/products/review/star.svg" className="m-1" alt="review star" />
                  <img src="https://cdn.kowi.in/products/review/star.svg" className="m-1" alt="review star" />
                  <img src="https://cdn.kowi.in/products/review/star.svg" className="m-1" alt="review star" />
                </div>
                <p>4.8/5.0</p>
                <p className={style.totalReviews}> 123 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {reviewData.map((review) => (
        <ReviewContent key={review.id} review={review} />
      ))}
      <button className={style.reviewBtn}>View All Reviews</button>
    </div>
  );
};

export default Review;
