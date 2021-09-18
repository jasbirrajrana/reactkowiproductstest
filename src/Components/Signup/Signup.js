/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from 'react';
import style from '../../Styles/Signup.module.css';
import Login from '../Login/Login';
import SignupForm from '../SingupForm/SignupForm';

const elem2 = 'https://cdn.kowi.in/products/Hero-items/Component 64.svg';
const dropDown = 'https://cdn.kowi.in/products/Hero-items/Drop Down.svg';
const elem1 = 'https://cdn.kowi.in/products/Hero-items/Group 88.svg';
const BgOfMobile = 'https://cdn.kowi.in/products/Hero-items/mobileofbg.png';
const logingmobile = 'https://cdn.kowi.in/products/Hero-items/loginmobile.svg';
const signUpSmall = 'https://cdn.kowi.in/products/Hero-items/signUpSmall.svg';

const Signup = () => {
  const [showRegister, setShowRegister] = useState(true);

  const handleShowRegister = () => {
    setShowRegister(!showRegister)
  };

  return (
    <section className={`position-relative pt-5 ${style.hero__section}`}>
      {/*Hero left image*/}
      <div className={`${style.leftImg} d-none d-md-block`}>
        <img src={elem2} alt="circle1" />
      </div>
      {/*hero right image*/}
      <div className={style.hero__right__image}>
        {
          showRegister ? <>  <img height="700px" className={style.loginmobile} src={logingmobile} alt="" /></> : <img src={elem1} alt="" height='700px' />
        }
      </div>
      {
        showRegister ? <Login handleShowRegister={handleShowRegister} /> : <SignupForm />
      }
      {/*hero right small device image*/}
      <div className={style.hero__right__smallImage}>
        <img src={signUpSmall} alt="" />
      </div>
      {/*Drop down*/}
      <div className={style.drop__down}>
        <img src={dropDown} alt="dropDown Icon" />
      </div>
    </section>
  );
};

export default Signup;