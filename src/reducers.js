import { combineReducers} from 'redux';

function allProducts( state=[], action) {
    switch(action.type) {
        case "LOAD_DATA":
            return action.data;
        default:
            return state;
    }
}

function sortType( state="Relevance", action) {
    switch(action.type) {
        case "SORT":
            return action.sortType;
        default:
            return state;
    }
}

// function priceFilterRange(state=[],action){
//     switch(action.type) {
//         case "LOAD_PRICE_FILTER":
//             return action.priceFilter;
//         default:
//             return state;
//     }
// }

function priceFilterRange(state={values:[],range:{from:"Min",to:"Max"}},action){
    switch(action.type) {
        case "LOAD_PRICE_FILTER":
            return {...state,values: action.priceFilter};
        case "CHANGE_PRICE_FILTER":
            return {...state,range:{from:action.from, to:action.to}};
        default:
            return state;
    }
}

function brandFilter(state={brands:[],selectedBrand:""},action) {
    switch(action.type){
        case "LOAD_BRANDS":
            return {...state,brands:action.brands};
        case "SET_BRAND":
            return {...state,selectedBrand:action.selectedBrand};
        default:
            return state;
    }
}

function toggleColor(selectedColors,color){
    let nwSet = new Set(selectedColors);
    if(nwSet.has(color)){
        nwSet.delete(color);
    }
    else{
        nwSet.add(color);
    }
    return nwSet;
}

function colorFilter(state={colors:[],selectedColors:new Set()}, action){
    switch(action.type){
        case "LOAD_COLORS":
            return {...state,colors:action.colors}
        case "TOGGLE_COLOR":
            return {...state,selectedColors:toggleColor(state.selectedColors,action.color)};
        default:
            return state;
    }
}

const FinalApp = combineReducers({allProducts,sortType,priceFilterRange,brandFilter,colorFilter});

export default FinalApp;






