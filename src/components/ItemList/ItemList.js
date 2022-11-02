import React from "react";
import Button from "../Buttons/Button";

function ItemList({ title, imgurl, price, color }) {
  return (
    <div className="card">
      <div>
        <div className="card-img">
          <img src={imgurl} alt={title} />
        </div>
        <div className="card-detail">
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
        <Button>Ver más</Button>
      </div>
    </div>
  );
}

export default Item;
