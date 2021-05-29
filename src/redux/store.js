import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import pizzasReducer from './reducers/pizzas';
import filtersReducer from './reducers/filters';
import cartReducer from './reducers/cart';

const rootReducer = combineReducers({
    pizzas:pizzasReducer,
    filters:filtersReducer,
    cart:cartReducer
})

const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))



export default store;