import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import Badge from "../Badge/Badge";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

// const pages = ["Plush", "Poleras", "Blog"];

function NavBar() {
  return (
    <nav>
      <Menu className="hamburger-menu" />
      <Link to="/">
        <h1 className="logo">Omori Store</h1>
      </Link>

      <ul>
        <li>
          <Link to="/category/plush">Plush</Link>
        </li>
        <li>
          <Link to="/category/poleras">poleras</Link>
        </li>

        <li>
          <Link to="#">
            <CartWidget />
            <Badge></Badge>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
