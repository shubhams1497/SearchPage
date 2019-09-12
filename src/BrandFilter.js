import React from 'react';
import { connect } from 'react-redux';
import './BrandFilter.css'

class BrandList extends React.Component{

    handleClick(brand){
        this.props.onChange(brand.value)
        document.getElementById('brandInput').value = brand.title;

        // console.log(brand.title);
    }
//<li key={brand.title} onClick={()=>(this.props.onChange(brand.value))}>{brand.title}</li> 
    render(){
        const suggestedBrandList = this.props.brandFilter.brands.filter( (brand) => (this.props.brandFilter.selectedBrand)&&(brand.value.includes(this.props.brandFilter.selectedBrand.toLowerCase())) )
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
    render(){
        return(
            <div>
                <h5>BRANDS</h5>
                <input id={"brandInput"} onChange={(e) => this.props.onChange(e.target.value)} placeholder="Search Brand"/>
                <BrandList brandFilter={this.props.brandFilter} onChange={this.props.onChange}/>
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