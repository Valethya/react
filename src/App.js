import React from "react";
import "../src/styles/styles.scss";
import ItemListContainer from "./components/ItemList/ItemListContainer";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { CartContextProvider } from "./context/cartContext";
import { WishListContextProvider } from "./context/wishListContext";
import CartSide from "./components/NavBar/CartSide";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Header />
        <NavBar />
        <WishListContextProvider>
          <Routes>
            <Route path="react" element={<ItemListContainer />}></Route>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route
              path="category/:category"
              element={<ItemListContainer />}
            ></Route>
            <Route path="/detail/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </WishListContextProvider>
        <CartSide></CartSide>
      </Router>
    </CartContextProvider>
  );
}

export default App;
