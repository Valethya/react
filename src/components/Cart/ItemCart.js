import React, { useContext } from "react";
import AddRemove from "../AddRemove/AddRemove";
import { cartContext } from "../../context/cartContext";

function ItemCart(item) {
  console.log("mierda", item);
  const { formatPrice } = useContext(cartContext);
  debugger;
  return (
    <div className="itemCart">
      <img src={item.item.img} alt={item.item.title} />
      <div>
        <h2>{item.item.title}</h2>
        <p>
          <b>cantidad:</b> {item.item.count}
        </p>
        <p>
          <b>valor unidad:</b> {item.item.price}
        </p>
        <p>
          <b>precio total item:</b>{" "}
          {formatPrice(item.item.price * item.item.count)}
        </p>
      </div>
    </div>
  );
}

export default ItemCart;
