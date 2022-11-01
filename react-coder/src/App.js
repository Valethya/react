import React from "react";
import "../src/styles/styles.scss";
import ItemListContainer from "./components/ItemList/ItemListContainer";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <NavBar></NavBar>
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
