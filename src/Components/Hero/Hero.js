import React from 'react';
import { Link } from 'react-router-dom';
import style from '../../Styles/Hero.module.css';
const Hero = () => {
  return (
    <section className={`position-relative pt-5 ${style.hero__section}`}>
      {/*Hero left image*/}
      <div className={style.leftImg}>
        <img src='https://cdn.kowi.in/products/Hero-items/Component 64.svg' alt="circle1" />
      </div>
      {/*hero content*/}
      <div className={`${style.hero__content}`}>
        <div className={`${style.KowiLogo}`}><img src='https://cdn.kowi.in/products/Icons/FINAL_LOGO.png' alt="BrandLogo" /></div>
        <div className={style.hero__title__left}>
          <p><span>You are precious, <br /> and so is your health</span></p>
        </div>
        {/*  Hero Button*/}
        <div className="mt-5">
          <Link to="/signup"><button className={style.hero__button}><span>Pre Register Now!</span></button></Link>
          <Link to="/body-composition-scale"><button className={style.hero__button}><span>Buy Scales</span></button></Link>
          
          
        </div>
      </div>
      {/*    hero right image*/}
     
      <div className={style.hero__right__image}>
        <img src='https://cdn.kowi.in/products/Hero-items/Mask Group.svg' alt=""  />
      </div>
      <div className={style.smallBgImg}>
        <img src='https://cdn.kowi.in/products/Hero-items/heroBgSmall.svg' alt="Background img" />
      </div>
    

      {/*    Drop down menu*/}
      <div className={style.drop__down}>
        <img src='https://cdn.kowi.in/products/Hero-items/Drop Down.svg' alt="dropDown Icon" />
      </div>

    </section>
  );
};

export default Hero;
