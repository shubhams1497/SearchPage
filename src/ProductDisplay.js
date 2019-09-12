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

function priceInRange(price,from,to){
    if(from === "Min")
    {
        from = Number.MIN_SAFE_INTEGER;
    }

    if(to === "Max")
    {
        to = Number.MAX_SAFE_INTEGER;
    }

    to = parseFloat(to);
    from = parseFloat(from);

    return (price>=from && price<=to);
}


class ProductDisplay extends React.Component{

    render(){
        const sortedProductList = sortProductList(this.props.allProducts,this.props.sortType);
        const filter={price:{from:this.props.priceRange.from,to:this.props.priceRange.to}, selectedBrand: this.props.selectedBrand };
        function performFilters(product){
            // console.log("filters",filter);
            if(priceInRange(product.price.final_price,filter.price.from,filter.price.to) && ((!filter.selectedBrand)||(product.brand === filter.selectedBrand)) ){
                return true;
            }
            return false;
        }
        const filteredList = sortedProductList.filter(performFilters);
        const productsList = filteredList.map( (product) => <ProductCard key={product.id} productInfo={product}/> );
        
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
    return {allProducts: state.allProducts, sortType: state.sortType, 
        priceRange: state.priceFilterRange.range, selectedBrand:state.brandFilter.selectedBrand}
}

export default connect(mapStateToProps)(ProductDisplay);