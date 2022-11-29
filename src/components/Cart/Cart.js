import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import ItemCart from "./ItemCart";

function Cart() {
  const { cart, priceInCart } = useContext(cartContext);
  console.log("vergotas", cart);
  debugger;
  return (
    <div className="cart">
      <h1>Detalle de tu compra</h1>
      <div className="cartDetail">
        {cart.map((item) => {
          return <ItemCart item={item} />;
        })}
      </div>

      <div className="detailItemPay">
        <h2>Resumen de Compra</h2>
        <p>
          <b>Total:</b> {priceInCart()}
        </p>
      </div>
    </div>
  );
}

export default Cart;
