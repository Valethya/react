import React, { StrictMode } from "react";
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
import Thankyou from "./components/Thankyou/Thankyou";

function App() {
  return (
    <CartContextProvider>
      <WishListContextProvider>
        <Router>
          <Header />
          <NavBar />
          <StrictMode>
            <WishListContextProvider>
              <Routes>
                <Route path="/React" element={<ItemListContainer />}></Route>
                <Route
                  path="category/:category"
                  element={<ItemListContainer />}
                ></Route>
                <Route
                  path="/detail/:id"
                  element={<ItemDetailContainer />}
                ></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/thankyou/:idOrder" element={<Thankyou />}></Route>
              </Routes>
            </WishListContextProvider>
            <CartSide></CartSide>
          </StrictMode>
          <Footer></Footer>
        </Router>
      </WishListContextProvider>
    </CartContextProvider>
  );
}

export default App;
