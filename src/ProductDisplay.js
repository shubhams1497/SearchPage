import React from 'react';
import ProductCard from './ProductCard'
import {connect} from 'react-redux';
import './ProductDisplay.css'
import ProductSort from './ProductSort';



function sortProductList(list, sortType){
    let nwList = [...list];
    if(sortType === "Ascending")
    {
        nwList.sort((P1,P2) => (P1.price.final_price-P2.price.final_price));
    }
    else if(sortType === "Descending")
    {
        nwList.sort((P1,P2) => (P2.price.final_price-P1.price.final_price));
    }

    return nwList;

}

class ProductDisplay extends React.Component{

    render(){
        const sortedProductList = sortProductList(this.props.allProducts,this.props.sortType);
        const productsList = sortedProductList.map( (product) => <ProductCard key={product.id} productInfo={product}/> );
        
        return(
            <div>
                <h3 className={"number-of-results"}>Showing {productsList.length} results for "shoes"</h3>
                <ProductSort/>
                <div className="product-container">
                    {productsList}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {allProducts: state.allProducts, sortType: state.sortType}
}

export default connect(mapStateToProps)(ProductDisplay);