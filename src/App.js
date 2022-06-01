import React from "react";
import { useSelector } from "react-redux";

import { Route, Routes, Link, useNavigate } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">
            amazona
          </Link>
        </div>
        <div>
          <Link to="/cart">
          Cart
          {cartItems.length > 0 && (
            <span className="badge">{cartItems.length}</span>
          )}
          
          </Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </header>

      <main>
        <Routes>
         
          <Route path="/login" element={<LoginScreen/>}></Route>
          <Route path="/cart" element={<CartScreen />}></Route>
          <Route path="/cart/:id" element={<CartScreen />}></Route>
          <Route path="/product/:id" element={<ProductScreen />}></Route>
          <Route path="/" element={<HomeScreen />} exact></Route>
        </Routes>
      </main>

      <footer className="row center">All right reserved</footer>
    </div>
  );
}

export default App;
