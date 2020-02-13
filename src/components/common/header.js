import React from 'react';
import {Link} from 'react-router-dom';

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
                        <a href="#/">Login/Register</a>
                        <a href="#/">My account</a>
                        <a href="#/">Contact Us</a>
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
                        <Link to="/"><img src={require("../../images/logo.png")} alt="logo"/></Link>
                    </div>
                    <div className="header__navsection">
                        <a className="menuclick" data-toggle="collapse" href="#menuexpand"><span className="far fa-bars"></span></a>
                        <div className="header__menu collapse" id="menuexpand">
                            <Link className="active" to="/">Home</Link>
                            <a href="#/">Shop</a>
                            <a href="#/">Blog</a>
                            <a href="#/">Pages</a>
                            <a href="#/">Contact</a>
                        </div>
                        <div className="header__icons">
                            <a href="#/">
                            <span className="fas fa-search"></span>
                            </a>
                            <a href="#/">
                            <span className="fas fa-user"></span>
                            </a>
                            <a href="#/">
                            <span className="far fa-heart"></span>
                            </a>
                            <a href="#/">
                            <span className="far fa-shopping-cart"></span>
                            </a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
        <div className="theme-selection">
            <a className="theme-selection__icon" data-toggle="collapse" href="#theme-settings"><span class="fas fa-cog"></span></a>
            <div className="theme-selection__collapse collapse" id="theme-settings">
                <a href="#/" className="default-theme" title="White Theme"><span className="d-none d-print-block">White</span></a>
                <a href="#/" class="light-theme" title="Grey Theme"><span className="d-none d-print-block">Grey</span></a>
                <a href="#/" class="dark-theme" title="Black Theme"><span className="d-none d-print-block">Black</span></a>
            </div>
        </div>
</div>
</div>
       
    );
}

export default Header;