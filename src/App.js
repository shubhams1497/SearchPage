import React from 'react';
import './App.css';
import ProductDisplay from './ProductDisplay';
import ProductFilters from './ProductFilters'

class App extends React.Component {
  render(){
    return (
      <div className="app-container">
        <ProductFilters/>
        <ProductDisplay/>
      </div>
    );
  }
}

export default App;