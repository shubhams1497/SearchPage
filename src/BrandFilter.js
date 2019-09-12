import React from 'react';
import { connect } from 'react-redux';
import './BrandFilter.css'

class BrandList extends React.Component{

    handleClick(brand){
        this.props.onChange(brand.value)
        this.props.changeStateOfInput(brand.title);

        // console.log(brand.title);
    }
//<li key={brand.title} onClick={()=>(this.props.onChange(brand.value))}>{brand.title}</li> 
    render(){
        const suggestedBrandList = this.props.brandFilter.brands.filter( (brand) => (this.props.inputValue)&&(brand.title.toLowerCase().includes(this.props.inputValue.toLowerCase())) )
        const renderBrandList = suggestedBrandList.map(
                (brand) => 
                    <li key={brand.title} onClick={()=>(this.handleClick(brand))}>{brand.title}</li> 
            );
        return(
            <ul style={{visibility:(renderBrandList.length===0)?'hidden':'visible'}} className="brand-suggested-list">
                {renderBrandList}
            </ul>
        );
    }
}

class BrandFilter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brandInputValue : ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.changeStateOfInput = this.changeStateOfInput.bind(this);
    }

    handleChange(e){
        this.changeStateOfInput(e.target.value);
    }

    changeStateOfInput(value){
        this.setState({brandInputValue:value});
        if(!value){
            this.props.onChange("");
        }
    }

    render(){
        return(
            <div>
                <h5>BRANDS</h5>
                <input onChange={this.handleChange} value={this.state.brandInputValue} placeholder="Search Brand"/>
                <BrandList inputValue={this.state.brandInputValue} brandFilter={this.props.brandFilter} 
                changeStateOfInput={this.changeStateOfInput} onChange={this.props.onChange}/>
                <h5>HELLO</h5>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {brandFilter:state.brandFilter};
}

function mapDispatchToProps(dispatch){
    return {onChange: (selectedBrand)=> dispatch({type:"SET_BRAND",selectedBrand:selectedBrand})}
}

export default connect(mapStateToProps,mapDispatchToProps)(BrandFilter);