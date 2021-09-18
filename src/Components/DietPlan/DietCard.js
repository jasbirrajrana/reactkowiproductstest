import React from 'react';
import style from '../../Styles/DietCard.module.css';

const RightCardImg ='https://cdn.kowi.in/products/diet-plan/diet1.svg';
const MiddelCardImg = 'https://cdn.kowi.in/products/diet-plan/diet2.svg';
const LeftCardImg = 'https://cdn.kowi.in/products/diet-plan/diet3.svg';


const DietCard = () => {
  return (
    <div className="row p-0 m-0">
      <div className="col-md-4 p-0 d-none d-md-block">
        <div className={style.leftImg}>
          <img src={LeftCardImg} alt="LeftCardImg" />
        </div>
      </div>
      <div className="col-12 col-md-4 p-0">
        <div className={style.middelImg}>
          <img src={MiddelCardImg} alt="LeftCardImg" />
        </div>
      </div>
      <div className="col-md-4 p-0 d-none d-md-block">
        <div className={style.rightImg}>
          <img src={RightCardImg} alt="LeftCardImg" />
        </div>
      </div>
    </div>
  );
};

export default DietCard;