import React from 'react';
import './ProductCard.css'
import { connect } from 'react-redux';

function RatingWidget(props){
    return (
        <div className="rating-widget">
            <span>{props.rating.toFixed(1)}</span>
            <img width={"15px"} height={"15px"} alt="star-icon" src={require('./star3.png')}/>
        </div>
    );
}

class AddBasketButton extends React.Component{

    render(){

        return(
            <div className="add-basket-button">
                { (this.props.productCounter === 0)?
                <button onClick={() => this.props.incrementCount(this.props.productId)}>ADD</button>:
                <div className="change-quantity-buttons">
                    <button onClick={() => this.props.decrementCount(this.props.productId)}>-</button>
                    {this.props.productCounter}
                    <button onClick={() => this.props.incrementCount(this.props.productId)}>+</button>
                </div>
                }
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        incrementCount: (productId) => dispatch({type:"INC_COUNTER",productId: productId}),
        decrementCount: (productId) => dispatch({type:"DEC_COUNTER",productId: productId})
    }
}

let AddBasketButtonWrapper = connect(null,mapDispatchToProps)(AddBasketButton);


export default  class ProductCard extends React.Component{

    trimText(text){
        if(text.length < 26){
            return text;
        }

        return (`${text.slice(0,26)}...`);
    }

    render(){
        return(
            <div className="product-card">
                <div className="product-image">
                    <img alt={"product"} src={this.props.productInfo.image}/>
                </div>
                <p className="product-title">{this.trimText(this.props.productInfo.title)}</p>
                <RatingWidget rating={this.props.productInfo.rating}/>
                <p>
                    <span>
                        <img alt={"rupee"} height={"13px"} src={require('./rupee.png')} />
                        {this.props.productInfo.price.final_price+" "}
                    </span>
                    {
                    (this.props.productInfo.price.mrp)?<span className="mrp-text">
                        <img alt={"rupee"} height={"13px"} src={require('./rupee.png')} />
                        {this.props.productInfo.price.mrp}</span>:""
                    }
                    {
                    (this.props.productInfo.discount)?<span className="discount-text">
                        {this.props.productInfo.discount}{"%Off"}</span>:""
                    }
                </p>
                <AddBasketButtonWrapper productCounter={this.props.productInfo.counter} productId={this.props.productInfo.id}/>
            </div>
        );
    }
}

