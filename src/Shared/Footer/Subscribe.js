import React from 'react';
import style from '../../Styles/Footer.module.css';
const Subscribe = () => {
  return (
    <div className={style.footerEmail}>
      <h3>get regular updates</h3>
      <form action="">
        <input type="email" name="email" id="email" placeholder="Enter Your Email" />
      </form>
    </div>
  );
};

export default Subscribe;