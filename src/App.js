import React from 'react';
import './styles/App.scss';
import {Route, Switch, Link} from 'react-router-dom';
import Catalog from './components/catalog';
import Product from './components/product'

function App() {
    return ( 
    <div className = "App">
        <p className="App-link">React App</p>
        <div>
            <p><Link to="/">Wear It!!! (Home)</Link></p>
            <p><Link to="/Prodcut/test">Product Page</Link></p>
        </div>
        <Switch>
            <Route path="/" exact component={Catalog} />
            <Route path="/Prodcut/:productID" exact component={Product} />
        </Switch>
    </div>
    );
}

export default App;