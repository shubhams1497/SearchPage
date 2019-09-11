import React from 'react';
import './App.css';
import ProductCard from './ProductCard'
import {connect} from 'react-redux';

class App extends React.Component {
  render(){

    const productsList = this.props.allProducts.map( (product) => <ProductCard key={product.id} productInfo={product}/> );
    
    return (
      <div className="product-container">
        {productsList}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {allProducts: state}
}

export default connect(mapStateToProps)(App);
