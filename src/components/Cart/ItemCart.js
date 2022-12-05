import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function ItemCart(item) {
  const { formatPrice } = useContext(cartContext);
  return (
    <div className="itemCart" key={item.item.id}>
      <img src={item.item.img} alt={item.item.title} />
      <div>
        <h2>{item.item.title}</h2>
        <p>
          <b>cantidad:</b> {item.item.count}
        </p>
        <p>
          <b>valor unidad:</b> {formatPrice(item.item.price)}
        </p>
        <p>
          <b>total item:</b> {formatPrice(item.item.price * item.item.count)}
        </p>
      </div>
    </div>
  );
}

export default ItemCart;
