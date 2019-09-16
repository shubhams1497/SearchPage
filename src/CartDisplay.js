import React from 'react';
import './CartDisplay.css'
import ProductCard from './ProductCard';
import {connect} from 'react-redux';


class CartDisplay extends React.Component{

    constructor(props){
        super(props);
        this.state={
            cartVisible: false,
        };
        this.toggleCartVisibility = this.toggleCartVisibility.bind(this);
    }

    toggleCartVisibility(){
        this.setState({cartVisible: !this.state.cartVisible});
        this.props.toggleBlurVisibility();
    }

    render(){
        const cartItems = this.props.allProducts.filter((product) => (product.counter>0));
        const cartItemsList = cartItems.map((product) => <ProductCard key={product.id} productInfo={product}/>)
        const cartStyle = (this.state.cartVisible)?
                        {transform: "scale(1)"}:
                        {transform: "scale(0)"}
        return(
            <div className="cart-wrapper">
                <div onClick={()=> this.toggleCartVisibility()} className="cart-icon-wrapper">
                    <img height="50px" src={(!this.state.cartVisible)?require('./cart.svg'):require('./cross.svg')} alt={"cart-icon"}/>
                    <span style={{visibility:(!this.state.cartVisible)?"visible":"hidden"}}className="cart-item-number">{cartItems.length}</span>
                </div>
                <div style={cartStyle} className="cart-container">
                    <h4>Cart Items</h4>
                    <div className="cart-products-list">
                        {(cartItemsList.length>0)?cartItemsList:"Empty Cart!!"}
                    </div>
                    <div className="total-amount">
                        Total Amount;
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {allProducts: state.allProducts};
}

export default connect(mapStateToProps)(CartDisplay);



