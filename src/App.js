import React, {useState} from 'react';
import './styles/vendor.min.css';
import './styles/app.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import $ from 'jquery';
import bootstrap from 'bootstrap';
import Catalog from './components/productCatalog/catalog';
import Product from './components/productDetails/product';
import Header from './components/common/header';
import Footer from './components/common/footer';
import AddProduct from './components/admin/addProduct';

function App() {

    let [themeVal, setThemeVal] = useState('default--theme');
    //Ask permission for Push Notification
    Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
    });

    const changeTheme = (e)=>{
        console.log("In change theme click", e.target);
        let themeClass = e.target.getAttribute("class");
        setThemeVal(themeClass);
        debugger;
    }

    return (
        <div className={themeVal}>
            <BrowserRouter>
                <Header changeTheme={changeTheme}/>     
                <Switch>   
                    <Route exact path="/">
                        <Catalog />
                    </Route>
                    <Route path="/Product/:productId">
                        <Product />
                    </Route>
                    <Route path="/addProduct">
                        <AddProduct />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export function sum(a,b){
    return a+b;
}

export default App;