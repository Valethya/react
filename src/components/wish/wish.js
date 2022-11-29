import React, { useEffect } from "react";
import { Favorite } from "@material-ui/icons";
import { useState, useContext } from "react";
import { wishListContext } from "../../context/wishListContext";

function Wish({ product }) {
  //crear la logic para cuando ya este en wishlist no puedo ejecutar el handClick

  const { addWishList, wishList } = useContext(wishListContext);

  let item = wishList.some((item) => item.id == product.id);

  let wish = item ? "en mi wishlist" : "agregar a mi wishlist";
  let color = item ? " #f76bba" : "#000";

  let [text, setText] = useState(wish);

  let [colorBtn, setcolorBtn] = useState(color);

  function handleClick() {
    setText("En mi wishlist");
    setcolorBtn(" #f76bba");
    addWishList(product);
  }
  debugger;
  return (
    <div className="addWish" onClick={handleClick}>
      <p>{text}</p>
      <Favorite htmlColor={colorBtn}></Favorite>
    </div>
  );
  debugger;
}

export default Wish;
