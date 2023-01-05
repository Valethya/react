import React, { useContext } from "react";
import Button from "../Buttons/Button";
import AddRemove from "../AddRemove/AddRemove";
import Wish from "../wish/wish";
import { cartContext } from "../../context/cartContext";

function ItemDetail({ product, showToast }) {
  let [count, setCount] = React.useState(1);
  let stock = product.stock;

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }
  function handleRemove() {
    ("resta");
    if (count > 0) setCount(count - 1);
  }

  const { addToCart, formatPrice } = useContext(cartContext);

  function handleAddToCart() {
    ("funciona");
    addToCart(product, count);
    showToast();
  }

  return (
    <div className="itemDetail">
      <img src={product.img} alt={product.title} />
      <div className="product-detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{formatPrice(product.price)}</p>
        <Wish product={product}></Wish>
        <AddRemove
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          count={count}
        />
        <Button oneTouchButton={handleAddToCart}>Agregar al carrito</Button>
      </div>
    </div>
  );
}

export default ItemDetail;
