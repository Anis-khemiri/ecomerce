import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";
import { userLoginReducer } from "./reducers/userReducers";

import { productDetailsReducer, productListReducer } from "./reducers/productReducers";


const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems') ? 
    JSON.parse(localStorage.getItem('cartItems')):
    [],
  },
  userLogin: {
    userInfo: localStorage.getItem('userInfo') ? 
    JSON.parse(localStorage.getItem('userInfo')):
    [],
  },
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
