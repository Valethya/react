import React, { useEffect } from "react";
import { Favorite } from "@material-ui/icons";
import { useState, useContext } from "react";
import { wishListContext } from "../../context/wishListContext";

function Wish({ product }) {
  //crear la logic para cuando ya este en wishlist no puedo ejecutar el handClick
  let [text, setText] = useState("Agregar a mi wishlist");
  let [colorBtn, setcolorBtn] = useState("#000");

  const { addWishList } = useContext(wishListContext);

  function handleClick() {
    setText("En mi wishlist");
    setcolorBtn(" #f76bba");
    addWishList(product);
  }

  return (
    <div className="addWish" onClick={handleClick}>
      <p>{text}</p>
      <Favorite htmlColor={colorBtn}></Favorite>
    </div>
  );
}

export default Wish;
