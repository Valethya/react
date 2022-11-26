import React, { useContext, useState } from "react";
import Button from "../Buttons/Button";
import { FavoriteBorderOutlined } from "@material-ui/icons";
import { Favorite } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { wishListContext } from "../../context/wishListContext";

function ItemList({ title, imgurl, price, id }) {
  const { wishList } = useContext(wishListContext);

  let [icon, setIcon] = useState(
    <FavoriteBorderOutlined id={id} style={{ color: "#000" }} />
  );

  let fav = wishList.find((item) => item.id == id);

  if (fav?.wishList === "true") {
    setIcon(<Favorite id={id} style={{ color: "#f76bba" }} />);
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
