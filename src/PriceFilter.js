import React from 'react';
import { connect } from 'react-redux';
import './PriceFilter.css'

function createOption(item) {
    return <option key={item.key} value={item.key}>{item.displayValue}</option>
}

class PriceFilter extends React.Component{
    render(){
        const priceFilterValues = this.props.priceFilterRange.values
        const priceOptions1 = priceFilterValues.slice(0,priceFilterValues.length-1).map( (item) => createOption(item))
        const priceOptions2 = priceFilterValues.slice(1,priceFilterValues.length).map( (item) => createOption(item))
        return(
            <div >
                <h5>PRICE</h5>
                <div className="price-filter">
                    <select onChange={(e)=>this.props.changeFilter(e.target.value,this.props.priceFilterRange.range.to)} 
                    value={this.props.priceFilterRange.range.from}>{priceOptions1}</select>
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
