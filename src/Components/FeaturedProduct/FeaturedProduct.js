/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Link} from "react-router-dom";
import '../../Styles/Product.css';


const leftSvg1 = 'https://cdn.kowi.in/products/Product-items/leftSvg1.svg';
const leftSvg2= 'https://cdn.kowi.in/products/Product-items/leftSvg2.svg';
const rightSvg1 = 'https://cdn.kowi.in/products/Product-items/rightSvg1.svg';
const rightSvg2 = 'https://cdn.kowi.in/products/Product-items/rightSvg2.svg';

const FeaturedProduct = ({ product, reverse }) => {
  return (
    <>
      {!reverse ? (
        <div className='grid-2 product'>
          <div className='left-column'>
            <div className='product-info '>
              <h2>{product.name}</h2>
              <p>{product.info}</p>
              <div className="btnBox">
                      <Link to={product.link}>
                        <button>View Product</button>
                      </Link>
                      <Link to="/checkout"><button className="btn2">Add To Cart</button></Link>
              </div>
            </div>
          </div>
          <div className='right-column'>
            <div className='product-image'>
              <img src={product.image} alt='product-image' />              
            </div>
          </div>
          <img
            src={leftSvg1}
            alt='product-left-svg1'
            className='product-left-svg1'
          />
          <img
            src={leftSvg2}
            alt='product-left-svg2'
            className='product-left-svg2'
          />
        </div>
      ) : (
        <div className='grid-2 product'>
          <div className='left-column'>
            <div className='product-image'>
              <img src={product.image} alt='product-image' />              
            </div>
          </div>
          <div className='right-column'>
            <div className='product-info rev-info'>
              <h2>{product.name}</h2>
              <p>{product.info}</p>
              <div className="btnBox">
                      <Link to={product.link}>
                        <button>View Product</button>
                      </Link>
                      <Link to="/checkout"><button className="btn2">Add To Cart</button></Link>
                      
                </div>
            </div>
          </div>
          <img
            src={rightSvg1}
            alt='product-right-svg1'
            className='product-right-svg1'
          />
          <img
            src={rightSvg2}
            alt='product-right-svg2'
            className='product-right-svg2'
          />
        </div>
      )}
    </>
  );
};

export default FeaturedProduct;
