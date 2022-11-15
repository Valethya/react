import React from "react";
import Button from "../Buttons/Button";
import AddRemove from "../AddRemove/AddRemove";
import Wish from "../wish/wish";

function ItemDetail({ product }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(price);
  };

  return (
    <div className="itemDetail">
      <img src={product.img} />
      <div className="product-detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{formatPrice(product.price)}</p>
        <Wish id={product.id} fav={product.favorite}></Wish>
        <AddRemove stock={product.stock} />
        <Button>Agregar al carro</Button>
      </div>
    </div>
  );
}

export default ItemDetail;
