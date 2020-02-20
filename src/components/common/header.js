import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import ImagePreview from '../user/ImagePreview';

function Header(props){
    const user = useSelector(state => state.user);
    let isUserSaved = Object.keys(user).length ? true : false;
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
                            {!isUserSaved && <a href="#/">Login/Register</a>}
                            {isUserSaved && <a href="#/">{user.name}</a>}                        
                            <Link to="/user">{isUserSaved && <ImagePreview dataUri={user.photo} inHeader={'user-img'} />}My account</Link>
                            <Link to="/addProduct">Admin</Link>
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
                                <Link className="d-block d-sm-none" to="/addProduct">Admin</Link>
                                <Link className="d-block d-sm-none" to="/user">{isUserSaved && <ImagePreview dataUri={user.photo} inHeader={'user-img'} />}My Account</Link>
                            </div>
                            <div className="header__icons">
                                <a href="#/" alt="Search" title="Search">
                                <span className="fas fa-search"></span>
                                <span className="d-none d-print-block">Search</span>
                                </a>
                                <a href="#/" alt="user" title="User Profile">
                                    <span className="fas fa-user"></span>
                                    <span className="d-none d-print-block">User</span>
                                </a>
                                <a href="#/" alt="Favourites" title="Favourites">
                                    <span className="far fa-heart"></span>
                                    <span className="d-none d-print-block">Favourites</span>
                                </a>
                                <a href="#/" alt="cart" title="Cart">
                                    <span className="far fa-shopping-cart"></span>
                                    <span className="d-none d-print-block">Cart</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="theme-selection">
                <a className="theme-selection__icon" data-toggle="collapse" href="#theme-settings"><span className="fas fa-cog"></span></a>
                <div className="theme-selection__collapse collapse" id="theme-settings" onClick={props.changeTheme}>
                    <a href="#/" className="dark--theme" title="Black Theme"><span className="d-none d-print-block">Black</span></a>
                    <a href="#/" className="light--theme" title="Grey Theme"><span className="d-none d-print-block">Grey</span></a>
                    <a href="#/" className="default--theme" title="White Theme"><span className="d-none d-print-block">White</span></a>
                </div>
            </div>
        </div>
    </div>       
    );
}

export default Header;
