import React from 'react';
import './App.css';
import ProductDisplay from './ProductDisplay';
import ProductFilters from './ProductFilters'
import CartDisplay from './CartDisplay'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      blurVisible: false
    };
    this.toggleBlurVisibility = this.toggleBlurVisibility.bind(this);
  }

  toggleBlurVisibility(){
    this.setState({blurVisible: !this.state.blurVisible});
  }

  render(){
    return (
      <div className="app-container">
        <ProductFilters/>
        <ProductDisplay/>
        <CartDisplay toggleBlurVisibility={this.toggleBlurVisibility}/>
        <div style={{visibility:(this.state.blurVisible)?"visible":"hidden"}}className="blur-background">
        </div>
      </div>
    );
  }
}

export default App;