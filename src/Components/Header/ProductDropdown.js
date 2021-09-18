import React from 'react'
import { NavLink } from 'react-router-dom';
import style from '../../Styles/Header.module.css';

function ProductDropdown() {
    return (
        <div>
            <ul className={style.pdNav}>
                  <li>
                    <NavLink to='/body-composition-scale'>
                      <span className={style.menu}>Body Composition Scale</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/kitchen-scale'>
                      <span className={style.menu}>Kitchen scale </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to='/smart-measuring-tape'>
                      <span className={style.menu}>Smart Measuring Tape</span>
                    </NavLink>
                  </li>
                </ul>
        </div>
    )
}

export default ProductDropdown
