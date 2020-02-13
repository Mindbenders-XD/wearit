import React from 'react';
import './styles/vendor.min.css';
import './styles/App.scss';
import {BrowserRouter, Router, Route, Switch, Link} from 'react-router-dom';
import $ from 'jquery';
import bootstrap from 'bootstrap';
import Catalog from './components/productCatalog/catalog';
import Product from './components/productDetails/product';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Newsletter from './components/common/newsletter';
import AddProduct from './components/admin/addProduct';

function App() {

    //Ask permission for Push Notification
    Notification.requestPermission(function(status) {
        console.log('Notification permission status:', status);
    });
    return (
        <div className="light--theme">
            <BrowserRouter>
                <Header />     
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
                <Newsletter />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export function sum(a,b){
    return a+b;
}

export default App;