import React from 'react';
import './ProductCard.css'

function RatingWidget(props){
    return (
        <div className="rating-widget">
            <span>{props.rating}<img width={"15px"} height={"15px"} alt="star-icon" src={require('./star.svg')}/></span>
        </div>
    );
}


export default class ProductCard extends React.Component{

    render(){
        return(
            <div className="product-card">
                <div className="product-image">
                    <img alt={"product"} src={this.props.productInfo.image}/>
                </div>
                <p>{this.props.productInfo.title}</p>
                <RatingWidget rating={this.props.productInfo.rating}/>
                <p>
                    <span>
                        <img alt={"rupee"} height={"13px"} src={require('./rupee.png')} />
                        {this.props.productInfo.price.final_price}
                    </span>
                    {
                    (this.props.productInfo.price.mrp)?<span className="mrp-text">
                        <img alt={"rupee"} height={"13px"} src={require('./rupee.png')} />
                        {this.props.productInfo.price.mrp}</span>:""
                    }
                    {
                    (this.props.productInfo.discount)?<span className="discount-text">
                        {this.props.productInfo.discount}{"% Off"}</span>:""
                    }
                </p>
            </div>
        );
    }

}
