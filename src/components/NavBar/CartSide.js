import React, { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { Close, RemoveShoppingCart } from "@material-ui/icons";
import ItemCartSide from "./ItemCartSide";

function CartSide() {
  const { cart, display, setDisplay, priceInCart, clear } =
    useContext(cartContext);

  function hiddenCartSide() {
    console.log("hace click");
    setDisplay("none");
  }

  if (cart.length > 0) {
    return (
      <div className="CartSide" style={{ display: display }}>
        <Close style={{ padding: ".5em" }} onClick={hiddenCartSide}></Close>

        <ul className="listItemCartSide">
          {cart.map((item) => {
            return <ItemCartSide item={item} cart={cart} />;
          })}
          <li className="total">
            Total: {priceInCart()}{" "}
            <RemoveShoppingCart
              style={{ padding: ".5em" }}
              onClick={clear}
            ></RemoveShoppingCart>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="CartSide" style={{ display: display }}>
        <Close style={{ padding: ".5em" }} onClick={hiddenCartSide}></Close>
        <p> esperando a que pase algo</p>
      </div>
    );
  }
}
export default CartSide;
