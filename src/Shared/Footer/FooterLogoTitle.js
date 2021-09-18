import React from "react";
import style from "../../Styles/Footer.module.css";

const FooterLogo = "https://cdn.kowi.in/products/Footer/FINAL_LOGO.svg";


const FooterLogoTitle = () => {
  return (
    <div className={style.rightBox}>
      <div className="d-flex justify-content-between">
        <h3>
          You can help shape <br />
          your body
        </h3>
        <button className={`${style.contactBtn} d-block d-md-none`}>Contact Us</button>
      </div>
      <div className={`${style.logoBox} d-none d-md-block`}>
        <img src={FooterLogo} alt="" />
        <p>
          You are precious, <br />
          and so is your health
        </p>
      </div>
    </div>
  );
};

export default FooterLogoTitle;
