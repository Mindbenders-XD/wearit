import React from 'react';
import $ from 'jquery';

class ProductCard extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
        this.onFavIconClick = this.onFavIconClick.bind(this);
    }

    onFavIconClick(e){
        $(e.currentTarget).toggleClass("fas");
    }

    render(){
        return(<div className="product w-20 col text-center" id={this.props.details.productId}>
        <div className="product__image">
            <div className="product__hover">
                <a className="far fa-heart" ref="fav_icon" onClick={this.onFavIconClick}></a>
                <a className="far fa-eye"></a>
            </div>
            <img className="img-fluid" src={require("../images/"+this.props.details.image)} alt="product" />
        </div>
    <h5 className="product__title text-truncate" title={this.props.details.productName}>{this.props.details.productName}</h5>
    <h5 className="product__price">{this.props.details.price}</h5>
    </div>)
    }
}

export default ProductCard