import React from "react";
import Item from "./iItem";

function ItemList({ products, showToast }) {
  return (
    <div className="item-list">
      {products.map((product) => {
        return (
          <Item product={product} showToast={showToast} key={product.id} />
        );
      })}
    </div>
  );
}

export default ItemList;
