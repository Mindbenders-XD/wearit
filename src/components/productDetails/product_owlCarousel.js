import React, { Component, useEffect } from "react";
import ProdcutBanner from "./productBanner";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import $ from 'jquery';

var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 3; //globaly define number of elements per page
  var syncedSecondary = true;

const Product = () => {
  const { productId } = useParams();
  const allProducts = useSelector(state => state.products);
  const dispatch = useDispatch();

  let currentProduct = allProducts[productId];

  useEffect(()=>{
    sync1.owlCarousel({
      items : 1,
      slideSpeed : 2000,
      nav: false,
      autoplay: false,
      dots: false,
      loop: true,
      responsiveRefreshRate : 200
    }).on('changed.owl.carousel', syncPosition);
  
    sync2
      .on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
      items : slidesPerPage,
      dots: false,
      nav: false,
      margin:10,
      smartSpeed: 200,
      slideSpeed : 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate : 100
    }).on('changed.owl.carousel', syncPosition2);
  });

  return (
    <div>
      <ProdcutBanner />
      <section className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div id="sync1" className="owl-carousel owl-theme">
              <div className="item">
                <img
                  src={require(`../../images/${currentProduct.image}`)}
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src={require(`../../images/${currentProduct.image}`)}
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src={require(`../../images/${currentProduct.image}`)}
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src={require(`../../images/${currentProduct.image}`)}
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src={require(`../../images/${currentProduct.image}`)}
                  alt=""
                />
              </div>
            </div>

            <div id="sync2" className="owl-carousel owl-theme">
              <div className="item">
                <img
                  src={require(`../../images/${currentProduct.image}`)}
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src={require(`../../images/${currentProduct.image}`)}
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src={require(`../../images/${currentProduct.image}`)}
                  alt=""
                />
              </div>
              <div className="item">
                <img
                  src={require(`../../images/${currentProduct.image}`)}
                  alt=""
                />
              </div>
              <div className="item">
                <img
                 src={require(`../../images/${currentProduct.image}`)}
                  alt=""
                />
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
      </section>
    </div>
  );
};

export default Product;

function syncPosition(el) {
  //if you set loop to false, you have to restore this next line
  //var current = el.item.index;
  
  //if you disable loop you have to comment this block
  var count = el.item.count-1;
  var current = Math.round(el.item.index - (el.item.count/2) - .5);
  
  if(current < 0) {
    current = count;
  }
  if(current > count) {
    current = 0;
  }
  
  //end block

  sync2
    .find(".owl-item")
    .removeClass("current")
    .eq(current)
    .addClass("current");
  var onscreen = sync2.find('.owl-item.active').length - 1;
  var start = sync2.find('.owl-item.active').first().index();
  var end = sync2.find('.owl-item.active').last().index();
  
  if (current > end) {
    sync2.data('owl.carousel').to(current, 100, true);
  }
  if (current < start) {
    sync2.data('owl.carousel').to(current - onscreen, 100, true);
  }
}

function syncPosition2(el) {
  if(syncedSecondary) {
    var number = el.item.index;
    sync1.data('owl.carousel').to(number, 100, true);
  }
}

sync2.on("click", ".owl-item", function(e){
  e.preventDefault();
  var number = $(this).index();
  sync1.data('owl.carousel').to(number, 300, true);
});
