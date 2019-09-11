import React from 'react';
import PriceFilter from './PriceFilter'

export default class ProductFilters extends React.Component{
    render(){
        return(
            <div>
                <h3>Filters</h3>
                <PriceFilter/>
            </div>
        );
    }
}