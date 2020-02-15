import React, {Component} from 'react';
import ProductCard from './productCard';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Newsletter from '../common/newsletter';
import * as productActions from '../../actions/productActions';
import Banner from './banner';

class Catalog extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.loadProducts = this.loadProducts.bind(this);
        this.displayProducts = this.displayProducts.bind(this);
    }

    componentDidMount(){
      if(!Object.keys(this.props.products).length)
      this.loadProducts();
      window.scrollTo(0, 0)
    }

    loadProducts(){
      // this.props.actions.getProducts();
      this.props.actions.loadProducts();
      // this.props.loadProducts();
    }

    displayProducts(){
      let prodArrs =[];
      let products = this.props.products;
      let productKeys = Object.keys(products);
      prodArrs = productKeys.map((prod, ind)=>{
        let prodDetails = products[prod];
        return (<ProductCard key={prod} details={prodDetails} favUpdateCall={this.props.actions.markFavourite}/>)
      });
      return prodArrs;
    }

    render(){
      console.log("this.props in catalog", this.props);
      return(
        <>
        <Banner />
        <div className="container">
          <div className="row">
            {this.displayProducts()}
          </div>
        </div>        
        <Newsletter />
        </>
      )
    }
}

function mapStateToProps(state, ownProps) {
  console.log("Value of state in catalog", state);  
  return {
      products: state.products
  }
}

function mapDispatchToProps(dispatch){
  return{
    // loadProducts: ()=> dispatch(productActions.loadProducts)
      actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);