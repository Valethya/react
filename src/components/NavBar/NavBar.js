import React from "react";
import CartWidget from "./CartWidget";
import Badge from "../Badge/Badge";
import { Menu } from "@material-ui/icons";

const pages = ["Products", "Pricing", "Blog"];

function NavBar(props) {
  return (
    <nav>
      <Menu className="hamburger-menu" />
      <h1 className="logo">Omori Store</h1>
      <ul>
        {pages.map((page) => (
          <li>
            <a href="#">{page}</a>
          </li>
        ))}
        <li>
          <a href="#">
            <CartWidget />
            <Badge />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
