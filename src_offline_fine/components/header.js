import React from 'react';

function Header(){
    return(        
    <div className="header">
    <div className="header__top">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="header__left">
                        <a href="tel:012 44 5698 7456 896">Call us: 012 44 5698 7456 896</a> 
                    </div>
                    <div className="header__right">
                        <a href="#">Login/Register</a>
                        <a href="#">My account</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="header__bottom">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="header__logo">
                        <a href="#"><img src={require("../images/logo.png")} alt="logo"/></a>
                    </div>
                    <div className="header__navsection">
                        <a className="menuclick" data-toggle="collapse" href="#menuexpand"><span className="far fa-bars"></span></a>
                        <div className="header__menu collapse" id="menuexpand">
                            <a className="active" href="#">Home</a>
                            <a href="#">Shop</a>
                            <a href="#">Blog</a>
                            <a href="#">Pages</a>
                            <a href="#">Contact</a>
                        </div>
                        <div className="header__icons">
                            <a href="#">
                            <span className="fas fa-search"></span>
                            </a>
                            <a href="#">
                            <span className="fas fa-user"></span>
                            </a>
                            <a href="#">
                            <span className="far fa-heart"></span>
                            </a>
                            <a href="#">
                            <span className="far fa-shopping-cart"></span>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</div>
</div>
       
    );
}

export default Header;