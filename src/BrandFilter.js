import React from 'react';
import { connect } from 'react-redux';
import './BrandFilter.css'

class BrandList extends React.Component{

    handleClick(brand){
        //this.props.onChange(brand.value)
        this.props.changeStateOfInput(brand.title);
        this.props.setListVisibility(false);
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
            <ul style={{visibility:(this.props.listVisible && renderBrandList.length!==0)?'visible':'hidden'}} className="brand-suggested-list">
                {renderBrandList}
            </ul>
        );
    }
}

class BrandFilter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            brandInputValue: "",
            listVisible: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.changeStateOfInput = this.changeStateOfInput.bind(this);
        this.setListVisibility = this.setListVisibility.bind(this);
    }

    handleChange(e){
        this.changeStateOfInput(e.target.value);
        this.setListVisibility(true);
    }

    setListVisibility(visible){
        this.setState({listVisible:visible});
    }

    changeStateOfInput(value){
        this.setState({brandInputValue:value});
        this.props.onChange(value);
    }

    render(){
        return(
            <div>
                <h5>BRANDS</h5>
                <input onChange={this.handleChange} value={this.state.brandInputValue} placeholder="Search Brand"/>
                <BrandList listVisible={this.state.listVisible} setListVisibility={this.setListVisibility} inputValue={this.state.brandInputValue} brandFilter={this.props.brandFilter} 
                changeStateOfInput={this.changeStateOfInput} onChange={this.props.onChange}/>
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