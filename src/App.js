import React from "react";
import "../src/styles/styles.scss";
import ItemListContainer from "./components/ItemList/ItemListContainer";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="react" element={<ItemListContainer />}></Route>
        <Route
          path="category/:category"
          element={<ItemListContainer />}
        ></Route>
        <Route path="/detail/:id" element={<ItemDetailContainer />}></Route>
      </Routes>
      {/* <div className="App">
        <Header />
        <NavBar></NavBar>
        <ItemListContainer />
        <ItemDetail />
      </div> */}
    </Router>
  );
}

export default App;
