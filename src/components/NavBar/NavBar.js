import React from "react";
import CartWidget from "./CartWidget";
import Badge from "../Badge/Badge";

const pages = ["Products", "Pricing", "Blog"];

function NavBar(props) {
  return (
    <nav>
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
