import React from 'react';
import PriceFilter from './PriceFilter'
import BrandFilter from './BrandFilter'
import ColorFilter from './ColorFilter'
import './ProductFilters.css'

export default class ProductFilters extends React.Component{
    render(){
        return(
            <div className="product-filters-container">
                <h3>Filters</h3>
                <PriceFilter/>
                <BrandFilter/>
                <ColorFilter/>
            </div>
        );
    }
}