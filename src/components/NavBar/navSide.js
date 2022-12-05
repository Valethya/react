import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import Badge from "../Badge/Badge";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

function navSide() {
  return (
    <ul className="categoryCel">
      <li>
        <Link to="/category/plush">Plush</Link>
      </li>
      <li>
        <Link to="/category/poleras">poleras</Link>
      </li>
    </ul>
  );
}
