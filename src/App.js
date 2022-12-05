import React from "react";
import "../src/styles/styles.scss";
import ItemListContainer from "./components/ItemList/ItemListContainer";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { CartContextProvider } from "./context/cartContext";
import { WishListContextProvider } from "./context/wishListContext";
import CartSide from "./components/Cart/CartSide";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Toastify from "./components/Toastify/Toastify";
import Thankyou from "./components/Thankyou/Thankyou";

function App() {
  return (
    <CartContextProvider>
      <Router>
        <Header />
        <NavBar />
        <WishListContextProvider>
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route
              path="category/:category"
              element={<ItemListContainer />}
            ></Route>
            <Route path="/detail/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/thankyou/:idOrder" element={<Thankyou />}></Route>
          </Routes>
        </WishListContextProvider>
        <Toastify />
        <Footer></Footer>
        <CartSide></CartSide>
      </Router>
    </CartContextProvider>
  );
}

export default App;
