import React, { Component, useEffect } from "react";
import ProdcutBanner from "./productBanner";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import $ from 'jquery';

const Product = () => {
  const { productId } = useParams();
  const allProducts = useSelector(state => state.products);
  const dispatch = useDispatch();

  let currentProduct = Object.keys(allProducts).length ? allProducts[productId] : {};

  useEffect(()=>{
    window.scrollTo(0, 0)
  }, []);

  return (
    <div>
      <ProdcutBanner />
      {currentProduct.productId == productId && <section className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="product-details-image">
              <img
                src={require(`../../images/${currentProduct.image}`)}
                alt="productImg"
              /> 
              <div className="product-details-image--thumbnail">
                <div className="item current">
                  <img
                    src={require(`../../images/${currentProduct.image}`)}
                    alt="productImgThumb"
                  />
                </div>
                <div className="item">
                  <img
                    src={require(`../../images/${currentProduct.image}`)}
                    alt="productImgThumb"
                  />
                </div>
                <div className="item">
                  <img
                    src={require(`../../images/${currentProduct.image}`)}
                    alt="productImgThumb"
                  />
                </div>
              </div>            
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="product-details">
              <h1 className="product-details__head">
                {currentProduct.productName}
              </h1>
              <div className="product-details__price">
                {currentProduct.price}
              </div>
              <ul className="product-details__list">
                <li>
                  <span>Category</span>
                  <span>: {currentProduct.category}</span>
                </li>
                <li>
                  <span>Availability</span>
                  <span>
                    : {currentProduct.isAvailable ? `In Stock` : "Out of Stock"}
                  </span>
                </li>
              </ul>
              <p className="product-details__text">
                {currentProduct.description}
              </p>
              <div className="product-details__quantity">
                <span>Quantity :</span>
                <span className="select-box">
                  <input type="number" value="1" />
                </span>
              </div>
              <div className="product-details__cart clearfix">
                <button
                  className="btn btn--blue btn--bold btn__wide float-left"
                  type="button"
                  aria-label="Left Align"
                >
                  ADD TO CART
                </button>
                <span className="far fa-gem float-left"></span>
                <span className="far fa-heart float-left"></span>
              </div>
            </div>
          </div>
        </div>
      </section>}
    </div>
  );
};

export default Product;

