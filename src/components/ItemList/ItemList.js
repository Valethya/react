import React from "react";
import Button from "../Buttons/Button";
import { FavoriteBorderOutlined } from "@material-ui/icons";
import { Favorite } from "@material-ui/icons";
import { Link } from "react-router-dom";

function ItemList({ title, imgurl, price, id, favorite }) {
  let colorBtn = "#000";
  let fav = favorite;
  let icon = <FavoriteBorderOutlined id={id} />;
  if (fav === "true") {
    colorBtn = " #f76bba";
    icon = <Favorite id={id} htmlColor={colorBtn} />;
  }

  const urlDetail = `/detail/${id}`;

  return (
    <div className="card">
      <div>
        <div className="card-img">
          <img src={imgurl} alt={title} />
        </div>
        <div className="card-detail">
          <h3>{title}</h3>
          <p>{price}</p>
          {icon}
        </div>
        <Link to={urlDetail}>
          <Button>Ver más</Button>
        </Link>
      </div>
    </div>
  );
}

export default ItemList;
