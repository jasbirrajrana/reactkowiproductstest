import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import style from '../../Styles/Header.module.css';


const CancelIcon = 'https://cdn.kowi.in/productsIcons/cancel.svg';
const home = 'https://cdn.kowi.in/products/Icons/Home.png';
const MenuIcon = 'https://cdn.kowi.in/products/Icons/menu.svg';

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [isExpand, setIsExpand] = useState(true);

  const showNavHandler = () => {
    setShowNav(!showNav);

    // setTimeout(() => {
    //   setShowNav(showNav);
    // }, 6000);
  };

  return (
    <header>
      <Navbar expand='lg' className={style.header}>
        <Container>
          <Navbar.Brand>
            <NavLink className={`${style.homeBtn}`} to={'/'}>
              <img src={home} alt='Brand Logo' />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setIsExpand(!isExpand)}
            className={`${style.menuBtn}`}
            aria-controls='basic-navbar-nav'
          >
            {isExpand ? (
              <img src={MenuIcon} alt='icon svg' />
            ) : (
              <img src={CancelIcon} alt='icon svg' />
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav
              className={`me-auto text-center text-lg-start ${style.allNavLink}`}
            >
              <NavLink className={style.shadow} to='#'>
                <span onClick={showNavHandler} className={style.menu}>
                  Products
                </span>
              </NavLink>
              {showNav && (
                <ul className={style.pdNav}>
                  <li>
                    <NavLink to='/body-composition-scale'>
                      <span className={style.menu}>body composition scale</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/kitchen-scale'>
                      <span className={style.menu}>Calories scale </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/smart-measuring-tape'>
                      <span className={style.menu}>smart measuring scale</span>
                    </NavLink>
                  </li>
                </ul>
              )}
              <NavLink to='/'>
                <span className={style.menu}>App</span>
              </NavLink>
              <NavLink to='/blogs'>
                <span className={style.menu}>Blogs</span>
              </NavLink>            
              <NavLink to='/signup'>
                <span className={style.menu}>Login</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
