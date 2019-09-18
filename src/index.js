import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FinalApp from './reducers.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(FinalApp);

console.log(store.getState());

store.subscribe(()=> DisplayStore());

function DisplayStore(){
    console.log(store.getState());
}

fetch("https://api.myjson.com/bins/16jqpu")
.then( (response) => (response.json()))
.then( (data) => store.dispatch({type:"LOAD_DATA", data: data.products.map((product) => ({...product,counter:0}) )}) )

fetch("https://api.myjson.com/bins/rnwle")
.then((response) => (response.json()))
.then(
    function(data){
        store.dispatch({type:"LOAD_PRICE_FILTER", priceFilter: data.filters[2].values});
        store.dispatch({type:"LOAD_BRANDS", brands: data.filters[0].values});
        store.dispatch({type:"LOAD_COLORS", colors: data.filters[1].values});
    }
);



// console.log("hi");
// store.dispatch({type:"REMOVE_COLOR",color:"green"});


ReactDOM.render(<Provider store={store}> <App /> </Provider>,document.getElementById('root'));

