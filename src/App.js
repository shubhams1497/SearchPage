import React from 'react';
import './App.css';
import ProductDisplay from './ProductDisplay';
import ProductFilters from './ProductFilters'
import CartDisplay from './CartDisplay'

class App extends React.Component {
  render(){
    return (
      <div className="app-container">
        <ProductFilters/>
        <ProductDisplay/>
        <CartDisplay/>
      </div>
    );
  }
}

export default App;