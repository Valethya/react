import React, { useContext, useState } from "react";
import { Delete } from "@material-ui/icons";
import { cartContext } from "../../context/cartContext";
import AddRemove from "../AddRemove/AddRemove";

function ItemCartSide({ item }) {
  const { removeItemCartSide, setCart, cart, formatPrice, saveInLocalStorage } =
    useContext(cartContext);

  let stock = item.stock;
  let newCart = [...cart];

  let idItem = item.id;

  let itemCart = cart.findIndex((item) => item.id === idItem);

  function handleAdd() {
    if (cart[itemCart].count < stock) newCart[itemCart].count += 1;
    setCart(newCart);
    saveInLocalStorage(cart);
  }
  function handleRemove() {
    if (cart[itemCart].count > 0) newCart[itemCart].count -= 1;
    if (newCart[itemCart].count === 0) {
      removeItemCartSide(item);
    } else {
      setCart(newCart);
      saveInLocalStorage(cart);
    }
  }

  function removeItem() {
    removeItemCartSide(item);
  }

  return (
    <li className="itemCartSide" key={item.id}>
      <img src={item.img} alt={item.title} />
      <div className="detail">
        <h3>{item.title}</h3>
        <Delete className="deleteItemCartSide" onClick={removeItem} />
        <AddRemove
          count={cart[itemCart].count}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
        />
        <p>
          <b>total item</b>:{formatPrice(item.price * item.count)}
        </p>
      </div>
    </li>
  );
}

export default ItemCartSide;
