import React from 'react';
import PriceFilter from './PriceFilter'
import BrandFilter from './BrandFilter'
import ColorFilter from './ColorFilter'
import './ProductFilters.css'
import {fetchingFiltersData} from './index.js'
import {FilterLoadingIndicator} from './LoadingIndicator.js'

export default class ProductFilters extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
        };
    }

    componentDidMount(){
        fetchingFiltersData()
        .then(()=> this.setState({isLoaded: true}));
    }

    render(){
        return(
            <div className="product-filters-container">
                { (this.state.isLoaded)?
                <>
                    <h3>Filters</h3>
                    <PriceFilter/>
                    <BrandFilter/>
                    <ColorFilter/>
                </>:
                    <FilterLoadingIndicator/>
                }
            </div>
        );
    }
}