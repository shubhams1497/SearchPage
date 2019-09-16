import React from 'react';
import './CartDisplay.css'
import ProductCard from './ProductCard';
import {connect} from 'react-redux';


class CartDisplay extends React.Component{
    render(){
        const cartItems = this.props.allProducts.filter((product) => (product.counter>0));
        const cartItemsList = cartItems.map((product) => <ProductCard key={product.id} productInfo={product}/>)
        return(
            <div className="cart-container">
                <h4>Cart Items</h4>
                <div className="cart-products-list">
                    {(cartItemsList.length>0)?cartItemsList:"Empty Cart!!"}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {allProducts: state.allProducts};
}

export default connect(mapStateToProps)(CartDisplay);



