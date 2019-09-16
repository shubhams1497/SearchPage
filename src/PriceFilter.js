import React from 'react';
import { connect } from 'react-redux';
import './PriceFilter.css'

function createOption(item) {
    return <option key={item.key} value={item.key}>{item.displayValue}</option>
}

function adjustFromPriceValues(priceFilterValues,priceTo){
    let idx;
    for(idx=0;idx<priceFilterValues.length;idx++) {
         if(priceFilterValues[idx].key === priceTo) {
             break;
         }
    }

    return priceFilterValues.slice(0,idx);
}

function adjustToPriceValues(priceFilterValues,priceFrom){
    let idx;
    for(idx=0;idx<priceFilterValues.length;idx++) {
         if(priceFilterValues[idx].key === priceFrom) {
             break;
         }
    }

    return priceFilterValues.slice(idx+1);
}

class PriceFilter extends React.Component{
    render(){
        
        const priceFilterValues = this.props.priceFilterRange.values
        const priceFrom = this.props.priceFilterRange.range.from;
        const priceTo = this.props.priceFilterRange.range.to;
        const priceOptions1 = adjustFromPriceValues(priceFilterValues,priceTo).map( (item) => createOption(item))
        const priceOptions2 = adjustToPriceValues(priceFilterValues,priceFrom).map( (item) => createOption(item))
        
        return(
            <div>
                <h5>PRICE</h5>
                <div className="price-filter">
                    <select onChange={(e)=>this.props.changeFilter(e.target.value,this.props.priceFilterRange.range.to)} 
                    value={this.props.priceFilterRange.range.from}>{priceOptions1}</select>
                    <h4>to</h4>
                    <select onChange={(e)=>this.props.changeFilter(this.props.priceFilterRange.range.from,e.target.value)} 
                value={this.props.priceFilterRange.range.to}>{priceOptions2}</select>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {priceFilterRange: state.priceFilterRange};
}

function mapDispatchToProps(dispatch) {
    return {changeFilter: (from,to) => (dispatch({type:"CHANGE_PRICE_FILTER",from:from,to:to}))};
}

export default connect(mapStateToProps,mapDispatchToProps)(PriceFilter);
