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
        this.leftScrollList = this.leftScrollList.bind(this);
        this.rightScrollList = this.rightScrollList.bind(this);
    }

    toggleCartVisibility(){
        this.setState({cartVisible: !this.state.cartVisible});
        this.props.toggleBlurVisibility();
    }

    calculateTotalAmount(cartItems){
        let totalAmount = 0;
        for(var product of cartItems){
            totalAmount += product.counter*(product.price.final_price);
        }

        return totalAmount;
    }

    calculateDiscount(amount){
        if(amount < 500) {
            return 0;
        }
        else if(amount >= 500 && amount < 1000) {
            return parseInt(amount*0.05);
        }
        else if(amount >= 1000 && amount < 2000){
            return parseInt(amount*0.1);
        }

        return parseInt(Math.min(amount*0.2,500));
    }

    calculateSuggestedOffer(totalAmount){

        if(totalAmount< 500){
            return {available: true, amount: (500-totalAmount), discount: "5% off"}
        }
        if(totalAmount >= 500 && totalAmount < 1000)
        {
            return {available:true, amount:(1000-totalAmount), discount: "10% off"}
        }
        if(totalAmount >= 1000 && totalAmount < 2000)
        {
            return {available:true, amount:(2000-totalAmount), discount: "20% off upto maximum of rs 500"}
        }

        return {available:false};
    }

    leftScrollList(){
        this.refs.listRef.scrollBy(-500,0);
    }

    rightScrollList(){
        this.refs.listRef.scrollBy(500,0);
    }


    render(){
        const cartItems = this.props.allProducts.filter((product) => (product.counter>0));
        const cartItemsList = cartItems.map((product) => <ProductCard key={product.id} productInfo={product}/>)
        const cartStyle = (this.state.cartVisible)?
                        {transform: "scale(1)"}:
                        {transform: "scale(0)"}
        
        const totalAmount = this.calculateTotalAmount(cartItems);
        const discount = this.calculateDiscount(totalAmount);
        const suggestedOffer = this.calculateSuggestedOffer(totalAmount);
        let scrollButtonsVisible = false;
        if(cartItems.length>2){
            scrollButtonsVisible = true;
        }
        
        return(
            <div className="cart-wrapper">
                <div onClick={()=> this.toggleCartVisibility()} className="cart-icon-wrapper">
                    <img height="50px" src={(!this.state.cartVisible)?require('./cart.svg'):require('./cross.svg')} alt={"cart-icon"}/>
                    <span style={{visibility:(!this.state.cartVisible)?"visible":"hidden"}}className="cart-item-number">{cartItems.length}</span>
                </div>
                <div style={cartStyle} className="cart-container">
                    <h4>Cart Items</h4>
                    <div onClick={this.leftScrollList} style={{visibility:(scrollButtonsVisible)?'visible':'hidden'}} 
                        className="left-scroll-button">
                    </div>
                    <div onClick={this.rightScrollList} style={{visibility:(scrollButtonsVisible)?'visible':'hidden'}} 
                        className="right-scroll-button">
                    </div>
                    {(cartItems.length>0)?
                    <div>
                        <div className="cart-products-list-container">
                            <div ref={"listRef"} className="cart-products-list">
                                {cartItemsList}
                            </div>
                        </div>
                        <div className="bottom-cart-section">
                            <div className="amounts-display">
                                <div className="total-amount">
                                    Total Amount = <span><img height="12px" alt={"rupee"} src={require('./rupee.png')}/>{totalAmount}</span>
                                </div>
                                <div className="discount-amount">
                                    Discount = <span><img height="12px" alt={"rupee"} src={require('./rupee.png')}/>{discount}</span>
                                </div>
                                <div className="final-amount">
                                    Final Amount = <span><img height="12px" alt={"rupee"} src={require('./rupee.png')}/>{totalAmount-discount}</span>
                                </div>
                            </div>
                            <div className="offers-suggestions">
                                {(suggestedOffer.available)?
                                `Add rs ${suggestedOffer.amount} items to get ${suggestedOffer.discount}`:
                                "Congrats!! You availed maximum discount."
                                }
                            </div>
                        </div> 
                    </div>:
                    <div className="empty-cart-message">
                        <p>Please Add Some Item To Cart</p>
                        <img height="150px" alt="cart-icon" src={require('./bag.svg')}/>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {allProducts: state.allProducts};
}

export default connect(mapStateToProps)(CartDisplay);



