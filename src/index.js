import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import addProducts from './reducers.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(addProducts);

store.subscribe(()=> Render());

Render();

fetch("https://api.myjson.com/bins/16jqpu")
.then( (response) => (response.json()))
.then( (data) => store.dispatch({type:"LOAD_DATA", data: data.products}) )



ReactDOM.render(<Provider store={store}> <App /> </Provider>,document.getElementById('root'));

function Render(){
    console.log(store.getState().length);
}