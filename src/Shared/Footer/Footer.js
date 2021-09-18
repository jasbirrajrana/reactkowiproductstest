import React from "react";
import { Link } from "react-router-dom";
import style from "../../Styles/Footer.module.css";
import FooterLogoTitle from "./FooterLogoTitle";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <footer className={` pb-5 ${style.footerbg}`}>
      <div className={style.footerMainBg}>
        <img src="https://cdn.kowi.in/products/Footer/footer-bg.svg" alt="bg img" />
      </div>      
      <div className={`container ${style.parentDiv}`}>
        <Subscribe />
        <div className={`row ${style.ownRow}`}>
          <div className="col-12 col-md-4">
            <FooterLogoTitle />
          </div>
          <div className="col-12 col-md-8">
            <div className={style.footerMenu}>
              <ul>
                <li>
                  <div class="vl"></div>
                  {" "}                  
                  <Link to="/">
                    Home</Link>{" "}
                </li>
                <li>
                  
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <div class="vl"></div>
                  {" "}
                  <Link to="/">Our Mission</Link>{" "}
                </li>
                <li>
                  <div class="vl"></div>
                  {" "}
                  <Link to="/privacypolicy">Privacy Policy</Link>{" "}
                </li>
              </ul>
              <ul>
                <li>
                  <div class="vl"></div>
                  {" "}
                  <Link to="/">Career</Link>{" "}
                </li>
                <li>
                  <div class="vl"></div>
                  {" "}
                  <Link to="/">Terms And Conditions</Link>{" "}
                </li>
              </ul>
              <button className={`${style.contactBtn} d-none d-md-block`}>
                CONTACT US
              </button>
            </div>
            <div className="d-block d-md-none">
              <div
                className={`${style.logoBox} justify-content-center text-center mx-auto`}
              >
                <img src="https://cdn.kowi.in/products/Footer/FINAL_LOGO.svg" alt="" />
                <p>
                  You are precious, <br />
                  and so is your health
                </p>
              </div>              
            </div>
            <div><ul className={`${style.div_02}`}> 
                        <li className="icon"><img src="https://cdn.kowi.in/products/Footer/mediaicons/Twitter.png" alt="" /></li>                                            
                        <li className="icon"><img src="https://cdn.kowi.in/products/Footer/mediaicons/Facebook.png" alt="" /></li>
                        <li className="icon"><img src="https://cdn.kowi.in/products/Footer/mediaicons/Mail.png" alt="" /></li>
                        <li className="icon"><img src="https://cdn.kowi.in/products/Footer/mediaicons/Instagram.png" alt="" /></li>
                        <li className="icon"><img src="https://cdn.kowi.in/products/Footer/mediaicons/LinkedIn.png" alt="" /></li>
                        <li className="icon"><img src="https://cdn.kowi.in/products/Footer/mediaicons/YouTube.png"alt="" /></li> 
            </ul></div>
            <p className={`${style.copyright}`}>
                Copyright © 2021 Kowi pvt ltd
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
