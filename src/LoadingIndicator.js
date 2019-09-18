import React from 'react';

function HorizontalBar(props){

    const barStyle={
        width: props.width,
        height: props.height,
        backgroundImage: "linear-gradient(to right, #ccc ,rgba(231, 231, 231, 0.32))",
        marginRight: props.marginRight,
    }

    return (
        <div style={barStyle}>
        </div>
    );
}

function RowOfBars(props){
    const rowStyle={
        display: "flex",
        margin: "20px 10px",
    }

    let listBars = [];

    for(let i=0;i<props.number;i++){
        listBars.push(<HorizontalBar key={"bar"+i} height={props.height} 
                        width={props.width} marginRight={props.marginRight}/>);
    }

    return(
        <div style={rowStyle}>
            {listBars}
        </div>
    );

}


export default class ProductLoadingIndicator extends React.Component{

    render(){
        return (
            <div>
                <RowOfBars number={1} width={"250px"} height={"20px"} marginRight={"0px"}/>
                <RowOfBars number={4} width={"80px"} height={"18px"} marginRight={"20px"}/>
                <RowOfBars number={4} width={"300px"} height={"280px"} marginRight={"20px"}/>
                <RowOfBars number={4} width={"300px"} height={"280px"} marginRight={"20px"}/>
                <RowOfBars number={4} width={"300px"} height={"280px"} marginRight={"20px"}/>
            </div>
        );
    }
}

export class FilterLoadingIndicator extends React.Component{

    render(){
        return (
            <div>
                <RowOfBars number={1} width={"100px"} height={"20px"} marginRight={"0px"}/>
                <RowOfBars number={0}/>
                <RowOfBars number={1} width={"100px"} height={"20px"} marginRight={"0px"}/>
                <RowOfBars number={2} width={"120px"} height={"20px"} marginRight={"10px"}/>
                <RowOfBars number={1} width={"100px"} height={"20px"} marginRight={"10px"}/>
                <RowOfBars number={1} width={"200px"} height={"30px"} marginRight={"10px"}/>
                <RowOfBars number={0}/>
                <RowOfBars number={1} width={"100px"} height={"20px"} marginRight={"0px"}/>
                <RowOfBars number={0}/>
                <RowOfBars number={1} width={"280px"} height={"400px"} marginRight={"0px"}/>
            </div>
        );
    }
}