import React, {Component} from 'react';
import ProductCard from './productCard';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as productActions from '../actions/productActions';

class Catalog extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.loadProducts = this.loadProducts.bind(this);
    }

    componentDidMount(){
      this.loadProducts();
    }

    loadProducts(){
      this.props.actions.getProducts();
    }

    render(){
      console.log("this.props in catalog", this.props);
      return(
        <div className="container">
          <div className="row">
            {this.props.products.products && this.props.products.products.map((product, productInd)=>(
              <ProductCard key={productInd} details={product} />
            ))}
          </div>
        </div>
      )
    }
}

function mapStateToProps(state, ownProps) {
  console.log("Value of state", state);  
  return {
      products: state.products
  }
}

function mapDispatchToProps(dispatch){
  return{
      actions: bindActionCreators(productActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);