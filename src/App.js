import React, {useState} from 'react';
import './styles/vendor.min.css';
import './styles/app.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Catalog from './components/productCatalog/catalog';
import Product from './components/productDetails/product';
import Header from './components/common/header';
import Footer from './components/common/footer';
import AddProduct from './components/admin/addProduct';
import UserProfile from './components/user/userProfile';

function App() {

    let [themeVal, setThemeVal] = useState('default--theme');    

    const changeTheme = (e)=>{
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
                    <Route path="/user">
                        <UserProfile />
                    </Route>
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
