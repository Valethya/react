import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import ItemCart from "./ItemCart";
import { createOrder } from "../../services/firestore";
import { useNavigate } from "react-router-dom";
import Form from "../Form/Form";

function Cart() {
  const { cart, priceInCart, clear } = useContext(cartContext);

  let navigate = useNavigate();

  async function handleCheckout(e, data) {
    const order = {
      buyer: data,
      items: cart,
      total: 0,
      date: new Date(),
    };
    const orderId = await createOrder(order);
    console.log("este es el if", order);
    navigate(`/thankyou/${orderId}`);
    clear();
  }

  return (
    <div className="cart">
      <h1>Detalle de tu compra</h1>
      <div className="cartDetail">
        {cart.map((item) => {
          return <ItemCart item={item} key={item.id} />;
        })}
      </div>

      <div className="detailItemPay">
        <h2>Resumen de Compra</h2>
        <p>
          <b>Total:</b> {priceInCart()}
        </p>
        <Form onSubmit={handleCheckout}></Form>
      </div>
    </div>
  );
}

export default Cart;
