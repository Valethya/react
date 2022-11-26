import React, { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { Close } from "@material-ui/icons";
import ItemCartSide from "./ItemCartSide";

function CartSide() {
  const { cart, display, setDisplay } = useContext(cartContext);

  function hiddenCartSide() {
    console.log("hace click");
    setDisplay("none");
  }

  if (cart.length > 0) {
    return (
      <div className="CartSide" style={{ display: display }}>
        <Close onClick={hiddenCartSide}></Close>
        <ul className="listItemCartSide">
          {cart.map((item) => {
            return <ItemCartSide item={item} cart={cart} />;
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="CartSide" style={{ display: display }}>
        <Close onClick={hiddenCartSide}></Close>
        <p> esperando a que pase algo</p>
      </div>
    );
  }
}
export default CartSide;
