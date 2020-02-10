import React from 'react';
import './styles/vendor.min.css';
import './styles/app.scss';
import {BrowserRouter, Router, Route, Switch, Link} from 'react-router-dom';
import $ from 'jquery';
import bootstrap from 'bootstrap';
import Catalog from './components/catalog';
import Product from './components/product';
import Header from './components/header';
import Footer from './components/footer';

function App() {
    return (
        <> 
        <BrowserRouter>
        <div>
        <Header />        
            <Route path="/" exact component={Catalog} />
            <Route path="/Product/:productID" component={Product} />
        <Footer />
        </div>
    </BrowserRouter>
    </>
    );
}

export function sum(a,b){
    return a+b;
}

export default App;