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

const FinalApp = combineReducers({allProducts,sortType,priceFilterRange});

export default FinalApp;






