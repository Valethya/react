import React, { useContext, useEffect, useState } from "react";
import Button from "../Buttons/Button";
import { FavoriteBorderOutlined, Add } from "@material-ui/icons";
import { Favorite } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { wishListContext } from "../../context/wishListContext";
import { cartContext } from "../../context/cartContext";
import Item from "./iItem";

function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.map((product) => {
        return <Item product={product} />;
      })}
    </div>
  );
}

export default ItemList;
