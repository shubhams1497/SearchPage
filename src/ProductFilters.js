import React from 'react';
import PriceFilter from './PriceFilter'
import BrandFilter from './BrandFilter'

export default class ProductFilters extends React.Component{
    render(){
        return(
            <div>
                <h3>Filters</h3>
                <PriceFilter/>
                <BrandFilter/>
            </div>
        );
    }
}