import React, { useContext, useEffect, useState } from "react";
import { Delete, SettingsApplicationsRounded } from "@material-ui/icons";
import { cartContext } from "../../context/cartContext";
import AddRemove from "../AddRemove/AddRemove";

function ItemCartSide({ item }) {
  const { removeItemCartSide, setCart, cart, formatPrice } =
    useContext(cartContext);

  let stock = item.stock;
  let newCart = [...cart];

  let idItem = item.id;

  let itemCart = cart.findIndex((item) => item.id == idItem);

  let [count, setCount] = useState(cart[itemCart].count);

  function handleAdd() {
    if (count < stock) newCart[itemCart].count += 1;
    setCart(newCart);

    setCount(newCart[itemCart].count);
  }
  function handleRemove() {
    if (count > 0) newCart[itemCart].count -= 1;
    setCart(newCart);
    setCount(newCart[itemCart].count);
  }

  function removeItem() {
    removeItemCartSide(item);
  }

  return (
    <li className="itemCartSide">
      <img src={item.img} alt={item.title} />
      <div className="detail">
        <h3>{item.title}</h3>
        <Delete className="deleteItemCartSide" onClick={removeItem} />
        <AddRemove
          count={count}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />
        <p>total item:{formatPrice(item.price * item.count)}</p>
      </div>
    </li>
  );
}

export default ItemCartSide;
