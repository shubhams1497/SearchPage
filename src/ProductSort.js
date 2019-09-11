import React from 'react';
import {connect} from 'react-redux';
import './ProductSort.css'

class ProductSort extends React.Component{

    render(){
        return(
            <div className="sort-container">
                <span>Sort By</span>
                <button className={(this.props.sortType==="Relevance")?"active":null} 
                onClick={()=>this.props.applySort("Relevance")}>Relevance</button>  
                <button className={(this.props.sortType==="Ascending")?"active":null} 
                onClick={()=>this.props.applySort("Ascending")}>Price-Low to High</button>  
                <button className={(this.props.sortType==="Descending")?"active":null} 
                onClick={()=>this.props.applySort("Descending")}>Price-High to low</button>  
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {sortType: state.sortType};
}

function mapDispatchToProps(dispatch) {
    return {applySort: (sortType) => dispatch({type:"SORT",sortType:sortType})}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductSort);