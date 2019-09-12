import React from 'react';
import { connect } from 'react-redux';
import './ColorFilter.css'

class ColorSelect extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            checked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({checked: !this.state.checked});
        this.props.toggleColor(this.props.color.title);
    }

    render(){
        return(
            <div className={"color-selector"} onClick={this.handleClick}>
                <input onChange={()=>(null)} type="checkbox" checked={this.state.checked} value={this.props.color.title}/>
                <div className="solid-circle" style={{backgroundColor:this.props.color.color}}></div>
                <p>{this.props.color.title}</p>
            </div>
        );
    }
}

class ColorFilter extends React.Component{

    render(){
        // console.log(this.props.colors[0]);
        const colorList = this.props.colors.map((color) => 
            <ColorSelect key={color.title} toggleColor={this.props.toggleColor} color={color}/>);
        return(
            <div>
                <h5>COLOR</h5>
                {colorList}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {colors: state.colorFilter.colors}
}

function mapDispatchToProps(dispatch) {
    return { toggleColor: (color) => dispatch({type:"TOGGLE_COLOR", color: color}) }
}

export default connect(mapStateToProps,mapDispatchToProps)(ColorFilter);