import React from "react";
import { Favorite } from "@material-ui/icons";
import { useState } from "react";
import products from "../../data/data";

function Wish({ id, fav }) {
  //crear la logic para cuando ya este en wishlist no puedo ejecutar el handClick
  let [text, setText] = useState("Agregar a mi wishlist");
  let [colorBtn, setcolorBtn] = useState("#000");

  function handleClick() {
    setText("En mi wishlist");
    setcolorBtn(" #f76bba");
  }

  return (
    <div className="addWish" onClick={handleClick}>
      <p>{text}</p>
      <Favorite htmlColor={colorBtn}></Favorite>
    </div>
  );
}

export default Wish;
